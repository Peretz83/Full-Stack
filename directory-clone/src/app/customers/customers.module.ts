import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        CustomerPageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class CustomersModule { }
