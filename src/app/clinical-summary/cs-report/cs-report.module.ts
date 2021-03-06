import { NgModule } from '@angular/core';
import { CsReportComponent } from './cs-report.component';
import { CsReportRoutingModule } from './cs-report-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';  
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CsReportRoutingModule,
    FormsModule, ReactiveFormsModule,CommonModule,PipesModule
    
  ],
  declarations: [
    CsReportComponent
  ],
  exports: [
    CsReportComponent
  ],
  providers: [
  ],
  entryComponents: [
    CsReportComponent
  ]
})
export class CsReportModule { }
