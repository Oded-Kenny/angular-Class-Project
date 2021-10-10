import { Component, EventEmitter, Input, Output } from '@angular/core';
import { customer } from '../customer.model';

@Component({
  selector: 'table-icons',
  template: `
    <span class="glyphicon glyphicon-cog"> </span>
    <span class="glyphicon glyphicon-pencil" (click)="editCustomer()"></span>
    <span class="glyphicon glyphicon-remove" (click)="remove()"> </span>
  `,
  styles: [
    `
      span {
        font-size: 20px;
        margin: 10px;
        cursor: pointer;
      }
    `,
  ],
})
export class CustomersTableIcons {
  @Input() customers;
  @Input() customer;
  @Output() edit: EventEmitter<customer> = new EventEmitter();

  remove() {
    if (confirm('Are you sure')) {
      var index = this.customers.indexOf(this.customer);

      this.customers.splice(index, 1);
    }
  }

  editCustomer() {
    this.edit.next(this.customer);
  }
}
