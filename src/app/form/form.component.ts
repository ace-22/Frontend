import { Component, OnInit } from "@angular/core";
import { SpringCustomerHttpService } from "../spring-customer-http.service";
import { ActivatedRoute, Router } from "@angular/router";

import { ToastrService } from "ngx-toastr";
import { HttpClient } from "@angular/common/http";
import { routerNgProbeToken } from "@angular/router/src/router_module";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  public cc;
  public dc;
  public lr;
  public select;
  public av;
  public datax;
  public x;
  public customersx = [];
  constructor(
    public customerService: SpringCustomerHttpService,
    public _http: HttpClient,
    public router: Router,
    public toastr: ToastrService,
    public ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}
  public validatedata = () => {
    if (!this.cc) {
      this.toastr.warning("Enter the credit card requirement");
    } else if (!this.dc) {
      this.toastr.warning("Enter the debit card requirement");
    } else if (!this.lr) {
      this.toastr.warning("Enter whether loan is required or not");
    } else if (!this.select) {
      this.toastr.warning("Please select the condition for asset value range");
    } else if (!this.av) {
      this.toastr.warning("Please enter the asset value");
    } else {
      if ((this.select = "Greater than")) {
        this.select = ">";
      } else if ((this.select = "Less than")) {
        this.select = "<";
      } else if ((this.select = "Equals to")) {
        this.select = "=";
      } else if ((this.select = "Greater than or equal to")) {
        this.select = ">=";
      } else {
        this.select = "<";
      }
      let data = {
        cc: this.cc,
        dc: this.dc,
        lr: this.lr,
        select: this.select,
        av: this.av
      };
      console.log(data);
      this.datax = this.customerService.getCustomer().subscribe(datagen => {
        this.datax = datagen;
        for (this.x = 0; this.x < this.datax.length; this.x++) {
          this.customersx.push(data[this.x]);
        }
        console.log(this.customersx);
      });
    }
  };
}
