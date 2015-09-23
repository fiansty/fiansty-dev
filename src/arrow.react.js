var React = require('react');

var Arrow = React.createClass({
    componentDidMount: function () {

    },
    _play: function () {
        setTimeout(function () {
            $('.page-arrow img').addClass('animate');
        },1000);
    },
    render: function () {
        return (
            <div className="page-arrow" onClick={this.props.clickCb}>
                <img src="http://p4.qhimg.com/t016584128ebe1b684b.png" />
            </div>
        );
    }
});

module.exports = Arrow;