import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html'
})
export class ClientViewComponent {
// Introducimos los campos de nuestro componente, en este caso un objeto Cliente

  @Input() client: Client = new Client();
}
