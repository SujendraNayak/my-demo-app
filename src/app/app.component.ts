import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-demo-app';
  result:string="";

  add(firstNumber:string,secondNumber:string){
    this.result=(Number(firstNumber)+Number(secondNumber)).toString();
  }
  subtract(firstNumber:string,secondNumber:string){
    this.result=(Number(firstNumber)-Number(secondNumber)).toString();
  }
  multiply(firstNumber:string,secondNumber:string){
    this.result=(Number(firstNumber)*Number(secondNumber)).toString();
  }
  divide(firstNumber:string,secondNumber:string){
    this.result=(Number(firstNumber)/Number(secondNumber)).toString();
  }
};

