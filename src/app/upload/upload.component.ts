import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/http/http.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  formData: FormData = new FormData();
  uploaded: Boolean = false;
  password = '@growon.result'
  typedpassword = ''
  authenticated: Boolean = false;
  constructor(private apiService: HttpService) { }

  ngOnInit(): void {
  }

  upload(event: any) {
    console.log(event)
    this.formData.append('file', event.target.files[0])
    this.apiService.upload(this.formData).subscribe((res: any) => {
      if (res.status == 200) {
        console.log(res)
        this.uploaded = true
      } else {
        this.uploaded = false
      }
    })
  }
  check() {
    if (this.typedpassword === this.password) {
      this.authenticated = true
    } else {
      this.authenticated = false
    }
  }
  upload2(event: any) {
    console.log(event)
    this.formData.append('file', event.target.files[0])
    this.apiService.upload2(this.formData).subscribe((res: any) => {
      if (res.status == 200) {
        console.log(res)
        this.uploaded = true
      } else {
        this.uploaded = false
      }
    })
  }

}
