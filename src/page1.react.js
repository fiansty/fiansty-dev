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
        $('.logo-360 img').fadeIn(2000);
        $('.logo-xy img').fadeIn(2000);
        this.state.timeout = setTimeout(function () {
            Q.fcall(me._sec2Animate)
                .then(me._sec3Animate)
                .then(me._sec4Animate)
                .then(me._sec1Animate)
                .catch(function (e) {
                    console.error(e);
                })
                .done(function () {
                    me._sec4Swing();
                    setInterval(function () {
                        me._sec4Swing();
                    }, 2000);
                });
        }, 500);
    },
    _getDeg: function (start, limit, step) {
        var start = start,
            limit = limit;
        var num = start, flag = true, limitMinus = false;
        return {
            getnum: function () {
                if (Math.abs(num) < limit) {
                    num = flag ? num + step : num - step;
                    if (limitMinus) {
                        limit--;
                        limitMinus = false;
                    }
                } else {
                    num = flag ? num - step : num + step;
                    flag = flag ? false : true;
                    limitMinus = true;
                }
                if (limit == 0) {
                    num = null;
                }
                return num;
            }
        }
    },
    _sec1Animate: function () {
        var deferred = Q.defer();
        setTimeout(function () {
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
        }.bind(this), 100);
        return deferred.promise;
    },
    _sec2Animate: function () {
        var deferred = Q.defer();
        var $dom = $('.p1-sec2 img');
        var time = 100;
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
        }, 500, 'swing', function () {
            deferred.resolve();
        });
        return deferred.promise;
    },
    _sec4Animate: function () {
        var deferred = Q.defer();
        var $dom = $('.p1-sec4 img');
        $dom.animate({
            width: '18rem',
            opacity: '1'
        }, 300, 'swing', function () {
            $dom.animate({
                width: '12rem'
            }, 300, 'swing', function () {
                $dom.animate({
                    width: '14rem'
                }, 300, 'swing', function () {
                    deferred.resolve();
                });
            });
        });
        return deferred.promise;
    },
    _sec4Swing: function () {
        var interval = null;
        var deg = this._getDeg(0,9,3);
        var $dom = $('.p1-sec4 img');
        interval = setInterval(function () {
            var d = deg.getnum();
            if (d != null) {
                $dom.css({'transform': 'rotate('+d+'deg)'});
            } else {
                clearTimeout(interval);
            }
        }.bind(this), 3);
    },
    _next: function () {
        this.props.toPageFn(1);
    },
    _hide: function () {
        this.setState({isHide: true});
    },
    _comp: function () {
        if (document.readyState == 'complete') {
            window.comp();
        }
    },
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "zIndex": this.props.zIndex,
            "background": this.props.background,
            "visibility": this.state.isHide? 'hidden': 'visible'
        };
        var swStyle = {
            "transform": "rotate(" + this.state.deg + "deg)"
        };
        return (
            <div className="page1 pager" id="page0" style={style}>
                <div className="p1-container">
                    <div className="p1-sec1">
                        <img style={swStyle} id="img1" src="http://p0.qhimg.com/t012e6aee24686577f2.png"/>
                    </div>
                    <div className="p1-sec2">
                        <img src="http://p7.qhimg.com/t01b3eac14cd4d2d651.png" alt=""/>
                    </div>
                    <div className="p1-sec3">
                        <img src="http://p1.qhimg.com/t01065dbeaa08b211b3.png" alt=""/>
                    </div>
                    <div className="p1-sec4" onClick={this._next}>
                        <img src="http://p1.qhimg.com/t01d2cf8b89596a05ff.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Page1;
