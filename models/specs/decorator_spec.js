const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can');
const Room = require('../room');

describe('Decorator', function(){
    let decorator;
    let paintCan;

    beforeEach(function(){
        decorator = new Decorator();
        paintCan  = new PaintCan(10);
        room1 = new Room(5);
        room2 = new Room(11);
    });

    it('should start with an empty paint stock', function(){
        const actual = decorator.countPaintStock();
        assert.strictEqual(actual, 0);
    });

    it('should be able to add a can of paint', function(){
        decorator.addPaintCan(paintCan);
        const actual = decorator.countPaintStock();
        assert.strictEqual(actual, 1);
    });

    it('should be able to count total litres in stock', function(){
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan);
        const actual = decorator.countTotalLitres();
        assert.strictEqual(actual, 20);
    });

    it('should be able to calculate if has enough paint to paint room - true', function(){
        decorator.addPaintCan(paintCan);
        const actual = decorator.calculateIfEnoughPaint(room1);
        assert.strictEqual(actual, true);
    });

    it('should be able to calculate if has enough paint to paint room - false', function(){
        decorator.addPaintCan(paintCan);
        const actual = decorator.calculateIfEnoughPaint(room2);
        assert.strictEqual(actual, false);
    });

    it('should be possible to paint a room if there is enough paint - enough', function(){
        decorator.addPaintCan(paintCan);
        decorator.paintRoom(room1);
        const actual = room1.isPainted;
        assert.strictEqual(actual, true);
    });
    
    it('should be possible to paint a room if there is enough paint - not enough', function(){
        decorator.addPaintCan(paintCan);
        decorator.paintRoom(room2);
        const actual = room2.isPainted;
        assert.strictEqual(actual, false);
    });
})