// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
    title: "Button",
    component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button color="red">Button</Button>;
export const BlueButt: ComponentStory<typeof Button> = () => <Button color="blue">Button</Button>;
