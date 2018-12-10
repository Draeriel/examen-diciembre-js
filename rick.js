function Rick() {
    this.id = 'C-137';
    this.ondas = 'altas';
    this.habla = 'Es Rick-dículo!';
}

Rick.prototype.shot = function(weapon, currentLocation, newLocation, universe) {
    weapon.use(currentLocation, newLocation, universe);
}

exports.rickMaker = function() {
    return new Rick();
};