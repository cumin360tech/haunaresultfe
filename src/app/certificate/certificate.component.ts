import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jsPDF } from "jspdf";
import { font } from './font';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  name: string = '';
  @ViewChild('namediv', { static: false })
  namediv!: ElementRef;

  @ViewChild('content', { static: false })
  content!: ElementRef;

  @ViewChild('pname', { static: false })
  pname!: ElementRef;

  constructor(private route: ActivatedRoute, public renderer: Renderer2) { }

  type: string = 'old'

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: any) => {
      this.name = params.get('name')
      this.type = params.get('type')
    })
  }

  public SavePDF(name: string): void {
    let content = this.content.nativeElement;
    let doc = new jsPDF('l', 'mm', [150, 211]);
    let _elementHandlers =
    {
      '#editor': function (element: any, renderer: any) {
        return true;
      }
    };
    this.pname.nativeElement.style.left = '85%'
    console.log(content.innerHTML);
    doc.html(content.innerHTML, {
      callback: function (doc) {
        doc.save(`${name}`);
      },
      width: 135,
      windowWidth: 500
    })
    this.pname.nativeElement.style.left = '55%'
  }
}
