import React from 'react'

function Select({ data, onChange }) {
    return (
        <select onChange={onChange}>
            {data.map((value, index) => {
                return (<option key={index} value={value.timezone}>{value.name}</option>)
            })
            }
        </select>
    )
}

export default Select
