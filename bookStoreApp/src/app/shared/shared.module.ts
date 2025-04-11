import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MeterialModule } from './meterial.module';


@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MeterialModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class SharedModule { }
