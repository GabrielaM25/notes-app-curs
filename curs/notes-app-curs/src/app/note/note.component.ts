import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit ,OnChanges {
  @Input() selectedCategoryId: string;

notes: Note[] ;
  constructor ( private noteService: NoteService ) { }

  ngOnInit(): void {
   this.noteService.getNotes().subscribe((note : Note[]) => {this.notes = note});
  }
  ngOnChanges(changes: SimpleChanges): void {
     this.noteService.getFiltredNotes(this.selectedCategoryId).subscribe((note : Note[]) => {this.notes = note});
     
  }
  deleteNote(id :string){
    const note = this.notes.find(x => x.id === id);
    this.noteService.deleteNote(id).subscribe(() => this.notes = this.notes.filter(x => x.id !== id));
    
  }
  // ngOnInit(): void {
  //   this.noteService.serviceCall();
  //   this.notes= this.noteService.getNotes();
  // }
  // ngOnChanges(): void {
  //   if (this.selectedCategoryId) {
  //     this.notes = this.noteService.getFiltredNotes(this.selectedCategoryId);
  //   }

  // }
}
