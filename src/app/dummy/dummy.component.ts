import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {

  @Input() childMessage: string | undefined;

}
