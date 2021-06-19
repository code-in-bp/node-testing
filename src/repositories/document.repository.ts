import { Mongoose } from "mongoose";


// export class DocumentRepository<T extends Mongoose> {
export class DocumentRepository {
    add(arg1: number, arg2: number): number {
        var addResult = arg1 + arg2;
        return addResult;
    }
};