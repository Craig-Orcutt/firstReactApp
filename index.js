let HelloWorld = React.createClass({

    propTypes : {
        name: React.PropTypes.string.isRequired
    },

    getDefaultProps: function (){
        return {
            name: 'Craig'
        }
    },

    getInitialState: function() {
        return {
            value: 1
        }
    },

    // componentDidMount : function () {

    // },

    _addByOne : function () {
        this.setState({
            value: this.state.value + 1
        })
    },

    render : function() {
        let greeting = 'World'

        if(this.props.isPerson){
            greeting = (<Person name={this.props.name}/>)
        }
        return (
        <div>
            <h1>Hello {greeting}</h1>
            {this.state.value}
            <button onClick={this._addByOne}>Click Me</button>
        </div>
            
        )
    }
});

let Person = React.createClass({

    propTypes : {
        name: React.PropTypes.string,
        isPerson : React.PropTypes.bool
    },

    getDefaultProps: function (){
        return {
            name: 'Craig'
        }
    },

    render : function() {

        return (
            <span>{this.props.name}</span>
            
        )
    }
});

ReactDOM.render(
    <HelloWorld name='Tim' isPerson={false}/>,
    document.getElementById('area')
);