import { Component, Input } from '@angular/core';
import { Customer } from '../../model/Customers';

@Component({
  selector: 'customer-view',
  standalone: true,
  imports: [],
  templateUrl: './customer-view.component.html',
})
export class CustomerViewComponent {
  @Input()customer!:Customer

}
