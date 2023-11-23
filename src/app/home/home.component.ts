import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
developerForm:any=FormGroup;
data:any=[]
constructor(private fb:FormBuilder ,private authservice:AuthService,private toastr: ToastrService){
}
ngOnInit(){
  this.developerForm=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    phonenumber:['',Validators.required],
    experience:['',Validators.required],
    currentcompany:['',Validators.required],
    priviouscompany:['',Validators.required],
    profile:['',Validators.required],
    description:['',Validators.required],
  })
}

submitDeveloperData(){
  console.log("datatatagg")
  if(this.developerForm.valid){
    console.log('developer data',this.developerForm.value)
    this.authservice.addDeveloper(this.developerForm.value).subscribe((res)=>{
      console.log("responce",res)
      let value=res;
      console.log("1111111111",value)
      this.developerForm.reset()
      this.toastr.success("Developer added successfully")
      // this.showAlert()
    })
  }
}

// showAlert() {
//   Swal.fire({
//     title: 'Success',
//     text: 'Developer add successfully!',
//     icon: 'info',
//     confirmButtonText: 'Ok',
//   });
// }

}

