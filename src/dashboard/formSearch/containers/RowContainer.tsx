import React from 'react';

const RowContainer: React.FC = ({children}) => {
    return (
        <div style={{display: 'flex'}}>
            {children}
        </div>
    );
};

export default RowContainer;