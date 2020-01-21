
function Scraper (lien, texte) {

    console.log('1')

    import * as rp from 'request-promise';
    import * as $ from 'cheerio';

    let contenu;

    

    rp(lien)
      .then(function(html){
        //success!
        console.log(2)
        console.log($('big > div', html).length);
        console.log($('big > div', html));
        let liste = $('big > div', html);
        let i = 0;
        let balise;

        while(liste[i].text().indexOf(texte) && i<=liste.length){
          i = i+1;
        }

        balise = liste[i-1];
        
        contenu = balise.text();
        console.log(contenu);

      })
      .catch(function(err){
        //handle error
        console.log("erreur bro ahhahahahahahaha");
      });

      return contenu;
  }