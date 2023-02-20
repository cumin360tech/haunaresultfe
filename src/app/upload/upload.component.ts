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
  response: any;
  password = '@growon.result'
  typedpassword = ''
  authenticated: Boolean = false;
  constructor(private apiService: HttpService) { }

  ngOnInit(): void {
  }

  check() {
    if (this.typedpassword === this.password) {
      this.authenticated = true
    } else {
      this.authenticated = false
    }
  }


  addFile(event: any) {
    this.formData.append('file', event.target.files[0])
  }

  upload() {
    this.apiService.upload(this.formData).subscribe((res: any) => {
      if (res.status == 200) {
        this.uploaded = true
        this.response = res.resultWeGot.insertedCount
        this.formData = new FormData()
      } else {
        this.uploaded = false
      }
    })
  }

  append() {
    this.apiService.append(this.formData).subscribe((res: any) => {
      if (res.status == 200) {
        console.log(res)
        this.uploaded = true
        this.response = res.resultWeGot.insertedCount
        this.formData = new FormData()
      } else {
        this.uploaded = false
      }
    })
  }

  upload2() {
    this.apiService.upload2(this.formData).subscribe((res: any) => {
      if (res.status == 200) {
        console.log(res)
        this.uploaded = true
        this.response = res.resultWeGot.insertedCount
        this.formData = new FormData()
      } else {
        this.uploaded = false
      }
    })
  }

  append2() {
    this.apiService.append2(this.formData).subscribe((res: any) => {
      if (res.status == 200) {
        this.uploaded = true
        this.response = res.resultWeGot.insertedCount
        this.formData = new FormData()
      } else {
        this.uploaded = false
      }
    })
  }
}
