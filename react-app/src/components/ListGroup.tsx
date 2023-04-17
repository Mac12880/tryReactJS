// import { Fragment } from "react";

function ListGroup() {
    let items = ["Manila", "Paranaque", "Las Pinas", "Muntinlupa", "Taguig"];
    items = [];

    // const message = items.length === 0 ? <p>No Item Found</p> : null;
    // const getMessage = () => {
    //     return items.length === 0 ? <p>No Item Found</p> : null;
    // };

    return (
        //Fragment for no div in DOM, div has DOM, <> for Fragment in react
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No Item Found</p>}
            <ul className="list-group">
                {items.map((item) => (
                    //key can be item.id
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
