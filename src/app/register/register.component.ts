import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm:any=FormGroup;

  constructor(private fb:FormBuilder,private authService:AuthService ,private router:Router,private toastr: ToastrService){
    this.myForm = this.fb.group({
    firstname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]],
    confirmedPassword: ['', Validators.required],
  });
}

submitForm(){
if(this.myForm.valid){
  console.log(this.myForm.value)
  if(this.myForm.password===this.myForm.confirmedPassword){
    this.authService.registerUser(this.myForm.value).subscribe(
      (res)=>{
      console.log("response",res)
      let data=res;
      console.log("data inserted",data)
      this.myForm.reset()
      this.toastr.success("Registration successfully")
      this.router.navigate([''])
    })
  }
  else{
   this.toastr.warning("Password does not matched")
  }
 }else{
  console.log('errorrr')
  this.toastr.warning("all fields is required")
 }
}
// showAlert() {
//   Swal.fire({
//     title: 'Success',
//     text: 'Password Does not matched!',
//     icon: 'info',
//     confirmButtonText: 'Ok',
//   });
// }
}
