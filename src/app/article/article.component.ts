import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [DataService],
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

  public Data;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.Data = {
      url: this.Lien,
      text: this.Texte
    }

    this.dataService.SendData(this.Data).subscribe(
      response => {
        alert('envoir réussi')
      },
      error => console.log('error', error)
    );
  }


}
