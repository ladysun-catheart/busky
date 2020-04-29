import React from 'react';

type Props = {
    label: string,
    onClickBtn: () => void
}
const ButtonAction: React.FC<Props> = ({label, onClickBtn}) => {
    return (
        <button
            onClick={e => onClickBtn()}
            style={{
                padding: '0.5rem 1rem',
                fontSize: '1.2rem',
                marginLeft: '1rem',
                cursor: 'pointer',
                backgroundColor: 'light-gray',
                border: '1px solid black'
            }}
        >
            {label}
        </button>
    );
};

export default ButtonAction;
