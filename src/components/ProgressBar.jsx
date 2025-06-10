import "../styles/ProgressBar.css"


export default function ProgressBar(){


    return (
        <div className="progress-bar">
            <div className="progress-item">
                
                <p>Postcode</p>
            </div>
            <div className="line-blue"/>
            <div className="progress-item">
                
                <p>Waste Type</p>
            </div>
            <div className="line-blue"/>
            <div className="progress-item">
                
                <p>Select Skip</p>
            </div>
            <div className="line-grey"/>
            <div className="progress-item">
                
                <p>Permit Check</p>
            </div>
            <div className="line-grey"/>
            <div className="progress-item">
               
                <p>Choose Date</p>
            </div>
            <div className="line-grey"/>
            <div className="progress-item">
                
                <p>Payment</p>
            </div>
        </div>
    );
}