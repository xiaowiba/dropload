commApp.controller('orderListController', function ($scope, $state, $http, $filter, $timeout, $sce, $compile) {
    /*******************************************************方法-start***********************************************************/
    $scope.page = function () {
        var itemIndex = 0;

        var tabLoadEndArray = [false, false, false, false, false];
        var tabLenghtArray = [1, 14, 3, 1, 2];
        var tabScroolTopArray = [0, 0, 0, 0, 0];

        var dropload = $('.khfxWarp').dropload({
            scrollArea: window,
            domDown: {
                domClass: 'dropload-down',
                domRefresh: '<div class="dropload-refresh">上拉加载更多</div>',
                domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
                domNoData: '<div class="dropload-noData">已无数据</div>'
            },
            loadDownFn: function (me) {
                setTimeout(function () {
                    if (tabLoadEndArray[itemIndex]) {
                        me.resetload();
                        me.lock();
                        me.noData();
                        me.resetload();
                        return;
                    }
                    var result = '';
                    for (var index = 0; index < 10; index++) {
                        if (tabLenghtArray[itemIndex] > 0) {
                            tabLenghtArray[itemIndex]--;
                        } else {
                            tabLoadEndArray[itemIndex] = true;
                            break;
                        }

                        switch (itemIndex) {
                            case 0:
                                result += '<div class="mui-content" ng-click="goDetail();">' +
                                    '            <div class="mui-card">' +
                                    '                <ul class="mui-table-view">' +
                                    '                    <li class="mui-table-view-cell">' +
                                    '                        <a href="javascript:;">' +
                                    '                            <div class="mui-media-body">' +
                                    '                                <div class="orderList-doctor">' +
                                    '                                    <div class="doctor-label">问诊医生：</div>' +
                                    '                                    <div class="doctor-name">奥巴马</div>' +
                                    '                                    <div class="order-state red">待付款</div>' +
                                    '                                </div>' +
                                    '                                <div class="orderList-order">' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">付款金额</div>' +
                                    '                                        <div class="order-value orange">￥ 50.00</div>' +
                                    '                                    </div>' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">订单编号</div>' +
                                    '                                        <div class="order-value">201888888888888' + tabLenghtArray[itemIndex] + '</div>' +
                                    '                                    </div>' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">支付时间</div>' +
                                    '                                        <div class="order-value">2018-12-17 10:39:01</div>' +
                                    '                                    </div>' +
                                    '                                </div>' +
                                    '                            </div>' +
                                    '                        </a>' +
                                    '                    </li>' +
                                    '                </ul>' +
                                    '            </div>' +
                                    '        </div>';
                                break;
                            case 1:
                                result += '<div class="mui-content">' +
                                    '' +
                                    '            <div class="mui-card">' +
                                    '' +
                                    '                <ul class="mui-table-view">' +
                                    '' +
                                    '                    <li class="mui-table-view-cell">' +
                                    '                        <a href="javascript:;">' +
                                    '                            <div class="mui-media-body">' +
                                    '' +
                                    '                                <div class="orderList-doctor">' +
                                    '                                    <div class="doctor-label">问诊医生：</div>' +
                                    '                                    <div class="doctor-name">奥巴马</div>' +
                                    '                                    <div class="order-state red">待付款</div>' +
                                    '                                </div>' +
                                    '' +
                                    '                                <div class="orderList-order">' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">付款金额</div>' +
                                    '                                        <div class="order-value orange">￥ 50.00</div>' +
                                    '                                    </div>' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">订单编号</div>' +
                                    '                                        <div class="order-value">201888888888888' + tabLenghtArray[itemIndex] + '</div>' +
                                    '                                    </div>' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">支付时间</div>' +
                                    '                                        <div class="order-value">2018-12-17 10:39:01</div>' +
                                    '                                    </div>' +
                                    '                                </div>' +
                                    '' +
                                    '                            </div>' +
                                    '                        </a>' +
                                    '                    </li>' +
                                    '' +
                                    '                </ul>' +
                                    '' +
                                    '            </div>' +
                                    '        </div>';
                                break;
                            case 2:
                                result += '<div class="mui-content">' +
                                    '' +
                                    '            <div class="mui-card">' +
                                    '' +
                                    '                <ul class="mui-table-view">' +
                                    '' +
                                    '                    <li class="mui-table-view-cell">' +
                                    '                        <a href="javascript:;">' +
                                    '                            <div class="mui-media-body">' +
                                    '' +
                                    '                                <div class="orderList-doctor">' +
                                    '                                    <div class="doctor-label">问诊医生：</div>' +
                                    '                                    <div class="doctor-name">奥巴马</div>' +
                                    '                                    <div class="order-state blue">待回复</div>' +
                                    '                                </div>' +
                                    '' +
                                    '                                <div class="orderList-order">' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">付款金额</div>' +
                                    '                                        <div class="order-value orange">￥ 50.00</div>' +
                                    '                                    </div>' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">订单编号</div>' +
                                    '                                        <div class="order-value">201888888888888' + tabLenghtArray[itemIndex] + '</div>' +
                                    '                                    </div>' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">支付时间</div>' +
                                    '                                        <div class="order-value">2018-12-17 10:39:01</div>' +
                                    '                                    </div>' +
                                    '                                </div>' +
                                    '' +
                                    '                            </div>' +
                                    '                        </a>' +
                                    '                    </li>' +
                                    '' +
                                    '                </ul>' +
                                    '' +
                                    '            </div>' +
                                    '        </div>';
                                break;
                            case 3:
                                result += '<div class="mui-content">' +
                                    '' +
                                    '            <div class="mui-card">' +
                                    '' +
                                    '                <ul class="mui-table-view">' +
                                    '' +
                                    '                    <li class="mui-table-view-cell">' +
                                    '                        <a href="javascript:;">' +
                                    '                            <div class="mui-media-body">' +
                                    '' +
                                    '                                <div class="orderList-doctor">' +
                                    '                                    <div class="doctor-label">问诊医生：</div>' +
                                    '                                    <div class="doctor-name">奥巴马</div>' +
                                    '                                    <div class="order-state green">已完成</div>' +
                                    '                                </div>' +
                                    '' +
                                    '                                <div class="orderList-order">' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">付款金额</div>' +
                                    '                                        <div class="order-value orange">￥ 50.00</div>' +
                                    '                                    </div>' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">订单编号</div>' +
                                    '                                        <div class="order-value">201888888888888' + tabLenghtArray[itemIndex] + '</div>' +
                                    '                                    </div>' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">支付时间</div>' +
                                    '                                        <div class="order-value">2018-12-17 10:39:01</div>' +
                                    '                                    </div>' +
                                    '                                </div>' +
                                    '' +
                                    '                            </div>' +
                                    '                        </a>' +
                                    '                    </li>' +
                                    '' +
                                    '                </ul>' +
                                    '' +
                                    '            </div>' +
                                    '        </div>';
                                break;
                            case 4:
                                result += '<div class="mui-content">' +
                                    '' +
                                    '            <div class="mui-card">' +
                                    '' +
                                    '                <ul class="mui-table-view">' +
                                    '' +
                                    '                    <li class="mui-table-view-cell">' +
                                    '                        <a href="javascript:;">' +
                                    '                            <div class="mui-media-body">' +
                                    '' +
                                    '                                <div class="orderList-doctor">' +
                                    '                                    <div class="doctor-label">问诊医生：</div>' +
                                    '                                    <div class="doctor-name">奥巴马</div>' +
                                    '                                    <div class="order-state gray">已关闭</div>' +
                                    '                                </div>' +
                                    '' +
                                    '                                <div class="orderList-order">' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">付款金额</div>' +
                                    '                                        <div class="order-value orange">￥ 50.00</div>' +
                                    '                                    </div>' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">订单编号</div>' +
                                    '                                        <div class="order-value">201888888888888' + tabLenghtArray[itemIndex] + '</div>' +
                                    '                                    </div>' +
                                    '                                    <div class="order-item">' +
                                    '                                        <div class="order-label">支付时间</div>' +
                                    '                                        <div class="order-value">2018-12-17 10:39:01</div>' +
                                    '                                    </div>' +
                                    '                                </div>' +
                                    '' +
                                    '                            </div>' +
                                    '                        </a>' +
                                    '                    </li>' +
                                    '' +
                                    '                </ul>' +
                                    '' +
                                    '            </div>' +
                                    '        </div>';
                                break;
                        }

                    }

                    if(result === ''){
                        result = '<div style="display: none;"></div>';
                    }

                    //动态生成的需要编译一下
                    var $html = $compile(result)($scope);
                    $('.khfxPane').eq(itemIndex).append($html);
                    me.resetload();
                }, 500);
            }
        });


        $('.tabHead span').on('click', function () {
            tabScroolTopArray[itemIndex] = $(window).scrollTop();
            var $this = $(this);
            itemIndex = $this.index();
            $(window).scrollTop(tabScroolTopArray[itemIndex]);

            $(this).addClass('active').siblings('.tabHead span').removeClass('active');
            $('.tabHead .borders').css('left', $(this).offset().left + 'px');
            $('.khfxPane').eq(itemIndex).show().siblings('.khfxPane').hide();

            if (!tabLoadEndArray[itemIndex]) {
                dropload.unlock();
                dropload.noData(false);
            } else {
                dropload.lock('down');
                dropload.noData();
            }
            dropload.resetload();
        });
    };

    $scope.goDetail = function () {
        console.log('goDetail');
    };

    /*******************************************************方法-end***********************************************************/

    /*******************************************************逻辑-start***********************************************************/

    //初始化分页
    $scope.page();

    /*******************************************************逻辑-end***********************************************************/

});
