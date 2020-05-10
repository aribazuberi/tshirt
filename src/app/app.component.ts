import { Component, OnInit } from '@angular/core';
import { TProduct } from './TProduct';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'T-shit Maze';
  products : TProduct[]=[];
  imgWidth=70;
  imgMargin=2;
  C1='blue';
  C2='red'
  search ='';
 

  constructor()
  {
    
  }


  ngOnInit(){
    this.products=this.getProducts();
  }

  change(event,img)
  {
    event.currentTarget.src=img;

  }

  getProducts() : TProduct[]{
    return[
    {
      "productID" : 1 ,
      "productName": "ROADSTER",
      "productCode": "TS-001",
      "productPrice": 10.9,
      "productQuantity": 324,
      "productDescription": "Full-sleves tshirt",
      "productIMGF": "assets/img/TS-001F.jpg",
      "productIMGB": "assets/img/TS-001B.jpg"
    },
    {
    "productID": 2 ,
    "productName": "MANGO",
    "productCode": "TS-002",
    "productPrice": 15.5,
    "productQuantity": 200,
    "productDescription": "croped Tshirt",
    "productIMGF": "assets/img/TS-002F.jpg",
    "productIMGB": "assets/img/TS-002B.jpg"
    },
    {
    "productID": 3 ,
    "productName": "LEVI'S",
    "productCode": "TS-003",
    "productPrice": 17.5,
    "productQuantity": 80,
    "productDescription": "Basic Tshirt",
    "productIMGF": "assets/img/TS-003F.jpg",
    "productIMGB": "assets/img/TS-003B.jpg"
    },
    {
    "productID": 4 ,
    "productName": "HRX",
    "productCode": "TS-004",
    "productPrice": 12.8,
    "productQuantity": 100,
    "productDescription": "Basic hrx Tshirt",
    "productIMGF": "assets/img/TS-004F.jpg",
    "productIMGB": "assets/img/TS-004B.jpg"
    },
    {
    "productID": 5 ,
    "productName": "Nike",
    "productCode": "TS-005",
    "productPrice": 22.9,
    "productQuantity": 50,
    "productDescription": "basic nikeTshirt",
    "productIMGF": "assets/img/TS-005F.jpg",
    "productIMGB": "assets/img/TS-005B.jpg"
    }
  ];
  }
}
