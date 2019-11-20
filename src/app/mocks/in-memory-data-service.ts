import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb() 
    {
        const user = 
        [
            {
                name: 'juanito',
                pws: 1234
            },

            {
                name: 'juanito',
                pws: 'holo'
            },

            {
                name: 'juanito',
                pws: 'tengosueño123'
            }
        ];
        
        return{user};
    }
}
