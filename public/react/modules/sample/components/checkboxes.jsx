import React from 'react'
import {Checkbox} from 'react-mdl'

const Checkboxes = () => {
    return <div>
        <Checkbox label="With ripple" ripple defaultChecked />
        <Checkbox label="Without ripple" />
        <Checkbox label="Disabled Unchecked" disabled />
        <Checkbox label="Disabled Checked" defaultChecked disabled />
    </div>
}

export default Checkboxes