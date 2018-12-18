/**
 * @author "cubacano@gmail.com"
 * 
 * Componente que muestra la confirmación de la reserva 
 */

import { Component, OnInit } from '@angular/core';
import { JwtService } from '../_services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'b2f-book',
  templateUrl: './b2f-book.component.html',
  styleUrls: ['./b2f-book.component.css']
})
export class B2fBookComponent implements OnInit {

  book = {};
  loading = true;

  constructor(private _route:Router, private _jwtService:JwtService) { }

  ngOnInit() {
    this._jwtService.booking().subscribe(book=> this.setBook( book ) );
  }

  /**
   * Muestra la reserva sobre los planes disponibles buscados 
   * @param book Object asigna una reserva para usarlo en el componente
   */
  setBook( book ) {
    this.book = book;
    this.loading = false;
  }

  /**
   * Navega hacia los planes disponibles
   */
  toBack() {
    this._route.navigate(['web/disney/results/2-days/2-adults/3-children/'])
  }

}
