import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElement: any = [];
  onServerAdded(serverData: {materialNameInput: string, materialPriceInput: string}) {
    this.serverElement.push({
      name: serverData.materialNameInput,
      price: serverData.materialPriceInput,
    });
  }
}
