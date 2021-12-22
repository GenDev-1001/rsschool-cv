const burger = document.querySelector('.menu-btn')
const menuList = document.querySelector('.menu__list')
const projectsItemInfo = document.querySelectorAll('.projects__item-info')

const toggleMenuBtn = () => {
    menuList.classList.toggle('active')
}


burger.addEventListener("click", toggleMenuBtn)


let projectItemOne = projectsItemInfo[0];
let projectItemTwo = projectsItemInfo[1];
projectItemOne.addEventListener('mousemove', () => projectItemOne.classList.add('active'))
projectItemOne.addEventListener('mouseout', () => projectItemOne.classList.remove('active'))
projectItemTwo.addEventListener('mousemove', () =>  projectItemTwo.classList.add('active'))
projectItemTwo.addEventListener('mouseout', () => projectItemTwo.classList.remove('active'))




