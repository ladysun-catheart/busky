import {
    CivilPeople,
    ColorFantasy,
    ColorHairRegular,
    ColorEyeRegular,
    RacePeople,
    PhisicalActivityPeople,
    SexPeople,
} from "./index";
import {createOptionListFromEnum, SelectInfo} from "../../../utils/select";

const optionsSexPeople = (lng: string, path: string): Array<SelectInfo> => createOptionListFromEnum(SexPeople, lng, path)
const optionsColorFantasy = (lng: string, path: string): Array<SelectInfo> => createOptionListFromEnum(ColorFantasy, lng, path)
const optionsColorEye = (lng: string, path: string): Array<SelectInfo> =>
    createOptionListFromEnum(ColorEyeRegular, lng, path)
        .concat(createOptionListFromEnum(ColorFantasy, lng, path))
const optionsColorHair = (lng: string, path: string): Array<SelectInfo> =>
    createOptionListFromEnum(ColorHairRegular, lng, path)
        .concat(createOptionListFromEnum(ColorFantasy, lng, path))
const optionsCivilPeople = (lng: string, path: string): Array<SelectInfo> => createOptionListFromEnum(CivilPeople, lng, path)
const optionsRacePeople = (lng: string, path: string): Array<SelectInfo> => createOptionListFromEnum(RacePeople, lng, path)
const optionsPhisicalActivityPeople = (lng: string, path: string): Array<SelectInfo> => createOptionListFromEnum(PhisicalActivityPeople, lng, path)

export {
    optionsSexPeople,
    optionsColorFantasy,
    optionsColorEye,
    optionsColorHair,
    optionsCivilPeople,
    optionsRacePeople,
    optionsPhisicalActivityPeople,
}