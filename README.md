# endless-scrollable

## Installation
```
yarn add endless-scrollable
```
or
```
npm install endless-scrollable --save
```

## Usage

Clones ComponentToCopy infinitely:

```jsx
const List = () => {
    return (
        <EndlessScrollable item={ComponentToCopy} />
    )
}
```

More practical example:

```jsx
const List = () => {
    const [page, setPage] = useState(1);

  /**
   * ComponentToCopy will get {page}
   * which can be used to fetch some more data out of ComponentToCopy
   */
    return (
        <EndlessScrollable item={ComponentToCopy} itemProps={{ page, setPage }} />
    )
}
```

### Props
| Name                    | Type                         | Required | Description                                                       |
|-------------------------|------------------------------|----------|-------------------------------------------------------------------|
| **item**                | `React.ComponentType<IItem>` | true     | Component's props must implement `IITem` interface                |
| **itemProps**           | `IItemProps`                 | false    | `interface IItemProps { [prop: string]: any; }`                   |
| **intersectionOptions** | `object`                     | false    | https://github.com/thebuilder/react-intersection-observer#options |
| **className**           | `string`                     | false    | wrapper's classname                                               |

### More examples in storybook
Clone repo
```
cd endless-scrollable/
```

```
yarn install
```

```
yarn storybook
```
