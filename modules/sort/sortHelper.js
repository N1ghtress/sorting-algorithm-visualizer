/* HELPER FUNCTIONS:
 * swap(arr, a_idx, b_idx)
 * generateRandomArray(size)
 */
const swap = (arr, aIdx, bIdx) => {
	let tmp = arr[aIdx]
	arr[aIdx] = arr[bIdx]
	arr[bIdx] = tmp
	// count += 1 // swap calls count.
}

const generateArray = size => {
	let arr = []

	for(let i = 0; i < size; ++i) {
		arr.push(i)
	}

	return arr
}

const shuffle = arr => {
	for(let i = arr.length - 1; i > 0; --i) {
		swap(arr, Math.floor(Math.random() * (i+1)), i)
	}
}

const generateRandomOrderAllValuesArray = size => {
	let arr = generateArray(size)
	shuffle(arr)
	return arr
}

const generateRandomOrderAndValueArray = size => {
	let arr = []

	for(let i = 0; i < size; ++i) {
		arr.push(Math.floor(Math.random() * size))
	}

	return arr
}

export {
	swap,
	generateRandomOrderAllValuesArray,
	generateRandomOrderAndValueArray
}