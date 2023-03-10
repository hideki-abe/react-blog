import React from "react";

export default function Select(props) {
 

    const options = props.ingredients.map( (option, index) => {
        return(
            <option key={index}>{option.nome}</option>
        )
    })

    return(
        <select className="form-select" id="exampleSelect1">
            {options}
        </select>
    )

}