import React from "react";

export default function FormGroup(props) {

    return(
        <div>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
        </div>
    )
}