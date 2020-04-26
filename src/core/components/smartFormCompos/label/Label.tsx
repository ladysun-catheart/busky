import React, {MouseEvent} from 'react';

export type LabelProps = {
    onClickHelp: (event: MouseEvent<HTMLButtonElement>) => void,
    onClickClose: (event: MouseEvent<HTMLButtonElement>) => void,
}

const Label: React.FC<LabelProps> = ({ onClickHelp, onClickClose }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div>
                <span>Label</span>
                <button onClick={onClickHelp}>?</button>
            </div>
            <div>
                <button onClick={onClickClose}>x</button>
            </div>
        </div>
    );
};

export default Label;