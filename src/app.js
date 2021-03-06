var React = require('react');
var Q = require('q');

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
var PageAdd1 = require('./page-add1.react');
var PageAdd2 = require('./page-add2.react');
var PageAdd3 = require('./page-add3.react');
var Music = require('./music.react');

var App = React.createClass({
    getInitialState: function () {
        return {
            pages: [],
            currentPage: 0,
            listTop: 0,
            memTop: 0,
            startY: 0,
            interval: null,
            complete: false,
            curTop: 0,
            styles: [],
            turnType: '', //up down self
            ready: false,
            readyRate: 0
        }
    },
    componentWillMount: function () {
        var scrH = $(window).height();
        var arr = [];
        for (var i = 0; i < 13; i++) {
            arr.push({
                zIndex: i,
                top: (scrH * i + 1) + 'px',
                background: '#ffffff'
            });
        }
        this.setState({
            screenH: scrH,
            pages: arr
        });

    },
    componentDidMount: function () {
        this._loading();
        var arr = [];
        for(var i=0;i<this.state.pages.length;i++){
            arr.push($('.pager').eq(i).attr('style'));
        }
        this.setState({styles: arr});

        this._touchEvt();

        this._turnAnimateEnd();

        console.log("飞扬是奇虎360公司的校招生培训部门");
        console.log("每期都有上百名校招生在这里互相学习、沟通");
        console.log("17期为期一个月的新员工培训结束后...");
        console.log("我们的友谊并没有结束，而是刚刚开始");
        console.log("如果你想结识更多与你一样优秀的人，请加入我们");
        console.log("power by : %c 朱英达 - 奇虎360 2015届校招生 web工程师", "color: red");
        console.log("mail: %c yingdazhu@icloud.com", "color:blue");
    },
    _turnAnimateEnd: function () {
        $('.pager').on('webkitTransitionEnd', function () {
            setTimeout(function () {
                var num,top;
                if(this.state.turnType == 'down'){
                    this.setState({currentPage: this.state.currentPage+1});
                    num = this.state.currentPage;
                }else if(this.state.turnType == 'up'){
                    this.setState({currentPage: this.state.currentPage-1});
                    num = this.state.currentPage;
                }else if(this.state.turnType == 'self'){
                    num = this.state.currentPage;
                }
                //console.log(this.state.currentPage);
                top = '-' + parseInt(this.state.pages[num].top) + 'px';
                $('.page-list').css({webkitTransform:'translate3d(0px,'+ top +',0px) scale3d(1, 1, 1)'});
                for(var i=0;i<this.state.pages.length;i++){
                    $('.pager').eq(i).removeClass('page_down page_up page_self').attr({style:this.state.styles[i]});
                }
                if (num == 0) {
                    $('.logo-360 img').fadeIn(2000);
                    $('.logo-xy img').fadeIn(2000);
                    $('.music').show();
                } else {
                    $('.logo-360 img').hide();
                    $('.logo-xy img').hide();
                    $('.music').hide();
                }
                for (var i = 0; i < 13; i++) {
                    if (i == num) {
                        this.refs['page' + (i + 1)]._play();
                    } else {
                        this.refs['page' + (i + 1)]._hide();
                    }
                }
            }.bind(this), 500);
        }.bind(this));
    },
    _touchEvt: function () {
        var hammertime = new Hammer($('.page-list')[0], {});
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

        hammertime.on('pan', function(evt) {
            var num = this.state.currentPage;
            //console.log(num);
            $('#page'+num).css({webkitTransform: 'translate3d(0px,'+evt.deltaY+'px,0px) scale3d(1, 1, 1)'});
        }.bind(this));

        hammertime.on('panend', function(evt) {
            for(var i=0;i<this.state.pages.length;i++){
                $('.pager').eq(i).attr({style:this.state.styles[i]});
            }
        }.bind(this));

        hammertime.on('swipe', function (evt) {
            var num = this.state.currentPage;
            if(evt.deltaY < -100){
                if(num != this.state.pages.length-1){
                    $('#page'+num).attr({'style': this.state.styles[num]}).addClass('page_down');
                    this.setState({turnType: 'down'});
                }else{
                    $('#page'+num).attr({'style': this.state.styles[num]}).addClass('page_self');
                    this.setState({turnType: 'self'});
                }
            }else if(evt.deltaY > 100){
                if(num != 0){
                    $('#page'+num).attr({'style': this.state.styles[num]}).addClass('page_up');
                    this.setState({turnType: 'up'});
                }else{
                    $('#page'+num).attr({'style': this.state.styles[num]}).addClass('page_self');
                    this.setState({turnType: 'self'});
                }
            }
        }.bind(this));
    },
    _turnDown: function () {
        var num = this.state.currentPage;
        $('#page'+num).attr({'style': this.state.styles[num]}).addClass('page_down');
        this.setState({turnType: 'down'});
    },
    _turnUp: function () {
        var num = this.state.currentPage;
        $('#page'+num).attr({'style': this.state.styles[num]}).addClass('page_up');
        this.setState({turnType: 'up'});
    },
    _turnSelf: function () {
        var num = this.state.currentPage;
        $('#page'+num).attr({'style': this.state.styles[num]}).addClass('page_self');
        this.setState({turnType: 'self'});
    },
    _loading: function () {
        var imgdefereds=[];

        var hasLoad = [];

        setTimeout(function () {
            var me = this;
            if (me.state.ready == false) {
                if(hasLoad.length > 80){
                    me.setState({ready: true});
                    me.refs.page1._play();
                    $('.music img').fadeIn();
                } else{
                    alert('当前网络环境较差，播放效果无法保证，建议更换其他网络环境重新加载。');
                    me.setState({ready: true});
                    me.refs.page1._play();
                    $('.music img').fadeIn();
                }
            }
        }.bind(this), 15000);

        var interval = setInterval(function () {
            if(this.state.readyRate < 95){
                this.setState({readyRate: this.state.readyRate+5});
            }else if(this.state.ready){
                this.setState({complete: true});
                clearInterval(interval);
            }
        }.bind(this), 100);
        $(function(){
            $('img').each(function(){
                var dfd=$.Deferred();
                $(this).bind('load',function(){
                    hasLoad.push(dfd);
                    dfd.resolve();
                }.bind(this)).bind('error',function(){
                    //图片加载错误，加入错误处理
                    //  dfd.resolve();
                });
                if(this.complete) setTimeout(function(){
                    hasLoad.push(dfd);
                    dfd.resolve();
                },1000);
                imgdefereds.push(dfd);
            });

            $.when.apply(null,imgdefereds).done(function(){
                var me = this;
                setTimeout(function () {
                    me.setState({ready: true});
                }, 100);
                setTimeout(function () {
                    me.refs.page1._play();
                    $('.music img').fadeIn();
                }, 500); // 全部图片加载完成触发的回调函数
            }.bind(this));
        }.bind(this));
    },
    render: function () {
        return (
            <div className="container">
                <div className="pending" style={{display: this.state.complete? 'none': 'block'}}>
                    <div className="pending-word">{this.state.readyRate}%</div>
                </div>
                <div className="wrapper" style={{display: this.state.complete? 'block': 'none'}}>
                    <div className="logo-360">
                        <img src="http://p8.qhimg.com/d/inn/42f741b8/360logo_03.png" alt=""/>
                    </div>
                    <div className="logo-xy">
                        <img src="http://p5.qhimg.com/t01a301402cceefc7d5.png" alt=""/>
                    </div>
                    <Music />
                    <div className="page-list" style={{WebkitTransform: 'translate3d(0px,'+ this.state.curTop +'px,0px) scale3d(1, 1, 1)'}}>
                        <Page1 screenH={this.state.screenH}
                               top={this.state.pages[0].top}
                               zIndex={this.state.pages[0].zIndex}
                               background="#ffffff"
                               ref="page1"
                               toPageFn={this._turnDown}
                            />
                        <Page2 screenH={this.state.screenH}
                               top={this.state.pages[1].top}
                               zIndex={this.state.pages[1].zIndex}
                               background="#ffffff"
                               ref="page2"
                               toPageFn={this._turnDown}
                            />
                        <Page3 screenH={this.state.screenH}
                               top={this.state.pages[2].top}
                               zIndex={this.state.pages[2].zIndex}
                               background="#ffffff"
                               ref="page3"
                               toPageFn={this._turnDown}
                            />
                        <Page4 screenH={this.state.screenH}
                               top={this.state.pages[3].top}
                               zIndex={this.state.pages[3].zIndex}
                               background="#ffffff"
                               ref="page4"
                               toPageFn={this._turnDown}
                            />
                        <Page5 screenH={this.state.screenH}
                               top={this.state.pages[4].top}
                               zIndex={this.state.pages[4].zIndex}
                               background="#ffffff"
                               ref="page5"
                               toPageFn={this._turnDown}
                            />
                        <Page6 screenH={this.state.screenH}
                               top={this.state.pages[5].top}
                               zIndex={this.state.pages[5].zIndex}
                               background="#ffffff"
                               ref="page6"
                               toPageFn={this._turnDown}
                            />
                        <Page7 screenH={this.state.screenH}
                               top={this.state.pages[6].top}
                               zIndex={this.state.pages[6].zIndex}
                               background="#ffffff"
                               ref="page7"
                               toPageFn={this._turnDown}
                            />
                        <Page8 screenH={this.state.screenH}
                               top={this.state.pages[7].top}
                               zIndex={this.state.pages[7].zIndex}
                               background="#ffffff"
                               ref="page8"
                               toPageFn={this._turnDown}
                            />
                        <PageAdd1 screenH={this.state.screenH}
                                  top={this.state.pages[8].top}
                                  zIndex={this.state.pages[8].zIndex}
                                  background="#ffffff"
                                  ref="page9"
                                  toPageFn={this._turnDown}
                            />
                        <PageAdd3 screenH={this.state.screenH}
                                  top={this.state.pages[9].top}
                                  zIndex={this.state.pages[9].zIndex}
                                  background="#ffffff"
                                  ref="page10"
                                  toPageFn={this._turnDown}
                            />
                        <PageAdd2 screenH={this.state.screenH}
                                  top={this.state.pages[10].top}
                                  zIndex={this.state.pages[10].zIndex}
                                  background="#ffffff"
                                  ref="page11"
                                  toPageFn={this._turnDown}
                            />
                        <Page9 screenH={this.state.screenH}
                               top={this.state.pages[11].top}
                               zIndex={this.state.pages[11].zIndex}
                               background="#ffffff"
                               ref="page12"
                               toPageFn={this._turnDown}
                            />
                        <Page10 screenH={this.state.screenH}
                                top={this.state.pages[12].top}
                                zIndex={this.state.pages[12].zIndex}
                                background="#ffffff"
                                ref="page13"
                                toPageFn={this._turnDown}
                            />
                    </div>
                    <div className="touch-arrow"></div>
                </div>
            </div>
        );
    }
});

React.render(<App />, document.body);
