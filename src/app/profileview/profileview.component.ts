import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent {
  data:[] = [];

constructor(private authservice:AuthService,private router:ActivatedRoute){}
userId:any
ngOnInit(){
  this.router.paramMap.subscribe((params) => {
    const id = params.get('id');
    console.log("sdtfyguhj",id)
    this.authservice.viewDeveloperProfile(id).subscribe((res)=>{
      console.log(res)
   this.data=res
   console.log(this.data)
    })
  });
}
}
