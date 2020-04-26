import React, {ComponentType, MouseEvent} from 'react'
import { LabelProps } from './label/Label'

const factory = (
    Label: React.FC<LabelProps>,
    Element: React.FC
): ComponentType => {
    const hocComponent = ({...props}) => {

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Label
                    onClickHelp={() => console.log('help')}
                    onClickClose={() => console.log('close')}
                />
                <Element />
            </div>
        )
    }

    hocComponent.propTypes = {}

    return hocComponent
}

export default factory