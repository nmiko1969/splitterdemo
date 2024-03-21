import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BasicExampleComponent } from './basic-example/basic-example.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NmSplitterModule } from 'node_modules/ngx-nm-splitter';


@NgModule({
  declarations: [
    BasicExampleComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SelectButtonModule,
    NmSplitterModule,
  ]
})
export class ExamplesModule { }
