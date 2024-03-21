import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicExampleComponent } from './basic-example/basic-example.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NmSplitterModule } from 'ngx-nm-splitter';


@NgModule({
  declarations: [
    BasicExampleComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NmSplitterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExamplesModule { }
