import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-view',
  templateUrl: './top-view.component.html',
  styleUrls: ['./top-view.component.scss'],
})
export class TopViewComponent implements OnInit {
  data = [
    { id: 1, date: Date.now(), winner: 'winner is x' },
    { id: 2, date: Date.now(), winner: 'winner is x' },
    { id: 3, date: Date.now(), winner: 'winner is o' },
    { id: 4, date: Date.now(), winner: 'winner is x' },
    { id: 5, date: Date.now(), winner: 'winner is o' },
    { id: 6, date: Date.now(), winner: 'winner is x' },
  ];
  
  ngOnInit(): void {}
}
