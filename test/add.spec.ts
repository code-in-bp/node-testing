import { assert } from 'chai'
import { createSandbox, SinonSandbox, SinonStub } from 'sinon';
import { addNumbers } from '../src/addFunc';

// import { add } from '../src/addFunc';
import { DocumentRepository } from '../src/repositories/document.repository';


describe("Getting started - Test Addition", () => {
    let sandbox: SinonSandbox;
    let nextStub: SinonStub;
    let addFunctionStub: SinonStub;


    beforeEach( () => {
        sandbox = createSandbox();
        addFunctionStub = sandbox.stub(DocumentRepository.prototype, 'add');

    });

    afterEach( () => {
        sandbox.restore();
    })

    it.only("Should add two numbers - Happy Path", () => {
        addFunctionStub.returns(20);
        addNumbers(10,10);

        assert.isTrue(addFunctionStub.calledOnce);
        // assert.deepEqual(add(10,10), 20);

    });

    // it("Should fail the test with wrong result - unit test", () => {
    //     assert.notDeepEqual(add(10,10), 30);
    // });


    // it("Should mock sayHello method - happy path", () => {
    //     var mock = sinon.mock(add);
    //     var expectation = mock.expects("sayHello");
    //     expectation.exactly(1);
    //     expectation.withArgs("hello")
    //     callAnotherFn(10,20);
    //     mock.verify();
    // });
})




// describe("Test suite for Stub", () => {
//     it("Should stub the add function - happy path", () => {
//         var addStub = sinon.stub(myAddition, "add");
//         addStub.withArgs(10,20).returns(100);   // we are assuming that the returns is 100
//         expect(myAddition.callAnotherFn(10,20)).to.be.equal(100);
//         sinon.restore();
//     });
// });