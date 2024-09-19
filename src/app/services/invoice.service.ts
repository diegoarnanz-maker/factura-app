import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
// Ahora tendriamos que inyectar esto en el constructor del invoice.components

export class InvoiceService {

  // Cargamos la data en el service
  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    // asignamos al total, el metodo que lo calcula
    const total = this.calculateTotal();
    // El ... esparce todos los datos de la factura, creando una nueva instancia con todo (la clonamos)
    return {... this.invoice, total: total}; 
    // La factura vendria desde el backend con Spring,
    // aqui esta hardcodeada por nosotros
  }

  // Remove devuelve la factura modificada
  remove(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);

    // Hay que recalcular el total restando el item eliminado
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  // Guardamos el objeto nuevo
  save(item: Item): Invoice {
    // ... this.invoice.items -> clon de la factura antes del cambio
    // item -> aniade el item nuevo
    this.invoice.items = [... this.invoice.items, item];

    // Hay que recalcular el total con el nuevo item
    const total = this.calculateTotal();
    return {... this.invoice, total}; 
  }


  calculateTotal() {
    // Debe ser let para ser modificable
    // let total = 0;

    // this.invoice.items.forEach(item => {
    //   total += item.total();
    // });

    // return total;

    // Otra forma
    // Reduce, es un operador que permite hacer precio * cantidad de todos los items, sustituyendo el forEach
    // El 0 es el valor con el que parte el accumulator
    return this.invoice.items.reduce((accumulator, item) =>
    accumulator + (item.price * item.quantity), 0);
  }
}
