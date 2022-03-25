import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { FilterService } from '../filter.service';
import { Note } from '../note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  title: string;
  description: string;
  category: string;
  formGroup: FormGroup;
  categories: Category[];
  parameterValue: string;
  constructor(
    private noteService: NoteService,
    private filterService: FilterService,
    private _activationRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._activationRoute.params.subscribe((parameter) => {
      this.parameterValue = this._activationRoute.snapshot.paramMap.get('id');
      this.noteService.getById(this.parameterValue).subscribe((note: Note) => {
        this.title = note.title;
        this.description = note.description;
        this.category = note.categoryId;
        this.formGroup = new FormGroup({
          title: new FormControl(this.title, [Validators.required]),
          description: new FormControl(this.description),
          category: new FormControl(this.category, [Validators.required]),
        });
      });
    });

    this.categories = this.filterService.getCategories();
  }
  get titleForm() {
    return this.formGroup.get('title');
  }

  get descriptionForm() {
    return this.formGroup.get('description');
  }

  get categoryForm() {
    return this.formGroup.get('category');
  }

  editNote() {
    const note: Note = {
      id: this.parameterValue,
      title: this.title,
      description: this.description,
      categoryId: this.category,
    };
    this.noteService.editNote(note).subscribe();
    this.router.navigate(['']);
  }
}
