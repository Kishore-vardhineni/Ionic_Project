import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonInput, IonList, IonItem, IonIcon, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, IonInput, IonList, IonItem, IonIcon, IonButton ]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
