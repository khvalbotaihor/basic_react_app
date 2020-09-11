import React, {useState} from "react";
import {Rating, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "../UncontrolledRating/UncontrolledRating";

export default {
    title: "Rating component",
    component: Rating
}

const callback = "Clicked rating component";

export const EmptyRating = () => <Rating value={0} onClick={action(callback)} />
export const Rating1 = () => <Rating value={1} onClick={action(callback)}/>
export const Rating2 = () => <Rating value={2} onClick={action(callback)}/>
export const Rating3 = () => <Rating value={3} onClick={action(callback)}/>
export const Rating4 = () => <Rating value={4} onClick={action(callback)}/>
export const Rating5 = () => <Rating value={5} onClick={action(callback)}/>
export const SwitchRatingValues = () => {
    const[star, setStar] = useState<RatingValueType>(2);
    return <Rating value={star} onClick={setStar} />
}