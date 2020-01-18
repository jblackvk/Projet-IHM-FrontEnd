import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  texte = '';
  texteSearch: string;
  Lien: string;
  Titre: string;
  reponse;
  items: [];
  lang: any = 'lang_fr';
  vue = false;
  btn = document.getElementById('buttons');
  body = document.getElementsByTagName('body');
  jresp = [];
  url = [];

  language;

  constructor(private texteService: DataService) {
    this.texte = this.texteService.texte;
    this.language = this.texteService.language;
    if (this.texte !== '') {
      this.valide();
    }
  }

  changeLangue(e) {
    this.lang = e.target.value.substring(3, e.target.value.length);
    console.log(this.lang);
  }

  valide() {
    // for (let i = 1; i <= 41; i = i + 10) {
    const xhttp = new XMLHttpRequest();
    const url = 'https:\/\/www.googleapis.com\/customsearch\/v1' +
      '?key=' + 'AIzaSyB7cgGIKaS2yoaX3I0DUvlznjSZI3UIyos' + '&cx=' + '012208273607834236446:j9rajflm42w' + '&q=' + this.texte +
      '&lr=' + this.lang + '&filetype:html';
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        console.log('envoie de la requette');
        this.reponse = JSON.parse(xhttp.responseText);
        this.items = this.reponse.items;
        for (const j of this.items) {
          // @ts-ignore
          this.url.push(j.link);
        }
      }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
    // }
    console.log(this.jresp);
    console.log(this.url);
  }

  ngOnInit() {
  }

}
