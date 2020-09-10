import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating
}

export const EmptyStars = () => <Rating value={0} onClick={x=>x} />
export const Rating1 = () => <Rating value={1} onClick={x=>x} />
export const Rating2 = () => <Rating value={2} onClick={x=>x} />
export const Rating3 = () => <Rating value={3} onClick={x=>x} />
export const Rating4 = () => <Rating value={4} onClick={x=>x} />
export const Rating5 = () => <Rating value={5} onClick={x=>x} />
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3);
    return <Rating value={rating} onClick={setRating} />
}









































/*


const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
*/
