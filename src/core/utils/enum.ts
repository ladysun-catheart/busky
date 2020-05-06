const listFromEnum = (EnumType: any): Array<string> =>
    Object.entries(EnumType).map(([key, value]): string => value as string)

export {
    listFromEnum
}