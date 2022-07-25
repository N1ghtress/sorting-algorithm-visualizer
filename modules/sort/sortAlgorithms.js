/* SORTING ALGORITHMS:
 * Selection sort
 * Bubble sort
 * Insertion sort
 * Merge sort
 * Quick sort
 * Heap sort
 */

import { swap } from './sortHelper.js'

const selectionSort = arr => {
	for (let i = 0; i < arr.length; ++i) {
		let min = i;
		for (let j = i+1; j < arr.length; ++j) {
			if (arr[j] < arr[min]) min = j
		}
		if (min != i) swap(arr, i, min)
	}
}

const bubbleSort = arr => {
	for (let i = 0; i < arr.length; ++i) {
		for(let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j+1]) swap(arr, j, j+1)
		}
	}
}

const insertionSort = arr => {
	for(let i = 0; i < arr.length; ++i) {
		for(let j = i+1; j > 0; --j) {
			if(arr[j-1] > arr[j]) swap(arr, j-1, j)
		}
	}
}

const mergeSort = arr => {
	const merge = (arr1, arr2) => {
		let res = [], i1 = 0, i2 = 0
		while (i1 < arr1.length && i2 < arr2.length) {
			if (arr1[i1] < arr2[i2]) res.push(arr1[i1++])
			else res.push(arr2[i2++])
		}
		
		while (i1 < arr1.length) res.push(arr1[i1++])
		while (i2 < arr2.length) res.push(arr2[i2++])
		
		return res
	}

	if (arr.length === 1) return arr
	
	const mid = Math.floor(arr.length / 2)
	
	const arr1 = mergeSort(arr.slice(0, mid))
	const arr2 = mergeSort(arr.slice(mid, arr.length))

	return merge(arr1, arr2)
}

const quickSort = arr => {
	const partition = (arr, begin, end) => {
		let pivot = arr[end - 1]
		let pivotIndex = begin - 1

		for(let i = begin; i < end - 1; ++i) {
			if (arr[i] < pivot) {
				pivotIndex++
				swap(arr, pivotIndex, i)
			}
		}
		
		swap(arr, ++pivotIndex, end - 1)

		return pivotIndex
	}

	const aux = (arr, begin, end) => {
		// Base case
		if (end - begin <= 1) return

		// Partition
		let mid = partition(arr, begin, end)
		
		// Recursive calls
		aux(arr, begin, mid)
		aux(arr, mid+1, end)
	}
	
	aux(arr, 0, arr.length)
}

const heapSort = arr => {
	const parent = i => Math.floor((i-1)/2) > 0 ? Math.floor((i-1)/2) : 0
	const leftChild = i => 2 * i + 1
	const rightChild = i => 2 * i + 2
	const indexMaxChild = (heap, i) => {
		if (rightChild(i) >= heapSize) return leftChild(i) 
		else return heap[leftChild(i)] > heap[rightChild(i)] ? leftChild(i) : rightChild(i)		
	}

	let heapSize = 0

	const insert = heap => {
		heapSize += 1
		let newIndex = heapSize - 1
		while (heap[parent(newIndex)] < heap[newIndex]) {
			swap(heap, newIndex, parent(newIndex))
			newIndex = parent(newIndex)
		}
	}

	const extractMax = heap => {
		swap(heap, 0, heapSize - 1)
		heapSize -= 1
		
		let toReplaceIndex = 0
		let nextSwapIndex = indexMaxChild(heap, toReplaceIndex)
		
		while (nextSwapIndex < heapSize && heap[nextSwapIndex] > heap[toReplaceIndex]) {
			swap(heap, toReplaceIndex, nextSwapIndex)
			toReplaceIndex = nextSwapIndex
			nextSwapIndex = indexMaxChild(heap, toReplaceIndex)
		}
		
		return heap[heapSize]
	}

	for (let i = 0; i < arr.length; ++i) {
		insert(arr)
	}

	for(let i = 0; i < arr.length - 1; ++i) {
		extractMax(arr)
	}
}

export {
	selectionSort as selection,
	bubbleSort as bubble,
	insertionSort as insertion,
	mergeSort as merge,
	quickSort as quick,
	heapSort as heap
}