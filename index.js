
module.exports = {
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

    taensnus: function() {
        console.log(this.getRandomSentence());
    },

    nujävlar: function() {
        while(true) {
            this.taensnus();
        }
    }
};
