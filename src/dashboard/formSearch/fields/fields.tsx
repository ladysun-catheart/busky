import React, {useState, useEffect} from 'react';
import {EmptyContainer, InputContainer, RowContainer} from "../containers";
import {SmartInput, SmartSelect, SmartMultiInput} from "../../../core/components/smartFormCompos";
import {
    ColorFantasy,
    ColorHairRegular,
    SexPeopleMiddle,
    ColorHairRegularMiddle,
    ColorFantasyMiddle,
    ColorEyeRegularMiddle,
    RacePeopleMiddle,
    CivilPeopleMiddle,
    PhisicalActivityPeopleMiddle,
    optionsSexPeople,
    optionsColorEye,
    optionsColorHair, optionsCivilPeople, optionsRacePeople, optionsPhisicalActivityPeople
} from "../../../core/models/people/enum";
import People from '../../../core/models/people';
import {listSexPeople} from "../../../core/models/people/enum/list";
import i18n from '../../../core/i18n'
import {SelectInfo} from "../../../core/utils/select";
import MultiInput from '../../../core/components/smartFormCompos/pieces/MultiInput';

type Props = {
    people: People,
    onChangePeople: (people: People) => void
}
const Fields: React.FC<Props> = ({people, onChangePeople}) => {
    const [lgn, setLegn] = useState('en')

    const [optionsSexPeopleI18n, setOptionsSexPeopleI18n] = useState<Array<SelectInfo>>([])
    const [optionsColorEyeI18n, setOptionsColorEyeI18n] = useState<Array<SelectInfo>>([])
    const [optionsColorHairI18n, setOptionsColorHairI18n] = useState<Array<SelectInfo>>([])
    const [optionsCivilPeopleI18n, setOoptionsCivilPeopleI18n] = useState<Array<SelectInfo>>([])
    const [optionsRacePeopleI18n, setOptionsRacePeopleI18n] = useState<Array<SelectInfo>>([])

    const [optionsPhisicalActivityPeopleI18n, setOptionsPhisicalActivityPeopleI18n] = useState<Array<SelectInfo>>([])
    useEffect(() => {
        setOptionsSexPeopleI18n(optionsSexPeople(lgn, 'people.sex.enum.xxx'))
        setOptionsColorEyeI18n(optionsColorEye(lgn, 'people.eyes.enum.xxx'))
        setOptionsColorHairI18n(optionsColorHair(lgn, 'people.hair.enum.xxx'))
        setOoptionsCivilPeopleI18n (optionsCivilPeople(lgn, 'people.civil.enum.xxx'))
        setOptionsRacePeopleI18n (optionsRacePeople(lgn, 'people.race.enum.xxx'))
        setOptionsPhisicalActivityPeopleI18n(optionsPhisicalActivityPeople(lgn, 'people.activity.enum.xxx'))
    }, [lgn])

    return (
        <div>
            {/* 1º row */}
            <RowContainer>
                <InputContainer spaces={4}>
                    <SmartInput
                        label={i18n.t('people.name.label')}
                        help="Your complete name including surnames"
                        value={people.name}
                        onChange={val => { people.name = val; onChangePeople(people) }}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label={i18n.t('people.age.label')}
                        help="How old are you?"
                        value={people.age.toString()}
                        onChange={val => people.age = parseInt(val)}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartSelect
                        label={i18n.t('people.sex.label')}
                        help="Your gender"
                        values={[]}
                        options={optionsSexPeopleI18n}
                        onChange={(val: string) => people.sex = SexPeopleMiddle[val] }
                    />
                </InputContainer>
            </RowContainer>

            {/* 1º row */}
            <RowContainer>
                <InputContainer spaces={2}>
                    <SmartSelect
                        label={i18n.t('people.hair.label')}
                        help="Select the hair color"
                        values={[]}
                        options={optionsColorHairI18n}
                        onChange={val => people.hair = (ColorHairRegularMiddle[val] || ColorFantasyMiddle[val]) as ColorHairRegular & ColorFantasy}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartSelect
                        label={i18n.t('people.eyes.label')}
                        help="Select the eye color"
                        values={[]}
                        options={optionsColorEyeI18n}
                        onChange={val => people.eyes = (ColorEyeRegularMiddle[val] || ColorFantasyMiddle[val]) as ColorHairRegular & ColorFantasy}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartMultiInput
                        label={i18n.t('people.weight.label')}
                        help="Type the cms weight"
                        valueInit={people.initWeight.toString()}
                        valueEnd={people.endWeight.toString()}
                        onChangeInit={val => people.initWeight = parseInt(val)}
                        onChangeEnd={val => people.endWeight = parseInt(val)}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartMultiInput
                        label={i18n.t('people.height.label')}
                        help="Type the cms height"
                        valueInit={people.initHeight.toString()}
                        valueEnd={people.endHeight.toString()}
                        onChangeInit={val => people.initHeight = parseInt(val)}
                        onChangeEnd={val => people.endHeight = parseInt(val)}
                    />
                </InputContainer>
            </RowContainer>

            {/* 3º row */}
            <RowContainer>
                <InputContainer spaces={2}>
                    <SmartSelect
                        label={i18n.t('people.race.label')}
                        help="Select your physiognomy depending on your race or ethnical group"
                        values={[]}
                        options={optionsRacePeopleI18n}
                        onChange={val => people.race = RacePeopleMiddle[val] }
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartSelect
                        label={i18n.t('people.civil.label')}
                        help="Select the civil status"
                        values={[]}
                        options={optionsCivilPeopleI18n}
                        onChange={val => people.race = CivilPeopleMiddle[val] }
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label={i18n.t('people.children.label')}
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
                    <SmartSelect
                        label={i18n.t('people.activity.label')}
                        help="How many exercise you get"
                        values={[]}
                        options={optionsPhisicalActivityPeopleI18n}
                        onChange={(val: string) => people.activity = PhisicalActivityPeopleMiddle[val] }
                    />
                </InputContainer>
                <InputContainer spaces={6}>
                    <SmartInput
                        label={i18n.t('people.illnessAlergieList.label')}
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
