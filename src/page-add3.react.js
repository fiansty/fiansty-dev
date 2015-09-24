var React = require('react');
var Q = require('q');
var Arrow = require('./arrow.react');

var PageAdd3 = React.createClass({
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
            isHide: false
        }
    },
    componentWillMount: function () {

    },
    componentDidMount: function () {

    },
    _play: function () {
        this.setState({isHide: false});
        $('.pa3-sec1 img').addClass('animate');
        setTimeout(function () {
            $('.pa3-sec2 img').addClass('animate');
            $('.pa3-word1').addClass('animate');
        }, 500);
        setTimeout(function () {
            $('.pa3-sec3 img').addClass('animate');
        }, 1000);
        setTimeout(function () {
            $('.pa3-sec4 img').addClass('animate');
            $('.pa3-word3').addClass('animate');
        }, 1500);
    },
    _hide: function () {
        this.setState({isHide: true});
    },
    render: function () {
        var style = {
            "height": this.props.screenH,
            "top": this.props.top,
            "zIndex": this.props.zIndex,
            //"background": this.props.background,
            "visibility": this.state.isHide? 'hidden': 'visible'
        };
        return (
            <div className="page-add3 pager" id="page10" style={style}>
                <div className="pa3-container">
                    <div className="pa3-sec1">
                        <img src="http://p4.qhimg.com/d/inn/2f440b33/11-11_03.png" alt=""/>
                    </div>
                    <div className="pa3-sec2">
                        <img src="http://p8.qhimg.com/d/inn/79272204/11-11_09.png" alt=""/>
                    </div>
                    <div className="pa3-sec3">
                        <img src="http://p4.qhimg.com/d/inn/7ac73f9f/11-11_06.png" alt=""/>
                    </div>
                    <div className="pa3-sec4">
                        <img src="http://p7.qhimg.com/d/inn/440992d1/11-11_18.png" alt=""/>
                    </div>
                    <div className="pa3-word1">
                        <img src="http://p7.qhimg.com/d/inn/2bbb23cf/11-11_15.png" alt=""/>
                    </div>
                    <div className="pa3-word3">
                        <img src="http://p9.qhimg.com/d/inn/0f29b5a1/11-11_21.png" alt=""/>
                    </div>
                </div>
                <Arrow ref="arrow" clickCb={this.props.toPageFn} />
            </div>
        );
    }
});

module.exports = PageAdd3;
