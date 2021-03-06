import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from "./Select.module.css"

type ItemType = {
    title: string,
    value: any
    country? : string
    population?: number
}

type SelectPropsType = {
    value?: string
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(true);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);


    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value]);

    const toggleItem = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItem();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {

                    const pretendentElement = e.key === "ArrowDown" ? props.items[i+1] : props.items[i-1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break;
                    }
                }
            }
            if (!selectedItem){
                props.onChange(props.items[0].value)

            }

        };
        if (e.key==="Enter" || e.key==="Escape"){
            setActive(false);
        }
    }

    return (
        <>
            <div
                className={styles.select}
                onKeyUp={onKeyUp}
                tabIndex={0}
            >
                <span className={styles.main} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >{i.title}</div>)}
                    </div>}
            </div>
        </>
    )
}
