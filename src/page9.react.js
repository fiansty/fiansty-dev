var React = require('react');
var Q = require('q');

var Page9 = React.createClass({
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
            deg: 0
        }
    },
    componentWillMount: function () {

    },
    componentDidMount: function () {

    },
    _play: function () {
        var me = this;
        Q.fcall(me._zoom2Fade)
            .then(me._zoom3Fade)
            .then(me._personAnimate)
            .catch(function (e) {
                console.error(e);
            })
            .done();
    },
    _zoom2Fade: function () {
        $('.p9-zoom2').fadeIn(2000);
    },
    _zoom3Fade: function () {
        $('.p9-zoom3').fadeIn(2000);
    },
    _personAnimate: function () {
        $('.p9-person').animate({width: '40rem'});
    },
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "zIndex": this.props.zIndex,
            "background": this.props.background
        };
        return (
            <div className="page9" style={style}>
                <div className="p9-container">
                    <div className="pic-box">
                        <img className="p9-zoom1" src="http://p2.qhimg.com/t0165710a4547d86a1c.png" alt=""/>
                        <img className="p9-zoom2" src="http://p5.qhimg.com/t0127afe5c42c6fc6fc.png" alt=""/>
                        <img className="p9-zoom3" src="http://p6.qhimg.com/t01e2f8477d1b87ae49.jpg" alt=""/>
                    </div>
                    <img className="p9-person" src="http://p8.qhimg.com/t01b323449aee737534.png" alt=""/>
                </div>
            </div>
        );
    }
});

module.exports = Page9;