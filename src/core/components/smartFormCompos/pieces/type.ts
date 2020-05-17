export type InputProps = {
    value: string,
    onChange: (val: string) => void
}

export type MultiInputProps = {
    valueInit: string,
    valueEnd: string,
    onChangeInit: (val: string) => void,
    onChangeEnd: (val: string) => void,
}

export type SelectProps = {
    value: string,
    options: Array<{
        id: string,
        label: string
    }>,
    onChange: (val: string) => void
}

export type InputTagProps = {
    values: Array<string>,
    onChange: (val: Array<string>) => void
}