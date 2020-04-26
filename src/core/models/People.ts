enum SexPeople {
    male = 'male',
    female = 'female'
}

enum ColorHairRegular {
    brunette = 'brunette',
    blonde='blonde',
    red='red',
    black='black',
    white='white'
}

enum ColorEyeRegular {
    brown='brown',
    hazel='hazel',
    blue='blue',
    green='green',
    gray='gray',
    amber='amber'
}

enum ColorFantasy {
    red='red',
    orange='orange',
    yellow='yellow',
    green='green',
    blue='blue',
    indigo='indigo',
    violet='violet',
    pink='pink',
    white='white'
}

enum RacePeople {
    caucasian='caucasian',
    negroid='negroid',
    mediterranean='mediterranean',
    gypsy='gypsy',
    maghreb='maghreb',
    middleEastern='middle eastern',
    asian='asian',
    hispanic='hispanic',
    indian='indian',
    mongoloid='mongoloid',
    australoid='australoid'
}

enum CivilPeople {
    single='single',
    married='married',
    separated='separated',
    widowed='widowed',
}

enum PhisicalActivityPeople {
    none='none',
    low='low',
    moderate='moderate',
    high='high',
}

class People {
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
}

export default People
export {
    People,
    SexPeople,
    ColorHairRegular,
    ColorEyeRegular,
    ColorFantasy,
    RacePeople,
    CivilPeople,
    PhisicalActivityPeople,
}