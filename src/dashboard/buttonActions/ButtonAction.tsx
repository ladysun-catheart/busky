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
                padding: '1rem 1.5rem',
                fontSize: '1.2rem',
                marginLeft: '1rem',
                cursor: 'pointer',
                backgroundColor: 'darkorange',
                color: 'white',
                border: 'none',
                borderRadius: '.2rem',
                textTransform: 'uppercase'
            }}
        >
            {label}
        </button>
    );
};

export default ButtonAction;
