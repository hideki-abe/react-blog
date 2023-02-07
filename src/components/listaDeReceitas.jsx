import React from "react";

export default function ListaDeReceitas(props) {

    const rows = props.receitas.map( receita => {
        const href = `/receita/${receita.id}`;
        return (
            <>
            <h2 key={receita.id} style={{textDecoration: 'none'}}>
                <a href={href}>{receita.name}</a>
            </h2>
                <p>{receita.date}</p>
                <p>{receita.description}</p>
            <hr></hr>
            </>
        )
    })

    return(
        <>
            {rows}
        </>
    )
}
