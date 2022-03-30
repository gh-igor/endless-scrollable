import { ComponentType } from "react";
import { IntersectionOptions } from "react-intersection-observer";
interface IItemScrollable {
    setScrollDisabled: (scrollDisabled: boolean) => void;
}
interface IItemProps {
    [prop: string]: any;
}
export interface IItem extends IItemProps, IItemScrollable {
}
interface IEndlessScrollable {
    className?: string;
    item: ComponentType<IItem>;
    itemProps?: IItemProps;
    intersectionOptions?: IntersectionOptions;
}
declare const EndlessScrollable: ({ className, item, itemProps, intersectionOptions }: IEndlessScrollable) => JSX.Element;
export default EndlessScrollable;
//# sourceMappingURL=index.d.ts.map