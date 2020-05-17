import React, {useState} from 'react';
import {People, PeopleBuilder} from "../../core/models/people";
import Fields from "./fields";
import { ButtonBar, ButtonAction } from '../buttonActions';

const peopleMaker = () =>
    (new PeopleBuilder())
        .withAge(20)
        .withInitHeight(140)
        .withEndHeight(190)
        .withInitWeight(40)
        .withEndWeight(110)
        .build()

const FormSearch: React.FC = () => {
    const [modified, setModified] = useState<People>(peopleMaker())
    return (
        <div>
            <div style={{marginBottom: '1rem'}}>
                <Fields
                    people={modified}
                    onChangePeople={(people: People) => setModified(people)} />
            </div>
            <div>
                <ButtonBar align="rigth">
                    <ButtonAction
                        label="clear"
                        onClickBtn={() => setModified(peopleMaker())}
                    />
                    <ButtonAction
                        label="submit"
                        onClickBtn={() => console.log('send data')}
                    />
                </ButtonBar>
            </div>
        </div>
    );
};

export default FormSearch;
