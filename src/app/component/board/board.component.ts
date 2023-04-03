
import { Component } from '@angular/core';
import { fadeAnimation, slideAnimation } from 'src/animation';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  squares!: any[];
  squares2!: any[];
  xIsNext!: boolean;
  winner!: string;
  aiPlayer!: { enabled: boolean; difficulty: number };
  matchStart = false;

  newGame(aiPlayerEnabled: boolean, aiDifficulty?: number): void {
    this.matchStart = true;
    this.squares = Array(9).fill(null);
    this.squares2 = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
    this.aiPlayer = {
      enabled: aiPlayerEnabled ? aiPlayerEnabled : false,
      difficulty: aiDifficulty ? aiDifficulty : 1,
    };
  }

  get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

   makeMove(idx: number): void {
    if (!this.squares[idx] && !this.winner) {
      this.squares[idx] = this.player;
      this.winner = this.checkWinner(this.squares);
      if (this.aiPlayer?.enabled && !this.winner) {
        this.squares[this.aiMove(this.aiPlayer?.difficulty)] = 'O';
      } else {
        this.xIsNext = !this.xIsNext;
      }
    }
    this.winner = this.checkWinner(this.squares);
  } 

  
  aiMove(aiPlayerDifficulty: number): number {
    const persons: { idDifficulty: number; difficultyChance: number }[] = [
      { idDifficulty: 1, difficultyChance: 85 }, 
      { idDifficulty: 2, difficultyChance: 50 },
      { idDifficulty: 3, difficultyChance: 20 },
      { idDifficulty: 4, difficultyChance: 1 }, 
    ];
    const board = this.squares;
    let idxMove: number = 0;
    let bestScore = -Infinity;
    board.forEach((element, index) => {
      if (element === null) {
        board[index] = 'O';
        let score = this.minimax(board, false);
        board[index] = null;
        if (score > bestScore) {
          let min = Math.ceil(1);
          let max = Math.floor(100);
          let random = Math.floor(Math.random() * (max - min) + min);
          if (random <= persons[aiPlayerDifficulty]?.difficultyChance) {
            score += random % 2 === 0 ? 10 : -10;
          }
          bestScore = score;
          idxMove = index;
        }
      }
    });

    return idxMove;
  }

  checkWinner(board: any[]): any {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let filled: number = 0;
    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    board.forEach((element) => {
      filled += element ? 1 : 0;
    });
    return filled >= 9 ? 'tie' : null;
  }

  minimax(board: any[], isMaximizing: boolean, depth: number = 0): number {
    const scores = { X: -10, O: 10, tie: 0 };
    const result: keyof typeof scores = this.checkWinner(board);
    if (result !== null) {
      return scores[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;

      board.forEach((element, index) => {
        if (element === null) {
          board[index] = 'O';
          let score = this.minimax(board, false, depth + 1);
          board[index] = null;
          bestScore = Math.max(score, bestScore);
        }
      });
      return bestScore;
    } else {
      let bestScore = Infinity;
      board.forEach((element, index) => {
        if (element === null) {
          board[index] = 'X';
          let score = this.minimax(board, true, depth + 1);
          board[index] = null;
          bestScore = Math.min(score, bestScore);
        }
      });
      return bestScore;
    }
  }
}
