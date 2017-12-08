import React from 'react'
import PropTypes from 'prop-types'

import {LinearProgress as LinearProgressMaterial} from 'material-ui'

const LinearProgress = (props) => {
    const {mode, ...rest} = props

    return <LinearProgressMaterial color="accent" mode={mode} {...rest} />
}

LinearProgress.defaultProps = {
    mode: "indeterminate"
}

LinearProgress.propTypes = {
    mode: PropTypes.oneOf(['indeterminate', 'determinate', 'buffer', 'query'])
}

export default LinearProgress