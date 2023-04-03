import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';

  changeColor(): string {
    switch (this.value) {
      case 'X':
        return 'purple';

      case 'O':
        return 'blue';

      default:
        return 'black';
    }
  }
}
