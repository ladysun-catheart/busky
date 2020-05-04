import React from 'react';
import {SelectProps} from "../type";

const Select: React.FC<SelectProps> = ({values, options, onChange}) => {
    return (
        <div style={{flex: '1', flexDirection: 'row'}}>
            <select
                style={{width: 'calc(100% - 1.3rem)', height: '1.5rem', padding: '0.25rem .5rem', fontSize: '1rem', border: '1px solid', borderRadius: '0.2rem', color: 'gray'}}
                value={values}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
            >
                {options.map(op => <option value={op.id}>{op.label}</option>)}
            </select>
        </div>
    );
};

export default Select;
