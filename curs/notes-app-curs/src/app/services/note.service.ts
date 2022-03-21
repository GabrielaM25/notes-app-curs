import { Injectable } from '@angular/core';
import { Note } from '../note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  // notes: Note[] = [
  //   {
  //     id: "Id1",
  //     title: "First note",
  //     description: "This is the description for the first note",
  //     categoryId: "1"
  //   },
  //   {
  //     id: "Id2",
  //     title: "Second note",
  //     description: "This is the description for the second note",
  //     categoryId: "2"
  //   },
  //   {
  //     id: "Id3",
  //     title: "Third note",
  //     description: "This is the description for the third note",
  //     categoryId: "3"
  //   }
  // ];

  readonly baseUrl = 'https://localhost:4200';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(
      this.baseUrl + '/notes',
      this.httpOptions
    );
  }
  getFiltredNotes(categId: string): Observable<Note[]> {
    return this.httpClient
      .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
      .pipe(
        map((notes) => notes.filter((note) => note.categoryId === categId))
      );
  }
  addNote(note: Note) {
    return this.httpClient.post(this.baseUrl + '/note', note, this.httpOptions);
  }
  deleteNote(id: string){
     return this.httpClient.delete(this.baseUrl+'/note/{id}' ,this.httpOptions)

  }
  getById(id: string) {
    return this.httpClient.get<Note>(this.baseUrl+'/note/{id}');
}

  //   serviceCall() {
  //     console.log(this.notes[1]);
  //   }
  //   getNotes(){
  //     return this.notes;
  //   }
  //   addNote(note: Note){
  //     this.notes.push(note);
  // }
  // getFiltredNotes(categoryId: string){
  //   return this.notes.filter(nota => nota.categoryId == categoryId)
  // }
}
