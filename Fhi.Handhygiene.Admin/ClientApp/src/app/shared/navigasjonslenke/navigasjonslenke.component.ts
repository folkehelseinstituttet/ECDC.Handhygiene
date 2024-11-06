import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-navigasjonslenke',
  templateUrl: './navigasjonslenke.component.html',
})
export class NavigasjonslenkeComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  @Output('lenkeKlikket') lenkeKlikket = new EventEmitter<any>();


  constructor() {

  }

  ngOnInit(): void {
  }

}
