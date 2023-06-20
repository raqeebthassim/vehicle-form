import React from 'react';

export default function Form({ inputType, paramName, label, handleChange, options, values}) {

    return (
        <div>
            <div>{label}</div>
            {inputType === "select" && <select className='input' onChange={handleChange} name={paramName} value={values[paramName]}>
                {options.map(val => <option key={val} value={val}>{val}</option>)}
            </select>}
            {inputType === "text" && <input className='input' name={paramName} onChange={handleChange} value={values[paramName] || ""} />}
        </div>
    )
}
