var React = require('react');
var Q = require('q');

var Page8 = React.createClass({
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
        $('.p8-sec1 img').animate({
            left: '0',
            opacity: 1
        });
        setTimeout(function () {
            $('.p8-sec2 img').animate({
                left: '0',
                opacity: 1
            });
        },400);
        setTimeout(function () {
            $('.p8-sec3 img').animate({
                left: '0',
                opacity: 1
            });
        },800);
    },
    _wordAnimate: function () {
        $('.p8-word1 img').animate({width: '42rem'});
        setTimeout(function () {
            $('.p8-word2 img').animate({width: '18rem'});
        },400);
        setTimeout(function () {
            $('.p8-word3 img').animate({width: '18rem'});
        },800);
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
            <div className="page8" id="page7" style={style}>
                <div className="p8-container">
                    <div className="p8-sec1">
                        <img src="http://p5.qhimg.com/t01d21ae0dbcf4fc6c0.png" alt=""/>
                    </div>
                    <div className="p8-sec2">
                        <img src="http://p3.qhimg.com/t016265568683aa707f.png" alt=""/>
                    </div>
                    <div className="p8-sec3">
                        <img src="http://p6.qhimg.com/t01f24a265a7ea99f0b.png" alt=""/>
                    </div>
                    <div className="p8-word1">
                        <img src="http://p3.qhimg.com/t018e0fbbc6b5f4abeb.png" alt=""/>
                    </div>
                    <div className="p8-word2">
                        <img src="http://p5.qhimg.com/t010707a532f563c8a0.png" alt=""/>
                    </div>
                    <div className="p8-word3">
                        <img src="http://p2.qhimg.com/t0196e1a3324cd2bd06.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Page8;
