import {ColorFantasy, ColorHairRegular, SexPeople, ColorEyeRegular, RacePeople, CivilPeople, PhisicalActivityPeople} from "./enum"
import People from "./People";

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

    private initHeight: number = 0
    private endHeight: number = 0
    private initWeight: number = 0
    private endWeight: number = 0
    
    constructor(){}

    public withName(value: string) {
        this.name = value
        return this;
    }

    public withAge(value: number) {
        this.age = value
        return this;
    }

    public withSex(value: SexPeople) {
        this.sex = value
        return this;
    }

    public withHair(value: ColorHairRegular & ColorFantasy) {
        this.hair = value
        return this;
    }

    public withEyes(value: ColorEyeRegular & ColorFantasy) {
        this.eyes = value
        return this;
    }

    public withWeight(value: number) {
        this.weight = value
        return this;
    }

    public withHeight(value: number) {
        this.height = value
        return this;
    }

    public withRace(value: RacePeople) {
        this.race = value
        return this;
    }

    public withCivil(value: CivilPeople) {
        this.civil = value
        return this;
    }

    public withChildren(value: number) {
        this.children = value
        return this;
    }

    public withActivity(value: PhisicalActivityPeople) {
        this.activity = value
        return this;
    }

    public withIllnessAlergieList(value: Array<string>) {
        this.illnessAlergieList = value
        return this;
    }

    public withInitHeight(value: number) {
        this.initHeight = value
        return this
    }

    public withEndHeight(value: number) {
        this.endHeight = value
        return this
    }

    public withInitWeight(value: number) {
        this.initWeight = value
        return this
    }

    public withEndWeight(value: number) {
        this.endWeight = value
        return this
    }

    public build(): People {
        const newPeople = new People()

        newPeople.name = this.name
        newPeople.age = this.age
        newPeople.sex = this.sex
        newPeople.hair = this.hair
        newPeople.eyes = this.eyes
        newPeople.weight = this.weight
        newPeople.height = this.height
        newPeople.race = this.race
        newPeople.civil = this.civil
        newPeople.children = this.children
        newPeople.activity = this.activity
        newPeople.illnessAlergieList = this.illnessAlergieList

        newPeople.initHeight = this.initHeight
        newPeople.endHeight = this.endHeight
        newPeople.initWeight = this.initWeight
        newPeople.endWeight = this.endWeight

        return newPeople
    }
}

export default PeopleBuilder