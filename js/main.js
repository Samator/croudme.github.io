/* Меню */
const menuBtn = document.querySelector("#menu_btn");
const menuList = document.querySelector("#menu_list");

menuBtn.addEventListener('click',function(event){
    menuList.classList.toggle('navbar_menu_list_active')
});











/*Кнопки*/
const linkBlock1 = document.querySelector(".item_1");
const linkBlock2 = document.querySelector(".item_2");
const linkBlock3 = document.querySelector(".item_3");
/*Блоки*/
const block1 = document.querySelector("#con_sec_2_block_1");
const block2 = document.querySelector("#con_sec_2_block_2");
const block3 = document.querySelector("#con_sec_2_block_3");


/*Функции*/
linkBlock1.addEventListener('click',function(event){
    linkBlock1.classList.add('active');
    linkBlock2.classList.remove('active');
    linkBlock3.classList.remove('active');
    block1.classList.add('active_block');
    block2.classList.remove('active_block');
    block3.classList.remove('active_block');
});
linkBlock2.addEventListener('click',function(event){
    linkBlock1.classList.remove('active');
    linkBlock2.classList.add('active');
    linkBlock3.classList.remove('active');
    block1.classList.remove('active_block');
    block2.classList.add('active_block');
    block3.classList.remove('active_block');
});
linkBlock3.addEventListener('click',function(event){
    linkBlock1.classList.remove('active');
    linkBlock2.classList.remove('active');
    linkBlock3.classList.add('active');
    block1.classList.remove('active_block');
    block2.classList.remove('active_block');
    block3.classList.add('active_block');
});