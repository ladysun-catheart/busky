import React from 'react';
import {MultiInputProps} from "../type";

const MultiInput: React.FC<MultiInputProps> = ({valueInit, valueEnd, onChangeInit, onChangeEnd}) => {
    return (
        <div style={{flex: '1'}}>
            <input
                style={{ marginRight: '0.6rem', display: 'inline-block', width: 'calc(50% - 1.5rem)', height: '1.5rem', padding: '0.25rem .5rem', fontSize: '1rem', border: '1px solid', borderRadius: '0.2rem', color: 'gray'}}
                type="text"
                value={valueInit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInit(e.target.value)}
            />
            <input
                style={{ display: 'inline-block', width: 'calc(50% - 1.5rem)', height: '1.5rem', padding: '0.25rem .5rem', fontSize: '1rem', border: '1px solid', borderRadius: '0.2rem', color: 'gray'}}
                type="text"
                value={valueEnd}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeEnd(e.target.value)}
            />
        </div>
    );
};

export default MultiInput;
