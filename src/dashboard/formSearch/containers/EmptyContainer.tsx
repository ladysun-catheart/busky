import React, {ReactNode} from 'react';

type Props = {
    spaces: number
}
const EmptyContainer: React.FC<Props> = ({ spaces}) => {
    return (
        <div style={{flex: `${spaces}`}} />
    );
};

export default EmptyContainer;