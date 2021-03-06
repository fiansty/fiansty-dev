var React = require('react');
var Q = require('q');

var Page2 = React.createClass({
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
        // clearTimeout(this.state.timeout);
    },
    _play: function () {
        this.setState({isHide: false});
        var me = this;
        this.state.timeout = setTimeout(function () {
            me._sec1Animate();
            me._sec2Animate();
            me._sec3Animate();
            me._sec4Animate();
            me._sec5Animate();
            me._sec6Animate();
            me._sec9Animate();

            Q.fcall(me._sec4Animate)
                //     // .then(me._sec2Animate)
                //     // .then(me._sec3Animate)
                .then(me._sec7Animate)
                .catch(function (e) {
                    console.error(e);
                }).done();
        }, 800);
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
        $('.p11-sec1 img').animate({
            top: 0,
            left: 0,
            opacity: 1
        }, 800, 'swing', function () {
            deferred.resolve();
        });
        return deferred.promise;
    },
    _sec2Animate: function () {
        var deferred = Q.defer();
        // var $dom = $('.p11-sec2 img');
        // var time = 300;

        $('.p11-sec2 img').animate({
            left: 0,
            opacity: 1
        }, 800, 'swing', function () {
            deferred.resolve();
        });
        return deferred.promise;
    },
    _sec3Animate: function () {
        var deferred = Q.defer();
        $('.p11-sec3 img').animate({
            top: '48rem',
            left: 0,
            opacity: 1
        }, 800, 'swing', function () {
            deferred.resolve();
        });
        return deferred.promise;
    },
    _sec4Animate: function () {
        var deferred = Q.defer();
        $('.p11-sec4 img').animate({
            top: 0,
            right: '-1rem',
            opacity: 1
        }, 800, 'swing', function () {
            $('.p11-sec7 img').animate({
                top: 0,
                right: '-1rem',
                opacity: 1
            }, 800, 'swing', function () {
            deferred.resolve();
        });

        });
        return deferred.promise;
    },
    _sec4Animate: function () {
        var deferred = Q.defer();

        $('.p11-sec4 img').animate({
            top: 0,
            right: '-1rem',
            opacity: 1
        }, 800, 'swing', function () {
            deferred.resolve();
        });
        return deferred.promise;
    },
    _sec5Animate: function () {
        var deferred = Q.defer();
        var that = this;
        var interval = null;
         var deg = that._getDeg(0,8,2);
        $('.p11-sec5 img').animate({
            opacity: 1,
            width: '60%',
            top: '32rem',
            right: 0,
        }, 800, 'swing', function () {
            interval = setInterval(function () {
                 var d = deg.getnum();
                 if (d != null) {
                     that.setState({deg: d});
                 } else {
                     clearTimeout(interval);
                     deferred.resolve();
                 }
             }.bind(that), 12);
            deferred.resolve();
        });
        return deferred.promise;
    },
    _sec6Animate: function () {
        var deferred = Q.defer();
        $('.p11-sec6 img').animate({
            top: '69rem',
            opacity: 1
        }, 800, 'swing', function () {
            $cool = $('.p11-sec8 img');
            $cool.animate({
                opacity: 1
            }, 300, 'swing', function () {
                $cool.animate({
                width: '45%'
                },300,'swing',function(){
                    $cool.animate({
                        width: '35%'
                        },300,'swing',function(){
                            deferred.resolve();
                        })
                })
            });
            //deferred.resolve();
        });
        return deferred.promise;
    },
    _sec7Animate: function () {
        var deferred = Q.defer();

        $('.p11-sec7 img').animate({
            top: '20rem',
            left: '16rem',
            opacity: 1
        }, 800, 'swing', function () {
            deferred.resolve();
        });
        return deferred.promise;
    },
    _sec9Animate: function () {
        var deferred = Q.defer();
        var $dom = $('.p11-sec9 img');
        $dom.animate({
            top: '100rem',
            opacity: 1
        }, 800, 'swing', function () {
            $dom.animate({
                top: '103rem',
            }, 800, 'swing', function () {
                deferred.resolve();
            });
        });
        return deferred.promise;
    },
    _next: function () {
        this.props.toPageFn(2);
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
        var swStyle = {
            "transform": "rotate(" + this.state.deg + "deg)"
        };
        return (
            <div className="page11 pager" id="page1" style={style}>
                <div className="p11-container">
                    <div className="p11-sec1">
                        <img  src="http://p0.qhimg.com/t0187f59920e47009f0.png"/>
                    </div>
                    <div className="p11-sec2">
                        <img src="http://p5.qhimg.com/d/inn/cd9dbb41/d/p27.png" alt=""/>
                    </div>
                    <div className="p11-sec3">
                        <img src="http://p6.qhimg.com/t01c10bbc5b6c9d6c29.png" alt=""/>
                    </div>
                    <div className="p11-sec4">
                        <img src="http://p6.qhimg.com/d/inn/cd9dbb41/d/p28.png" alt=""/>
                    </div>
                    <div className="p11-sec5">
                        <img style={swStyle} src="http://p4.qhimg.com/t0118d5aa446e9b406f.png" alt=""/>
                    </div>
                    <div className="p11-sec6">
                        <img src="http://p3.qhimg.com/d/inn/cd9dbb41/d/p22.png" alt=""/>
                    </div>
                    <div className="p11-sec7">
                        <img src="http://p6.qhimg.com/t01fea3cc9884ca7c4b.png" alt=""/>
                    </div>
                    <div className="p11-sec8">
                        <img src="http://p0.qhimg.com/t011e2e0be2c1df4ec9.png" alt=""/>
                    </div>
                    <div className="p11-sec9" onClick={this._next}>
                        <img src="http://p1.qhimg.com/t01ff46620f841ef8f0.png" alt=""/>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = Page2;
