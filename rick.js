function Rick() {
    this.id = 'C-137';
    this.ondas = 'altas';
    this.habla = 'Es Rick-dículo!';
}

function createRick() {
    
    const newRick = new Rick();

    return { 
        getRick :function getRick() {
            return newRick;
        }
    };
}

exports.rickMaker = function() {
    return createRick();
};