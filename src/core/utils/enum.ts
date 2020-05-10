const listFromEnum = (EnumType: any): Array<string> =>
    Object.entries(EnumType).map(([key, value]): string => value as string)
const getFirstEnum = (EnumType: any): string =>
    EnumType[Object.entries(EnumType)[0][1] as string]

export {
    listFromEnum,
    getFirstEnum
}