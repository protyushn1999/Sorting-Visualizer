// Helper function to merge two sorted arrays
async function merge(ele, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await waitforme(delay);
        ele[low + i].style.background = '#fcbd7a';
        left[i] = ele[low + i].style.height;
    }
    for (let i = 0; i < n2; i++) {
        await waitforme(delay);
        ele[mid + 1 + i].style.background = '#fcbd7a';
        right[i] = ele[mid + 1 + i].style.height;
    }

    let i = 0,
        j = 0,
        k = low;

    while (i < n1 && j < n2) {
        await waitforme(delay);
        if (parseInt(left[i]) <= parseInt(right[j])) {
            ele[k].style.height = left[i];
            i++;
        } else {
            ele[k].style.height = right[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        await waitforme(delay);
        ele[k].style.height = left[i];
        i++;
        k++;
    }

    while (j < n2) {
        await waitforme(delay);
        ele[k].style.height = right[j];
        j++;
        k++;
    }

    for (let i = low; i <= high; i++) {
        await waitforme(delay);
        ele[i].style.background = 'rgb(46, 255, 185)';
    }
}

// Merge sort algorithm
async function mergeSort(ele, low, high) {
    if (low < high) {
        const mid = Math.floor((low + high) / 2);
        await mergeSort(ele, low, mid);
        await mergeSort(ele, mid + 1, high);
        await merge(ele, low, mid, high);
    }
}

// Event listener for merge sort button
const mergeSortBtn = document.querySelector(".mergeSort");
mergeSortBtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    const ele = document.querySelectorAll(".bar");
    await mergeSort(ele, 0, ele.length - 1);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
