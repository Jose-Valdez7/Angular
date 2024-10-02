import { Company } from "./Company";
import { Customer } from "./Customers";
import { InvoiceItem } from "./InvoiceItem";

export class Invoice{
    id!:string ;
    company!: Company;
    customer!:Customer;
    item!:InvoiceItem[];
}