import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  espressione ="";
  risultato = "0";
  ris = 0;
  cancella(){
    this.risultato = "0";
    this.espressione = "";
  }
  calcolatrice() {
    this.risultato =  eval(this.espressione);
  }
  chEsp(valore:string){
    
    if(this.ris == 0 &&  (valore == "/" || valore == "*")){
      this.espressione = "non è possibile";
    }
    this.ris++
    this.espressione = this.espressione + valore;
  }
}