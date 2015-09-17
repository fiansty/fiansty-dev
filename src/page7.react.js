var React = require('react');
var Q = require('q');

var Page7 = React.createClass({
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
        $('.p7-sec1 img').animate({
            left: '0',
            opacity: 1
        });
        setTimeout(function () {
            $('.p7-sec2 img').animate({
                left: '0',
                opacity: 1
            });
        },400);
        setTimeout(function () {
            $('.p7-sec3 img').animate({
                left: '0',
                opacity: 1
            });
        },800);
    },
    _wordAnimate: function () {
        $('.p7-word1 img').animate({width: '33rem'});
        setTimeout(function () {
            $('.p7-word2 img').animate({width: '18rem'});
        },400);
        setTimeout(function () {
            $('.p7-word3 img').animate({width: '18rem'});
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
            <div className="page7" style={style}>
                <div className="p7-container">
                    <div className="p7-sec1">
                        <img src="src/img/p7-sec1.png" alt=""/>
                    </div>
                    <div className="p7-sec2">
                        <img src="src/img/p7-sec2.png" alt=""/>
                    </div>
                    <div className="p7-sec3">
                        <img src="src/img/p7-sec3.png" alt=""/>
                    </div>
                    <div className="p7-word1">
                        <img src="src/img/p7-word1.png" alt=""/>
                    </div>
                    <div className="p7-word2">
                        <img src="src/img/p7-word2.png" alt=""/>
                    </div>
                    <div className="p7-word3">
                        <img src="src/img/p7-word3.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Page7;