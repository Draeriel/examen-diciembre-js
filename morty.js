function Morty() {
    this.id = 'earthMorty';
    this.ondas = 'bajas';
    this.habla = 'Oohh man!';
}

Morty.prototype.setPartner = function(partner) {
    this.partner = partner;
}

exports.mortyMaker = function() {
    return new Morty();
}