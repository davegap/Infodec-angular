import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { InicioInputComponent } from './inicio-input/inicio-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    InicioInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    InicioComponent
  ]
})
export class ComponentesModule { }
