import React, { useEffect, useMemo, useState } from "react";
import { IItem } from "../../index";

type Item = {
    value: string;
};

const Item = ({ itemsToFetch, page, setPage, setScrollDisabled }: IItem) => {
    const [items, setItems] = useState<Item[]>([]);

    const currentPage = useMemo(() => page, []);

    useEffect(() => {
        (async () => {
            // we don't need cloning items until fetching is resoled
            setScrollDisabled(true);

            const data = await fetch(`/some-url/page/${page}`).then(res => res.json());
            setItems(data);
            setPage(page + 1);

            // otherwise, it means that no more items are available
            if (data.length >= itemsToFetch) {
                setScrollDisabled(false);
            }
        })();
    }, []);

    return (
        <div
            className="item"
            style={{ margin: "10px", padding: "10px", fontSize: "2em", border: "2px solid green" }}
        >
            {items.length > 0 ? (
                <>
                    Page {currentPage}:
                    <ol>
                        {items.map(item => <li key={item.value}>{item.value}</li>)}
                    </ol>
                </>
            ) : (
                <span>Loading...</span>
            )}
        </div>
    );
};

export default Item;
