import React from "react";
import Counter from "./Counter";


export default {
    title: "button",
    component: Counter,
    argTypes: {}
}
const Template = args => <Counter {...args}></Counter>
export const  CounterStory = Template.bind({})

CounterStory.args = {
    backgroundColor : "red",
    size: "md",
    label: "counter"
} 