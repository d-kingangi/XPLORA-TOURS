import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoweare',
  standalone: true,
  imports: [],
  templateUrl: './whoweare.component.html',
  styleUrl: './whoweare.component.css'
})
export class WhoweareComponent{
  @Input() whoweare-title!: string
  @Input() whoweare-sub!: string

}
