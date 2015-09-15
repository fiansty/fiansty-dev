var React = require('react');
var Q = require('q');

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
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "z-index": this.props.zIndex,
            "background": this.props.background
        };
        return (
            <div className="page-5" style={style}>
                <div className="p5-Container">
                    <div className="p5-sec1">
                        <img src="src/img/p5-sec1.png" alt=""/>
                    </div>
                    <div className="p5-sec2">
                        <img src="src/img/p5-sec2.png" alt=""/>
                    </div>
                    <div className="p5-sec3">
                        <img src="src/img/p5-sec3.png" alt=""/>
                    </div>
                    <div className="p5-word1">
                        <img src="src/img/p5-word1.png" alt=""/>
                    </div>
                    <div className="p5-word2">
                        <img src="src/img/p5-word2.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Page5;