import { Component, OnInit } from "@angular/core";
import { SpringCustomerHttpService } from "../spring-customer-http.service";
import { ActivatedRoute, Router } from "@angular/router";

import { ToastrService } from "ngx-toastr";
import { HttpClient } from "@angular/common/http";
import { routerNgProbeToken } from "@angular/router/src/router_module";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  public customers: any = [];
  public x;
  public datax;
  public deleteId;

  constructor(
    public customerService: SpringCustomerHttpService,
    public router: Router,
    public _http: HttpClient
  ) {}

  ngOnInit() {
    this.datax = this.customerService.getCustomer().subscribe(data => {
      this.datax = data;
      for (this.x = 0; this.x < this.datax.length; this.x++) {
        this.customers.push(data[this.x]);
      }
      console.log(this.customers);
    });
  }
  public navigate(id) {
    for (this.x = 0; this.x < this.customers.length; this.x++) {
      if (id == this.customers[this.x].id) {
        console.log(this.customers[this.x].name);
        this._http
          .delete(`http://localhost:8081/spring-crm-rest/api/customers/${id}`)
          .subscribe(ok => {
            console.log(ok);
          });

        this.router.navigate(["/customer"]);
      }
    }
  }
  public navigatex(id) {
    console.log(id);
    this.router.navigate(["/updateCustomer", id]);
  }
}
