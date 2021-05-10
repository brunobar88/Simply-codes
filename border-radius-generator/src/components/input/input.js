import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import './style.scss';

export default function Slider({ name, ...rest }) {
    const inputRef = useRef(null)
    const { fieldName, registerField, defaultValue } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])

    return (
        <div>
            <input defaultValue={defaultValue} className="sliderInput" ref={inputRef} {...rest}/>
        </div>
    )
}
