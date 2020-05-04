import React from 'react'
import Label from './pieces/Label/Label'
import Select from "./pieces/Select";
import {SelectProps} from "./pieces/type";

export type CommonProps = {
    label: string,
    help: string,
}

const SmartSelect = (props: CommonProps & SelectProps) => {
    const {label, help, values, options, onChange} = props
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '.5rem 1rem',
        }}>
            <Label
                label={label}
                help={help}
            />
            <Select
                values={values}
                options={options}
                onChange={onChange}
            />
        </div>
    )
}

export default SmartSelect