import axios from 'axios';

const api = {
    getPersonagemByName: async (name) => {
        const response = await axios.get("https://rickadmortyapi.com/api/character/2");
               
                    
        return response;   
    }
}

export default api;