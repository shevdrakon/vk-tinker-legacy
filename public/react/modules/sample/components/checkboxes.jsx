import React from 'react'

import Checkbox from '../../../components/react-mdl/checkbox.jsx'

const Checkboxes = () => {
    return <div>
        <Checkbox label="With ripple" ripple checked />
        <Checkbox label="Disabled Unchecked" disabled />
        <Checkbox label="Disabled Checked" checked disabled />
    </div>
}

export default Checkboxes