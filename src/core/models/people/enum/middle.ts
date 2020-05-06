import {
    CivilPeople,
    ColorFantasy,
    ColorHairRegular,
    ColorEyeRegular,
    RacePeople,
    PhisicalActivityPeople,
    SexPeople,
} from "./index";

const SexPeopleMiddle: { [key: string]: SexPeople } = SexPeople as any;
const ColorHairRegularMiddle: { [key: string]: ColorHairRegular } = ColorHairRegular as any;
const ColorEyeRegularMiddle: { [key: string]: ColorEyeRegular } = ColorEyeRegular as any;
const ColorFantasyMiddle: { [key: string]: ColorFantasy } = ColorFantasy as any;
const RacePeopleMiddle: { [key: string]: RacePeople } = RacePeople as any;
const CivilPeopleMiddle: { [key: string]: RacePeople } = CivilPeople as any;
const PhisicalActivityPeopleMiddle: { [key: string]: PhisicalActivityPeople } = PhisicalActivityPeople as any;

export {
    SexPeopleMiddle,
    ColorHairRegularMiddle,
    ColorEyeRegularMiddle,
    ColorFantasyMiddle,
    RacePeopleMiddle,
    CivilPeopleMiddle,
    PhisicalActivityPeopleMiddle,
}