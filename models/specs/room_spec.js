const assert = require('assert');
const Room = require('../room');

describe('Room', function(){
    let room;

    beforeEach(function(){
        room = new Room(100);
    });

    it('should have an area in sq metres', function () {
        const actual = room.area;
        assert.strictEqual(actual, 100);
    });

    it('should start not painted', function () {
        const actual = room.isPainted;
        assert.strictEqual(actual, false);
    });

    it('can be painted', function () {
        room.isPainted = true;
        const actual = room.isPainted;
        assert.strictEqual(actual, true);
    });

});