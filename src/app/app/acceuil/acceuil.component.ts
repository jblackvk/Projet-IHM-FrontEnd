import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  texte: string;
  reponse;
  items: [];
  image = 'image1';
  lang: any = 'lang_fr';
  btn = document.getElementById('buttons');
  body = document.getElementsByTagName('body');

  language;
  getUrl() {
    return'src/app/search-page/image1.jpg';
  }

  changeLangue(e) {
    this.lang = e.target.value.substring(3, e.target.value.length);
    for (let i = 0; i < this.texteService.language.length; i++) {
      this.texteService.language[i].selected = false ;
    }
    this.texteService.language[e.target.value.substring(0, 1)].selected = true;
    console.log(this.lang);
  }
  constructor(
    private texteService: DataService,
    private router: Router) {}

  ngOnInit() {
    this.texte = this.texteService.texte;
    this.language = this.texteService.language;
  }

  valide() {
    this.router.navigate(['search']);
    this.texteService.texte = this.texte;
    console.log('texte envoye');
  }

}
