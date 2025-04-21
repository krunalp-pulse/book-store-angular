import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MeterialModule } from './meterial.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BoolformatPipe } from './pipes/boolformat.pipe';

@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent,
    BoolformatPipe
  ],
  imports: [
    CommonModule,
    MeterialModule
  ],
  exports:[
    ToolbarComponent,
    FooterComponent,
    MeterialModule,
    AuthorsComponent,
    BoolformatPipe
  ]
})
export class SharedModule { }
