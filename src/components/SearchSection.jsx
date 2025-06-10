import { useEffect, useRef, useState } from 'react';
import '../styles/SearchSection.css'
import {data} from '../data/data'

export default function SearchSection({setSkips}){
    const [value, setValue] = useState(0);
    const inputRef = useRef(null);
    const handleSearch = (e)=>{
        
        if(e.target.value>0){
            const skips = data().filter(skip=> skip.size== e.target.value);
            setSkips(skips);
        }else setSkips(data());

    }

    const reset = (e)=>{
        e.preventDefault();
        setValue(0);
        setSkips(data());

        if(inputRef.current){
            inputRef.current.value="";
        }
    }

    return (
        <div>
            <h2 style={{color: '#455245'}}>Choose Your Skip Size</h2>
            <form onSubmit={reset} >
                <input ref={inputRef} type="number" placeholder="Enter Skip Size..." min={0} className="input-field" onChange={handleSearch}/>
                <button type="submit" className="search-btn">Reset</button>
            </form>
            <p style={{color: '#455245'}}>Select the skip size that best suits your needs</p>
        </div>
    );
};