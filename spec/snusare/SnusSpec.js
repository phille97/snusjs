'use strict'


describe("Snus", function() {
    var Snus = require('../../lib/Snus')
    var snus;
    

    beforeEach(function() {
        snus = new Snus()
    })
    

    it("sentences should all be valid String", function(){
        snus.sentences.forEach(function(gothenburg){
            expect(gothenburg).toEqual(jasmine.any(String))
        })
    })

    it("snusning", function(){
        for(var i=0; i < 20; i++) {
            let suns = snus.getRandomSentence()
            expect(suns).toEqual(jasmine.any(String))
            expect(snus.sentences).toContain(suns)
        }
    })

    it("to console.log", function(){
        console.log = jasmine.createSpy("log");

        snus.taensnus()

        expect(console.log).toHaveBeenCalledWith(jasmine.any(String));
        expect(snus.sentences).toContain(console.log.calls.argsFor(0)[0])
    })

    it("nujävlar händer det bastu räksmörgås (Expect infinite loop)", function(){
        let exited = false

        setTimeout(function(){
            snus.nujävlar()
            exited = true
        }, 0)

        // Sleep 1000ms
        let start = new Date().getTime(), expire = start + 1000
        while (new Date().getTime() < expire) {  }
        
        expect(exited).toBe(false);
    })

})

