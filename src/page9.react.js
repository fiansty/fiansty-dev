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
            deg: 0,
            isHide: false
        }
    },
    componentWillMount: function () {

    },
    componentDidMount: function () {

    },
    _play: function () {
        this.setState({isHide: false});
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
    _hide: function () {
        this.setState({isHide: true});
    },
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "zIndex": this.props.zIndex,
            "background": this.props.background,
            "visibility": this.state.isHide? 'hidden': 'visible'
        };
        return (
            <div className="page9 pager" id="page10" style={style}>
                <div className="p9-container">
                    <div className="pic-box">
                        <img className="p9-zoom1" src="http://p5.qhimg.com/d/inn/78ecca36/22.jpg" alt=""/>
                        <img className="p9-zoom2" src="http://p1.qhimg.com/d/inn/3f515073/zoom2.jpg" alt=""/>
                        <img className="p9-zoom3" src="http://p3.qhimg.com/d/inn/e4444e33/zoom3.jpg" alt=""/>
                    </div>
                    <img className="p9-person" src="http://p8.qhimg.com/t01b323449aee737534.png" alt=""/>
                </div>
            </div>
        );
    }
});

module.exports = Page9;
