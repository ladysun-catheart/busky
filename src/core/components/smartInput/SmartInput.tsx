import React from 'react'

const SmartInput: React.FC = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>
                    <span>Label</span>
                    <button>?</button>
                </div>
                <div>
                    <button>close</button>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: '1'}}>
                    <input style={{width: '100%'}} type="text" />
                </div>
            </div>
        </div>
    )
}

export default SmartInput