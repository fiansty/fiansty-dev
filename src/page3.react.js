var React = require('react');
var Q = require('q');

var Page5 = React.createClass({
    getDefaultProps: function () {
        return {
            screenH: "10rem",
            top: "0px",
            zIndex: 1,
            background: "#ffffff"
        }
    },
    componentWillMount: function () {

    },
    componentDidMount: function () {

    },
    _play: function () {
        $(".p5_top_left").css("left", "-35rem");
        $(".p5_top_right").css("right", "-22rem");
        $(".p5_center_all").css("left", "59rem");
        $(".p5_bottom_right").css("right", "66rem");
        $(".p5_bottom_title").css({top: "-61.5rem"});
        $(".p5_bottom_title_png").css({height: "99rem"});
        $(".p5_arrow").css({bottom: "-6rem"});
        $(".page5 img").css("opacity", 0);
        Q.fcall(this._animate1)
            .then(this._animate2)
            .then(this._animate3)
            .then(this._animate4)
            .then(this._animate5)
            .catch(function (e) {
                console.error(e);
            }).done();

    },
    init: function () {
        $(".p5_top_left").css("left", "-35rem");
        $(".p5_top_right").css("left", "-22rem");
        $(".p5_center_all").css("left", "59rem");
        $(".p5_bottom_right").css("left", "66rem");
    },
    _animate1: function () {
        $(".p5_top_left_png, .p5_top_right_png, .p5_center_all_png, .p5_bottom_right_png").css("opacity", 1);
        $(".p5_top_left").animate({left: 0}, "slow");
        $(".p5_top_right").animate({right: "7.2rem"}, "slow");
        $(".p5_center_all").animate({left: 0}, "slow");
        $(".p5_bottom_right").animate({right: "7.4rem"}, "slow");
    },
    _animate2: function () {
        $(".p5_center_spacile_png").animate({opacity: 1}, 1800);
    },
    _animate3: function () {
        $(".p5_top_title_png, .p5_center_title_png").animate({opacity: 1}, 1200);
    },
    _animate4: function () {
        setTimeout(function () {
            $(".p5_bottom_title_png").css({opacity: 1});
            $(".p5_bottom_title").animate({top: "-4.5rem"}, 1400);
            $(".p5_bottom_title_png").animate({height: "42rem"}, 1400);
        }, 1000);
    },
    _animate5: function () {
        setTimeout(function () {
            $(".p5_arrow_png").css({opacity: 1});
            $(".p5_arrow").animate({bottom: "5rem"}, 1400)
                .animate({bottom: "1rem"}, 500)
                .animate({bottom: "3rem"}, 300)
                .animate({bottom: "1rem"}, 300);
        }, 1700);
    },
    _next: function () {
        this.props.toPageFn(3);
    },
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "zIndex": this.props.zIndex,
            "background": this.props.background
        };
        return (
            <div className="page5" style={style}>
                <div className="p5_top">
                    <div className="p5_top_left">
                        <img src="http://p8.qhimg.com/t01f1436243f9c7906d.png" className="p5_top_left_png"/>
                    </div>
                    <div className="p5_top_right">
                        <img src="http://p2.qhimg.com/t0176697e82070d931e.png" className="p5_top_right_png"/>
                    </div>
                    <div className="p5_top_title">
                        <img src="http://p1.qhimg.com/t0124b2d46d12cffd0f.png" className="p5_top_title_png"/>
                    </div>
                </div>
                <div className="p5_center">
                    <div className="p5_center_all">
                        <img src="http://p4.qhimg.com/t01a0ee4c9ceabab7d4.png" className="p5_center_all_png"/>
                    </div>
                    <div className="p5_center_spacile">
                        <img src="http://p2.qhimg.com/t01e99cb0b279fb3a95.png" className="p5_center_spacile_png"/>
                    </div>
                    <div className="p5_center_title">
                        <img src="http://p2.qhimg.com/t01843f75c08640e9e4.png" className="p5_center_title_png"/>
                    </div>
                </div>
                <div className="p5_bottom">
                    <div className="p5_bottom_right">
                        <img src="http://p6.qhimg.com/t01ccdfd6a38230d2f0.png" className="p5_bottom_right_png"/>
                    </div>
                    <div className="p5_bottom_title">
                        <img src="http://p2.qhimg.com/t01de3ba180a98079eb.png" className="p5_bottom_title_png"/>
                    </div>
                </div>
                <div className="p5_arrow" onClick={this._next}>
                    <img src="http://p4.qhimg.com/t016584128ebe1b684b.png" className="p5_arrow_png"/>
                </div>
            </div>
        );
    }
});

module.exports = Page5;