(function() {
    var datepicker = {};
    // 获取一个月的整体日期数值
    // 大体一般是从1号到30号或31号
    // 开头会有前一个月的几天
    // 后面会有下一个月的几天
    // 获取难点在于获取前一个月和下一个月的几日
    // 最后将整体数据插入数组即可
    datepicker.getMonthData = function(year, month) {
        var ret = [];
        if (!year || !month && month != 0) {
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }
        // 注意new Date 中的month，从0开始，和实际月份差一

        // 算出该月第一天是星期几
        var firstDay = new Date(year, month - 1, 1);
        var firstDayWeekDay = firstDay.getDay();
        if (firstDayWeekDay === 0) { firstDayWeekDay = 7 };

        year = firstDay.getFullYear();
        month = firstDay.getMonth() + 1;

        // 算出上一个月最后吧一天是几号，31,30或28,29
        var lastDayOfLastMonth = new Date(year, month - 1, 0);
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        // 算出上一个月排在表格前有几个数字
        var preMonthDayCount = firstDayWeekDay - 1;

        // 算出最后一天是几号，注意month没减一，于是，算的是下个月
        // 但是是0号，所以回退到上个月最后一天
        var lastDay = new Date(year, month, 0);
        var lastDate = lastDay.getDate();

        // 循环42次，因为可能有上个月和下个月的数据
        // 原本i + 1 - preMonthDayCount即为正常的号数
        // 但上个月变为负数，下个月超过了该月最后一天、
        // 于是对其进行一定的处理
        for (var i = 0; i < 7 * 6; i++) {
            var date = i + 1 - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            if (date <= 0) {
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            } else if (date > lastDate) {
                thisMonth = month + 1;
                showDate = showDate - lastDate
            }
            if (thisMonth === 0) { thisMonth = 12 };
            if (thisMonth === 13) { thisMonth = 1 };
            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            });
        }
        return {
            year: year,
            month: month,
            days: ret
        };


    }


    // 将datepicker变为window的类，方便调用
    window.datepicker = datepicker;
})()