import React, {useState} from "react";
import {Rating, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";

export default {
    title: "Rating component",
    component: Rating
}

const callback = "Clicked rating component";

export const UncontrolledRating = () => <Rating value={2} onClick={action(callback)} />
export const SwitchRatingValues = () => {
    const[star, setStar] = useState<RatingValueType>(2);
    return <Rating value={star} onClick={setStar} />
}