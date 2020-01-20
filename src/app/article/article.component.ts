import { Component, OnInit, Input } from '@angular/core';
import {ScraperModule} from '../scraper/scraper.module';

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

  constructor(private scrap: ScraperModule) { }

  ngOnInit() {
    this.Scraping();
  }

  Scraping(){
    this.scrap.Scraper(this.Lien, this.Texte);
  }
}
