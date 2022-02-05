import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // template: `
  //       <h1>
  //         Hello {{name}}
  //       </h1>
  //       <!-- expression -->
  //       <h2>{{2+3}}</h2>
  //       <!-- //string concatenation -->
  //       <h2> {{"Welcome again "+name}} </h2>
  //       <h2>{{name.length}}</h2>
  //       <h2>{{name.toUpperCase()}}</h2>
  //       <h2>{{name.toLowerCase()}}</h2>
  //       <h2>{{greetUser()}}</h2>
  //       <h2>{{showage()}}</h2>
  //       <h2>{{siteUrl}}</h2>
  //        `,
  // template: `
  // <h1>Hello {{name}}
  //   <br>
  // <input [disabled]="isDabled" [id]="myId" type="text" value="bikas">
  // `,
  // template: `
  // <h1>Hello {{name}}
  //   <br>
    
  //   <h2 [class]="success">Bikash Shah</h2>
  //   <h2 [class]="failure">Bikash Shah </h2>
  //   <h2 [class]="special">Bikash Shah</h2>
  
  // `,
//     template: `
//     <h1>Hello {{name}}
//     <button (click)="onClick()">Click me</button>
//     {{greeting}}
//     <button (click)="greeting='welcome Bikash again' ">Click me</button>
//     <p>
//     Keydown event:
//     <input (keydown)=" eventName='Key Down'">  
//     {{eventName}}
// </p>

//     `,

template: `
    <h1>Hello {{name}}
    <p>
      <input #myInput type="text">
      <button (click)="logMessage(myInput)">LOG</button>
      <input #myInput type="text">
      <button (click)="logMessage(myInput.value)">LOG</button>
    </p>

  `,
  styles: [],
  

})
export class TestComponent implements OnInit {

  //Interpolation Example
  //assigning variable
  public name = "Bikash Shah";
  public age = 12;
  public siteUrl = window.location.href;
  public isDabled = false;

  public myId = "testid";

  //class binding
  public success = "text-sucess";
  public failure ="text-failure";
  public special ="text-special";


  //event binding
  public greeting ="";
  eventName: string="";



  constructor() { }


  ngOnInit(): void {
  }

  //methods

  greetUser() {
    return "Hello " + this.name;
  }
  showage() {
    return "Age: " + this.age;
  }

  onClick(){
    console.log("You have clicked succesfully")
    this.greeting ="Property bindings"
  }
  updateName(event: Event): void {
    this.greeting = (event.target as HTMLInputElement).value;
  }

  logMessage(value:any){
    console.log(value);
  }

}
