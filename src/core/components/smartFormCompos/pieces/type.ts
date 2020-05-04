export type InputProps = {
    value: string,
    onChange: (val: string) => void
}

export type SelectProps = {
    values: Array<string>,
    options: Array<{
        id: string,
        label: string
    }>,
    onChange: (val: string) => void
}