/**
 * @author "cubacano@gmail.com"
 * Componente trae los resultados sobre la busqueda de la disponibilidad de planes Disney
 */

import { Component, OnInit } from '@angular/core';
import { JwtService } from '../_services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'b2f-searcher',
  templateUrl: './b2f-searcher.component.html',
  styleUrls: ['./b2f-searcher.component.css']
})
export class B2fSearcherComponent implements OnInit {


  loading = true;
  planSelected = {};

  constructor(private _router:Router, private _jwtService:JwtService) {
    console.log('component is loaded');
   }

  ngOnInit() {
    console.log('searcher is Init');
    this._router.navigate(['web/disney/results/2-days/2-adults/3-children']);

    this._jwtService.ping().subscribe(token=>      
            this._jwtService.getDisneyPlans().subscribe(plans=> this.setPlan( plans[0] ),
                                                       err => console.error("error", err)
                                                      ) 
        );
  }

  /**
   * Enlaza la información que se busca para presentarla en el componente
   * @param plan Object información del plan buscado
   */
  setPlan( plan ) {
    this.planSelected = plan;
    this.loading = false;
  }

  /**
   * Al reservar enruta al componente de confirmación de la reserva
   */
  toBook(){
    console.info("to book");
    this._router.navigate(['web/disney/results/2-days/2-adults/3-children/book']);
  }

}
