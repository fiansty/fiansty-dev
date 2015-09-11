var React = require('react');

var Page = React.createClass({
    getDefaultProps: function () {
        return {
            screenH: "10rem",
            top: "0px",
            zIndex: 1,
            background: "#ffffff"
        }
    },
    componentWillMount: function () {

    },
    componentDidMount: function () {

    },
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "zIndex": this.props.zIndex,
            "background": this.props.background
        };
        return (
            <div className="page" style={style}>hello new World</div>
        );
    }
});

module.exports = Page;
