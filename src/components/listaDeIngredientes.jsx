import React from "react";

export default function ListaDeIngredientes(props) {

    const rows = props.ingredientes.map( ingredient => {
        return (
            <>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                {ingredient.name}
                <span className="badge bg-primary rounded-pill">calorias: {ingredient.calories}</span>
                </li>
            </>
        )
    })

    return(
        <>
            {rows}
        </>
    )
}
