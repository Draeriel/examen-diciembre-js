function PortalGun() {
    this.historial = ['Tierra'];
}
PortalGun.prototype.use = function(currentLocation, newLocation, universe) {
    
}

function createGun() {
    
    const newGun = new PortalGun();

    return { 
        getGun :function getGun() {
            return newGun;
        }
    };
}

exports.portalGun = function() {
    return createGun();
};