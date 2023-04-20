import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../Carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  
  findAll() {
    return this.http.get<Carro[]>('http://localhost:9001/products/carros')
  }
}
