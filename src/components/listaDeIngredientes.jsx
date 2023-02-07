import React from "react";

export default function ListaDeIngredientes(props) {

    const rows = props.ingredientes.map( ingredient => {
        return (
            <li>{ingredient.name}: {ingredient.calories}</li>
        )
    })

    return(
        <>
            {rows}
        </>
    )
}
