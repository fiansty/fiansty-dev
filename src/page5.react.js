var React = require('react');
var Q = require('q');
var Arrow = require('./arrow.react');

var Page5 = React.createClass({
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
        Q.fcall(me._imgAnimate)
            .then(me._wordAnimate)
            .catch(function (e) {
                console.error(e);
            })
            .done();
    },
    _imgAnimate: function () {
        $('.p5-sec1 img').animate({
            left: '0',
            opacity: 1
        });
        setTimeout(function () {
            $('.p5-sec2 img').animate({
                left: '0',
                opacity: 1
            });
        },400);
        setTimeout(function () {
            $('.p5-sec3 img').animate({
                left: '0',
                opacity: 1
            });
        },800);
    },
    _wordAnimate: function () {
        $('.p5-word1 img').animate({width: '20rem'});
        setTimeout(function () {
            $('.p5-word2 img').animate({width: '30rem'});
        },400);
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
            <div className="page-5 pager" id="page4" style={style}>
                <div className="p5-Container">
                    <div className="p5-sec1">
                        <img src="http://p3.qhimg.com/d/inn/cd9dbb41/d/p6.png" alt=""/>
                    </div>
                    <div className="p5-sec2">
                        <img src="http://p4.qhimg.com/d/inn/1055a1d2/1.png" alt=""/>
                    </div>
                    <div className="p5-sec3">
                        <img src="http://p4.qhimg.com/d/inn/63dc72da/7.png" alt=""/>
                    </div>
                    <div className="p5-word1">
                        <img src="http://p1.qhimg.com/t0122c6c9d693fcd010.png" alt=""/>
                    </div>
                    <div className="p5-word2">
                        <img src="http://p5.qhimg.com/t018c712129a58663f0.png" alt=""/>
                    </div>
                </div>
                <Arrow ref="arrow" clickCb={this.props.toPageFn} />
            </div>
        );
    }
});

module.exports = Page5;
