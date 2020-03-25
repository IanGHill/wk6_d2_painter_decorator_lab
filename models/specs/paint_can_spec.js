const assert = require('assert');
const PaintCan = require('../paint_can');

describe('PaintCan', function(){
    let paintCan;

    beforeEach(function(){
        paintCan = new PaintCan(10);
    });

    it('should return how many litres in can', function () {
        const actual = paintCan.volume;
        assert.strictEqual(actual, 10);
    });

    it('should be able to check if it is empty', function () {
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, false);
    });

    it('should be able to empty paint can', function () {
        paintCan.empty();
        const actual = paintCan.volume;
        assert.strictEqual(actual, 0);
    });

});