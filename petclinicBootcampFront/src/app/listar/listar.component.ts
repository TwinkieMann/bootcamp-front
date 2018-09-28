import { Component, OnInit } from '@angular/core';
import { Oferta } from '../oferta';
import { ListarServiceService } from '../listar-service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public ofertas: Array<Oferta>;

  // private eventEmmiter:EventEmitter;

  constructor(private listadoService: ListarServiceService) { }

  ngOnInit() {
    this.listadoService.getOfertas().subscribe(
        data =>{this.ofertas=data;}
    );
  }

  modificar(id:string){

  }

  eliminar(id:string){
    console.log(id);
  }
}
