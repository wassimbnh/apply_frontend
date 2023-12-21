import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-grid',
  templateUrl: './side-grid.component.html',
  styleUrl: './side-grid.component.css'
})
export class SideGridComponent {


  @Input() text: string = '';

}
