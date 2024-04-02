import React, { useState } from "react";

export default function Rating() {
    const [rateValue, setRateValue] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);

 

    const circleStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '40px',
        cursor: 'pointer',
        marginRight: '5px',
    };

    return (

        <div className="full-div">
          <div className="black-back" style={{background:"#000",padding:"9px",borderRadius:"50px",width:"80%"}}>
            <div className="numbers" style={{display:"flex",columnGap:"20px"}}>
            {[1, 2, 3, 4, 5].map((value) => {
                            return (
                                <div
                                    key={value}
                                    style={{
                                        ...circleStyle,
                                        background: value === rateValue ? 'blue' : '#fff',
                                        color: value === rateValue ? '#fff' : '#777',
                                    }}
                                    onClick={() => setRateValue(value)}
                                >
                                    {value}
                                </div>
                            );
                        })}
            </div>
          </div>
        </div>
    );
}
