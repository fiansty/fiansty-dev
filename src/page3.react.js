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
    _play:function(){
    	// init();
    	$(".p5_top_left").css("left","-35rem");
    	$(".p5_top_right").css("right","-22rem");
    	$(".p5_center_all").css("left","59rem");
    	$(".p5_bottom_right").css("right","66rem");
    	$(".p5_bottom_title").css({top:"-61.5rem"});
    	$(".p5_bottom_title_png").css({height:"99rem"});
    	$(".p5_arrow").css({bottom:"-6rem"});
    	$(".page5 img").css("opacity",0);
    	Q.fcall(this._animate1)
         .then(this._animate2)
         .then(this._animate3)
         .then(this._animate4)
         .then(this._animate5)
	     .catch(function (e) {
            console.error(e);
        }).done();

    },
    init:function(){
    	$(".p5_top_left").css("left","-35rem");
    	$(".p5_top_right").css("left","-22rem");
    	$(".p5_center_all").css("left","59rem");
    	$(".p5_bottom_right").css("left","66rem");
    },
    _animate1:function(){
    	// alert(1);
    	$(".p5_top_left_png, .p5_top_right_png, .p5_center_all_png, .p5_bottom_right_png").css("opacity",1);
    	$(".p5_top_left").animate({left:0},"slow");
    	$(".p5_top_right").animate({right:"7.2rem"},"slow");
    	$(".p5_center_all").animate({left:0},"slow");
    	$(".p5_bottom_right").animate({right:"7.4rem"},"slow");
    },
    _animate2:function(){
    	// alert(2);
    	$(".p5_center_spacile_png").animate({opacity:1},1800);
    },
    _animate3:function(){
    	// alert(3);
    	$(".p5_top_title_png, .p5_center_title_png").animate({opacity:1},1200);
    },
    _animate4:function(){
    	// alert(4);
    	setTimeout(function() {
    		$(".p5_bottom_title_png").css({opacity:1});
	    	$(".p5_bottom_title").animate({top:"-4.5rem"},1400);
	    	$(".p5_bottom_title_png").animate({height:"42rem"},1400);
    	},1000);
    },
    _animate5:function(){
    	// alert(5);
    	setTimeout(function() {
	    	$(".p5_arrow_png").css({opacity:1});
	    	$(".p5_arrow").animate({bottom:"5rem"},1400)
	    				.animate({bottom:"1rem"},500)
	    				.animate({bottom:"3rem"},300)
	    				.animate({bottom:"1rem"},300);
    	},1700);
    },
    render:function(){
    	var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "z-index": this.props.zIndex,
            "background": this.props.background
        };
        return(
        	<div className="page5" style={style}>
				<div className="p5_top">
					<div className="p5_top_left">
						<img src="src/img/img_page5/p5_top_left.png" className="p5_top_left_png"/>
					</div>
					<div className="p5_top_right">
						<img src="src/img/img_page5/p5_top_right.png" className="p5_top_right_png"/>
					</div>
					<div className="p5_top_title">
						<img src="src/img/img_page5/p5_top_title.png" className="p5_top_title_png"/>
					</div>
				</div>
				<div className="p5_center">
					<div className="p5_center_all">
						<img src="src/img/img_page5/p5_center_all.png" className="p5_center_all_png"/>
					</div>
					<div className="p5_center_spacile">
						<img src="src/img/img_page5/p5_center_spacile.png" className="p5_center_spacile_png"/>
					</div>
					<div className="p5_center_title">
						<img src="src/img/img_page5/p5_center_title.png" className="p5_center_title_png"/>
					</div>
				</div>
				<div className="p5_bottom">
					<div className="p5_bottom_right">
						<img src="src/img/img_page5/p5_bottom_right.png" className="p5_bottom_right_png"/>
					</div>
					<div className="p5_bottom_title">
						<img src="src/img/img_page5/p5_bottom_title.png" className="p5_bottom_title_png"/>
					</div>
				</div>
				<div className="p5_arrow">
					<img src="src/img/img_page5/p5_arrow.png" className="p5_arrow_png"/>
				</div>
			</div>
        );
    }
});

module.exports = Page5;