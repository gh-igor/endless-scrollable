Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactIntersectionObserver = require('react-intersection-observer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// @usage:
// const List = () => {
//     const [page, setPage] = useState(0);
//
//     return (
//         <EndlessScrollable item={Component} itemProps={{ page, setPage }} />
//     )
// }
var EndlessScrollable = function (_a) {
    var className = _a.className, item = _a.item, _b = _a.itemProps, itemProps = _b === void 0 ? {} : _b, _c = _a.intersectionOptions, intersectionOptions = _c === void 0 ? { threshold: 1 } : _c;
    var _d = reactIntersectionObserver.useInView(intersectionOptions), contentRef = _d[0], contentInView = _d[1];
    var _e = reactIntersectionObserver.useInView(intersectionOptions), scrollerRef = _e[0], scrollerInView = _e[1];
    var _f = React.useState([item]), items = _f[0], setItems = _f[1];
    var _g = React.useState(false), scrollDisabled = _g[0], setScrollDisabled = _g[1];
    var _h = React.useState(false), scrollDisabledManually = _h[0], setScrollDisabledManually = _h[1];
    React.useEffect(function () {
        setScrollDisabled(scrollDisabledManually ? true : contentInView);
    }, [contentInView, scrollDisabledManually]);
    React.useEffect(function () {
        if (scrollerInView && !scrollDisabled) {
            setItems(function (prevItems) { return prevItems.concat(item); });
        }
    }, [scrollerInView, scrollDisabled, item]);
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement("div", { ref: contentRef }, items.map(function (element, index) { return (React__default["default"].createElement(React.Fragment, { key: index }, React.createElement(element, __assign(__assign({}, itemProps), { setScrollDisabled: setScrollDisabledManually })))); })),
        !scrollDisabled && React__default["default"].createElement("div", { ref: scrollerRef })));
};

exports["default"] = EndlessScrollable;
//# sourceMappingURL=index.js.map
