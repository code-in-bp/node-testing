import { assert } from 'chai'
import { createSandbox, SinonSandbox, SinonStub } from 'sinon';
import { DocumentRepository } from '../../src/repositories/document.repository';
import { getCarById } from '../../src/getCarId';

describe("Getting started - Test Addition", () => {


    it("Should test add function - Happy Path", () => {
          assert.deepEqual(DocumentRepository.prototype.add(10,10), 20);
    });

    it('should find by Id ', () => {
        assert.deepEqual(getCarById('H1234'), 'H1234');
    })
});