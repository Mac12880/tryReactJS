// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

// const handleSelectItem = (item: string) => {
//     console.log(item);
// };

function App() {
    // let items = ["Manila", "Paranaque", "Las Pinas", "Muntinlupa", "Taguig"];
    // return (
    //     <div>
    //         <ListGroup
    //             items={items}
    //             heading="Cities"
    //             onSelectItem={handleSelectItem}
    //         />
    //         {/* Each ListGroup has different states */}
    //         {/* <ListGroup /> */}
    //     </div>
    // );

    return (
        <div>
            {/* <Alert /> */}
            {/* <Alert text="Hello World" /> */}

            <Alert>Hello World</Alert>
        </div>
    );
}

export default App;
