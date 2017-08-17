import React, {PropTypes} from 'react';

const HighlightText = ({search, children, className, searchClassName}) => {
    const index = children.toLowerCase().indexOf(search.toLowerCase())

    if (index < 0) return <span className={className}>{children}</span>

    const first = children.substring(0, index)
    const highlighted = children.substring(index, index + search.length)
    const last = children.substring(index + search.length)
    
    return <span className={className}>
            {first}<span className={searchClassName}>{highlighted}</span>{last}
        </span>
}

HighlightText.defaultProps = {
    search: '',
    children: ''
}

HighlightText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
    search: PropTypes.string,
    searchClassName: PropTypes.string,
}

export default HighlightText