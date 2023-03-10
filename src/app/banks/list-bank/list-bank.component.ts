import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../demo/service/product.service';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.scss'],
})
export class ListBankComponent implements OnInit {
  products!: any[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));
  }
}
