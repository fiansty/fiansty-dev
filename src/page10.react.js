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
    componentDidMount: function(){

    },
    _play: function () {
        this.setState({isHide: false});
        var img = $(".p10-sec4 img")[0];
        var timeId = window.setInterval(function(){
            if(img.src.indexOf("t0165dc459b3bfdf59f")!=-1){
                img.src = "http://p5.qhimg.com/t014fe5efcb912a40be.png";
            }else if(img.src.indexOf("t014fe5efcb912a40be")!=-1){
                img.src = "http://p7.qhimg.com/t0165dc459b3bfdf59f.png";
            }
        },500);
        $(".p10-sec4 img").on("click",function(){
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
        $(".p10-sec-add img").fadeIn();
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
          <div className="page10 pager" id="page11" style={style}>
              <div className="p10-container">
                  <div className="p10-sec0-bgc">
                      <img src="http://p3.qhimg.com/t015238a5647b8ecb65.png" alt=""/>
                  </div>
                  <div className="p10-sec0-linear">
                      <img src="http://p3.qhimg.com/t01ebf7911749b7249b.png" alt=""/>
                  </div>
				  <div className="p10-sec0-share">
                      <img src="http://p4.qhimg.com/t013a0b426898d86423.jpg" alt=""/>
                  </div>
                  <div className="p10-sec0">
                      <img src="http://p1.qhimg.com/t018aecdb3a1335aa94.png" alt=""/>
                  </div>
                  <div className="p10-sec3">
                      <img src="http://p2.qhimg.com/t01314e15321b036d72.png" alt=""/>
                  </div>
                  <div className="p10-sec-add">
                      <img src="http://p2.qhimg.com/t01952aa7912340fe1c.png" alt=""/>
                  </div>
                  <div className="p10-sec4">
                      <img src="http://p5.qhimg.com/t014fe5efcb912a40be.png" alt=""/>
                  </div>
                  <div className="p10-sec1">
                      <img src="http://p2.qhimg.com/t01e535c0bb3787ef23.png"/>
                  </div>
                  <div className="p10-sec2">
                      <img src="http://p7.qhimg.com/t01627874011228a8de.png" alt=""/>
                  </div>
              </div>
          </div>
        );
    }
});

module.exports = Page1;
