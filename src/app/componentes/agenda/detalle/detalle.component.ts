import { Component, Input } from '@angular/core';
import { Contacto } from '../../../interfaces/agenda';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  @Input() valor: Contacto | null = null;
}
