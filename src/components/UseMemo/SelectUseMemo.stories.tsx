import React, {useMemo, useState} from "react";
import {Select} from "../Select/Select";
import {v1} from "uuid";


export default {
    title: "Select Use Memo",
    component: Select
}


export const WithValue = () => {
    let [cities, setCities] = useState([
        {value: "1", title: "Minsk", country: "Russia", population: 2000000},
        {value: "2", title: "Kiev", country: "Belarus", population: 3000000},
        {value: "3", title: "Moskov", country: "Ukraine", population: 10000000},
        {value: "4", title: "Lviv", country: "Belarus", population: 10000000},
        {value: "5", title: "Kazan", country: "Ukraine", population: 10000000},
    ]);


    const [value1, setValue1] = useState("1");
    const [value2, setValue2] = useState("1");
    const [value3, setValue3] = useState("1");

    const [counter, setCounter] = useState(0);
    const [citiesInput, setCitiesInput] = useState("");

    const addNewCity = () => {
        const newCitiesList = [...cities, {value: v1().toString(), title: citiesInput, country: "Belarus", population: 1000000}];
        setCities(newCitiesList)
    };

    /*
        const addNewCity = cities.push({value: "45", title: citiesInput, country: "Belarus", population: 1000000});
    */

    const CitiesWithMStarts = useMemo(() => {
        let city = cities.filter(c => c.title.toLowerCase().indexOf("m") > -1);
        console.log("Cities that starts from M are rendering")
        console.log(cities)
        debugger;
        return city
    }, [cities])

    const CitiesFromBelarus = useMemo(() => {
        let city = cities.filter(c => c.country === "Belarus")
        console.log("Cities that are from Belarus are rendering")
        console.log(cities)
        debugger;
        return city
    }, [cities])


    const CitiesWithHighPopulation = useMemo(() => {
        let city = cities.filter(c => c.population > 2000000)
        console.log("Cities that have high population are rendering")
        console.log(cities)
        debugger;
        return city

    }, [cities])

    return <>
        <Select
            value={value1}
            onChange={setValue1}
            items={CitiesWithMStarts}
        />
        <div style={{height: "130px"}}></div>

        <Select
            value={value2}
            onChange={setValue2}
            items={CitiesFromBelarus}
        />
        <div style={{height: "130px"}}></div>

        <Select
            value={value3}
            onChange={setValue3}
            items={CitiesWithHighPopulation}
        />
        <div style={{height: "130px"}}></div>

        <div>{counter}</div>
        <button onClick={() => {
            setCounter(counter + 1);
            console.log("Counter" + " " + counter)
        }}>Increase counter
        </button>
        <div></div>
        <input value={citiesInput} onChange={(e) => {
            setCitiesInput(e.currentTarget.value)
            console.log(citiesInput);
        }}/>
        <button onClick={() => {
            addNewCity()
            console.log(cities)
        }}>Add new city
        </button>


    </>
}


// +++создайт исторію
// сдеалйте мемоизацию селекта
// +++сделайте 3 селекта
// +++в стейте создайте один масив
// +++фільтрация городов где есть буква М
// +++фільтрация городов которие пренадлежать к одной стране, add country id, id 1 - ukkraine, 2- rusa, 3- belarus
// третя фільтрация, ето численность население болеє 1000000

// еше додать каунтер, котрий