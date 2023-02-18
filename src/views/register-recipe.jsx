import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import ListaDeIngredientes from "../components/listaDeIngredientes";

export default class RegisterRecipe extends React.Component {


    state = {
        ingredients: ['Arroz', 'Feijao', 'Sal']

    }

    
    render() {
        return(
            <>
            <Card title="Cadastro de Nova Receita">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text"
                                        className="form-control"
                                        id="inputNome"
                                        name="nome"
                                        >
                                </input>
                            </FormGroup>
                            <FormGroup label="Data: *" htmlFor="inputData">
                                <input type="date"
                                        className="form-control"
                                        id="inputNome"
                                        name="date"
                                        >
                                </input>
                            </FormGroup>
                            <FormGroup label="Descrição: *" htmlFor="inputDescricao">
                                <input type="text"
                                        className="form-control"
                                        id="inputDescricao"
                                        name="descricao"
                                        >
                                </input>
                            </FormGroup>
                            <FormGroup label="Modo de preparo: *" htmlFor="inputModoDePreparo">
                                <input type="text"
                                        className="form-control"
                                        id="inputModoDePreparo"
                                        name="modoDePreparo"
                                        >
                                </input>
                            </FormGroup>

                            <div style={{marginTop: '1em', marginBottom: '1em'}}>
                                <h3>
                                    Lista de Ingredientes
                                </h3>
                                <ul>
                                    <li>Arroz</li>
                                    <li>Feijão</li>
                                    <li>Sal</li>
                                </ul>
                            </div>
                           
                        
                            <div style={{marginTop: '1em'}}>
                                <button 
                                        type="button" 
                                        className="btn btn-success">
                                        <i className="pi pi-users"></i> Salvar
                                </button>
                                <button style={{marginLeft: '5px'}}
                                        
                                        type="button" 
                                        className="btn btn-danger">
                                        <i className="pi pi-times"></i> <a style={{color: 'whitesmoke', textDecoration:'none'}} href="/recipes">Voltar</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            </>
        )
    }

}