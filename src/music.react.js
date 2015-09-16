var React = require('react');

var Music = React.createClass({
    getInitialState: function () {
        return {
            isPlay: true
        }
    },
    _toggle: function () {
        if(!this.state.isPlay){
            this.setState({
                isPlay: true
            });
            $('audio')[0].play();
        }else{
            this.setState({
                isPlay: false
            });
            $('audio')[0].pause();
        }
    },
    render: function () {
        var cls;
        if(this.state.isPlay){
            cls = 'music play';
        }else{
            cls = 'music'
        }
        return (
            <div className={cls} onClick={this._toggle}>
                <img src="http://p6.qhimg.com/t0163225bc96defeaab.png" alt=""/>
                <audio src="http://v.game.360tpcdn.com/LoseYourself.mp3" autoPlay="autoplay" loop="loop"></audio>
            </div>
        );
    }
});

module.exports = Music;
