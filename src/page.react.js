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
            "z-index": this.props.zIndex,
            "background": this.props.background
        };
        return (
            <div className="page" style={style}>he213123123123123o world</div>
        );
    }
});

module.exports = Page;