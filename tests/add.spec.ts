import 'mocha';
import {assert, expect} from 'chai'
import sinon from 'sinon';

var AdditionClass = require ('../src/additionClass');
var myAddition = new AdditionClass();

describe("Test Addition", () => {
    it("Should return Pass - Happy Path", () => {
        expect(myAddition.add(10,10)).to.be.equal(20);
    });

    it("Should fail the test", () => {
        expect(myAddition.add(10,10)).to.not.equal(30);
    });








})