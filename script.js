window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let deadLine = '2020-02-21';    /* дата окончания срока */

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),   /* количество миллисекунд между окончанием срока и текущей датой */
        seconds = Math.floor((t /1000) % 60),              /* количество оставшихся секунд до 60 */
        minutes = Math.floor((t /1000 /60) % 60),           /* количество оставшихся минут до 60*/
        hours = Math.floor(t /(1000 * 60 * 60));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = document.querySelector(".hours"),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timeInterval = setInterval(clockUpdate, 1000);
            

        function clockUpdate() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);


});