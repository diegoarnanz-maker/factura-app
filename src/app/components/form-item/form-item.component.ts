import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html'
})
export class FormItemComponent {

  // Transmitimos los datos del formulario al padre
  @Output() addItemEventEmitter = new EventEmitter();

  private counterId: number = 4; //Al haber 3 productos

  //Creamos el objeto y lo inicializamos para poder mapearlo y crear el value="" en el html
  item: any = {
    product: "",
    price: '',
    quantity: ''
  }

  // Metodo que recibe y maneja los datos del formulario y,
  // los puede enviar al padre con el @Output() addItemEventEmitter = new EventEmitter();
  onSubmit(itemForm: NgForm): void {
    // void porque no devuelve nada solo ejecuta un evento

    if (itemForm.valid) {
      this.addItemEventEmitter.emit({id: this.counterId, ...this.item});
      this.counterId++;
  
      // Hacemos un clean del formulario
      this.item = {
        product: "",
        price: '',
        quantity: ''
      }

      itemForm.reset();
      itemForm.resetForm();
    }

  }

}
