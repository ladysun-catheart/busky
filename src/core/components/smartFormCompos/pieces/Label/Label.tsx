import React, {useState, MouseEvent} from 'react';

export type LabelProps = {
    label: string,
    help: string,
}

const Label: React.FC<LabelProps> = ({ label, help}) => {
    const [isVisibleHelp, setIsVisibleHelp] = useState(false)
    const styleBtns = {
        borderRadius: '.2rem',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '0.4rem',
        fontFamily: 'Courier, monospace',
        height: '1.3rem',
        width: '1.3rem',
        padding: 0,
        backgroundColor: 'GAINSBORO',
        color: 'black',
    }
    const styleTooltip = {
        padding: '0.25rem',
        backgroundColor: 'lemonchiffon',
        position: 'absolute',
        bottom: '1.8rem',
        width: '8rem',
        boxShadow: '0.25rem 0.25rem tan',
        fontFamily: 'Arial, Helvetica, sans-serif',
        right: 0
    }
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '.3rem 0'}}>
            <div>
                <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '1.2rem'}}>{label}</span>
            </div>
            <div>
                <button
                    style={{...styleBtns, position: 'relative'}}
                    onClick={() => console.log(help)}
                >
                    <div style={{...styleTooltip, position: 'absolute', display: isVisibleHelp ? 'block' : 'none'}}>
                        {help}
                    </div>
                    <span
                        onClick={() => setIsVisibleHelp(!isVisibleHelp)}
                    >?</span>
                </button>
            </div>
        </div>
    );
};

export default Label;