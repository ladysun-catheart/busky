import React from 'react'
import Label from './pieces/Label/Label'
import { InputTagProps } from './pieces/type';
import InputTag from "./pieces/InputTag";

export type CommonProps = {
    label: string,
    help: string,
}

const SmartInputTag = (props: CommonProps & InputTagProps) => {
    const {label, help, values, onChange} = props
    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '.5rem 1rem'}}>
            <Label
                label={label}
                help={help}
            />
            <InputTag
                values={values}
                onChange={onChange}
            />
        </div>
    )
}

export default SmartInputTag