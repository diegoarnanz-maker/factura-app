import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  standalone: true,
  imports: [],
  templateUrl: './invoice-view.component.html'
})
export class InvoiceViewComponent {
// Introducimos los campos de nuestro componente

// Son Input porque son campos que pasa al padre
  @Input() name!: string;
  @Input() id!: number;

}
