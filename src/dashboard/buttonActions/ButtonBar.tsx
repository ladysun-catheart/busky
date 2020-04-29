import React, {ReactNode} from 'react';

enum Align {
    center = 'center',
    left = 'flex-start',
    rigth = 'flex-end'
}
type Props = {
    children: ReactNode,
    align: string
}
const ButtonBar: React.FC<Props> = ({children, align}) => {
    const AlignMiddle: { [key: string]: Align } = Align as any;
    return (
        <div style={{display:"flex", padding: '.5rem 1rem', justifyContent: AlignMiddle[align]}} >
            {children}
        </div>
    );
};

export default ButtonBar;
