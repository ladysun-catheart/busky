import i18n from '../i18n'

export type SelectInfo = {
    id: string,
    label: string
}
const createOptionListFromEnum = (EnumType: any, lng: string, path: string = 'xxx'): Array<SelectInfo> => (
    Object.entries(EnumType).map(([key, value]): SelectInfo => {
        const label = i18n.t(path.replace('xxx', key as string), {lng})
        return {id: value, label} as SelectInfo
    })
)

export {
    createOptionListFromEnum
}