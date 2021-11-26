import React, { useEffect, useState} from 'react';
import HeaderResponsivo from '../../componentes/HeaderResponsivo';
import api from '../../Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Personagens(){
    const [data, setData] = useState(null);
    const [name, setName] = useState(null);

    useEffect( () => {
        async function loadAll() {
            let res = await api.getPersonagemByName();
            setData(res.data)
            console.log(res.data)
        }
        loadAll();
    }, []);

    async function clickMouse(event){
        event.preventDefault();
        console.log("Escolhendo o nome: ", name)
        let res = await api.getPersonagemByName(name);
    }

    return(
        <div>
            <HeaderResponsivo />
            <div className="search-container">
                <form onSubmit={clickMouse}>
                    <input onChange={(event) => {
                        setName(event.target.value);
                    }}/>
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} size="lg"/>
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Personagens;