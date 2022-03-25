import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';
import { FilterService } from '../filter.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() emitSelectedFilter = new EventEmitter<string>();
  @Output() emitWordSearch = new EventEmitter<string>();

  categories: Category[] = [];
  wordToSearch: string = '';

  constructor(private filtersService: FilterService) {}

  selectFilter(categoryId: string) {
    this.emitSelectedFilter.emit(categoryId);
    console.log(categoryId);
  }

  search() {
    this.emitWordSearch.emit(this.wordToSearch);
  }

  ngOnInit() {
    this.categories = this.filtersService.getCategories();
  }
}
