import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:any=FormGroup
  constructor(private fb:FormBuilder, private authservice:AuthService,private router:Router,private toastr: ToastrService){}
  ngOnInit(){
    this.loginForm= this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  loginUser(){
    console.log("nvfbd",this.loginForm.value)
    this.authservice.loginUser(this.loginForm.value).subscribe((res)=>{
      console.log(res)
      if(res){
        this.toastr.success("Login successfully")
        this.router.navigate(['/home'])
      }else{
      this.toastr.warning("Invalid user")
      }
    })
  }
}
