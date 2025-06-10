import "../styles/ProgressBar.css"
import { FaTruck } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { FiShield } from "react-icons/fi";
import { FaCalendar } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";

export default function ProgressBar(){


    return (
        <div className="progress-bar">
            <div className="progress-item">
                <GrLocation style={{ color: '#2563EB' }} size={30}/>
                <p>Postcode</p>
            </div>
            <div className="line-blue"/>
            <div className="progress-item">
                <RiDeleteBin5Line style={{ color: '#2563EB' }} size={30}/>
                <p>Waste Type</p>
            </div>
            <div className="line-blue"/>
            <div className="progress-item">
                <FaTruck style={{ color: '#2563EB' }} size={30}/>
                <p>Select Skip</p>
            </div>
            <div className="line-grey"/>
            <div className="progress-item">
                <FiShield style={{ color: '#9CA3AF' }} size={30}/>
                <p>Permit Check</p>
            </div>
            <div className="line-grey"/>
            <div className="progress-item">
                <FaCalendar style={{ color: '#9CA3AF' }} size={30}/>
                <p>Choose Date</p>
            </div>
            <div className="line-grey"/>
            <div className="progress-item">
                <FiCreditCard style={{ color: '#9CA3AF' }} size={30}/>
                <p>Payment</p>
            </div>
        </div>
    );
}