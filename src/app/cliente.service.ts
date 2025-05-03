import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiURL = 'http://localhost:8080/clientes';  // <-- Ajusta según tu backend

  constructor(private http: HttpClient) { }

  registrarCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiURL, cliente);
  }

  obtenerClientes(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  actualizarCliente(cliente: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${cliente.id}`, cliente);
  }

  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
