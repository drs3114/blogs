import { Component, OnInit } from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {
  LEFT = faArrowLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
