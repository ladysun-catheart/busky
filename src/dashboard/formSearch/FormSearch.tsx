import React from 'react';
import {SmartInput} from "../../core/components/smartFormCompos";
import People from "../../core/models/people/People";
import {PeopleBuilder} from "../../core/models/people";

const FormSearch: React.FC = () => {
    const peopleBuilder: PeopleBuilder = new PeopleBuilder()
    return (
        <div>
            <div>
                <SmartInput
                    label="name"
                    help="Yuour complete name including surnames"
                    value="pito"
                    onChange={() => console.log('un pito cambiado')}
                />
                <SmartInput
                    label="age"
                    help="How old are you?"
                    value="pito"
                    onChange={() => console.log('un pito cambiado')}
                />
                <SmartInput
                    label="sex"
                    help="Your gender"
                    value="pito"
                    onChange={() => console.log('un pito cambiado')}
                />
            </div>
        </div>
    );
};

export default FormSearch;
