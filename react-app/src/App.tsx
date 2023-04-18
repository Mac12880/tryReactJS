import ListGroup from "./components/ListGroup";

const handleSelectItem = (item: string) => {
    console.log(item);
};

function App() {
    let items = ["Manila", "Paranaque", "Las Pinas", "Muntinlupa", "Taguig"];
    return (
        <div>
            <ListGroup
                items={items}
                heading="Cities"
                onSelectItem={handleSelectItem}
            />
            {/* Each ListGroup has different states */}
            {/* <ListGroup /> */}
        </div>
    );
}

export default App;
