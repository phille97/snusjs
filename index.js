
var Snus = {

    sentences: [
         'SNUS',
         'Snusar du?',
         'Gillar du fotboll?',
         'PETER',
         'dot',
         'net',
         'Andreas Chlon är professionell',
         'Andreas Approves',
         'Why do you not like football?',
         'Do you hate me right now?',
         'Snus ä gött de',
         'AIKAIK SPARKA BÖLL GAIS'
    ],

    getRandomSentence: function() {
        return this.sentences[
            Math.floor(
                Math.random() * ( this.sentences.length - 1 )
           )
        ];
    },

    do: function() {
        console.log(this.getRandomSentence());
    },

    say: Snus.do,
    sayit: Snus.do,
    snusa: Snus.do,
    taensnus: Snus.do,

    nujävlar: function() {
        while(true) {
            this.sayit();
        }
    }

}
