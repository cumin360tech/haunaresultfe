import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    registernumber: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router:Router) {

  }

  login() {
    console.log(this.form)
    this.router.navigate(['result'])
  }

}
