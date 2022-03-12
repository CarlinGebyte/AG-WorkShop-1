const url = 'https://fresh-prince-ag.herokuapp.com'

const menu = document.querySelector('#menu')
const dropdown = document.querySelector('#burger')
const line = document.querySelector('.prince-navLine')
const link = document.querySelectorAll('.prince-navMenu-link')

/* SHOW MENU */
dropdown.addEventListener('click', () => {
	menu.classList.toggle('show')
	line.classList.toggle('active')
})

/* HIDDEN MENU */
link.forEach((n) =>
	n.addEventListener('click', () => {
		menu.classList.remove('show')
		line.classList.remove('active')
	})
)
