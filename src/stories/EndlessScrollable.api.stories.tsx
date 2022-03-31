import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { rest } from "msw";
import Container from "../examples/FetchingItems/Container";

export default {
    title: "api.examples/FetchingItems",
    component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = () => <Container />;

export const MockedApiTemplate = Template.bind({});

MockedApiTemplate.storyName = "with mocked API";

MockedApiTemplate.parameters = {
    msw: {
        handlers: [
            rest.get('/some-url/page/1', (req, res, ctx) => {
                return res(ctx.delay(800), ctx.json([
                    { value: "Leanne Graham" },
                    { value: "Ervin Howell" },
                    { value: "Clementine Bauch" },
                ]));
            }),
            rest.get('/some-url/page/2', (req, res, ctx) => {
                return res(ctx.delay(1500), ctx.json([
                    { value: "Patricia Lebsack" },
                    { value: "Chelsey Dietrich" },
                    { value: "Mrs. Dennis Schulist" },
                ]));
            }),
            rest.get('/some-url/page/3', (req, res, ctx) => {
                return res(ctx.delay(800), ctx.json([
                    { value: "Kurtis Weissnat" },
                    { value: "Nicholas Runolfsdottir V" },
                ]));
            }),
        ]
    }
};
