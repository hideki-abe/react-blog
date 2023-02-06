import React from "react";

export default function Recipe(props) {
    return(
        <>
        <div className="container" style={{marginBottom: '100px'}}>
            <div class="card mb-3 " style={{ marginTop: '50px'}}>
                <h3 class="card-header">Massa fresca</h3>
                <div class="card-body">
                    <h5 class="card-title">Data: 06/02/2023</h5>
                </div>
                <img src="https://img.saborosos.com.br/imagens/massa-fresca.jpg" height={'50%'} width={'70%'} style={{alignSelf: "center"}} preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180">
                </img>
                <div class="card-body">
                    <p class="card-text">Ingredientes</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Farinha de trigo</li>
                    <li class="list-group-item">Ovo</li>
                    <li class="list-group-item">Sal</li>
                </ul>
                <div class="card-body">
                    <p class="card-text">Misture a farinha e os ovos e o sal e sove a massa por 10 minutos.</p>
                </div>
            </div>
        </div>
        </>
    )    
}