import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Worker } from '../models/worker';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  backEnd:string="http://localhost:8080/workers/123e4567-e89b-12d3-a456-426614174001";


  constructor(private client:HttpClient) { }

  getWorker():Observable<Worker>{
    let response:Observable<Worker> = this.client.get<Worker>(this.backEnd);
    return response;
  }
}

