import React, {MouseEvent} from 'react'
import { LabelProps } from './label/Label'
import InputProps from "./type";

type HocFactoryProps = {
    label: string,
    help: string,
    value: string,
    onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const factory = (
    Label: React.FC<LabelProps>,
    Element: React.FC<InputProps>
): React.FC<HocFactoryProps> => {

    const hocFactory = (props: HocFactoryProps) => {
        const {label, help, value, onChange} = props
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Label
                    label={label}
                    help={help}
                />
                <Element
                    value={value}
                    onChange={onChange}
                />
            </div>
        )
    }

    return hocFactory
}

export default factory