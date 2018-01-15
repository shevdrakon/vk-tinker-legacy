import React from 'react'
import PropTypes from 'prop-types'

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'

import indigo from 'material-ui/colors/indigo'
import purple from 'material-ui/colors/purple'

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: Object.assign(purple, {
            A200: '#9C27B0'
        }),
    },
    typography: {
        button: {
            fontSize: '12px',
        },
    },
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