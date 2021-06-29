import { assert } from 'chai';
import Sinon, { createSandbox, SinonSandbox, SinonStub, SinonSpy } from 'sinon';
import { getCarById } from '../src/getCarId';
import { DocumentRepository } from '../src/repositories/document.repository';


describe('getCarById function', () => {
        let sandbox: SinonSandbox;
        let getCarIdStub: SinonStub;
        let nextSpy: SinonSpy;


    beforeEach(() => {
        sandbox = createSandbox();
        getCarIdStub = sandbox.stub(DocumentRepository.prototype, 'findById');

    });


    afterEach(() => {
        sandbox.restore();
    })


    it('should getCarById - Happy Path', () => {
        getCarIdStub.returns({id: 'H12345'});
        getCarById('H12345');
        assert.isTrue(getCarIdStub.calledWithExactly('H12345'));
    });


    it('should return car id not found - 404', () => {
        try {
            getCarIdStub.throws({statusCode: '404'});
            getCarById('id_not_exit');
        } catch(err) {
            assert.deepEqual(err, 'Car id not found');
        }
    });


    it('should return car with forbidden - 403', () => {
        try {
            getCarIdStub.throws({statusCode: '403'});
            getCarById('id_not_exit');
        } catch(err) {
            assert.deepEqual(err, {statusCode: '403'});
        }
    })
})