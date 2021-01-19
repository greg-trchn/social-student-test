import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [
  //   FormBuilder
  // ]
})
export class SharedModule { }
