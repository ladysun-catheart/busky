import React from 'react'
import Label from './pieces/Label/Label'
import {InputProps, MultiInputProps} from './pieces/type';
import MultiInput from "./pieces/MultiInput";

export type CommonProps = {
    label: string,
    help: string,
}

const SmartMultiInput = (props: CommonProps & MultiInputProps) => {
    const {label, help, valueInit, valueEnd, onChangeInit, onChangeEnd} = props
    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '.5rem 1rem'}}>
            <Label
                label={label}
                help={help}
            />
            <MultiInput
                valueInit={valueInit}
                valueEnd={valueEnd}
                onChangeInit={onChangeInit}
                onChangeEnd={onChangeEnd}
            />
        </div>
    )
}

export default SmartMultiInput