import React from 'react'
import { FormFate } from 'react-form-fate';


function FormFateFactory({ formDefinition, onSubmit }) {


    return (
        <React.Fragment>
            <FormFate
                formDefinition={formDefinition}
                onSubmit={onSubmit}
            />
        </React.Fragment>
    )
}

export default FormFateFactory;