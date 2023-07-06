// Helper function to swap elements
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Partition function for quick sort
async function partition(ele, low, high) {
    let pivot = parseInt(ele[high].style.height);
    ele[high].style.background = '#fcbd7a';
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        ele[j].style.background = '#fcbd7a';
        await waitforme(delay);

        if (parseInt(ele[j].style.height) < pivot) {
            i++;
            swap(ele[i], ele[j]);
            ele[i].style.background = 'rgb(46, 255, 185)';
            if (i != j) ele[j].style.background = 'rgb(46, 255, 185)';
            await waitforme(delay);
        } else {
            ele[j].style.background = 'rgb(46, 255, 185)';
        }
    }

    i++;
    swap(ele[i], ele[high]);
    ele[high].style.background = 'rgb(46, 255, 185)';
    ele[i].style.background = '#064e63b0';
    await waitforme(delay);

    for (let k = 0; k < ele.length; k++) {
        if (ele[k].style.background != '#064e63b0') {
            ele[k].style.background = 'rgb(46, 255, 185)';
        }
    }

    return i;
}

// Quick sort algorithm
async function quickSort(ele, low, high) {
    if (low < high) {
        let pi = await partition(ele, low, high);

        await quickSort(ele, low, pi - 1);
        await quickSort(ele, pi + 1, high);
    } else {
        if (low >= 0 && high >= 0 && low < ele.length && high < ele.length) {
            ele[low].style.background = 'rgb(46, 255, 185)';
            ele[high].style.background = 'rgb(46, 255, 185)';
        }
    }
}

// Event listener for quick sort button
const quickSortBtn = document.querySelector(".quickSort");
quickSortBtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    const ele = document.querySelectorAll(".bar");
    await quickSort(ele, 0, ele.length - 1);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
