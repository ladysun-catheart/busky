import React from 'react';
import {SmartInput} from "../../core/components/smartFormCompos";
import People from "../../core/models/people/People";
import {SexPeople, ColorFantasy, ColorHairRegular, PeopleBuilder} from "../../core/models/people";
import ColorEyeRegular from "../../core/models/people/enum/ColorEyeRegular";
import RacePeople from "../../core/models/people/enum/RacePeople";
import PhisicalActivityPeople from "../../core/models/people/enum/PhisicalActivityPeople";
import {EmptyContainer, InputContainer, RowContainer} from "./containers";

const FormSearch: React.FC = () => {
    const people: People = (new PeopleBuilder())
        .withAge(20)
        .build()
    const SexPeopleMiddle: { [key: string]: SexPeople } = SexPeople as any;
    const ColorHairRegularMiddle: { [key: string]: ColorHairRegular } = ColorHairRegular as any;
    const ColorEyeRegularMiddle: { [key: string]: ColorEyeRegular } = ColorEyeRegular as any;
    const ColorFantasyMiddle: { [key: string]: ColorFantasy } = ColorFantasy as any;
    const RacePeopleMiddle: { [key: string]: RacePeople } = RacePeople as any;
    const PhisicalActivityPeopleMiddle: { [key: string]: PhisicalActivityPeople } = PhisicalActivityPeople as any;

    return (
        <div>
            {/* 1º row */}
            <RowContainer>
                <InputContainer spaces={4}>
                    <SmartInput
                        label="Name"
                        help="Your complete name including surnames"
                        value={people.name}
                        onChange={val => people.name = val}
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
                        onChange={val => people.race = RacePeopleMiddle[val] }
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

export default FormSearch;
