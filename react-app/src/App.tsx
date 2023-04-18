// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

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

    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <div>
            {/* <Alert /> */}
            {/* <Alert text="Hello World" /> */}
            {alertVisible && (
                <Alert onClose={() => setAlertVisibility(false)}>
                    My Alert
                </Alert>
            )}
            {/* <Button color="primary" onClick={() => console.log("Clicked")}> */}
            <Button color="primary" onClick={() => setAlertVisibility(true)}>
                My Button
            </Button>
        </div>
    );
}

export default App;
