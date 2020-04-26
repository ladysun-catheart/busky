import React from 'react';
import {SmartInput} from "../../core/components/smartFormCompos";

const FormSearch: React.FC = () => {
    return (
        <div>
            <div>
                <SmartInput
                    label="name"
                    help="put your name!"
                    value="pito"
                    onChange={() => console.log('un pito cambiado')}
                />
            </div>
        </div>
    );
};

export default FormSearch;
