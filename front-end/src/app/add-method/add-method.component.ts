import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-method',
  templateUrl: './add-method.component.html',
  styleUrls: ['./add-method.component.css']
})
export class AddMethodComponent implements OnInit{
instructionText: string | undefined;

constructor() {

}
ngOnInit(): void {
    
}
clear() {
  this.instructionText = '';
}
}
