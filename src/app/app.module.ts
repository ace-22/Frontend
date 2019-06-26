import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { CustomersComponent } from "./customers/customers.component";
import { SpringCustomerHttpService } from "./spring-customer-http.service";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { UpdateComponent } from "./update/update.component";

import { ToastrModule } from "ngx-toastr";
import { FormComponent } from "./form/form.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AddCustomerComponent,
    UpdateComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: "", component: CustomersComponent },
      { path: "addCustomer", component: AddCustomerComponent },
      {
        path: "updateCustomer/:id",
        component: UpdateComponent
      }
    ])
  ],
  providers: [SpringCustomerHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
