import React, { useState, useEffect } from 'react'

export default function Result(props) {
    const [dropdown, setDropdown] = useState("");

    let result = props.data;

    let dropDownOnChangeHandler = (e) => {
        setDropdown(e.target.value);
        switch (e.target.value) {
            case "Asc":
                result.sort((a, b) => { return a.score - b.score })
                break;
            case "Desc":
                result.sort((a, b) => { return b.score - a.score })
                break;
            case "Az":
                result.sort((a, b) => {
                    if (b.show.name < a.show.name) {
                        return -1;
                    }
                    if (b.show.name > a.show.name) {
                        return 1;
                    }
                    return 0
                })
                break;
            case "Za":
                result.sort((a, b) => {
                    if (a.show.name < b.show.name) {
                        return -1;
                    }
                    if (a.show.name > b.show.name) {
                        return 1;
                    }
                    return 0
                })
                break;
        }
    }




    const searchResults = result.map((data, index) => {

        return (
            <div className="resultWrapper" key={index} style={{ margin: "5px" }}>
                {data.show.image ? <img src={data.show.image.medium} alt='img' /> : <div style={{ height: "295px", width: "210px", display: "flex", justifyContent: "center", alignItems: "center" }} >Img Not Available</div>}
                <div >{data.show.name}</div>
                <div>score:{data.score}</div>
            </div>
        )

    })
    return (
        <div>
            <select onChange={(e) => {
                dropDownOnChangeHandler(e)
            }}>
                <option value="Asc">Ascending Score</option>
                <option value="Desc">Descending Score</option>
                <option value="Az">Alphabetical A-z</option>
                <option value="Za">Alphabetical Z-a</option>
            </select>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {searchResults}
            </div>
        </div>
    )
}
