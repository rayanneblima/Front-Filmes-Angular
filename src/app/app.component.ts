import { CrudService } from './services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "teste-code7";
  images: Images;
  erro: any;
  constructor(private crudService: CrudService) {
    this.getter();
  }
  // life cycle hooks
  ngOnInit(): void { }

  getter(): void {
    this.crudService.getFotos().subscribe(
      (data: Images) => {
        this.images = data;
        // console.log('O data que recebemos: ', data);
        // console.log('A variável que recebemos: ', this.images);
      },
      (error: any) => {
        this.erro = error;
        console.log('ERROR ', error);
      }
    );
  }
}
