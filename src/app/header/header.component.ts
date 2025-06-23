import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCol, IonRow, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonGrid ]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
