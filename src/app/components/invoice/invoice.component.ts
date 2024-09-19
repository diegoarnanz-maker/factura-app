import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

//CLASE PADRE

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent, 
    ClientViewComponent, 
    CompanyViewComponent, 
    ListItemsComponent,
    // Eliminamos el Row porque esta donde depende, que es ListItemsComponent
    TotalComponent,
    FormItemComponent],
    

  templateUrl: './invoice.component.html'
})

export class InvoiceComponent implements OnInit {

  // Atributo publico que contiene la factura
  invoice!: Invoice;
  // private service: InvoiceService

  // Inyectamos el service ya creado y queda como atributo de la clase
  constructor(private service: InvoiceService) { }
  
  // Definimos la factura en nuestro componete, ya podemos usarla en la plantilla html invoice
  ngOnInit(): void {
    this.invoice = this.service.getInvoice(); // Ahora invoice ya contiene el total
  }
  
  // Implementamos metodo removeItem()
  removeItem(id: number) {
    // Metodo filter: pasamos el item y preguntamos, si el id es diferente lo dejamos pasar.
    // Recorre todo el Array y crea uno a partir del original filtrando los que tienen != id
    // this.invoice.items = this.invoice.items.filter(item => item.id != id); 

    // Forma con service, pasamos lo anterior al service.ts
    this.invoice = this.service.remove(id); 
  }

  // Hay que ir al service para hacer la logica de add
  addItem(item: Item) {
    this.invoice = this.service.save(item);
  }
}
