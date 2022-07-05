import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-worker-component',
  templateUrl: './worker-component.component.html',
  styleUrls: ['./worker-component.component.css']
})
export class WorkerComponentComponent implements OnInit {


  worker = {"id":"","name":"","email":"","tel_ext":""};

  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getWorker().subscribe(response=>this.worker=response);
  }

}
