import React from "react";
import RecipeService from "../app/service/recipeService";
import ListaDeReceitas from "../components/listaDeReceitas";

export default class ListRecipes extends React.Component {

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
                <ListaDeReceitas receitas={this.state.receitas}/>
            </div>
            </>
        )
    }
}