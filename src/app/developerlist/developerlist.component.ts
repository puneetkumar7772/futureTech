import { Component,ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-developerlist',
  templateUrl: './developerlist.component.html',
  styleUrls: ['./developerlist.component.css']
})
export class DeveloperlistComponent {
  constructor(private authservice:AuthService, private router:Router,private cdr: ChangeDetectorRef,private toastr: ToastrService){}
  ngOnInit(){
    this.getAllDeveloper()
    this.getAllContact()
  }
  data:any=[]
  getAllDeveloper(){
    this.authservice.getDeveloper().subscribe((res)=>{
      console.log("2222222222",res)
      this.data=res;
      console.log("get all",this.data)
    })
  }

  viewProfile(id:any){
    this.router.navigate(['/developer/profileview',id] );
  }

  deleteDeveloper(id:any){
    console.log("22222",id)
    // this.showAlert()
    this.authservice.deleteDeveloperData(id).subscribe((res)=>{
      console.log(res)
      if(res){
         this.toastr.success("Developer deleted successfully")
        this.cdr.detectChanges()
      }
    })

  }
  // showAlert() {
  //   Swal.fire({
  //     title: 'Success',
  //     text: 'Confirmd Delete this Developer!',
  //     icon: 'info',
  //     confirmButtonText: 'Ok',
  //   });
  // }

  getAllContact(){
    this.authservice.getContactData().subscribe((res)=>{
      console.log("2222222222",res)
    })
  }
}
