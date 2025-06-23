import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
   recipes: Recipe [] = [
    {
       id: "r1",
       title: "Schnitzel",
       imageUrl: "assets/icon/Biryani.png",
       ingrediants: ["Spaghetti", "Pork Meat", "Salad"]
    }, 
    {
       id: "r2",
       title: "Spaghetti",
       imageUrl: "assets/icon/French_Fries.png",
       ingrediants: ["French Fries", "Tomatosas", "Onion"]
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipeId(recipeId: string) {
     return {...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
     })
   }
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
        return recipe.id !== recipeId;
     })
  }
}
