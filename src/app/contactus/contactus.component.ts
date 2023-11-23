import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
constructor(private fb:FormBuilder,private authservice:AuthService,private toastr: ToastrService){}
contactForm:any=FormGroup
contactData:any=[]
ngOnInit(){
this.contactForm=this.fb.group({
  name:['',Validators.required],
  email:['',Validators.required],
  phonenumber:['',Validators.required],
  aboutyourself:['',Validators.required],
})
}

addContactDetails(){
 const data=this.contactForm.value
 console.log("first,",data)
 if(this.contactForm.valid){
    this.authservice.contactData(data).subscribe((res)=>{
     console.log("second",res)
     this.contactData=res
     console.log("third",this.contactData)
    if(res){
    console.log("contact add ")
    this.toastr.success("Contact added successfully");
    this.contactForm.reset()
   }else{
     this.toastr.warning("Contact is not saved")
  }
})
 }else{
  this.toastr.warning("All filds is required")
 }
}
}
