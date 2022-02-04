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
  template: `
  <h1>Hello {{name}}
    <br>
  <input [disabled]="isDabled" [id]="myId" type="text" value="bikas">
  `,
  styles: []

})
export class TestComponent implements OnInit {

  //Interpolation Example
  //assigning variable
  public name = "Bikash Shah";
  public age = 12;
  public siteUrl = window.location.href;
  public isDabled = false;
  
  public myId ="testid";

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

}
