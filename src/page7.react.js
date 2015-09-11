var React = require('react');
var Q = require('q');

var Page7 = React.createClass({
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

        }
    },
    componentWillMount: function () {

    },
    componentDidMount: function () {

    },
    _play: function () {

    },
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "zIndex": this.props.zIndex,
            "background": this.props.background
        };
        return (
            <div className="page7" style={style}>
                <div className="p7-container">
                    <div className="p7-sec1">
                        <img src="src/img/p7-sec1.png" alt=""/>
                    </div>
                    <div className="p7-sec2">
                        <img src="src/img/p7-sec2.png" alt=""/>
                    </div>
                    <div className="p7-sec3">
                        <img src="src/img/p7-sec3.png" alt=""/>
                    </div>
                    <div className="p7-word1">
                        <img src="src/img/p7-word1.png" alt=""/>
                    </div>
                    <div className="p7-word2">
                        <img src="src/img/p7-word2.png" alt=""/>
                    </div>
                    <div className="p7-word3">
                        <img src="src/img/p7-word3.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Page7;