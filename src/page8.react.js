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
            deg: 0
        }
    },
    componentWillMount: function () {

    },
    componentDidMount: function () {

    },
    _play: function () {
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
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "z-index": this.props.zIndex,
            "background": this.props.background
        };
        return (
            <div className="page8" style={style}>
                <div className="p8-container">
                    <div className="p8-sec1">
                        <img src="src/img/p8-sec1.png" alt=""/>
                    </div>
                    <div className="p8-sec2">
                        <img src="src/img/p8-sec2.png" alt=""/>
                    </div>
                    <div className="p8-sec3">
                        <img src="src/img/p8-sec3.png" alt=""/>
                    </div>
                    <div className="p8-word1">
                        <img src="src/img/p8-word1.png" alt=""/>
                    </div>
                    <div className="p8-word2">
                        <img src="src/img/p8-word2.png" alt=""/>
                    </div>
                    <div className="p8-word3">
                        <img src="src/img/p8-word3.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Page8;