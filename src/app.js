var React = require('react');

var Page = require('./page.react');
var Page1 = require('./page1.react');

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
        arr.push({
            zIndex: 0,
            top: '1px',
            background: '#ffffff'
        });
        for(var i =1;i<5;i++){
            arr.push({
                zIndex: i,
                top: (scrH*i + 1) + 'px'
            });
        }
        //测试用的，为了区分不同的页所以设置了不同的颜色
        arr[1].background = "#00ff00";
        arr[2].background = "#0000ff";
        arr[3].background = "#ffff00";
        arr[4].background = "#ff0000";
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
        }.bind(this));
    },
    _tMove: function (evt) {
        var curTop = evt.originalEvent.changedTouches[0].pageY;
        var top = this.state.listTop + (curTop - this.state.memTop);
        $('.page-list').css({top:top});
    },
    render: function () {
        //var pages = this.state.pages.map(function (item) {
        //    return (
        //        <Page screenH={this.state.screenH}
        //              top={item.top}
        //              zIndex={item.zIndex}
        //              background={item.background}/>
        //    );
        //}.bind(this));
        return (
            <div className="wrapper">
                <div className="page-list">
                    <Page1 screenH={this.state.screenH}
                           top={this.state.pages[0].top}
                           zIndex={this.state.pages[0].zIndex}
                           background="#ffffff" />
                    <Page screenH={this.state.screenH}
                           top={this.state.pages[1].top}
                           zIndex={this.state.pages[1].zIndex}
                           background="#00ff00" />
                    <Page screenH={this.state.screenH}
                          top={this.state.pages[2].top}
                          zIndex={this.state.pages[2].zIndex}
                          background="#ffff00" />
                    <Page screenH={this.state.screenH}
                          top={this.state.pages[3].top}
                          zIndex={this.state.pages[3].zIndex}
                          background="#00ffff" />
                    <Page screenH={this.state.screenH}
                          top={this.state.pages[4].top}
                          zIndex={this.state.pages[4].zIndex}
                          background="#ff00ff" />
                </div>
                <div className="touch-arrow"></div>
            </div>
        );
    }
});

React.render(<App />,document.body);
