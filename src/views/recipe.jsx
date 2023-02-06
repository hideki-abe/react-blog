import React from "react";

export default function Recipe(props) {
    return(
        <>
        <div className="container" style={{marginBottom: '100px'}}>
            <div className="card mb-3 " style={{ marginTop: '50px'}}>
                <h3 className="card-header">{props.name}</h3>
                <div className="card-body">
                    <h5 className="card-title">Data: {props.date}</h5>
                </div>
                <img src="https://img.saborosos.com.br/imagens/massa-fresca.jpg" height={'50%'} width={'70%'} style={{alignSelf: "center"}} preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" alt="massa">
                </img>
                <div className="card-body">
                    <p className="card-text">Ingredientes</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Farinha de trigo</li>
                    <li className="list-group-item">Ovo</li>
                    <li className="list-group-item">Sal</li>
                </ul>
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
        

        </>
    )    
}