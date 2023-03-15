import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cart, Selection } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartForm!: FormGroup
  selection: Selection [] = []

  constructor(private fb: FormBuilder) { }

  @Input()
  selections: Selection[] = []

  ngOnInit(): void {
    this.cartForm = this.createForm()
  }

  processForm() {
    const cart: Cart = {
      name: this.cartForm.get('name')?.value,
      address: this.cartForm.get('address')?.value,
      delivery: this.cartForm.get('delivery')?.value
    }
    console.info('processing form: ', cart)
    this.cartForm.reset()
  }
  
  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', [ Validators.required, Validators.min(3) ]),
      address: this.fb.control<string>('', [ Validators.required, Validators.min(3) ]),
      delivery: this.fb.control<string>('', [ Validators.required, Validators.min(3) ])
    })
  }

}
