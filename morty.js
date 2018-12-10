function Morty() {
    this.id = 'earthMorty';
    this.ondas = 'bajas';
    this.habla = 'Oohh man!';
}

Morty.prototype.setPartner = function(partner) {
    this.partner = partner;
}

function createMorty() {
    
    const newMorty = new Morty();

    return { 
        getMorty :function getMorty() {
            return newMorty;
        }
    };
}

exports.mortyMaker = function() {
    return createMorty();
}