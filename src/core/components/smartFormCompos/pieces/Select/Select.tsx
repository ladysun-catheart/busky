import React from 'react';
import {SelectProps} from "../type";
import arrow from './arrow_down.svg'

const Select: React.FC<SelectProps> = ({value, options, onChange}) => {
    return (
        <div style={{flex: '1', flexDirection: 'row'}}>
            <select
                style={{
                    width: '100%',
                    padding: '0.25rem .5rem',
                    fontSize: '1rem',
                    border: '1px solid',
                    borderRadius: '0.2rem',
                    color: 'gray',
                    appearance: 'none',
                    MozAppearance: 'none',
                    WebkitAppearance: 'none',
                    backgroundColor: 'white',
                    backgroundImage: `url(${arrow})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right top',
                    height: '2.1rem',
                    cursor: 'pointer'
                }}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
            >
                {options.map(op => <option value={op.id}>{op.label}</option>)}
            </select>
        </div>
    );
};

export default Select;
