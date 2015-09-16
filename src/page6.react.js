var React = require('react');
var Q = require('q');

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
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "z-index": this.props.zIndex,
            "background": this.props.background
        };
        return (
            <div className="page-6" style={style}>
                <div className="p6-Container">
                    <div className="p6-sec1">
                        <img src="src/img/p6-sec1.png" alt=""/>
                    </div>
                    <div className="p6-sec2">
                        <img src="src/img/p6-sec2.png" alt=""/>
                    </div>
                    <div className="p6-sec3">
                        <img src="src/img/p6-sec3.png" alt=""/>
                    </div>
                    <div className="p6-word1">
                        <img src="src/img/p6-word1.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Page6;