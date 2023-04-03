
import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
 
})
export class GameViewComponent implements OnInit {
  @ViewChild(BoardComponent) board!: BoardComponent;

  ngOnInit(): void {}
  
  newGame(player: boolean): void {
    this.board.newGame(player);
  }
}
