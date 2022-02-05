import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  constructor() { }

  //variable here
  public name = "Bikash Shah";
  public age = 23;
  public phone = 9814301921;
  public address = "Biratnagar";
  itemImageUrl = '../assets/img.jpeg';
  imageHeight =300;
  imageWidth =300;
  myPage = "http://shahbikash.com.np/";
  isDabled=true;
  greetMessage ="";

  ngOnInit(): void {
  }
  //methods here
  public greeting(){
    this.greetMessage="Goodmorning";
    console.log("Event Binding");
  }
  public salam(){
    this.greetMessage="salam";
    console.log("Event Binding");
  }
  public namastey(){
    this.greetMessage="Namastey";
    console.log("Event Binding");
  }
  //two way binding
  




}
