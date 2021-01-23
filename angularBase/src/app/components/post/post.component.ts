import { Component, Input, OnInit, Output } from '@angular/core';
import {Post} from '../../../models/Post';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:Post;

  @Output()
  bubblePostUp = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }
  getPostInfo(post:Post):void{
    this.bubblePostUp.emit(post);

  }

}