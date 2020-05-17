import React from 'react';
import {InputTagProps} from "../type";

const listToStr = (list: Array<string>) => list.join(', ')
const strToList = (str: string) => str.split(', ')

const InputTag: React.FC<InputTagProps> = ({values, onChange}) => {
    return (
        <div style={{flex: '1', flexDirection: 'row'}}>
            <input
                style={{width: 'calc(100% - 1.3rem)', height: '1.5rem', padding: '0.25rem .5rem', fontSize: '1rem', border: '1px solid', borderRadius: '0.2rem', color: 'gray'}}
                type="text"
                value={listToStr(values)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    !/\w|,|\s/.test(e.key) && e.preventDefault()
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChange(strToList(e.target.value))
                }}
            />
        </div>
    );
};

export default InputTag;
