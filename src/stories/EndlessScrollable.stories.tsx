import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EndlessScrollable from "../index";

export default {
    title: "EndlessScrollable",
    component: EndlessScrollable,
    args: {
        className: "string-classname",
    },
    argTypes: {
        item: {
            control: { type: "object" }
        },
        itemProps: {
            control: { type: "object" }
        },
        intersectionOptions: {
            control: { type: "object" }
        }
    },
    decorators: [
        (Story) => (
            <ul
                style={{
                    height: "400px",
                    border: "3px solid blue",
                    padding: "2px",
                    listStyle: "none",
                    overflowY: "scroll",
                }}>
                <Story />
            </ul>
        )
    ]
} as ComponentMeta<typeof EndlessScrollable>;

const SingleItem = () => (
    <li style={{ height: "300px", border: "2px solid green", marginBottom: "5px" }}>
        New Item
    </li>
);

export const SimpleStoryWithSingleItem: ComponentStory<typeof EndlessScrollable> = () => (
    <>
        Item fits container (ul). It seems no use loading any more
        <EndlessScrollable item={SingleItem} />
    </>
)

SimpleStoryWithSingleItem.storyName = "SimpleStoryWithSingleItem";

const Item = () => (
    <li style={{ height: "500px", border: "2px solid green", marginBottom: "5px" }}>
        New Item
    </li>
);

export const SimpleStory: ComponentStory<typeof EndlessScrollable> = () => (
    <>
        Item doesn't fit container (400 &lt; 500), probably there will be one more to load
        <EndlessScrollable item={Item} />
    </>
)

SimpleStory.storyName = "SimpleStory";


const PackageItem = () => (
    <div style={{ border: "2px dashed red", margin: "4px" }}>
        Package:
        <li style={{ height: "100px", border: "2px solid green", marginBottom: "5px" }}>
            Item #1
        </li>
        <li style={{ height: "100px", border: "2px solid green", marginBottom: "5px" }}>
            Item #2
        </li>
        <li style={{ height: "100px", border: "2px solid green", marginBottom: "5px" }}>
            Item #3
        </li>
        <li style={{ height: "100px", border: "2px solid green", marginBottom: "5px" }}>
            Item #4
        </li>
    </div>
);

export const PackageStory: ComponentStory<typeof EndlessScrollable> = () => (
    <>
        Several items united in package. And package doesn't fit container (ul)
        <EndlessScrollable item={PackageItem} />
    </>
)

PackageStory.storyName = "PackageStory";
