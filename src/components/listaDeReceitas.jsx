import React from "react";

export default function ListaDeReceitas(props) {

    const rows = props.receitas.map( receita => {
        return (
            <div className="card border-primary " style={{marginBottom: '2em'}}>
                <div className="card-header">{receita.date}</div>
                <div className="card-body">
                    <h4 className="card-title">{receita.name}</h4>
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