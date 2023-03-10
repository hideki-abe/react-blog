import React from "react";
import { withRouter } from "react-router-dom";
import IngredientService from "../app/service/ingredientService";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import ListaDeIngredientes from "../components/listaDeIngredientes";

class RegisterIngredient extends React.Component {
    
    state = {
        name: '',
        calories: '',
        ingredients: []
    }

    constructor() {
        super();
        this.service = new IngredientService();
    }

    saveIngredient = () => {
        const {name, calories} = this.state;
        const ingredient = {name, calories};

        //validation missing
        
        console.log(ingredient);
        this.service.save(ingredient)
            .then( response => {
                console.log("Ingrediente salvo com sucesso!");
                this.getAllIngredients();
            }).catch(error => {
                error.response.data.errors.map( e => {
                    console.log(e);
                    return e;
                })
            })
    }

    componentDidMount() {
        this.getAllIngredients();
    }

    getAllIngredients() {
        this.service
        .getAll()
        .then( resposta => {
            const lista = resposta.data;
            if(lista.length < 1) {
                console.log("Nenhum resultado encontrado!");
                
            }
            this.setState({ ingredients: lista })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return(
            <>
            <Card title="Cadastro de Novo Ingrediente">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Ingrediente: *" htmlFor="inputIngredient">
                                <input type="text"
                                        className="form-control"
                                        id="inputNome"
                                        name="nome"
                                        onChange={ e => this.setState({name: e.target.value})}>
                                </input>
                            </FormGroup>
                            <FormGroup label="Calorias/100g: *" htmlFor="inputCalorias">
                                <input type="number"
                                        className="form-control"
                                        id="inputCalorias"
                                        name="calorias"
                                        onChange={ e => this.setState({calories: e.target.value})}>
                                </input>
                            </FormGroup>
                            <div style={{marginTop: '1em'}}>
                                <button onClick={ this.saveIngredient } 
                                        type="button" 
                                        className="btn btn-success">
                                        <i className="pi pi-users"></i> Salvar
                                </button>
                                <button style={{marginLeft: '5px'}}
                                        onClick={ this.back } 
                                        type="button" 
                                        className="btn btn-danger">
                                        <i className="pi pi-times"></i> <a style={{color: 'whitesmoke', textDecoration:'none'}} href="/recipes">Voltar</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card title="Lista de Ingredientes">
                <div className="row">
                    <div className="col-lg-12">
                        <ListaDeIngredientes ingredientes={this.state.ingredients}></ListaDeIngredientes>
                    </div>
                </div>
            </Card>
            </>
        )
    }
}

export default withRouter(RegisterIngredient);