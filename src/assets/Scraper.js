
Scraper = function (Lien) {
    const rp = require('request-promise');
    const $ = require('cheerio');
    let contenu;

    rp(Lien)
      .then(function(html){
        //success!
        console.log($('big > a', html).length);
        console.log($('big > a', html));
        let liste = $('big > a', html);
        let i = 0;
        let balise;

        while(liste[i].text().indexOf(this.Texte) && i<=liste.length){
          i = i+1;
        }

        balise = liste[i-1];
        
        contenu = balise.text();

      })
      .catch(function(err){
        //handle error
      });

      return contenu;
  }