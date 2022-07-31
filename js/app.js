const add = document.querySelector('.sidebar-icn');
const nav = document.querySelector('.navbar');
const remove = document.querySelector('.icon');
const black = document.querySelector('.bg-black');
const langbtn = document.querySelector('.lang span');
const changebtn = document.querySelector('.change span')
const valyuta = document.querySelector('.enazru');
const dil = document.querySelector('.usdazn')
const languages = document.querySelectorAll('.diller')
const crrncy = document.querySelectorAll('.currency-vlyt')
const arrow = document.querySelector('.change-arrow')
const sidebar = document.querySelector('.balance-menus')
const hidesidebar = document.querySelector('.balance-x')




add.addEventListener('click', () => {
    nav.classList.add('test')
    black.classList.add('test')

});





remove.addEventListener('click', () => {
    nav.classList.remove('test')
    black.classList.remove('test')
});



for (let i = 0; i < languages.length; i++) {
    languages[i].addEventListener('click', () => {
        const text = languages[i].innerText;
        langbtn.innerText = text
        valyuta.classList.remove('d-block')
    });

};

langbtn.addEventListener('click', () => {
    valyuta.classList.toggle('d-block')
});




for (let i = 0; i < crrncy.length; i++) {
    crrncy[i].addEventListener('click', () => {
        const txt = crrncy[i].innerText;
        changebtn.innerText = txt
        dil.classList.remove('d-block')
        arrow.classList.toggle('rotate')

    });


    changebtn.addEventListener('click', () => {
        dil.classList.toggle('d-block')
        arrow.classList.toggle('rotate')

    })

}