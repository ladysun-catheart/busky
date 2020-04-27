import React from 'react';
import InputProps from "../type";

const Input: React.FC<InputProps> = ({value, onChange}) => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: '1'}}>
                    <input
                        style={{width: '100%'}}
                        type="text"
                        value={value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Input;
