import { Component } from '@angular/core';

import { ModalService } from '../_services/modal.service';
@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.css']
})
export class AddIngredientsComponent {
  allItems: any = [];
  validationError: boolean = false;

  constructor(protected modalService: ModalService) { }

  get items() {
    return this.allItems;
  }

  addItem(name: string, amount: string) {
    if (name == '' || amount == '') {
      this.errorMessage();
    } else {
      this.resetMessage();
        this.allItems.unshift({
          name,
          amount
        });
    }
    
  }

  clearAll() {
    this.allItems = [];
  }

  errorMessage() {
    return this.validationError = true;
  }

  resetMessage() {
    return this.validationError = false;
  }
}
