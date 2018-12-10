function Jerry() {
    this.id = 'Jerry';
    this.monedas = ["R2-D2","R2-D2","R2-D2","R2-D2"];
    this.habla = "Tengo una colección de monedas antiguas raras!"
}
Jerry.prototype.speak = function() {
    return this.habla;
}
Jerry.prototype.getMonedas = function() {
    return this.monedas;
}

function createJerry() {
    
    const newJerry = new Jerry();

    return { 
        getJerry :function getJerry() {
            return newJerry;
        }
    };
}

exports.jerryMaker = function() {
    return createJerry();
};
