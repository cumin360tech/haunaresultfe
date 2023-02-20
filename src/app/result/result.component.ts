import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/http/http.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  registerNumber: any;
  data: any;
  constructor(private router: Router, private http: HttpService, private route: ActivatedRoute) {
    route.params.subscribe((params: any) => {
      console.log(params.id)
      this.registerNumber = params.id
    })
    this.getResult()
  }

  ngOnInit(): void {
  }

  getResult() {
    this.http.getResults(this.registerNumber).subscribe((res: any) => {
      this.data = res.body.data
      console.log(this.data)
      // this.data.PERCENTAGE = this.data.PERCENTAGE * 100
      this.data.Total_Percentage = this.data.Total_Percentage.toString().split('').slice(0, 5).join('')
      console.log(this.data.Total_Percentage)
    })
  }

  checkOther() {
    this.router.navigate(['/login'])
  }

  print() {
    let print: any = document.getElementById('main');
    // html2canvas(print).then(function (canvas) {

    //   var imgWidth = 210;
    //   var pageHeight = 290;

    //   var imgHeight = canvas.height * imgWidth / canvas.width;
    //   var heightLeft = imgHeight;


    //   var doc = new jsPDF('p', 'mm', 'a4');
    //   var position = 0;
    //   var pageData = canvas.toDataURL('image/jpeg', 1.0);
    //   var imgData = encodeURIComponent(pageData);
    //   doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //   doc.setLineWidth(5);
    //   doc.setDrawColor(255, 255, 255);
    //   doc.rect(0, 0, 210, 295);
    //   heightLeft -= pageHeight;

    //   while (heightLeft >= 0) {
    //     position = heightLeft - imgHeight;
    //     doc.addPage();
    //     doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //     doc.setLineWidth(5);
    //     doc.setDrawColor(255, 255, 255);
    //     doc.rect(0, 0, 210, 295);
    //     heightLeft -= pageHeight;
    //   }
    //   doc.save('file.pdf');

    // });

    html2canvas(print).then(canvas => {
      // Few necessary setting options

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'px', 'a4'); // A4 size page of PDF

      var width = pdf.internal.pageSize.getWidth();
      width = width + 10
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
      pdf.save('output.pdf'); // Generated PDF
    });
  }

  certificate(name: string) {
    this.router.navigate(['certificate', { name: name, type: 'old' }])
  }
}
