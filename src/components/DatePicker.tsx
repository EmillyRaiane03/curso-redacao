import React, {useState} from "react"

export default function DatePicker() {
    return(
        <div className="pb-5">
            <label className="font-Montserrant" htmlFor="start">Data de Nascimento</label><br />
    
            <input type="date" id="start" name="trip-start" 
            value="" min="1950-01-01" max="2100-12-31"
            className="bg-gray-200 rounded-md p-1 px-2" />
        </div>

    )
}