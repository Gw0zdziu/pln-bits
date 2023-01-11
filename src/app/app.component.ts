import {Component, OnInit} from '@angular/core';
import {ConverterService} from './converter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pln-bits';
  bitsInput: string = 'Bits'
  plnInput: string = 'PLN'
  price100Bits: number = 1.77
  switchConverter = false
  firstInput: number;
  secondInput: number;
  averageEuro: number;


  constructor(private converterService: ConverterService) {
  }

  ngOnInit() {
  this.converterService.convertPlnToBits().subscribe(x =>{
    this.averageEuro = +x.rates[0].mid.toFixed(2)
  })
  }



  changeConverter(){
    if (this.switchConverter) {
      this.firstInput = 0
      this.secondInput = 0
      this.bitsInput = 'PLN'
      this.plnInput = 'Bits'
    } else {
      this.firstInput = 0
      this.secondInput = 0
      this.bitsInput = 'Bits'
      this.plnInput = 'PLN'
    }
  }

  convertValue(){
    if (!this.switchConverter){
      this.secondInput = +(this.firstInput/this.averageEuro/this.price100Bits*100).toFixed()
    } else {
      this.secondInput = +(this.firstInput/100*this.price100Bits*this.averageEuro).toFixed(2)
    }
  }
}
