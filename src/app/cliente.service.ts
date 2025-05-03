import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = 'http://localhost:8080/clientes';  // <-- Ajusta según tu backend

  constructor(private http: HttpClient) { }

  registrarCliente(cliente: ClienteService): Observable<any> {
    return this.http.post(`${this.baseURL}/clientes`, cliente);
  }

  listarClientes(): Observable<ClienteService[]> {
    return this.http.get<ClienteService[]>(`${this.baseURL}/clientes`);
  }

  actualizarCliente(cliente: ClienteService): Observable<any> {
    return this.http.put(`${this.baseURL}/clientes/${cliente.id}`, cliente);
  }

  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/clientes/${id}`);
  }

}
