import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-price',
  templateUrl: './products-price.component.html',
  styleUrls: ['./products-price.component.css']
})
export class ProductsPriceComponent implements OnInit {
  @Output() materialCreated = new EventEmitter<{materialNameInput: string, materialPriceInput: string}>();
  @ViewChild('materialNameInput') materialNameInput!: ElementRef;
  @ViewChild('materialPriceInput') materialPriceInput!: ElementRef;

  

  constructor() { }

  ngOnInit(): void {
  }
  addMaterial() {
    this.materialCreated.emit({materialNameInput: this.materialNameInput.nativeElement.value, materialPriceInput: this.materialPriceInput.nativeElement.value})
  }

}
