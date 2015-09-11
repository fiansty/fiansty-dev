var React = require('react');

var Page = require('./page.react');
var Page1 = require('./page1.react');
var Page7 = require('./page7.react');
var Page8 = require('./page8.react');
var Page9 = require('./page9.react');

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
        for(var i =0;i<4;i++){
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

        if(endY < this.state.startY){
            page = this.state.currentPage==this.state.pages.length-1? this.state.currentPage: this.state.currentPage+1;
        }else{
            page = this.state.currentPage==0? this.state.currentPage: this.state.currentPage-1;
        }

        $('.page-list').animate({
            top: '-'+this.state.pages[page].top
        },500, function () {
            this.setState({
                currentPage: page,
                listTop: -parseInt(this.state.pages[page].top)
            });
            console.log('page:',page);
            if(page == 0){
                this.refs.page1._play();
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
                <div className="page-list">
                    <Page1 screenH={this.state.screenH}
                           top={this.state.pages[0].top}
                           zIndex={this.state.pages[0].zIndex}
                           background="#ffffff"
                           ref="page1"
                        />
                    <Page7 screenH={this.state.screenH}
                           top={this.state.pages[1].top}
                           zIndex={this.state.pages[1].zIndex}
                           background="#ffffff"
                           ref="page7"
                        />
                    <Page8 screenH={this.state.screenH}
                           top={this.state.pages[2].top}
                           zIndex={this.state.pages[2].zIndex}
                           background="#ffffff"
                           ref="page8"
                        />
                    <Page9 screenH={this.state.screenH}
                           top={this.state.pages[3].top}
                           zIndex={this.state.pages[3].zIndex}
                           background="#ffffff"
                           ref="page9"
                        />
                </div>
                <div className="touch-arrow"></div>
            </div>
        );
    }
});

React.render(<App />,document.body);
