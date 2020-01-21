import { Component, OnInit, Input } from '@angular/core';

declare var Scraper;


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

  public contenu; texte;

  constructor() { }

  ngOnInit() {
    Scraper(this.Lien, this.Texte);
  }
}
