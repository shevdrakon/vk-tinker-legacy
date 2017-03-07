import React from 'react'

export default class ListColumn extends React.Component {
    static propTypes = {
        orderBy: React.PropTypes.string,
        orderDir: React.PropTypes.oneOf(['asc', 'desc']),
        name: React.PropTypes.string,
        field: React.PropTypes.string,
        template: React.PropTypes.func
    };
}