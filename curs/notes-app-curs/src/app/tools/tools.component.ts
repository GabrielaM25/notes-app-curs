import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
 title:string= "Add note";
  titleColor:string = "pink";
 noteContent:string="";
  showTitle:string;
  constructor() { }

  ngOnInit(): void {
  }
  // setTitle(){
  //   // this.noteContent="dupa apasarea butonului"
  //   // this.titleColor="green";
  //   this.shownTitle= this.title;
  // }
}
