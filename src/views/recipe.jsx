import React from "react";
import IngredientService from "../app/service/ingredientService";
import RecipeService from "../app/service/recipeService";
import ListaDeIngredientes from "../components/listaDeIngredientes";

export default class Recipe extends React.Component {
    
    state = {
        id: '',
        name: '',
        description: '',
        date: '',
        ingredients: []
    }

    constructor() {
        super();
        this.recipeService = new RecipeService();
        this.ingredientService = new IngredientService();
    }

    componentDidMount() {
        const params = this.props.match.params;
        if(params.id) {
            this.recipeService.findById(params.id)
                .then(response => {
                    this.setState({ ...response.data })
                })
                .catch(error => {
                    console.log(error.response.data);
                })
        }
    }

    /*
    getIngredients = (id) => {
        this.ingredientService
            .
    }
    */

    render() {

        return(
            <div className="container" style={{marginBottom: '100px'}}>
                <div className="card mb-3 " style={{ marginTop: '50px'}}>
                    <h3 className="card-header">{this.state.name}</h3>
                    <div className="card-body">
                        <h5 className="card-title">Data: {this.state.date}</h5>
                    </div>
                    <img src="https://img.saborosos.com.br/imagens/massa-fresca.jpg" height={'50%'} width={'70%'} style={{alignSelf: "center"}} preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" alt="massa">
                    </img>
                    <div className="card-body">
                        <p className="card-text">Ingredientes</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <ListaDeIngredientes ingredientes={this.state.ingredients}/>
                    </ul>
                    <div className="card-body">
                        <p className="card-text">{this.state.description}</p>
                    </div>
                </div>
            </div>
        )    
    }

}