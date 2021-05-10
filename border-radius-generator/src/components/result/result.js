import React, { useState }  from 'react';
import './style.scss';

export default function Result(props) {

    const [isCopied, setisCopied] = useState('');

    function copy() {
        let element = document.querySelector('.resultCss');
        element.select();
        document.execCommand("Copy");
        setisCopied("CSS copiado");
        setTimeout(() => setisCopied(''), 5000);
    }

    return (
        <div className="contResult">
            <div className="espaco">
            {isCopied && 
                <div className="contWarning">
                    <span className="warning">{isCopied}</span>
                </div>
            }
            </div>
            <label className="tituloResult">CSS resultante: </label>
            <input type="text" className="resultCss" value={"border-radius: "+ props.topLeft+"% "+props.topRight+"% "+props.bottomRight+"% "+props.bottomLeft+"%;"}/>
            <button className="btnCopiar" onClick={copy}>Copiar CSS</button>
        </div>
    )
}
