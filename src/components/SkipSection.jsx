import { PiArrowFatLinesLeft } from "react-icons/pi";
import { PiArrowFatLinesRight } from "react-icons/pi";
import '../styles/SkipSection.css'
import SkipCard from "./SkipCard";
import { useRef, useState } from "react";

export default function SkipSection({skips}){
    
    const [selectedID, setSelectedID] = useState(0);
    const divRef = useRef(null);
    const scrollLeft = ()=>{
        
        if (divRef.current) {
            divRef.current.scrollTo({top: 0, left: divRef.current.scrollLeft-400, behavior: "smooth"});
            setScrollPos(scrollPos+0.1);
          }
    }

    const scrollRight = ()=>{
        
        if (divRef.current) {
            divRef.current.scrollTo({top: 0, left: divRef.current.scrollLeft+400, behavior: "smooth"});
            
          }
    }
    return (
        <div className="skip-section">
            <div  className="navigation-btn">
                <PiArrowFatLinesLeft className="arrows" style={{ color: '#2563EB', }} onClick={()=>scrollLeft()} size={60}/>
                {selectedID!=0 && <button className="back-btn">Back</button>}
            </div>
            <div className="skip-list" ref={divRef} style={{overflowX: skips.length<=4 ? 'hidden' : 'scroll',}}>
                {skips.length!=0 ? 
                    (skips.map((skip)=> <SkipCard selectedID={selectedID} setSelectedID={setSelectedID} skip={skip} key={skip.id}/>)) : 
                    <div style={{alignSelf: 'center', width: '100%', }}>
                        <p style={{fontWeight: 'bold', fontSize: 20}}>No available Skip...</p>
                    </div>
                }
            </div>
            <div className="navigation-btn">
                <PiArrowFatLinesRight className="arrows" style={{ color: '#2563EB' }} onClick={()=>scrollRight()} size={60}/>
                {selectedID!=0 && <button className="continue-btn">Continue</button>}
            </div>
        </div>
    );

}