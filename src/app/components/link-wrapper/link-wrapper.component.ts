import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-wrapper',
  templateUrl: './link-wrapper.component.html',
  styleUrls: ['./link-wrapper.component.css']
})
export class LinkWrapperComponent implements OnInit {


  @Input()
  unos!: string;
  ngOnInit(): void {

  }

}


