import { Component, Input, OnInit } from '@angular/core';
import {Material} from './product-list.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() element!:{name: string, price: string};
  @Input() index!: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
