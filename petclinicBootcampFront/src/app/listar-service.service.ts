import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Oferta } from './oferta';

@Injectable({
  providedIn: 'root'
})
export class ListarServiceService {

  constructor(private httpClient: HttpClient) { }

  getOfertas(): Observable<any> {
    return this.httpClient.get<Oferta[]>('localhost:8080/api/ofertas');
  }

  getOferta(id:string): Observable<any> {
    return this.httpClient.get<Oferta>('url'+'/$'+id);
  }

  addOferta(oferta:Oferta): Observable<any>{
    return this.httpClient.post('url',oferta);
  }

  modificarOferta(oferta:Oferta): Observable<any>{
    return this.httpClient.put('url',oferta);
  }

  eliminarOferta(id): Observable<any>{
    return this.httpClient.delete('url'+'/$'+id);
  }



}
