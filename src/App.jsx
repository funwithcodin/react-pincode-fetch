import React, { useState } from "react";
import HomePage from "./HomePage";
import PincodeLookUp from "./PincodeLookUp";

const App = () => {
    const [showPincode, setShowPincode] = useState(false);
    const [showHome, setShowHome] = useState(true);

    return (
        <div>
            <div id="optionpane">
                <h1>API App</h1>
                <button onClick={() => {setShowHome(true); setShowPincode(false);}}>Home</button>
                <button onClick={() => {setShowPincode(true); setShowHome(false);}}>Pincode</button>
            </div>
            <div id="pincode">
                {showHome && <HomePage />}
                {showPincode && <PincodeLookUp />}
            </div>
        </div>
    );
};

export default App;
