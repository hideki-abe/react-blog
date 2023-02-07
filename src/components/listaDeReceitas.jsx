import React from "react";

export default function ListaDeReceitas(props) {

    const rows = props.receitas.map( receita => {
        return (
            <div key={receita.id} className="card border-primary " style={{marginBottom: '2em'}}>
                <div className="card-header">{receita.date}</div>
                <div className="card-body">
                    <button type="button" 
                            className="btn btn-link" 
                            onClick={e => props.toRecipe(receita.id)}
                            style={{paddingLeft: '0px', marginLeft: '0px', border:'none', textDecoration: 'none'}}>
                            {receita.name}
                    </button>
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
