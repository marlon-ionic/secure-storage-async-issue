import { Component, inject } from '@angular/core';
import { KeyValueStorage } from '@ionic-enterprise/secure-storage/ngx';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonCol, IonRow, IonLabel } from '@ionic/angular/standalone';

const key = 'superSecretKey';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonCol, IonRow, IonLabel],
  providers: [KeyValueStorage]
})
export class HomePage {
  storage = inject(KeyValueStorage);
  constructor() {}


  async createAndDestroy() {
    await this.create();
    await this.destroy();
  }

  async createAndDestroy2() {

    await this.storage.create(key);
    await this.storage.set('name', 'Testing');
    const name = await this.storage.get('name');
    console.log('created', name);
    await this.storage.destroyStorage();
  }

  async createAndDestroy3() {
    await this.storage.create(key);
    console.log('created');
    try {
      await this.storage.destroyStorage();
      console.log('destroyed');
    } catch (error) {
      console.log('error - destrorying', error);
  }
}

async createAndDestroy4() {
  await this.storage.create(key);
  console.log('created');
  await this.storage.set('name', 'Testing');
  console.log('set');
  try {
    await this.storage.destroyStorage();
    console.log('destroyed');
  } catch (error) {
    console.log('error - destrorying', error);
}
}

  async destroy() {
    await this.storage.destroyStorage();
  }

  async create() {
    const key = 'superSecretKey';
    await this.storage.create(key);
    await this.storage.set('name', 'Testing');
    const name = await this.storage.get('name');
    console.log('created', name);
  }

  async keys() {
    const keys = await this.storage.keys();
    console.log('keys', keys);
  }
}
