import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  @Input()
  Title: string;
  @Input()
  Lien: string;
  @Input()
  Texte: string;
  @Input()
  Site
  constructor() { }

  ngOnInit() {
  }

}
