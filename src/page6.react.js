var React = require('react');
var Q = require('q');
var Arrow = require('./arrow.react');

var Page6 = React.createClass({
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
        $('.p6-sec1 img').animate({
            left: '0',
            opacity: 1
        });
        setTimeout(function () {
            $('.p6-sec2 img').animate({
                left: '0',
                opacity: 1
            });
        },400);
        setTimeout(function () {
            $('.p6-sec3 img').animate({
                left: '0',
                opacity: 1
            });
        },800);
    },
    _wordAnimate: function () {
        $('.p6-word1 img').animate({width: '18rem'});
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
            <div className="page-6 pager" id="page5" style={style}>
                <div className="p6-Container">
                    <div className="p6-sec1">
                        <img src="http://p8.qhimg.com/d/inn/116c4fc4/p6-sec1.png" alt=""/>
                    </div>
                    <div className="p6-sec2">
                        <img src="http://p7.qhimg.com/d/inn/e2badcfe/p6-sec2.png" alt=""/>
                    </div>
                    <div className="p6-sec3">
                        <img src="http://p0.qhimg.com/t01c363c9c44ac61ade.png" alt=""/>
                    </div>
                    <div className="p6-word1">
                        <img src="http://p0.qhimg.com/t012d898db48b71e7d3.png" alt=""/>
                    </div>
                </div>
                <Arrow ref="arrow" clickCb={this.props.toPageFn} />
            </div>
        );
    }
});

module.exports = Page6;
