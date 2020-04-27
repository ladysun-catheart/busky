import React, {ReactNode} from 'react';

type Props = {
    children: ReactNode,
    spaces: number
}
const InputContainer: React.FC<Props> = ({ children, spaces}) => {
    return (
        <div style={{flex: `${spaces}`}}>
            {children}
        </div>
    );
};

export default InputContainer;