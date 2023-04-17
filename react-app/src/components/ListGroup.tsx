// import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
    let items = ["Manila", "Paranaque", "Las Pinas", "Muntinlupa", "Taguig"];
    // items = [];

    // const message = items.length === 0 ? <p>No Item Found</p> : null;
    // const getMessage = () => {
    //     return items.length === 0 ? <p>No Item Found</p> : null;
    // };

    //Event Handler
    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        //Fragment for no div in DOM, div has DOM, <> for Fragment in react
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No Item Found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    //key can be item.id
                    <li
                        className="list-group-item"
                        key={item}
                        // onClick={() => console.log(item, index)}
                        onClick={handleClick}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
