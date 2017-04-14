import React from 'react'

import UserNavigation from '../../../components/navigation/user-navigation.jsx'
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

    return <UserNavigation>
        <NavigationDropdown onSelect={(eventKey) => alert(eventKey.title)}>{optionValues}</NavigationDropdown>
    </UserNavigation>
}

export default SampleNavigation