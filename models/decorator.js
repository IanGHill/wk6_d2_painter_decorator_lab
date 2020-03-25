const Decorator = function () {
    this.paintStock = [];
};


Decorator.prototype.countPaintStock = function(){
    return this.paintStock.length;
}

Decorator.prototype.addPaintCan = function(can){
    this.paintStock.push(can);
}

Decorator.prototype.countTotalLitres = function(){
    let totalLitres = 0;

    // for (const paintCan in this.paintStock) {
    //     totalLitres += this.paintStock[paintCan].volume;
    // }
    
    this.paintStock.forEach(paintCan => {
        totalLitres += paintCan.volume;
    });

    return totalLitres;
}

Decorator.prototype.calculateIfEnoughPaint = function(room){
    let totalLitres = this.countTotalLitres();
    if (totalLitres >= room.area){
        return true;
    } else {
        return false;
    }
}

Decorator.prototype.paintRoom = function(room){
    let hasEnoughPaint = this.calculateIfEnoughPaint(room);
    if (hasEnoughPaint){
        room.isPainted = true;
    } 
}
module.exports = Decorator;

