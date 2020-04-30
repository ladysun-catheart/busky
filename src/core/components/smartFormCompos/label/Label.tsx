import React, {MouseEvent} from 'react';

export type LabelProps = {
    label: string,
    help: string,
}

const Label: React.FC<LabelProps> = ({ label, help }) => {
    const styleBtns = {borderRadius: '.2rem', border: 'none', cursor: 'pointer', marginLeft: '0.4rem', fontFamily: 'Courier, monospace', height: '1.3rem', width: '1.3rem', padding: 0, backgroundColor: 'GAINSBORO', color: 'black'}
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '.3rem 0'}}>
            <div>
                <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '1.2rem'}}>{label}</span>
            </div>
            <div>
                <button style={styleBtns} onClick={() => console.log(help)}>?</button>
                <button style={styleBtns} onClick={() => console.log('clear')}>x</button>
            </div>
        </div>
    );
};

export default Label;