import React, {useState} from "react";
import SearchBar from "./SearchBar";
import MuseumAll from "./MuseumAll";

function SearchParent() {
    const [searchMuseums, setSearchMuseums] = useState([]);
    const [searchArt, setSearchArt] = useState([]);
    const [searchArtists, setSearchArtists] = useState([]);

    return(
        <div>
            <SearchBar setSearchMuseums={setSearchMuseums}/>
            <MuseumAll searchMuseums={searchMuseums}/>
        </div>
    );
}

export default SearchParent;