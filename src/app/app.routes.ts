import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
         loadComponent: () => import('./recipes/recipes.page').then( m => m.RecipesPage)
      }, 
      {
         path: ":recipeId",
         loadComponent: () => import('./recipes/recipe-details/recipe-details.page').then( m => m.RecipeDetailsPage)
      }
    ]
   
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login-routing.module').then( m => m.LoginRoutingModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register-routing.module').then( m => m.RegisterRoutingModule)
  }


];
