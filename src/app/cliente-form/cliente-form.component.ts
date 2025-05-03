import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html'
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      apellidoPaterno: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      apellidoMaterno: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required]
    });
  }

  registrarCliente() {
    if (this.clienteForm.valid) {
      this.clienteService.registrarCliente(this.clienteForm.value).subscribe(
        res => alert('Cliente registrado correctamente.'),
        err => alert('Error al registrar cliente.')
      );
    } else {
      alert('Completa correctamente el formulario.');
    }
  }

}
