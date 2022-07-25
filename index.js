import * as Sort from './modules/sort.js';

const arrayGenerationElem = document.querySelector('#array-generation')
const arraySizeElem = document.querySelector('#array-size')
const generateArrayBtn = document.querySelector('#generate-array')
const sortingAlgorithmElem = document.querySelector('#sorting-algorithm')
const sortBtn = document.querySelector('#sort')
const stopBtn = document.querySelector('#stop')

const toEnable = document.querySelectorAll('.to-enable')
const toDisable = document.querySelectorAll('.to-disable')

const generateArray = () => {
	const fetchArrayGenerationMethod = {
		'random-order-values': Sort.generateRandomOrderAndValueArray,
		'random-order-all-values': Sort.generateRandomOrderAllValuesArray
	}

	const fetchArraySize = () => {
		return arraySizeElem.value
	}
	
	// Create an array respecting the size and generation method
	array = fetchArrayGenerationMethod[arrayGenerationElem.value](fetchArraySize())
}

const sort = () => {
	// Disable/Enable all elements that have a behaviour on the array, or the sorting.
	toDisable.forEach(e => e.disabled = true)
	toEnable.forEach(e => e.disabled = false)

	// Sort the array using the right sorting alhorithm.
	const fetchSortingAlgorithm = {
		'selection-sort': Sort.selection,
		'bubble-sort': Sort.bubble,
		'insertion-sort': Sort.insertion,
		'merge-sort': Sort.merge,
		'quick-sort': Sort.quick,
		'heap-sort': Sort.heap
	}
	fetchSortingAlgorithm[sortingAlgorithmElem.value](array)

	// Enable/Disable the previously disabled/enabled elements.
	toDisable.forEach(e => e.disabled = false)
	toEnable.forEach(e => e.disabled = true)
}

const stop = () => {
	// Disable/Enable all elements that have a behaviour on the array, or the sorting.
	toDisable.forEach(e => e.disabled = false)
	toEnable.forEach(e => e.disabled = true)

	// Stop the sorting

	// Enable/Disable the previously disabled/enabled elements.
	toDisable.forEach(e => e.disabled = true)
	toEnable.forEach(e => e.disabled = false)
}

arrayGenerationElem.onchange = generateArray;
arraySizeElem.onchange = generateArray;
generateArrayBtn.onclick = generateArray
sortBtn.onclick = sort
stopBtn.onclick = stop

const render = () => {
	// Loop through the array and display it as div elements with scaling height and width text is value in array
}

let array;
generateArray();
