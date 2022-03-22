import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categoryId: string;
  notes: Note[];
  wordToSearch: string;
  constructor() {}

  receiveCategory(categId: string) {
    this.categoryId = categId;
  }
  reciveInput(word: string) {
    // this.notes.find(
    //   (n) => n.title.includes(word) || n.description.includes(word)
    // );
    if (word == '') {
      word = undefined;
    }
    this.wordToSearch = word;
  }
  ngOnInit(): void {}
}
