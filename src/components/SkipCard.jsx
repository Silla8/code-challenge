import '../styles/SkipCard.css'


export default function SkipCard({selectedID, skip, setSelectedID}){

    const handleSelection = ()=>{
        if(selectedID==skip.id)
            setSelectedID(0);
        else
            setSelectedID(skip.id)
    }

    return (
        <div className={`skip-card ${selectedID==skip.id && 'selected-skip-card'}`}  onClick={()=>handleSelection()}>
            <div style={{position: 'relative', width: '90%', height: '130px', marginTop: 10}}>
                <div className='overlay-boxTop'>
                    <p className='overlay-size'>{skip.size} Yards</p>
                </div>
                {!skip.allowed_on_road && 
                    <div className='overlay-boxBottom'>
                        <p className='overlay-warning'>Not Allowed On The Road</p>
                    </div>
                }
                <img src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`} className='card-image'/>
            </div>
            <div style={{flexDirection: 'column',  width: '80%'}}>
                <div>
                    <p style={{ marginBottom: 0, color: '#111827', textAlign: 'left', fontWeight: 'bold', fontSize: 20}}>{skip.size} YARD SKIP</p>
                    <p style={{margin: 0, color: '#6B7280', textAlign: 'left', fontWeight: '400',fontSize: 15}}>{skip.hire_period_days} day hire period</p>
                </div>
                <div>
                    <p style={{color: '#111827', textAlign: 'left', fontWeight: 'bold', fontSize: 20}}>£{skip.price_before_vat}</p>
                </div>
            </div>
            <button className='select-btn'onClick={()=>showSelection()}>{selectedID==skip.id ? "Selected" : "Select"}</button>
        </div>
    );
}