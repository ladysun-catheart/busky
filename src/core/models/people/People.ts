

import SexPeople from "./enum/SexPeople";
import ColorHairRegular from "./enum/ColorHairRegular";
import ColorFantasy from "./enum/ColorFantasy";
import ColorEyeRegular from "./enum/ColorEyeRegular";
import RacePeople from "./enum/RacePeople";
import CivilPeople from "./enum/CivilPeople";
import PhisicalActivityPeople from "./enum/PhisicalActivityPeople";

class People {
    private _name: string = ''
    private _age: number = 0
    private _sex: SexPeople = SexPeople.male
    private _hair: (ColorHairRegular & ColorFantasy) = ColorHairRegular.brunette as (ColorHairRegular & ColorFantasy)
    private _eyes: (ColorEyeRegular & ColorFantasy) = ColorEyeRegular.brown as (ColorEyeRegular & ColorFantasy)
    private _weight: number = 0
    private _height: number = 0
    private _race: RacePeople = RacePeople.caucasian
    private _civil: CivilPeople = CivilPeople.single
    private _children: number = 0
    private _activity: PhisicalActivityPeople = PhisicalActivityPeople.none
    private _illnessAlergieList: Array<string> = []

    constructor() {}

    // Setters
    set name(value: string) {
        this._name = value
    }

    set age(value: number) {
        this._age = value
    }

    set sex(value: SexPeople) {
        this._sex = value
    }

    set hair(value: ColorHairRegular & ColorFantasy) {
        this._hair = value
    }

    set eyes(value: ColorEyeRegular & ColorFantasy) {
        this._eyes = value
    }

    set weight(value: number) {
        this._weight = value
    }

    set height(value: number) {
        this._height = value
    }

    set race(value: RacePeople) {
        this._race = value
    }

    set civil(value: CivilPeople) {
        this._civil = value
    }

    set children(value: number) {
        this._children = value
    }

    set activity(value: PhisicalActivityPeople) {
        this._activity = value
    }

    set illnessAlergieList(value: Array<string>) {
        this._illnessAlergieList = value
    }


    // Getter
    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    get sex(): SexPeople {
        return this._sex;
    }

    get hair(): ColorHairRegular & ColorFantasy {
        return this._hair;
    }

    get eyes(): ColorEyeRegular & ColorFantasy {
        return this._eyes;
    }
    get weight(): number {
        return this._weight;
    }

    get height(): number {
        return this._height;
    }

    get race(): RacePeople {
        return this._race;
    }

    get civil(): CivilPeople {
        return this._civil;
    }

    get children(): number {
        return this._children;
    }

    get activity(): PhisicalActivityPeople {
        return this._activity;
    }

    get illnessAlergieList(): Array<string> {
        return this._illnessAlergieList;
    }
}

export default People
