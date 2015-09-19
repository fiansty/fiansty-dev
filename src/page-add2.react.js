var React = require('react');
var Q = require('q');

var PageAdd2 = React.createClass({
    getDefaultProps: function () {
        return {
            screenH: "10rem",
            top: "1px",
            zIndex: 0,
            background: "#ffffff"
        }
    },
    getInitialState: function () {
        return {
            isHide: false
        }
    },
    componentWillMount: function () {

    },
    componentDidMount: function () {

    },
    _play: function () {
        this.setState({isHide: false});
        console.log('page-add1')
    },
    _hide: function () {
        this.setState({isHide: true});
    },
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "zIndex": this.props.zIndex,
            //"background": this.props.background,
            "visibility": this.state.isHide? 'hidden': 'visible'
        };
        return (
            <div className="page-add2" id="page9" style={style}>

            </div>
        );
    }
});

module.exports = PageAdd2;
