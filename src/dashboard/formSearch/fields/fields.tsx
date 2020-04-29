import React from 'react';
import {EmptyContainer, InputContainer, RowContainer} from "../containers";
import {SmartInput} from "../../../core/components/smartFormCompos";
import {
    ColorFantasy,
    ColorHairRegular,
    SexPeopleMiddle,
    ColorHairRegularMiddle,
    ColorFantasyMiddle, ColorEyeRegularMiddle, RacePeopleMiddle, CivilPeopleMiddle, PhisicalActivityPeopleMiddle
} from "../../../core/models/people/enum";
import People from '../../../core/models/people';

type Props = {
    people: People,
    onChangePeople: (people: People) => void
}
const Fields: React.FC<Props> = ({people, onChangePeople}) => {
    return (
        <div>
            {/* 1º row */}
            <RowContainer>
                <InputContainer spaces={4}>
                    <SmartInput
                        label="Name"
                        help="Your complete name including surnames"
                        value={people.name}
                        onChange={val => { people.name = val; onChangePeople(people) }}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label="Age"
                        help="How old are you?"
                        value={people.age.toString()}
                        onChange={val => people.age = parseInt(val)}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label="Gender"
                        help="Your gender"
                        value={people.sex}
                        onChange={(val: string) => people.sex = SexPeopleMiddle[val] }
                    />
                </InputContainer>
            </RowContainer>

            {/* 1º row */}
            <RowContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label="Hair"
                        help="Select the hair color"
                        value={people.hair}
                        onChange={val => people.hair = (ColorHairRegularMiddle[val] || ColorFantasyMiddle[val]) as ColorHairRegular & ColorFantasy}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label="Eyes"
                        help="Select the eye color"
                        value={people.eyes}
                        onChange={val => people.eyes = (ColorEyeRegularMiddle[val] || ColorFantasyMiddle[val]) as ColorHairRegular & ColorFantasy}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label="Weight"
                        help="Type the cms weight"
                        value={people.weight.toString()}
                        onChange={val => people.weight = parseInt(val) }
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label="Height"
                        help="Type the cms height"
                        value={people.height.toString()}
                        onChange={val => people.height = parseInt(val) }
                    />
                </InputContainer>
            </RowContainer>

            {/* 3º row */}
            <RowContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label="Race"
                        help="Select your physiognomy depending on your race or ethnical group"
                        value={people.race}
                        onChange={val => people.race = RacePeopleMiddle[val] }
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label="Civil Status"
                        help="Select the civil status"
                        value={people.civil}
                        onChange={val => people.race = CivilPeopleMiddle[val] }
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label="Children"
                        help="How many sibling you have"
                        value={people.children.toString()}
                        onChange={val => people.children = parseInt(val) }
                    />
                </InputContainer>
                <EmptyContainer spaces={2} />
            </RowContainer>

            {/* 4º row */}
            <RowContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label="Activy"
                        help="How many exercise you get"
                        value={people.activity}
                        onChange={(val: string) => people.activity = PhisicalActivityPeopleMiddle[val] }
                    />
                </InputContainer>
                <InputContainer spaces={6}>
                    <SmartInput
                        label="Illness & Alergies"
                        help="Type any illnes or allergy you have"
                        value={""}
                        onChange={(val: string) => {} }
                    />
                </InputContainer>
            </RowContainer>
        </div>
    );
};

export default Fields;
