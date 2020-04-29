import React, {useState} from 'react';
import {People, PeopleBuilder} from "../../core/models/people";
import Fields from "./fields";
import { ButtonBar, ButtonAction } from '../buttonActions';

const FormSearch: React.FC = () => {
    const people: People = (new PeopleBuilder())
        .withAge(20)
        .build()
    const [modified, setModified] = useState<People>(people)
    return (
        <div>
            <Fields people={modified} onChangePeople={(val) => {console.log(val); setModified(val)}} />
            <ButtonBar align="rigth">
                <ButtonAction
                    label="clear"
                    onClickBtn={() => console.log('clear btn')}
                />
                <ButtonAction
                    label="submit"
                    onClickBtn={() => console.log('clear btn')}
                />
            </ButtonBar>
        </div>
    );
};

export default FormSearch;
