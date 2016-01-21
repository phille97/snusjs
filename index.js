
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
         'Varför äter katten smör från diskbänken?',
         'Abraham levde det goda livet',
         'Sverker gillar inte när man bara håller på och slevar doppelmannen',
         'Dom som går i Slytherin är fags',
         'DLG EKONOMI',
         'DLG Cider',
         'Mörkret tar övermig när farmor Eva spelar flöjt i dagsljus',
         'För varje äpple som faller från ett träd, så förlorar en bebis sin näbb',
         'Mattematik är grunden till en bättre Gås',
         'Till den som vill testa grejer som de kanske tycker är bra sen',
         'Nationalencyclopsedin Nationalencyclopsedin Nationalencyclopsedin',
         'Bara Vara Klara I Vara Som En Vara I Vara',
         'Var god svara på min frågeställning där Sverker fanns i omloppsbana runt Merkurius',
         'Dela vår reklamfilm, den må vara dålig, men ack så bra den äro!!!',
         'Till dagens ära så varo min glasögon stolsryggs måne blå vid din åsyn',
         'Fredrik äter Semlor till frukost',
         'Den som tar fast förbrytaren får en torr kanelbulle',
         '8 * 4 = 12  SÅ DET SÅ',
         'Mattematiskt inkorrekt domstolsbeslut',
         'Mattematiskt korrekt glassföretag'
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
