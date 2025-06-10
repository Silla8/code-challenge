import '../styles/SearchSection.css'

export default function SearchSection(){


    return (
        <div>
            <h2 style={{color: '#455245'}}>Choose Your Skip Size</h2>
            <form>
                <input type="number" placeholder="Enter Skip Size..." min={0} className="input-field" />
                <button className="search-btn">Search</button>
            </form>
            <p style={{color: '#455245'}}>Select the skip size that best suits your needs</p>
        </div>
    );
};