import {listFromEnum} from "../../../utils/enum";
import {
    CivilPeople,
    ColorFantasy,
    ColorHairRegular,
    ColorEyeRegular,
    RacePeople,
    PhisicalActivityPeople,
    SexPeople,
} from "./index";

const listSexPeople = listFromEnum(SexPeople)
const listColorFantasy = listFromEnum(ColorFantasy)
const listColorEyeRegular = listFromEnum(ColorEyeRegular).concat(listColorFantasy)
const listColorHairRegular = listFromEnum(ColorHairRegular).concat(listColorFantasy)
const listCivilPeople = listFromEnum(CivilPeople)
const listRacePeople = listFromEnum(RacePeople)
const listPhisicalActivityPeople = listFromEnum(PhisicalActivityPeople)

export {
    listSexPeople,
    listColorFantasy,
    listColorEyeRegular,
    listColorHairRegular,
    listCivilPeople,
    listRacePeople,
    listPhisicalActivityPeople,
}