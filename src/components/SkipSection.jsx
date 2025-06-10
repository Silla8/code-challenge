import { PiArrowFatLinesLeft } from "react-icons/pi";
import { PiArrowFatLinesRight } from "react-icons/pi";
import '../styles/SkipSection.css'
import SkipCard from "./SkipCard";

export default function SkipSection(){

    return (
        <div className="skip-section">
            <PiArrowFatLinesLeft style={{ color: '#2563EB' }} size={60}/>
            <div className="skip-list">
                <SkipCard />
                <SkipCard />
                <SkipCard />
                <SkipCard />
            </div>
            <PiArrowFatLinesRight style={{ color: '#2563EB' }} size={60}/>
        </div>
    );

}