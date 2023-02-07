import React from "react";

export default function ListaDeReceitas(props) {

    const rows = props.receitas.map( receita => {
        return (
            <>
            <h2 key={receita.id}>
                <button type="button" 
                    className="btn btn-link" 
                    onClick={e => props.toRecipe(receita.id)}
                    style={{paddingLeft: '0px', marginLeft: '0px', border:'none', textDecoration: 'none', fontSize: '0.8em'}}>
                    {receita.name}
                </button>
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
