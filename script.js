let todoInput
let errorInfo
let addBtn
let ulList
let newTodo

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		
		createToolsArea()
		ulList.append(newTodo)

		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

const createToolsArea = () => {
	
		const editTodo = document.createElement('div')
		editTodo.classList.add('tools')

		const firstBtn = document.createElement('button')
		firstBtn.classList.add('complete')
		firstBtn.innerHTML = '<i class="fas fa-check"></i>'

		const secondBtn = document.createElement('button')
		secondBtn.classList.add('edit')
		secondBtn.textContent = 'EDIT'

		const thirdBtn = document.createElement('button')
		thirdBtn.classList.add('delete')
		thirdBtn.innerHTML = '<i class="fas fa-times"></i>'


		editTodo.append(firstBtn, secondBtn, thirdBtn)

		newTodo.append(editTodo)
}


document.addEventListener('DOMContentLoaded', main)
