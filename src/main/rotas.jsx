import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from "../views/home";
import RegisterIngredient from "../views/ingredients";
import Recipe from "../views/recipes";
import ListRecipes from "../views/list-recipes";

export default function Rotas(props) {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register-ingredient" element={<RegisterIngredient />}/>
                <Route path="/recipes" element={<ListRecipes />}/>
            </Routes>
        </Router>
    );
  }