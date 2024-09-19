import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowItemComponent], // Importamos el Row porque depende de list
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {

  //item es del tipo Item[], un Array
  @Input() items: Item[] = [];

  // Importamos el removeEventEmitter al padre (invoice)
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();


  // Implementamos el metodo onRemove($event)
  // Ahora hay que importarlo al padre (invoice)
  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
}
