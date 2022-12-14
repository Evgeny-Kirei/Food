'use strict';

window.addEventListener('DOMContentLoaded', () =>  {

    // Block Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
  
        // Скрываем фото контента
    function hideTabContent() {
        tabsContent.forEach(item => { //Перебирае все фото 
            item.style.display = 'none'; //скрываем
        });
  
        tabs.forEach(item => { //Меняем класс активности
            item.classList.remove('tabheader__item_active');
        });
    }
  
    function showTabContent(i = 0) { //Показываем фото по очереди 
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }
  
    hideTabContent();
    showTabContent();
  
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;  // Добавляем событие клика чтобы при клике менялись фото
  
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Block Timer

    const deadLine = '2022-31-12';

 function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };      
 }

 function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }      

 }

    setClock('.timer', deadLine);       
  
}); 