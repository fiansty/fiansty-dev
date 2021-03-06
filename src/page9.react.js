var React = require('react');
var Q = require('q');
var Arrow = require('./arrow.react');

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
        $('.p9-zoom2').addClass('animate');
        $('.p9-zoom3').addClass('animate');
        setTimeout(function () {
            $('.p9-person').addClass('animate');
        }, 400);
    },
    _personAnimate: function () {
        $('.p9-person').animate({width: '40rem'});
    },
    _hide: function () {
        $('#page11').css({visibility: 'hidden'});
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
            <div className="page9 pager" id="page11" style={style}>
                <div className="p9-container">
                    <div className="pic-box">
                        <img className="p9-zoom1" src="http://p6.qhimg.com/d/inn/cd9dbb41/d/p3.jpg" alt=""/>
                        <img className="p9-zoom2" src="http://p0.qhimg.com/d/inn/cd9dbb41/d/p1.jpg" alt=""/>
                        <img className="p9-zoom3" src="http://p8.qhimg.com/d/inn/c7b04912/2.jpg" alt=""/>
                    </div>
                    <img className="p9-person" src="http://p8.qhimg.com/t01b323449aee737534.png" alt=""/>
                </div>
                <Arrow ref="arrow" clickCb={this.props.toPageFn} />
            </div>
        );
    }
});

module.exports = Page9;
