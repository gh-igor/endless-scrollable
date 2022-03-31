import React, { useEffect, useState, Fragment, createElement, ComponentType } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

interface IItemScrollable {
    setScrollDisabled: (scrollDisabled: boolean) => void;
}

interface IItemProps {
    [prop: string]: any;
}

export interface IItem extends IItemProps, IItemScrollable {
}

export interface IEndlessScrollable {
    className?: string;
    item: ComponentType<IItem>;
    itemProps?: IItemProps;
    intersectionOptions?: IntersectionOptions;
}

// @usage:
// const List = () => {
//     const [page, setPage] = useState(0);
//
//     return (
//         <EndlessScrollable item={Component} itemProps={{ page, setPage }} />
//     )
// }

const EndlessScrollable = ({
   className,
   item,
   itemProps = {},
   intersectionOptions = { threshold: 1 }
}: IEndlessScrollable) => {
    const [contentRef, contentInView] = useInView(intersectionOptions);
    const [scrollerRef, scrollerInView] = useInView(intersectionOptions);
    const [items, setItems] = useState([item]);
    const [scrollDisabled, setScrollDisabled] = useState(false);
    const [scrollDisabledManually, setScrollDisabledManually] = useState(false);

    useEffect(() => {
        setScrollDisabled(scrollDisabledManually ? true : contentInView);
    }, [contentInView, scrollDisabledManually]);

    useEffect(() => {
        if (scrollerInView && !scrollDisabled) {
            setItems(prevItems => prevItems.concat(item));
        }
    }, [scrollerInView, scrollDisabled, item]);

    return (
        <div className={className}>
            <div ref={contentRef}>
                {items.map((element, index) => (
                    <Fragment key={index}>
                        {createElement(element, { ...itemProps, setScrollDisabled: setScrollDisabledManually })}
                    </Fragment>
                ))}
            </div>
            {!scrollDisabled && <div ref={scrollerRef}/>}
        </div>
    );
};

export default EndlessScrollable;
