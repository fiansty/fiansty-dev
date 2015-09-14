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
    componentDidMount: function(){

    },
    _play: function () {
        var img = $(".p10-sec4 img")[0];
        var timeId = window.setInterval(function(){
            if(img.src.indexOf("button2.png")!=-1){
                img.src = "src/img/button1.png";
            }else if(img.src.indexOf("button1.png")!=-1){
                img.src = "src/img/button2.png";
            }
        },500);
        $(".p10-sec4 img").on("click",function(){
            console.log("show");
            $(".p10-sec0-share img").show();
        });
        $(".p10-sec0-share img").on("click",function(){
            $(this).hide();
        });
        $(".p10-sec0-linear img").addClass("animation");
        $(".p10-sec0 img").addClass("animation");
        $(".p10-sec3 img").addClass("animation");
        $(".p10-sec1 img").addClass("animation");
        $(".p10-sec2 img").addClass("animation");
    },
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "z-index": this.props.zIndex,
            "background": this.props.background
        };
        return (
          <div className="page10" style={style}>
              <div className="p10-container">
                  <div className="p10-sec0-bgc">
                      <img src="src/img/飞扬H5背景.png" alt=""/>
                  </div>
                  <div className="p10-sec0-linear">
                      <img src="src/img/linear.png" alt=""/>
                  </div>
				  <div className="p10-sec0-share">
                      <img src="src/img/share.jpg" alt=""/>
                  </div>
                  <div className="p10-sec0">
                      <img src="src/img/gear_top.png" alt=""/>
                  </div>
                  <div className="p10-sec3">
                      <img src="src/img/文字.png" alt=""/>
                  </div>
                  <div className="p10-sec4">
                      <img src="src/img/button1.png" alt=""/>
                  </div>
                  <div className="p10-sec1">
                      <img src="src/img/gear2.png"/>
                  </div>
                  <div className="p10-sec2">
                      <img src="src/img/gear3.png" alt=""/>
                  </div>
              </div>
          </div>
        );
    }
});

module.exports = Page1;
