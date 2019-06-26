import { Component, OnInit } from "@angular/core";
import { SpringCustomerHttpService } from "../spring-customer-http.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ok } from "assert";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"]
})
export class UpdateComponent implements OnInit {
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

  ngOnInit() {
    this.id = this.ActivatedRoute.snapshot.params["id"];

    console.log(this.id);
    this.service.getSingleCustomer(this.id).subscribe(res => {
      this.data = res;

      this.firstName = this.data.firstName;
      this.lastName = this.data.lastName;
      this.email = this.data.email;
      console.log(this.firstName);
      console.log(this.lastName);
      console.log(this.email);
    });
  }
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

      this.service.updateCustomer(data, this.id).subscribe(response => {
        this.router.navigate(["/customer"]);
      });
    }
  };
}
