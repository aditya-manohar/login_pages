import React from "react";
import "./RequestButton.css";
export default function RequestButton(props) {
    return (
        <>
            <div className="button">
                <button>{props.text}</button>
            </div>
        </>
    );
}
