import React, { useRef }  from 'react';
import { Form } from '@unform/web';
import Input from '../input/input';
import './style.scss';

export default function FormSlider(props) {
    const formRef = useRef(null);
    const initialData = {
        topLeft: 10,
        topRight: 30,
        bottomLeft: 30,
        bottomRight: 10,
    }

    function updateResult(data) {
        props.submit(data);
    }

    setInterval(() => formRef.current.submitForm(), 100);
    
    return (
        <div>
            <Form className="form" ref={formRef} initialData={initialData} onSubmit={updateResult}>
                <label className="labelInput">Canto superior esquerdo</label>
                <Input className="range" name="topLeft" type="range" max="100"/>

                <label className="labelInput">Canto superior direito</label>
                <Input className="range" name="topRight" type="range" max="100"/>

                <label className="labelInput">Canto inferior esquerdo</label>
                <Input className="range" name="bottomLeft" type="range" max="100"/>

                <label className="labelInput">Canto inferior direito</label>
                <Input className="range" name="bottomRight" type="range" max="100"/>
            </Form>
        </div>
    )
}
