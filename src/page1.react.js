var React = require('react');
var Q = require('q');

var Page1 = React.createClass({
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
        this._play();
    },
    componentWillUnmount: function () {
        clearTimeout(this.state.timeout);
    },
    _play: function () {
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
    _getDeg: function (start, limit, step) {
        var start = start,
            limit = limit;
        var num = start, flag = true, limitMinus = false;
        return {
            getnum: function(){
                if(Math.abs(num)<limit){
                    num = flag? num+step: num-step;
                    if(limitMinus){
                        limit--;
                        limitMinus = false;
                    }
                }else{
                    num = flag? num-step: num+step;
                    flag = flag? false: true;
                    limitMinus = true;
                }
                if(limit == 0){
                    num = null;
                }
                return num;
            }
        }
    },
    _sec1Animate: function () {
        var deferred = Q.defer();
        $('.p1-sec1 img').fadeIn();
        var interval = null;
        var deg = this._getDeg(0,10,2);
        interval = setInterval(function () {
            var d = deg.getnum();
            if (d != null) {
                this.setState({deg: d});
            } else {
                clearTimeout(interval);
                deferred.resolve();
            }
        }.bind(this), 12);
        return deferred.promise;
    },
    _sec2Animate: function () {
        var deferred = Q.defer();
        var $dom = $('.p1-sec2 img');
        var time = 300;
        $dom.animate({
            top: '40rem',
            opacity: '1'
        }, time, 'swing', function () {
            $dom.animate({top:'34rem'}, time, 'swing', function() {
                $dom.animate({top:'36rem'}, time, 'swing', function () {
                    deferred.resolve();
                });
            });
        });
        return deferred.promise;
    },
    _sec3Animate: function () {
        var deferred = Q.defer();
        $('.p1-sec3 img').animate({
            top: '41rem',
            opacity: '1'
        }, 300, 'swing', function () {
            deferred.resolve();
        });
        return deferred.promise;
    },
    _sec4Animate: function () {
        var deferred = Q.defer();
        $('.p1-sec4 img').animate({
            width: '14rem',
            opacity: '1'
        }, 300, 'swing', function () {
            deferred.resolve();
        });
        return deferred.promise;
    },
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "z-index": this.props.zIndex,
            "background": this.props.background
        };
        var swStyle = {
            "transform": "rotate(" + this.state.deg + "deg)"
        };
        return (
            <div className="page1" style={style}>
                <div className="p1-container">
                    <div className="p1-sec1">
                        <img style={swStyle} src="src/img/p1-sec1-new1.png"/>
                    </div>
                    <div className="p1-sec2">
                        <img src="src/img/p1-sec2.png" alt=""/>
                    </div>
                    <div className="p1-sec3">
                        <img src="src/img/p1-sec3.png" alt=""/>
                    </div>
                    <div className="p1-sec4">
                        <img src="src/img/p1-sec4.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Page1;
