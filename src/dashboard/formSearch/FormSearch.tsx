import React, {useState} from 'react';
import {People, PeopleBuilder} from "../../core/models/people";
import Fields from "./fields";
import { ButtonBar, ButtonAction } from '../buttonActions';

const FormSearch: React.FC = () => {

    return (
        <div>
            <div style={{marginBottom: '1rem'}}>
                <Fields
                    onChangePeople={(people: People) => {
                    //console.log(people)
                }} />
            </div>
            <div>
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
        </div>
    );
};

export default FormSearch;
