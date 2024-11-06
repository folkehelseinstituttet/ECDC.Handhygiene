import {Component, Input, OnInit} from '@angular/core';
import {Sesjon} from '../../models/api/Sesjon';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-sesjonsredigering-overskrift',
  templateUrl: './sesjonsredigering-overskrift.component.html'
})
export class SesjonsredigeringOverskriftComponent implements OnInit {

  faClipboard = faClipboard;
  faCircle = faCircle;

  @Input() sesjon: Sesjon<any>;
  @Input() sesjontype: string;
  @Input() sesjonErSendtTilServer: boolean;
  @Input() overskrift: string;
  constructor() { }

  ngOnInit(): void {
  }
}
