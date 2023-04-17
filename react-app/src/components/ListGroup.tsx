// import { Fragment } from "react";

function ListGroup() {
  let items = ["Manila", "Paranaque", "Las Pinas", "Muntinlupa", "Taguig"];
  items = [];
  if (items.length === 0) {
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );
  }

  return (
    //Fragment for no div in DOM, div has DOM, <> for Fragment in react
    <>
      <h1>List</h1>
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
