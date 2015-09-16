var React = require('react');

var Page1 = require('./page1.react');
var Page2 = require('./page2.react');
var Page3 = require('./page3.react');
var Page4 = require('./page4.react');
var Page5 = require('./page5.react');
var Page6 = require('./page6.react');
var Page7 = require('./page7.react');
var Page8 = require('./page8.react');
var Page9 = require('./page9.react');
var Page10 = require('./page10.react');
var Music = require('./music.react');

var App = React.createClass({
    getInitialState: function () {
        return {
            pages: [],
            currentPage: 0,
            listTop: 0,
            memTop: 0,
            startY: 0,
            interval: null
        }
    },
    componentWillMount: function () {
        var scrH = $(window).height();
        var arr = [];
        for(var i =0;i<10;i++){
            arr.push({
                zIndex: i,
                top: (scrH*i + 1) + 'px',
                background: '#ffffff'
            });
        }
        this.setState({
            screenH: scrH,
            pages: arr
        });
    },
    componentDidMount: function () {
        $('.page-list').on({
            'touchstart':this._tStart,
            'touchmove':this._tMove,
            'touchend':this._tEnd
        });
    },
    _tStart: function (evt) {
        var startY = evt.originalEvent.changedTouches[0].pageY;
        this.setState({
            memTop: startY,
            startY: startY
        });
    },
    _tEnd: function (evt) {
        var endY = evt.originalEvent.changedTouches[0].pageY;
        var page;

        if(Math.abs(endY-this.state.startY)<20){
            return;
        }else if(endY < this.state.startY){
            page = this.state.currentPage==this.state.pages.length-1? this.state.currentPage: this.state.currentPage+1;
        }else{
            page = this.state.currentPage==0? this.state.currentPage: this.state.currentPage-1;
        }
        this._toPage(page);
    },
    _toPage: function (page) {
        $('.page-list').animate({
            top: '-'+this.state.pages[page].top
        },500, function () {
            this.setState({
                currentPage: page,
                listTop: -parseInt(this.state.pages[page].top)
            });
            if (page == 0) {
                $('.logo-360 img').fadeIn(2000);
                $('.logo-xy img').fadeIn(2000);
                $('.music').show();
            } else {
                $('.logo-360 img').hide();
                $('.logo-xy img').hide();
                $('.music').hide();
            }
            for(var i=0;i<10;i++){
                if(i == page){
                    this.refs['page'+(i+1)]._play();
                }else{
                    this.refs['page'+(i+1)]._hide();
                }
            }
        }.bind(this));
    },
    _tMove: function (evt) {
        var curTop = evt.originalEvent.changedTouches[0].pageY;
        var top = this.state.listTop + (curTop - this.state.memTop);
        $('.page-list').css({top: top});
    },
    render: function () {
        return (
            <div className="wrapper">
                <div className="logo-360">
                    <img src="http://p6.qhimg.com/t0174921191a8e1e9d2.png" alt=""/>
                </div>
                <div className="logo-xy">
                    <img src="http://p5.qhimg.com/t01a301402cceefc7d5.png" alt=""/>
                </div>
                <Music />
                <div className="page-list">
                    <Page1 screenH={this.state.screenH}
                           top={this.state.pages[0].top}
                           zIndex={this.state.pages[0].zIndex}
                           background="#ffffff"
                           ref="page1"
                           toPageFn={this._toPage}
                        />
                    <Page2 screenH={this.state.screenH}
                           top={this.state.pages[1].top}
                           zIndex={this.state.pages[1].zIndex}
                           background="#ffffff"
                           ref="page2"
                           toPageFn={this._toPage}
                        />
                    <Page3 screenH={this.state.screenH}
                           top={this.state.pages[2].top}
                           zIndex={this.state.pages[2].zIndex}
                           background="#ffffff"
                           ref="page3"
                           toPageFn={this._toPage}
                        />
                    <Page4 screenH={this.state.screenH}
                           top={this.state.pages[3].top}
                           zIndex={this.state.pages[3].zIndex}
                           background="#ffffff"
                           ref="page4"
                           toPageFn={this._toPage}
                        />
                    <Page5 screenH={this.state.screenH}
                           top={this.state.pages[4].top}
                           zIndex={this.state.pages[4].zIndex}
                           background="#ffffff"
                           ref="page5"
                           toPageFn={this._toPage}
                        />
                    <Page6 screenH={this.state.screenH}
                           top={this.state.pages[5].top}
                           zIndex={this.state.pages[5].zIndex}
                           background="#ffffff"
                           ref="page6"
                           toPageFn={this._toPage}
                        />
                    <Page7 screenH={this.state.screenH}
                           top={this.state.pages[6].top}
                           zIndex={this.state.pages[6].zIndex}
                           background="#ffffff"
                           ref="page7"
                           toPageFn={this._toPage}
                        />
                    <Page8 screenH={this.state.screenH}
                           top={this.state.pages[7].top}
                           zIndex={this.state.pages[7].zIndex}
                           background="#ffffff"
                           ref="page8"
                           toPageFn={this._toPage}
                        />
                    <Page9 screenH={this.state.screenH}
                           top={this.state.pages[8].top}
                           zIndex={this.state.pages[8].zIndex}
                           background="#ffffff"
                           ref="page9"
                           toPageFn={this._toPage}
                        />
                    <Page10 screenH={this.state.screenH}
                            top={this.state.pages[9].top}
                            zIndex={this.state.pages[9].zIndex}
                            background="#ffffff"
                            ref="page10"
                            toPageFn={this._toPage}
                        />
                </div>
                <div className="touch-arrow"></div>
            </div>
        );
    }
});

React.render(<App />,document.body);
