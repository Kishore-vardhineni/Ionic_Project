import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonItem, IonList, IonButtons, IonBackButton, IonIcon, IonButton, AlertController } from '@ionic/angular/standalone';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonBackButton, IonButtons, IonList, IonItem, IonImg, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class RecipeDetailsPage implements OnInit {
  public loadedRecipe: any;
  public recipeId: any;

  constructor( private activatedRoute: ActivatedRoute, private router: Router, private recipeService: RecipesService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
     this.activatedRoute.paramMap.subscribe((paramMap) => {
        if(!paramMap.has('recipeId')) {
          return
        } else {
          this.recipeId = paramMap.get('recipeId');
          this.loadedRecipe = this.recipeService.getRecipeId(this.recipeId)
        }
     })
  }

  onDeleteRecipe() {
     this.alertController.create({
        header: "Are you sure?",
        message: 'Do you want to delete the recipe?',
        buttons: [
          {
            text: "Cancel",
            role: "Cancel",
            cssClass: "Primary"
          },
          {
            text: "Delete",
            handler: () => {
              this.recipeService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            }
          }
        ]
     }).then(alertEl => {
        alertEl.present();
     })
  }

}
