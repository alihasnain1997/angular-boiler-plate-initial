import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';
import { DemoNgZorroAntdModule } from './ng-zorro-modules'
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { <%= classify(name) %>DynamicFormComponent } from './add/dynamic-form.component';
import { <%= classify(name) %>DynamicFormQuestionComponent } from './add/form-question/dynamic-form-question.component';




// import { NzCardModule } from 'ng-zorro-antd/card';
// import { NzInputModule } from 'ng-zorro-antd/input';
// import { NzIconModule } from 'ng-zorro-antd/icon';


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    ContainerComponent,
    ListComponent,
    FilterComponent,
    <%= classify(name) %>DynamicFormQuestionComponent,
    <%= classify(name) %>DynamicFormComponent
  ],
  imports: [
    CommonModule,
    <%= classify(name) %>RoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule
    // NzCardModule,
    // NzInputModule,
    // NzIconModule
  ]
})
export class <%= classify(name) %>Module { }
