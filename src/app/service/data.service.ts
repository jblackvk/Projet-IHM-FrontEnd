import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  texte: string;
  language = [
    {id: 1 , value : 'lang_fr' , name : 'Francais', selected : true},
    {id: 2 , value : 'lang_en' , name : 'English', selected : false},
    {id: 3 , value : 'lang_de' , name : 'Deutsch', selected : false},
    {id: 4 , value : 'lang_es' , name : 'Espanol', selected : false}
  ];
  constructor() { }
}
