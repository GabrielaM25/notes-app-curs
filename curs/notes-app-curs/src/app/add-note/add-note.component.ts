import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { FilterService } from '../filter.service';
import { Note } from '../note';
import { NoteService } from '../services/note.service';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  noteTitle: string;
  noteDescription: string;
  categories: Category[];
  selectedCategoryId: string;
  

//for reactive form
  // noteId :string;
//form: FormGroup;
  // submitted: false;

  constructor(private noteService: NoteService,
     private filterService: FilterService,
     private router: Router,
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,) {
  }

  ngOnInit() {
    this.categories = this.filterService.getCategories();
        // this.form = this.formBuilder.group({
        //   title: ['', Validators.required],
        //   description: [''],
        //   category: ['', Validators.required],

      // };

     


  }
  // get titleForm() { return this.form.get('title'); }

  // get descriptionForm() { return this.form.get('description'); }

  // get categoryForm() { return this.form.get('category'); }

  addNote(){
    const note :Note={
      title : this.noteTitle,
      description : this.noteDescription,
      categoryId : this.selectedCategoryId
    };
    this.noteService.addNote(note).subscribe();
    this.router.navigate(['']);

  }
}
  // onSubmit(){

  // }

 
  // https://stackblitz.com/edit/angular-master-details-crud-example?file=src%2Fapp%2Fusers%2Fadd-edit.component.ts
  // addNote(){
  //   let noteToAdd: Note = {
  //     id: Math.random().toString(36).substring(7),
  //     title: this.noteTitle,
  //     description: this.noteDescription,
  //     categoryId: this.selectedCategoryId,
  //   }

  //   //this.noteService.addNote(noteToAdd);

  //   this.router.navigate(['']);
  // }


//   note = { title: '', description: ' '};
//   noteForm= new FormGroup({});
  
//   // title:string="";
  
//   // description:string="";

//   constructor() { }
//   onSubmit(){
//     console.warn(this.noteForm.value);
//   }

//   ngOnInit(): void {
//     this.noteForm = new FormGroup({
//       title: new FormControl(this.note.title, 
//         [Validators.required]),
//      description: new FormControl(this.note.description, Validators.required)
//     })
    
   
//   }
//   get title() { return this.noteForm.get('title'); };
//   get description() { return this.noteForm.get('description'); }
// }
