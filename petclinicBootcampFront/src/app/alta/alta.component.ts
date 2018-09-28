import { Component, OnInit } from '@angular/core';
import { Oferta } from '../oferta';
import { ListarServiceService } from '../listar-service.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  public oferta:Oferta;

  constructor(
    private servicio:ListarServiceService
  ) {
    this.oferta=<Oferta>{};
  }

  ngOnInit() {
  }

  onSubmit(oferta){
    //this.servicio.addOferta(oferta);
    console.log(oferta);
  }

}
