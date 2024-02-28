import { Injectable } from '@angular/core';
import { KeyValueStorage } from '@ionic-enterprise/secure-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private key = 'My!superSecretKey13!';
  private kvStorage: KeyValueStorage;

  constructor() {
    this.kvStorage = new KeyValueStorage();
  }

  async createAndSetAndDestroy() {
    await this.kvStorage.create(this.key);
    await this.kvStorage.set('name', 'Testing Name');
    const name = await this.kvStorage.get('name');
    console.log('name', name);
    await this.kvStorage.destroyStorage();
  }
}
