// import { Fragment } from "react";
// import { MouseEvent } from "react";
import { useState } from "react";

//{items: [], heading: string}
interface Props {
    items: string[];
    heading: string;
}

function ListGroup({ items, heading }: Props) {
    // let items = ["Manila", "Paranaque", "Las Pinas", "Muntinlupa", "Taguig"];
    // items = [];
    // let selectedIndex = 0;

    // const message = items.length === 0 ? <p>No Item Found</p> : null;
    // const getMessage = () => {
    //     return items.length === 0 ? <p>No Item Found</p> : null;
    // };

    //Event Handler
    // const handleClick = (event: MouseEvent) => console.log(event);

    //Hook - State Hook
    // const arr = useState(-1);
    //arr[0] variable (selectedIndex)
    //arr[1] updater function
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // const [name, setName] = useState('');

    return (
        //Fragment for no div in DOM, div has DOM, <> for Fragment in react
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No Item Found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    //key can be item.id
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item "
                        }
                        key={item}
                        // onClick={() => console.log(item, index)}
                        onClick={() => {
                            setSelectedIndex(index);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
