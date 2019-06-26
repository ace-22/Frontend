import { Component, OnInit } from "@angular/core";
import { SpringCustomerHttpService } from "../spring-customer-http.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ok } from "assert";

@Component({
  selector: "app-add-customer",
  templateUrl: "./add-customer.component.html",
  styleUrls: ["./add-customer.component.css"]
})
export class AddCustomerComponent implements OnInit {
  public firstName;
  public lastName;
  public email;
  public id;

  public data;
  constructor(
    public service: SpringCustomerHttpService,
    public router: Router,
    public toastr: ToastrService,
    public ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  public validate = () => {
    if (!this.firstName) {
      this.toastr.warning("Enter First Name");
    } else if (!this.lastName) {
      this.toastr.warning("Enter Last Name");
    } else if (!this.email) {
      this.toastr.warning("Enter email");
    } else {
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      };
      console.log(data);
      this.service.addCustomer(data).subscribe(response => {
        this.router.navigate(["/customer"]);
      });
    }
  };
}
