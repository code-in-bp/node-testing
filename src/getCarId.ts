import { DocumentRepository } from "./repositories/document.repository";


export const getCarById = (id: string) => {
    const getCarIdRepository = new DocumentRepository();
    let result: string;
    try {
        result = getCarIdRepository.findById(id);
        return result;


    } catch(error) {
        if(error.statusCode === '404')
            throw(error.message = 'Car id not found');
        
        throw(error);
    }
}