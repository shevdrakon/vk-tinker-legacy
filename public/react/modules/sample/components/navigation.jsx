import React from 'react'

import Navigation from '../../../components/navigation/navigation.jsx'
import NavigationDropdown from '../../../components/navigation/navigation-dropdown.jsx'

const SampleNavigation = () => {
    const optionValues = [
        {
            value: "option1",
            title: "Option 1"
        }, {
            value: "option2",
            title: "Option 2"
        }
    ]

    return <Navigation>
        <NavigationDropdown onSelect={(eventKey) => alert(eventKey.title)} title="Select value">{optionValues}</NavigationDropdown>
    </Navigation>
}

export default SampleNavigation