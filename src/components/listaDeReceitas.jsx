import React from "react";

export default function ListaDeReceitas(props) {

    const rows = props.receitas.map( receita => {
        return (
            <div key={receita.id} className="card border-primary " style={{marginBottom: '2em'}}>
                <div className="card-header">{receita.date}</div>
                <div className="card-body">
                    <button onClick={e => props.toRecipe(receita.id)}>{receita.name}</button>
                    <p className="card-text">{receita.description}</p>
                </div>
            </div>
        )
    })

    return(
        <>
            {rows}
        </>
    )
}
