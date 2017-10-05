console.log('start');

const ReactDOM = require('react-dom')
const React = require('react')

const ButtonView = (props) => {
    return <button 
    onClick={props.handleClick}
    style={{
         color: 'red'
     }}>don't click me!  (you clicked {props.clickCounter}) 
     </button>
}

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {clickCounter: 0}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log('yo')
        console.log(this)
        this.setState({clickCounter: ++this.state.clickCounter})
    }

    render() {
       return <ButtonView clickCounter={this.state.clickCounter}
       handleClick = {this.handleClick} />
    }
}

ReactDOM.render(
    <Button clickCounter={0}/>,
    document.getElementById('content')
)
