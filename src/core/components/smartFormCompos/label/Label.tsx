import React, {MouseEvent} from 'react';

export type LabelProps = {
    label: string,
    help: string,
}

const Label: React.FC<LabelProps> = ({ label, help }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div>
                <span>{label}</span>
                <button onClick={() => console.log(help)}>?</button>
            </div>
            <div>
                <button onClick={() => console.log('clear')}>x</button>
            </div>
        </div>
    );
};

export default Label;