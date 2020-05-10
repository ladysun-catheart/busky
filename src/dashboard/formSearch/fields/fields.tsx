import React, {useState, useEffect} from 'react';
import {EmptyContainer, InputContainer, RowContainer} from "../containers";
import {SmartInput, SmartSelect, SmartMultiInput} from "../../../core/components/smartFormCompos";
import {
    SexPeople,
    ColorHairRegular,
    ColorEyeRegular,
    ColorFantasy,
    RacePeople,
    CivilPeople,
    PhisicalActivityPeople,

    SexPeopleMiddle,
    ColorHairRegularMiddle,
    ColorFantasyMiddle,
    ColorEyeRegularMiddle,
    RacePeopleMiddle,
    CivilPeopleMiddle,
    PhisicalActivityPeopleMiddle,

    optionsSexPeople,
    optionsColorEye,
    optionsColorHair,
    optionsCivilPeople,
    optionsRacePeople,
    optionsPhisicalActivityPeople
} from "../../../core/models/people/enum";
import People, {PeopleBuilder} from '../../../core/models/people';
import i18n from '../../../core/i18n'
import {getFirstOption, SelectInfo} from "../../../core/utils/select";
import {getFirstEnum} from "../../../core/utils/enum";

type Props = {
    onChangePeople: (people: People) => void
}

const Fields: React.FC<Props> = ({onChangePeople}) => {
    const [lgn, setLgn] = useState('en')

    const [modified, setModified] = useState<People>(
        (new PeopleBuilder())
            .withAge(20)
            .withInitHeight(140)
            .withEndHeight(190)
            .withInitWeight(40)
            .withEndWeight(110)
            .build()
    )

    const [optionsSexPeopleI18n, setOptionsSexPeopleI18n] = useState<Array<SelectInfo>>([])
    const [optionsColorEyeI18n, setOptionsColorEyeI18n] = useState<Array<SelectInfo>>([])
    const [optionsColorHairI18n, setOptionsColorHairI18n] = useState<Array<SelectInfo>>([])
    const [optionsCivilPeopleI18n, setOptionsCivilPeopleI18n] = useState<Array<SelectInfo>>([])
    const [optionsRacePeopleI18n, setOptionsRacePeopleI18n] = useState<Array<SelectInfo>>([])
    const [optionsPhisicalActivityPeopleI18n, setOptionsPhisicalActivityPeopleI18n] = useState<Array<SelectInfo>>([])

    useEffect(() => {
        setOptionsSexPeopleI18n(optionsSexPeople(lgn, 'people.sex.enum.xxx'))
        setOptionsColorEyeI18n(optionsColorEye(lgn, 'people.eyes.enum.xxx'))
        setOptionsColorHairI18n(optionsColorHair(lgn, 'people.hair.enum.xxx'))
        setOptionsCivilPeopleI18n (optionsCivilPeople(lgn, 'people.civil.enum.xxx'))
        setOptionsRacePeopleI18n (optionsRacePeople(lgn, 'people.race.enum.xxx'))
        setOptionsPhisicalActivityPeopleI18n(optionsPhisicalActivityPeople(lgn, 'people.activity.enum.xxx'))
    }, [lgn])

    const onChangeField = (fieldChangeFunc: () => void) => {
        fieldChangeFunc()
        setModified(modified.clone())
        onChangePeople(modified)
    }

    return (
        <div>
            {/* 1º row */}
            <RowContainer>
                <InputContainer spaces={4}>
                    <SmartInput
                        label={i18n.t('people.name.label')}
                        help="Your complete name including surnames"
                        value={modified.name}
                        onChange={val => onChangeField(() => {
                            modified.name = val
                        })}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label={i18n.t('people.age.label')}
                        help="How old are you?"
                        value={modified.age.toString()}
                        onChange={val => onChangeField(() => {
                            modified.age = parseInt(val)
                        })}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartSelect
                        label={i18n.t('people.sex.label')}
                        help="Your gender"
                        value={modified.sex || getFirstOption(optionsSexPeopleI18n)}
                        options={optionsSexPeopleI18n}
                        onChange={(val: string) => onChangeField(() => {
                            modified.sex = SexPeopleMiddle[val]
                        })}
                    />
                </InputContainer>
            </RowContainer>

            {/* 2º row */}
            <RowContainer>
                <InputContainer spaces={2}>
                    <SmartSelect
                        label={i18n.t('people.hair.label')}
                        help="Select the hair color"
                        value={modified.hair || getFirstOption(optionsColorHairI18n)}
                        options={optionsColorHairI18n}
                        onChange={(val: string) => onChangeField(() => {
                            modified.hair = (ColorHairRegularMiddle[val] || ColorFantasyMiddle[val]) as ColorHairRegular & ColorFantasy
                        })}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartSelect
                        label={i18n.t('people.eyes.label')}
                        help="Select the eye color"
                        value={modified.eyes || getFirstOption(optionsColorEyeI18n)}
                        options={optionsColorEyeI18n}
                        onChange={(val: string) => onChangeField(() => {
                            modified.eyes = (ColorEyeRegularMiddle[val] || ColorFantasyMiddle[val]) as ColorHairRegular & ColorFantasy
                        })}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartMultiInput
                        label={i18n.t('people.weight.label')}
                        help="Type the cms weight"
                        valueInit={modified.initWeight.toString()}
                        valueEnd={modified.endWeight.toString()}
                        onChangeInit={val => onChangeField(() => {
                            modified.initWeight = parseInt(val)
                        })}
                        onChangeEnd={val => onChangeField(() => {
                            modified.endWeight = parseInt(val)
                        })}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartMultiInput
                        label={i18n.t('people.height.label')}
                        help="Type the cms height"
                        valueInit={modified.initHeight.toString()}
                        valueEnd={modified.endHeight.toString()}
                        onChangeInit={val => onChangeField(() => {
                            modified.initHeight = parseInt(val)
                        })}
                        onChangeEnd={val => onChangeField(() => {
                            modified.endHeight = parseInt(val)
                        })}
                    />
                </InputContainer>
            </RowContainer>

            {/* 3º row */}
            <RowContainer>
                <InputContainer spaces={2}>
                    <SmartSelect
                        label={i18n.t('people.race.label')}
                        help="Select your physiognomy depending on your race or ethnical group"
                        value={modified.race || getFirstOption(optionsRacePeopleI18n)}
                        options={optionsRacePeopleI18n}
                        onChange={(val: string) => onChangeField(() => {
                            modified.race = RacePeopleMiddle[val]
                        })}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartSelect
                        label={i18n.t('people.civil.label')}
                        help="Select the civil status"
                        value={modified.civil || getFirstOption(optionsCivilPeopleI18n)}
                        options={optionsCivilPeopleI18n}
                        onChange={(val: string) => onChangeField(() => {
                            modified.civil = CivilPeopleMiddle[val]
                        })}
                    />
                </InputContainer>
                <InputContainer spaces={2}>
                    <SmartInput
                        label={i18n.t('people.children.label')}
                        help="How many sibling you have"
                        value={modified.children.toString()}
                        onChange={val => onChangeField(() => {
                            modified.children = parseInt(val)
                        })}
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
                        value={modified.activity || getFirstOption(optionsPhisicalActivityPeopleI18n)}
                        options={optionsPhisicalActivityPeopleI18n}
                        onChange={(val: string) => onChangeField(() => {
                            modified.activity = modified.activity = PhisicalActivityPeopleMiddle[val]
                        })}
                    />
                </InputContainer>
                <InputContainer spaces={6}>
                    <SmartInput
                        label={i18n.t('people.illnessAlergieList.label')}
                        help="Type any illnes or allergy you have"
                        value={''}
                        onChange={val => onChangeField(() => {
                            modified.illnessAlergieList = []
                        })}
                    />
                </InputContainer>
            </RowContainer>
        </div>
    );
};

export default Fields;
