import React from 'react'
import Label from './pieces/Label/Label'
import Input from "./pieces/Input";
import { InputProps } from './pieces/type';

export type CommonProps = {
    label: string,
    help: string,
}

const SmartInput = (props: CommonProps & InputProps) => {
    const {label, help, value, onChange} = props
    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '.5rem 1rem'}}>
            <Label
                label={label}
                help={help}
            />
            <Input
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default SmartInput