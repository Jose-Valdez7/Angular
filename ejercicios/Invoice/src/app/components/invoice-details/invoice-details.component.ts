import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';
import { InvoiceItemComponent } from "../invoice-item/invoice-item.component";

@Component({
  selector: 'invoice-details',
  standalone: true,
  imports: [InvoiceItemComponent],
  templateUrl: './invoice-details.component.html',
})
export class InvoiceDetailsComponent {
  @Input()items!:InvoiceItem[];
}
