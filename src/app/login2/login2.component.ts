import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/http/http.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  form: FormGroup = new FormGroup({
    registernumber: new FormControl(''),
  });

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit(): void {
  }

  navigateResult() {
    if (this.form.value.registernumber !== '' && this.form.value.registernumber.length >= 5) {
      this.getResult(this.form.value.registernumber)
    } else {
      alert('Enter Valid Register Number')
    }
  }

  getResult(regNo: string) {
    this.http.getResults2(regNo).subscribe((res: any) => {
      let data = res.body.data
      console.log(length)
      if (data.Name) {
        this.router.navigate([`result2/${this.form.value.registernumber}`])
      } else {
        alert('No Records Found')
      }
    })
  }
}
