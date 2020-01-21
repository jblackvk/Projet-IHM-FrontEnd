import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit { 
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

  language ;
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
    const xhttp = new XMLHttpRequest();
    const url = 'https:\/\/www.googleapis.com\/customsearch\/v1' +
      '?key=AIzaSyBlj6rJpK5Tg3wI-9tKNYjjIRf82_d5MIo&cx=015932702286198262888:en5lee8zbfd&q=' + this.texte +
      '&lr=' + this.lang + '&filetype:html&start=21';
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        console.log('envoie de la requette');
        this.reponse = JSON.parse(xhttp.responseText);
        this.items = this.reponse.items;

        console.log('reponse recu');
        console.log('fin affichage composant');
      }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  }

  ngOnInit() {
  }

}
