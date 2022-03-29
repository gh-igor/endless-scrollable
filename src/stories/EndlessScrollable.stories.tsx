import React from "react";
import EndlessScrollable from "../index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

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
    }
} as ComponentMeta<typeof EndlessScrollable>;

const SingleItem = () => (
    <li style={{ height: "300px", border: "2px solid green", marginBottom: "5px" }}>
        New Item
    </li>
);

export const SimpleStoryWithSingleItem: ComponentStory<typeof EndlessScrollable> = () => {
    return (
        <ul
            style={{
                height: "400px",
                border: "3px solid blue",
                padding: "2px",
                listStyle: "none",
                overflowY: "scroll",
            }}>
            Item fits container. It seems nothing to load any more
            <EndlessScrollable item={SingleItem} />
        </ul>
    )
}

SimpleStoryWithSingleItem.storyName = "SimpleStoryWithSingleItem";

const Item = () => (
    <li style={{ height: "400px", border: "2px solid green", marginBottom: "5px" }}>
        New Item
    </li>
);

export const SimpleStory: ComponentStory<typeof EndlessScrollable> = () => {
    return (
        <ul
            style={{
                height: "300px",
                border: "3px solid blue",
                padding: "2px",
                listStyle: "none",
                overflowY: "scroll",
        }}>
            Item doesn't fit container (300 &lt; 400), probably there will be one more to load
            <EndlessScrollable item={Item} />
        </ul>
    )
}

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
    </div>
);

export const PackageStory: ComponentStory<typeof EndlessScrollable> = () => {
    return (
        <ul
            style={{
                height: "300px",
                border: "3px solid blue",
                padding: "2px",
                listStyle: "none",
                overflowY: "scroll",
            }}>
            Several items united in package
            <EndlessScrollable item={PackageItem} />
        </ul>
    )
}

PackageStory.storyName = "PackageStory";
