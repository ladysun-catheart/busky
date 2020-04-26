import React from 'react';

const Input: React.FC = () => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: '1'}}>
                    <input style={{width: '100%'}} type="text" />
                </div>
            </div>
        </div>
    );
};

export default Input;
