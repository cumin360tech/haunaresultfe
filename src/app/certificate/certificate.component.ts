import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  name: string = '';
  @ViewChild('namediv', { static: false })
  namediv!: ElementRef;

  constructor(private route: ActivatedRoute, public renderer: Renderer2) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.name = params.get('name')
    })
  }
}
