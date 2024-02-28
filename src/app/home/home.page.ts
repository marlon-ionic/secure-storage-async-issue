import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonGrid,
  IonCol,
  IonRow,
  IonLabel,
} from '@ionic/angular/standalone';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonGrid,
    IonCol,
    IonRow,
    IonLabel,
  ],
  providers: [],
})
export class HomePage {
  constructor(private storageService: StorageService) {}

  async createAndDestroyUI() {
    try {
      await this.storageService.createAndSetAndDestroy();
      console.log('createAndDestroyUI completed');
    } catch (error) {
      console.error('createAndDestroyUI error', error);
    }
  }

}
