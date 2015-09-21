var React = require('react');
var Q = require('q');

var PageAdd1 = React.createClass({
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
            <div className="page-add1 pager" id="page8" style={style}>
                <div className="pa1-container">
                    <div className="pa1-sec1">
                        <img src="http://p7.qhimg.com/t0137e71825abbf916f.png" alt=""/>
                    </div>
                    <div className="pa1-sec2">
                        <img src="http://p0.qhimg.com/t012bec782ae6b6f1a2.png" alt=""/>
                    </div>
                    <div className="pa1-sec3">
                        <img src="http://p6.qhimg.com/t01527c04d8f8d805d8.png" alt=""/>
                    </div>
                    <div className="pa1-sec4">
                        <img src="http://p7.qhimg.com/t01edc74ee0f5fe85a7.png" alt=""/>
                    </div>
                    <div className="pa1-word1">
                        <img src="http://p6.qhimg.com/t01cd34ed538dbc66f8.png" alt=""/>
                    </div>
                    <div className="pa1-word2">
                        <img src="http://p0.qhimg.com/t0109c65707ca3a52b0.png" alt=""/>
                    </div>
                    <div className="pa1-word3">
                        <img src="http://p1.qhimg.com/t01bedcc491e71e2a38.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PageAdd1;
