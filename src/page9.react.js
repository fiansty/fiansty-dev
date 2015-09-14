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
            "z-index": this.props.zIndex,
            "background": this.props.background
        };
        return (
            <div className="page9" style={style}>
                <div className="p9-container">
                    <div className="pic-box">
                        <img className="p9-zoom1" src="src/img/p9-zoom1.png" alt=""/>
                        <img className="p9-zoom2" src="src/img/p9-zoom2.png" alt=""/>
                        <img className="p9-zoom3" src="src/img/p9-zoom3.png" alt=""/>
                    </div>
                    <img className="p9-person" src="src/img/p9-person.png" alt=""/>
                </div>
            </div>
        );
    }
});

module.exports = Page9;