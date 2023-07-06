// Helper function to swap elements
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Insertion sort algorithm
async function insertionSort() {
    console.log('In insertionSort()');
    const ele = document.querySelectorAll(".bar");
    const n = ele.length;

    for (let i = 1; i < n; i++) {
        let j = i - 1;
        let key = parseInt(ele[i].style.height);
        ele[i].style.background = '#fcbd7a';

        // Pause execution for visualization
        await waitforme(delay);

        while (j >= 0 && parseInt(ele[j].style.height) > key) {
            ele[j].style.background = '#fcbd7a';
            ele[j + 1].style.height = ele[j].style.height;

            // Pause execution for visualization
            await waitforme(delay);

            ele[j].style.background = 'rgb(46, 255, 185)';
            j--;
        }
        ele[j + 1].style.height = `${key}px`;

        ele[i].style.background = 'rgb(46, 255, 185)';
    }
}

// Event listener for insertion sort button
document.addEventListener('DOMContentLoaded', function() {
const insertionSortBtn = document.querySelector(".insertionSort");
insertionSortBtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
});