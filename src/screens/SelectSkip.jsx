import ProgressBar from "../components/ProgressBar";
import SearchSection from "../components/SearchSection";
import SkipSection from "../components/SkipSection";


function SelectSkip(){

    return (
        <div>
            <ProgressBar />
            <SearchSection />
            <SkipSection />
        </div>
    );
}

export default SelectSkip;