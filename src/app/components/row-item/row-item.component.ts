import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  // Hay que ajustar el selector porque va a ser una fila de una tabla  
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html'
})
export class RowItemComponent {

  // Importamos los item del padre (List)
  @Input() item!: Item;

  // Output porque va del hijo al padre
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
  // Ahora hay que transmitir el valor al padre (list-items html)
}
