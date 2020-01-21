import { Component, OnInit, Input } from '@angular/core';
import { DataServices } from '../data.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [DataServices],
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

  public Data 

  constructor(private dataService: DataServices) {
    this.Data = {
      url: this.Lien,
      text: this.Texte
    }
  }

  ngOnInit() {
    console.log(this.Data)
    this.dataService.SendData(this.Data).subscribe(
      response => {
        alert('envoir réussi')
      },
      error => console.log('error', error)
    );
  }
}

