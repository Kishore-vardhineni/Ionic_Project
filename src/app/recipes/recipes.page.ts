import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonImg, IonLabel } from '@ionic/angular/standalone';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonImg,
    IonAvatar,
    IonItem,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    
  }

  ionViewWillEnter() {
   this.recipes = this.recipeService.getAllRecipes();
  }
}
