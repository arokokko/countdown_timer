window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let deadLine = '2020-02-25 GMT+0700';    /* устанавливаем дату окончания срока + свой часовой пояс*/

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),   /* количество миллисекунд между окончанием срока и текущей датой */
        seconds = Math.floor((t /1000) % 60),              /* количество оставшихся секунд до 60 */
        minutes = Math.floor((t /1000 /60) % 60),           /* количество оставшихся минут до 60*/
        hours = Math.floor(t /(1000 * 60 * 60));            /* количество оставшихся часов*/
        // hours = Math.floor(t /(1000 * 60 * 60) % 24),
        // days = Math.floor(t /(1000 * 60 * 60 * 24));

        return {
            'total': t,               /* функция возвращает объект с записанными данными */
            'seconds': seconds,
            'minutes': minutes,
            // 'days': days,
            'hours': hours
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),         /* получаем данные из верстки */
            hours = timer.querySelector(".hours"),
            // days = timer.querySelector(".days"),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(clockUpdate, 1000);   /* запускаем функцию обновления раз в секунду */
            

        function clockUpdate() {                   /* создаем динамическую функцию которая сначала получает данные о времени  */
            let t = getTimeRemaining(endtime);
            let addZero;      

            if (t.total <= 0) {                       /*  отключаем таймер когда выходит время */
                clearInterval(timeInterval);
            } else {
                addZero = function(num) {              /* функция добавления 0 когда секунд, минут или часов меньше 10 */
                    if(num < 10) {
                        return ('0' + num);
                    } else {
                        return num;
                    }
                };
            }
            hours.textContent = addZero(t.hours);          /* а потом перезаписывает данные в верстку */
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            // days.textContent = t.days;
        }
    }

    setClock('timer', deadLine);


});