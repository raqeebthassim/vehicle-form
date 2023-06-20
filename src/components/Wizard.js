import React, { useState } from 'react';

import Form from './Form';
import { WIZARD_STEPS } from '../consts';

const SELECTED_COLOR = "RED";

export default function Wizard() {
    const [values, setValues] = useState({});
    const [step, setStep] = useState(WIZARD_STEPS.MAKE);

    function handleChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    function handleStepChange() {
        if (step.next) {
            setStep(WIZARD_STEPS[step.next]);
        } else {
            setStep(null);
        }
    }

    return (
        <div>
            {step && <div>
                <Form
                    handleChange={handleChange}
                    values={values}
                    inputType={step.inputType}
                    options={step.options}
                    label={step.label}
                    paramName={step.paramName}
                />
                <button className='next-button' onClick={handleStepChange} disabled={!values[step.paramName]}>{step.next === null ? "DONE" : "NEXT"}</button>
            </div>}
            {step === null && Object.keys(values).length === Object.keys(WIZARD_STEPS).length && <div>
                <p>I have a {values[WIZARD_STEPS.MAKE.paramName]} and the colour is {values[WIZARD_STEPS.COLOUR.paramName]}.</p>
                <br />
                {values[WIZARD_STEPS.COLOUR.paramName] === SELECTED_COLOR && "THE CAR IS RED! NICE!! "}
                <p>REF: {values[WIZARD_STEPS.CODE.paramName]}</p>
            </div>}
        </div>
    )
}
