import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
    const [selectedDistrict, setSelectedDistrict] = React.useState(null);
    const [selectedStation, setSelectedStation] = React.useState(null);

    const Districts = [
        {
            label: "Trichy",
            subject: [
                {
                    StationName: "A1 Trichy",
                },
                {
                    StationName: "A2 Trichy",
                },
            ],
        },
        {
            label: "Chennai",
            subject: [
                {
                    StationName: "A1 Chennai",
                },
                {
                    StationName: "A2 Chennai",
                },
            ],
        },
        {
            label: "Madurai",
            subject: [
                {
                    StationName: "A1 Madurai",
                },
                {
                    StationName: "A2 Madurai",
                },
            ],
        },
    ];

       


    const handledistrictChange = (event, newValue) => {
        console.log(newValue);
        setSelectedDistrict(newValue);
        setSelectedStation(null); 
    };

    const handlePoliceChange = (event, newValue) => {
        setSelectedStation(newValue);
        console.log(newValue);
    };

    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-district"
                options={Districts}
                getOptionLabel={(option) => option.label}
                sx={{ width: 300 }}
                value={selectedDistrict}
                onChange={handledistrictChange}
                renderInput={(params) => (
                    <TextField {...params} label="Select A District" />
                )}
            />

            {selectedDistrict && (
                <Autocomplete
                    disablePortal
                    id="combo-box-station"
                    options={selectedDistrict.subject}
                    sx={{ width: 300 }}
                    value={selectedStation}
                    getOptionLabel={(option) => option.StationName}
                    onChange={handlePoliceChange}

                    renderInput={(params) => (
                        <TextField {...params} label="Select A Station" />
                    )}
                />
            )}
        </>
    );
}
