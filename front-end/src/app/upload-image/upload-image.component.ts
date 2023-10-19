import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  saveRecipe(){
    // TODO - Save the recipe to the database from current recipe in session storage + save image to AWS (or mongoDB if I can) and add url to recipe if they have uploaded one
  }
}
