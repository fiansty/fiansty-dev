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
    componentWillUnmount: function () {
        clearTimeout(this.state.timeout);
    },
    _play: function () {
        this.setState({isHide: false});
        var me = this;
        this.state.timeout = setTimeout(function () {
            Q.fcall(me._sec1Animate)
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
        $('.p6-question-left').animate({
            left: '2%'
        }, TIME);
        $('.p6-question-right').animate({
            left: '64%'
        }, TIME);

        $('.p6-classroom').animate({
            left: '2%'
        }, TIME);

        $('.p6-answer-left').animate({
            left: '2%'
        }, TIME);
        $('.p6-answer-middle').animate({
            left: '32%'
        }, TIME);
        $('.p6-answer-right').animate({
            left: '68%'
        }, TIME);


        setTimeout(function() {
            deferred.resolve();
        }, TIME);

        return deferred.promise;
    },
    _sec3Animate: function () {
        var deferred = Q.defer();
        var $p6Title = $('.p6-title');
        // $p3Title.show();

        $p6Title.addClass('title-scale-anim');
        $p6Title.on('webkitAnimationEnd', function() {
            deferred.resolve();
        });
        return deferred.promise;
    },
    _sec4Animate: function () {
        var deferred = Q.defer();
        var $p6Question = $('.p6-question');
        var $p6Answer = $('.p6-answer');

        $p6Question.addClass('talk-scale-anim');
        $p6Answer.addClass('talk-scale-anim');

        $p6Question.on('webkitAnimationEnd', function() {
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
            <div className="page6" id="page6" style={style}>
                <div className="p6-question-left">
                <img style={scale0} className="p6-question" src="http://p5.qhimg.com/t01aec98d37f7c2893f.png"/>
                </div>
                <div className="p6-question-right">
                </div>
                <div className="p6-classroom">
                <img style={scale15} className="p6-title" src="http://p2.qhimg.com/t0172de710624d81e42.png"/>
                </div>
                <div className="p6-answer-left">
                </div>
                <div className="p6-answer-middle">
                <img style={scale0} className="p6-answer" src="http://p0.qhimg.com/t019183e0aaefd02154.png"/>
                </div>
                <div className="p6-answer-right">
                </div>
            </div>
        );
    }
});

module.exports = Page7;
