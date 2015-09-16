var React = require('react');
var Q = require('q');

var Page4 = React.createClass({
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
    componentWillUnmount: function () {
        clearTimeout(this.state.timeout);
    },
    _play: function () {
        this.setState({isHide: false});
        var me = this;
        this.state.timeout = setTimeout(function () {
            Q.fcall(me._sec1Animate)
                .then(me._sec2Animate)
                .then(me._sec3Animate)
                .then(me._sec4Animate)
                .catch(function (e) {
                    console.error(e);
                }).done();
        }, 500);
    },
    _sec1Animate: function () {
        var deferred = Q.defer();
        var TIME = 1000;

        // 最顶部展现篮球赛
        $('.p3-game').animate({
            left: '3%'
        }, TIME);

        $('.p3-dong').animate({
            left: '3%'
        }, TIME);

        $('.p3-comeon').animate({
            left: '3%'
        }, TIME);

        setTimeout(function() {
            deferred.resolve();
        }, TIME);

        return deferred.promise;
    },
    _sec2Animate: function () {
        var deferred = Q.defer();
        $('.p3-dragon').animate({
            left: '40%'
        }, 1000, function() {
            deferred.resolve();
        });
        return deferred.promise;
    },
    _sec3Animate: function () {
        var deferred = Q.defer();
        var $p3Title = $('.p3-title');
        // $p3Title.show();

        $p3Title.addClass('title-scale-anim');
        $p3Title.on('webkitAnimationEnd', function() {
            deferred.resolve();
        });
        return deferred.promise;
    },
    _sec4Animate: function () {
        var deferred = Q.defer();
        var $p3Addoil = $('.p3-addoil');
        var $p3Handsome = $('.p3-handsome');

        $p3Addoil.addClass('talk-scale-anim');
        $p3Handsome.addClass('talk-scale-anim');

        $p3Addoil.on('webkitAnimationEnd', function() {
            deferred.resolve();
        });

        return deferred.promise;
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
        var scale0 = {
            "WebkitTransform": "scale(0)",
            "transform": "scale(0)"
        };

        var scale15 = {
            "WebkitTransform": "scale(1.5)",
            "transform": "scale(1.5)",
            "opacity": 0
        };

        return (
            <div className="page3" style={style}>
                <div className="p3-game">
                    <img style={scale15} className="p3-title" src="http://p8.qhimg.com/t01e73eb02ef0a72727.png"/>
                </div>
                <div className="p3-dong">
                    <img style={scale0} className="p3-handsome"  src="http://p8.qhimg.com/t018001920b46ec7ec8.png"/>
                </div>
                <div className="p3-comeon">
                    <img style={scale0} className="p3-addoil" src="http://p6.qhimg.com/t0123fea6db2db4add7.png"/>
                </div>
                <div className="p3-dragon"></div>
            </div>
        );
    }
});

module.exports = Page4;
