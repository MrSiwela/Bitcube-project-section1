import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productName: string = "";
  productQuantity!: number;
  productPrice!: number;

  selectedProduct = {
    name: "",
    quantity: 0,
    price: 0,
    email: "" ,
  };

  products!: Product[];

  title = 'appBootstrap';
  
  closeResult: string = '';
  
  constructor(private modalService: NgbModal) {}


  ngOnInit(): void {
    this.products = [
      {
        name: "product 1",
        quantity: 2,
        price: 200
      }
      ,
      {
        name: "product 2",
        quantity: 6,
        price: 200  
      }
    ]
  }

  addProduct(){

    this.modalService.dismissAll();

    this.products.push({
      name: this.productName,
      quantity: this.productQuantity,
      price: this.productPrice
    });

    this.productName = "";
    this.productPrice = 0;
    this.productQuantity = 0;

  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  changeItem(e: any){
    this.selectedProduct.name = e.name;
    this.selectedProduct.price = e.price;
  }

  updateInventory(){
    this.products.map((value,index)=>{
        if(value.name == this.selectedProduct.name){
          value.quantity = value.quantity - this.selectedProduct.quantity;
          if(value.quantity <= 0){
            value.quantity = 0;
          }
        }
        return value;
    });
    this.modalService.dismissAll();
  }

}
