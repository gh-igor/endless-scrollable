import React, { useRef, useState } from "react";
import EndlessScrollable from "../../index";
import Item from "./Item";

const Container = () => {
    const [page, setPage] = useState(1);
    const ref = useRef(null);

    return (
        <div
            className="container"
            ref={ref}
            style={{ border: "2px solid blue", overflowY: "scroll", maxHeight: "240px" }}
        >
            <EndlessScrollable
                item={Item}
                itemProps={{ page, setPage, itemsToFetch: 3 }}
                intersectionOptions={{
                    threshold: 1,
                    // by default root is a window
                    root: ref.current,
                }}
            />
        </div>
    )
}

export default Container;
