import  React, {Component, PropTypes} from 'react'
import {SplitButton, MenuItem} from 'react-bootstrap'

export default class SelectDropdown extends Component {
    static propTypes={
        children: PropTypes.arrayOf(PropTypes.shape(
            {
                value: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired
            }
        )),
        placeholder: PropTypes.string,
        onSelect: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = { title: props.children[0].title }

        this.selectItem = this.selectItem.bind(this)
    }

    selectItem(eventKey, event){
        this.setState({
            title: eventKey.title
        });

        if(this.props.onSelect)
            this.props.onSelect(eventKey)
    }

    render() {
        const {children} = this.props
        const {title} = this.state
        return <SplitButton title={title} bsStyle="default" onSelect={this.selectItem}>
            {children.map(child => <MenuItem eventKey={child}>{child.title}</MenuItem>)}
        </SplitButton>
    }
}


