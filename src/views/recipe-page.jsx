import React from "react";
import RecipeService from "../app/service/recipeService";
import ListaDeReceitas from "../components/listaDeReceitas";
import { withRouter } from "react-router-dom";

class RecipePage extends React.Component {

    constructor() {
        super();
        this.service = new RecipeService();
    }
    
    state = {
        name: '',
        description: '',
        date: '',
        receitas: []
    }

    toRecipe = (id) => {
        console.log("chamando função para ir para a receita detalhada!");
        this.props.history.push(`/receita/${id}`);
    }

    atualizaReceitas = () => {
        this.service
        .getAll()
        .then( resposta => {
            const lista = resposta.data;
            if(lista.length < 1) {
                console.log("Nenhum resultado encontrado!");
            }
            this.setState({ receitas: lista })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        this.atualizaReceitas();
        return(
            <>
            <div style={{marginTop: '50px'}} className="">
                <ListaDeReceitas receitas={this.state.receitas} toRecipe={this.toRecipe}/>
            </div>
            </>
        )
    }
}

export default withRouter(RecipePage);