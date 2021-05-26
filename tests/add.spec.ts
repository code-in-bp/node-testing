import 'mocha';
import {assert, expect} from 'chai'
import sinon from 'sinon';

var AdditionClass = require ('../src/additionClass');
var myAddition = new AdditionClass();

describe.skip("Test Addition", () => {
    it("Should return Pass - Happy Path", () => {
        expect(myAddition.add(10,10)).to.be.equal(20);
    });

    it("Should fail the test", () => {
        expect(myAddition.add(10,10)).to.not.equal(30);
    });


    it("Should mock sayHello method - happy path", () => {
        var mock = sinon.mock(myAddition);
        var expectation = mock.expects("sayHello");
        expectation.exactly(1);
        expectation.withArgs("hello")
        myAddition.callAnotherFn(10,20);
        mock.verify();
    });
})



describe("Test suite for Stub", () => {
    it("Should stub the add function - happy path", () => {
        var addStub = sinon.stub(myAddition, "add");
        addStub.withArgs(10,20).returns(100);   // we are assuming that the returns is 100 
        expect(myAddition.callAnotherFn(10,20)).to.be.equal(100);
        sinon.restore();
    });
});