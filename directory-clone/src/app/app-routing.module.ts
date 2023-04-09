import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPageComponent } from './customers/customer-page/customer-page.component';

const routes: Routes = [
    { path: 'customers', component: CustomerPageComponent },
    { path: '', pathMatch: 'full', redirectTo: '/customers' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
