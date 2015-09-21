var React = require('react');
var Q = require('q');

var PageAdd2 = React.createClass({
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
        $('.pa2-sec5 img').addClass('animate');
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
            <div className="page-add2 pager" id="page9" style={style}>
                <div className="pa2-container">
                    <div className="pa2-sec1">
                        <img src="http://p5.qhimg.com/t01e84caa2a58d1ebac.png" alt=""/>
                    </div>
                    <div className="pa2-sec2">
                        <img src="http://p2.qhimg.com/t01ebc493cb7afd7c72.png" alt=""/>
                    </div>
                    <div className="pa2-sec3">
                        <img src="http://p6.qhimg.com/t017ff8031998cada1f.png" alt=""/>
                    </div>
                    <div className="pa2-sec4">
                        <img src="http://p6.qhimg.com/t015d51014b97087fee.png" alt=""/>
                    </div>
                    <div className="pa2-sec5">
                        <img src="http://p8.qhimg.com/t0133619cbb9b8981f9.png" alt=""/>
                    </div>
                    <div className="pa2-word1">
                        <img src="http://p1.qhimg.com/t0128457baf98bed55a.png" alt=""/>
                    </div>
                    <div className="pa2-word2">
                        <img src="http://p5.qhimg.com/t01a34f73ae026a705f.png" alt=""/>
                    </div>
                    <div className="pa2-word3">
                        <img src="http://p8.qhimg.com/t016576bf7b7ddacad5.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PageAdd2;
