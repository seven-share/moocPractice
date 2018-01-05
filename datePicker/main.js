(function() {
    var datepicker = window.datepicker;
    var monthData;
    var $wrapper;

    // 使用js将获取来的数据进行渲染，由于没有模板引擎，所以直接复制该原本的html代码，加上单引号
    // 同时将数据插入，td使用了for循环
    datepicker.buildUi = function(year, month) {
        monthData = datepicker.getMonthData(year, month);
        var html = '<div class="ui-datepicker-header">' +
            '<a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>' +
            '<a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>' +
            '<span class="ui-datepicker-curr-month">' + monthData.year + '-' + monthData.month + '</span>' +
            '</div>' +
            '<div class="ui-datepicker-body">' +
            '<table>' +
            '<thead>' +
            '<tr>' +
            '<th>一</th>' +
            '<th>二</th>' +
            '<th>三</th>' +
            '<th>四</th>' +
            '<th>五</th>' +
            '<th>六</th>' +
            '<th>七</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>'
        for (var i = 0; i < monthData.days.length; i++) {
            var date = monthData.days[i];
            // 月首加入tr开始标签
            if (i % 7 === 0) {
                html += '<tr>';
            }
            html += '<td data-date="' + date.date + '">' + date.showDate + '</td>';
            // 月尾加上tr结束标签
            if (i % 7 === 6) {
                html += '</tr>';
            }
        }

        // '<tr>' +
        // '<td>29</td>' +
        // '<td>30</td>' +
        // '<td>1</td>' +
        // '<td>2</td>' +
        // '<td>3</td>' +
        // '<td>4</td>' +
        // '<td>5</td>' +
        // '</tr>'

        html += '</tbody>' +
            '</table>' +
            '</div>';
        return html;
    }

    // 将日历的包裹标签进一步去除，用js插入
    // 参数是在点击后，判断上下月使用，每次切换都会重新渲染日历
    datepicker.render = function(direction) {
        var year, month;
        if (monthData) {
            year = monthData.year;
            month = monthData.month;
        }
        if (direction == 'prev') { month-- };
        if (direction == 'next') { month++ };
        var html = datepicker.buildUi(year, month);
        $wrapper = document.querySelector(".ui-datepicker-swrapper");
        if (!$wrapper) {
            $wrapper = document.createElement('div');
            document.body.appendChild($wrapper);
            $wrapper.className = 'ui-datepicker-swrapper';
        }
        $wrapper.innerHTML = html;

    }

    // 规定输入日期格式
    function format(date) {
        var ret = ''

        function padding(num) {
            if (num <= 9) {
                return '0' + num;
            }
            return num;
        }
        ret += date.getFullYear() + "-";
        ret += padding(date.getMonth() + 1) + "-";
        ret += padding(date.getDate())
        return ret;
    }

    // 初始化日历，传入输入框的样式类名
    datepicker.init = function(input) {
        // var html = datepicker.buildUi();
        // // $dom.innerHTML = html;
        // var $wrapper = document.createElement('div');
        // $wrapper.className = 'ui-datepicker-swrapper';
        // $wrapper.innerHTML = html;
        // document.body.appendChild($wrapper);
        datepicker.render();
        var $input = document.querySelector(input);
        var isOpen = false;
        // $input.onclick = function() {
        //     if (isOpen) {
        //         $wrapper.classList.remove('ui-datepicker-swrapper-show');
        //         isOpen = false;
        //     } else {
        //         $wrapper.classList.add('ui-datepicker-swrapper-show');
        //         var left = $input.offsetLeft;
        //         var top = $input.offsetTop;
        //         var height = $input.offsetHeight;
        //         $wrapper.style.top = top + height + 2 + "px";
        //         $wrapper.style.left = left + "px";
        //         isOpen = true;
        //     }
        // }


        // 点击输入框，切换日历出现与否
        $input.addEventListener('click', function() {
            if (isOpen) {
                $wrapper.classList.remove('ui-datepicker-swrapper-show');
                isOpen = false;
            } else {
                $wrapper.classList.add('ui-datepicker-swrapper-show');
                var left = $input.offsetLeft;
                var top = $input.offsetTop;
                var height = $input.offsetHeight;
                $wrapper.style.top = top + height + 2 + "px";
                $wrapper.style.left = left + "px";
                isOpen = true;
            }
        }, false)

        // 此为点击月份切换按钮，因为每次都是重新渲染数据
        // 所以第一次绑定的点击会消失，所以绑定到包裹元素上
        // 使用target进行判断
        $wrapper.addEventListener('click', function(e) {
                $target = e.target;
                if (!$target.classList.contains("ui-datepicker-btn")) { return; }
                if ($target.classList.contains("ui-datepicker-prev-btn")) {
                    datepicker.render('prev');
                } else if ($target.classList.contains("ui-datepicker-next-btn")) {
                    datepicker.render('next');
                }
            }, false)
            // $wrapper.onclick = function(e) {
            //     $target = e.target;
            //     if (!$target.classList.contains("ui-datepicker-btn")) { return; }
            //     if ($target.classList.contains("ui-datepicker-prev-btn")) {
            //         datepicker.render('prev');
            //     } else if ($target.classList.contains("ui-datepicker-next-btn")) {
            //         datepicker.render('next');
            //     }
            // }


        // 选择日期，将日期放到输入框中，同时收起日历
        $wrapper.addEventListener("click", function(e) {
            var $target = e.target;
            if ($target.tagName.toLowerCase() !== "td") return;
            var date = new Date(monthData.year, monthData.month - 1, $target.dataset.date);
            $input.value = format(date);


            $wrapper.classList.remove('ui-datepicker-swrapper-show');
            isOpen = false;
        }, false)
    }
})()