import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule }  from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  exports:[
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
  ]  
})
export class MaterialModule { }
