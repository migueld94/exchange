import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currency } from '../../interface/monedas.interface';
import { MonedasService } from '../../services/monedas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Exchange Rate Calculator';
  moneta: Currency[] = [];

   conn: boolean = false;

  miFormulario: FormGroup = this.fb.group({
    'monto': ['', [Validators.required, Validators.min(0.01)]],
    'tipo1': ['', Validators.required],
    'tipo2': ['', Validators.required],
    rate: 0,
    result: 0 
  })

  constructor( private monedasService: MonedasService, private fb: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.monedasService.getMonedas()
        .subscribe(monedas =>{ console.log(monedas);this.moneta = monedas.currencies },
        (error) => {
          this.conn = true;
        }
           );

  }

  swap(){
    let s1 = this.miFormulario.value.tipo1;
    let s2 = this.miFormulario.value.tipo2;
    this.miFormulario.patchValue({
      tipo1:s2,
      tipo2:s1
    });
    this.Convertir();
  }

  Convertir(){
    if(this.miFormulario.valid){
      this.monedasService.getChange(this.miFormulario.value.tipo1, this.miFormulario.value.tipo2, this.miFormulario.value.monto).subscribe(Change => {
        console.log(this.miFormulario);
        console.log(Change.to[0]);
        this.miFormulario.patchValue({
          result: Change.to[0].mid,
          rate: Change.to[0].mid/this.miFormulario.value.monto
        });
      }
      );
    }
    
  }

  validar(campo: string){
    return this.miFormulario.controls[campo].errors
        && this.miFormulario.controls[campo].touched;
  } 

}
