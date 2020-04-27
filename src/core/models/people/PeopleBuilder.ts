import People, {
    CivilPeople,
    ColorEyeRegular,
    ColorFantasy,
    ColorHairRegular,
    PhisicalActivityPeople,
    RacePeople,
    SexPeople
} from "./People";

class PeopleBuilder {
    private name: string = ''
    private age: number = 0
    private sex: SexPeople = SexPeople.male
    private hair: (ColorHairRegular & ColorFantasy) = ColorHairRegular.brunette as (ColorHairRegular & ColorFantasy)
    private eyes: (ColorEyeRegular & ColorFantasy) = ColorEyeRegular.brown as (ColorEyeRegular & ColorFantasy)
    private weight: number = 0
    private height: number = 0
    private race: RacePeople = RacePeople.caucasian
    private civil: CivilPeople = CivilPeople.single
    private children: number = 0
    private activity: PhisicalActivityPeople = PhisicalActivityPeople.none
    private illnessAlergieList: Array<string> = []

    private _people: People

    constructor(){
        this._people = new People()
    }

    public setName(value: string) {
        this._people.name = value
    }

    public setAge(value: number) {
        this._people.age = value
    }

    public setSex(value: SexPeople) {
        this._people.sex = value
    }

    public setHair(value: ColorHairRegular & ColorFantasy) {
        this._people.hair = value
    }

    public setEyes(value: ColorEyeRegular & ColorFantasy) {
        this._people.eyes = value
    }

    public setWeight(value: number) {
        this._people.weight = value
    }

    public setHeight(value: number) {
        this._people.height = value
    }

    public setRace(value: RacePeople) {
        this._people.race = value
    }

    public setCivil(value: CivilPeople) {
        this._people.civil = value
    }

    public setChildren(value: number) {
        this._people.children = value
    }

    public setActivity(value: PhisicalActivityPeople) {
        this._people.activity = value
    }

    public setIllnessAlergieList(value: Array<string>) {
        this._people.illnessAlergieList = value
    }

    get people(): People {
        return this._people
    }
}

export default PeopleBuilder