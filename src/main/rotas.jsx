import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from "../views/home";
import RegisterIngredient from "../views/ingredients";
import Recipe from "../views/recipe";
import RecipePage from "../views/recipe-page";
import RegisterRecipe from "../views/register-recipe";

export default function Rotas(props) {
    return (
        <Router>
            <Switch>
                <Route path="/register-ingredient" component={RegisterIngredient}/>
                <Route path="/register-recipe" component={RegisterRecipe}/>
                <Route path="/recipes" component={RecipePage} />
                <Route path="/receita/:id" component={Recipe} />
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
  }