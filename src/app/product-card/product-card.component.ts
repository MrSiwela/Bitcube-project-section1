import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: `
    <p>
      product-card works!
    </p>
  `,
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
