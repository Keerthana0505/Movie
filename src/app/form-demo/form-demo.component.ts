import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent {
nameForm=new FormGroup({
  username:new FormControl('Abi',Validators.required)
});
onSubmit(){
  console.log(this.nameForm.get('username'));
  if(this.nameForm.invalid){
    console.log('Try Again',this.nameForm.errors);
  }
}
}
