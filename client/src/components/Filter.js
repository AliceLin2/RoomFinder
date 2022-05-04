import React, {useState} from "react";

function Filter({types, onChangeId}) {

    function handleFilter(e) {
        onChangeId(types.filter(type=>type.name===(e.target.value))[0].id);
    }

    return(
        <div>
            <label>Choose a home type: </label>
            <select
            name="type_id"
            onChange={handleFilter}
            >
                <option value="Houses">Houses</option>
                <option value="Townhomes">Townhomes</option>
                <option value="Multi-family">Multi-family</option>
                <option value="Condos">Condos</option>
                <option value="Co-ops">Co-ops</option>
            </select>
        </div>
    )
}
export default Filter