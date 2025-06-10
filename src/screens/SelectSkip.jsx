import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import SearchSection from "../components/SearchSection";
import SkipSection from "../components/SkipSection";
import {data} from '../data/data'


function SelectSkip(){
    const [skips, setSkips] = useState(data());
    
    return (
        <div style={{alignSelf: 'center'}}>
            <ProgressBar />
            <SearchSection setSkips={setSkips} />
            <SkipSection skips={skips} />
        </div>
    );
}

export default SelectSkip;