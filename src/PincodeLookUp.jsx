import React, { useEffect, useState } from "react";

const PincodeLookUp = () => {
    const API = "https://api.postalpincode.in/pincode/";

    const [postOffice, setPostOffice] = useState([]);
    const [pincode, setPincode] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPincodeData = async () => {
            const res = await fetch(
                "https://api.postalpincode.in/pincode/" + pincode
            );
            const data = await res.json();

            if (data[0].Status === "Success") {
                setPostOffice(data[0].PostOffice);
                setError("");
            } else {
                setPostOffice([]);
                setError("No data found...");
            }
        };

        if (pincode.length === 6) {
            fetchPincodeData();
        } else {
            setPostOffice([]);
            if (pincode.length > 0) {
                setError("Please enter a valid pincde");
            } else {
                setError("");
            }
        }
    }, [pincode]);

    return (
        <div>
            <input
                type="text"
                placeholder="Enter PINCODE"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
            />
            {error && <p>{error}</p>}
            {/* if(error){<p>{error}</p>} */}

            {postOffice.length > 0 && (
                <div>
                    {postOffice.map((office, ind) => (
                        <div key={ind}>
                            <h3>{office.Name}</h3>
                            <p>{office.District}</p>
                            <p>{office.State}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PincodeLookUp;

//named export
