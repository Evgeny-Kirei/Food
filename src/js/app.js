'use strict';

window.addEventListener('DOMContentLoaded', () =>  {

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
  
  }); 