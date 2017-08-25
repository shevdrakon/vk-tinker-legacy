import React, {PropTypes} from 'react'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'

import indigo from 'material-ui/colors/indigo'
import deepPurple from 'material-ui/colors/deepPurple'

const theme = createMuiTheme({
    palette: createPalette({
        primary: indigo,
        accent: deepPurple
    }),
    overrides: {
        MuiBadge: {
            badge: {
                width: '20px',
                height: '20px',
                'font-size': '9px',
            },
            colorPrimary: {
                'background-color': '#f44336'
            }
        }
    }
})

const Palette = (props) => {
    return (
        <MuiThemeProvider theme={theme}>
            {props.children}
        </MuiThemeProvider>
    )
}

Palette.propTypes = {
    children: PropTypes.node
}

export default Palette