import ListGroup from "./components/ListGroup";

function App() {
    let items = ["Manila", "Paranaque", "Las Pinas", "Muntinlupa", "Taguig"];
    return (
        <div>
            <ListGroup items={items} heading="Cities" />
            {/* Each ListGroup has different states */}
            {/* <ListGroup /> */}
        </div>
    );
}

export default App;
