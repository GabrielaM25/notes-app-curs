import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Category } from '../category';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() emitSelectedFilter = new EventEmitter<string>();
  @Output() emitWordSearch = new EventEmitter<string>();
  categories: Category[] = [
    { name: 'To Do', id: '1' },
    { name: 'Done', id: '2' },
    { name: 'Doing', id: '3' },
  ];
  wordToSearch:string = '';
  constructor(private filtersService: FilterService) {}

  selectFilter(categoryId: string) {
    this.emitSelectedFilter.emit(categoryId);
    console.log(categoryId);
  }

  search(){
      this.emitWordSearch.emit(this.wordToSearch);
     
  }

  ngOnInit() {
    this.categories = this.filtersService.getCategories();
  }
}
