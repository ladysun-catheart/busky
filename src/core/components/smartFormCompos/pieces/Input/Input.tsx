import React from 'react';
import {InputProps} from "../type";

const Input: React.FC<InputProps> = ({value, onChange}) => {
    return (
        <div style={{flex: '1', flexDirection: 'row'}}>
            <input
                style={{width: 'calc(100% - 1.3rem)', height: '1.5rem', padding: '0.25rem .5rem', fontSize: '1rem', border: '1px solid', borderRadius: '0.2rem', color: 'gray'}}
                type="text"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
            />
        </div>
    );
};

export default Input;
