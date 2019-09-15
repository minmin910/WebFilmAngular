import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { UserService } from "src/app/_core/services/user.service";
import { LocalStorageInfo } from "src/app/_share/localStorage/LocalStorageInfo";
import Swal from "sweetalert2";
import * as config from "src/app/_share/common/Config";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  //Reactive Form
  signInform = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$")
    ]),
    password: new FormControl("", Validators.required)
  });
  singnUpform = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$")
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(8)
    ])
  });
  // endReactiveForm

  //get f : convenience getter for ez access to form field, get value form singin n signup
  get f_up() {
    return this.singnUpform.controls;
  }
  get f_in() {
    return this.signInform.controls;
  }

  constructor(private UserService: UserService, private router: Router) {}
    // viewchild to close modal when signin success
    @ViewChild("closeModal", { static: false }) private closeModal: ElementRef;
    // get user in local storage
    user = null;
    subService: Subscription;
  ngOnInit() {}

  SingUp() {
    this.subService = this.UserService.signUpservice(
      this.f_up.username.value,
      this.f_up.password.value,
      this.f_up.email.value,
      this.f_up.phone.value,
      this.f_up.name.value,
    ).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error.error);
      }
    );
  }
  // SignIn event
  SingIn() {
    this.subService = this.UserService.login(
      this.f_in.username.value,
      this.f_in.password.value
    ).subscribe(
      data => {
        const token = data.accessToken;
        //save data in storage
        LocalStorageInfo.saveLoginData(data);
        //save token
        LocalStorageInfo.saveAccessToken(token);
        this.user = this.getDataLogin();
        //alert
        Swal.fire({
          position: "center",
          type: config.iconAlert.success,
          title: config.LoginAlert.success,
          showConfirmButton: false,
          timer: 1000
        });
        //close modalLogin when login success
        this.closeModal.nativeElement.click();
      },
      error => {
        console.log(error.error);
        Swal.fire({
          position: "center",
          type: config.iconAlert.fail,
          title: error.error,
          showConfirmButton: false,
          timer: 2000
        });
      }
    );
  }
  SignOut() {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to log out?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log Out!"
    }).then(result => {
      if (result.value) {
        // log out and remove data from local storage
        LocalStorageInfo.deleteLoginData();
        LocalStorageInfo.deleteAccessToken();
        this.user = null;
        // this.router.navigate(["/"]);
      }
    });
  }
  //get data login to show info user
  getDataLogin() {
    const userInput = LocalStorageInfo.getLoginData();
    if (userInput !== null) {
      return userInput;
    } else {
      return null;
    }
  }
  onResetform() {
    this.singnUpform.reset();
  }
  
  ngAfterViewInit() {}
  ngOnDestroy(){
    this.subService.unsubscribe();
    
  }
}
