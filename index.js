
module.exports = {
    sentences: [
         'Snusar du?',
         'Gillar du fotboll?',
         'Andreas Chlon är professionell',
         'Andreas Approves',
         'Why do you not like football?',
         'Do you hate me right now?',
         'Snus ä gött de',
         'AIK AIK SPARKA BÖLL GAIS',
         'Göteborgs Rapé',
         'Gula blends under köksfläkten',
         'Kråkan snusar inte i trädet som det står',
         'Faster gustaf håller inte i bordsben om han inte måste',
         'Det var en väl komponerad maträtt! Gå och släng den nu',
         'Du kan väl inte tro att man kan gå runt och kalla folk för racister?',
         'Column =80 is Good   Column',
         'Column >80 is Bad    Column',
         'Column <80 is Better Column',
         'camelToeIsBestStandard',
         'underscore_tactics_is_best_tactics',
         'tactics was the Mozart of its time',
         'ticstac was Mozart',
         'tic-tacs was not Mozart',
         'Moster Eva äter ananassås till kyckling på eftermiddagen',
         'Ananassås är bästa sås',
         'Jag gillar inte ananas',
         'Rotfrukter är nyttigt',
         'Det vetenskapliga arbetet gynnar världsomfundet på sikt',
         'Hur börjar man?',
         'Vad är de största skillnaderna på resultat mellan mönsterbaserad inlärning och inlärning baserad på en genetiskalgoritm?',
         'Maskininärning är rena plågan när man skalar potatis med karlsson',
         'Är du inte rädd för att leva så här?',
         'Snus.js är bästa JS',
         'Svengelska är best Swenglidish',
         '1983 så gick Alfred von Övferheed över gatan. Sen gick han och satte sig igen',
         'Du letar men hittar aldrig svaret!',
         'Torktummlaren tömmer inte sig själv!',
         'Dock så gör tvättmaskinen det ;)',
         `Det är den ${(new Date()).getDate()} denna månaden`,
         'Varför äter katten smör från diskbänken?',
         'Abraham levde det goda livet',
         'Sverker gillar inte när man bara håller på och slevar doppelmannen'
    ],

    getRandomSentence: function() {
        return this.sentences[
            Math.floor(
                Math.random() * ( this.sentences.length - 1 )
           )
        ];
    },

    taensnus: function() {
        console.log(this.getRandomSentence());
    },

    nujävlar: function() {
        while(true) {
            this.taensnus();
        }
    }
};
