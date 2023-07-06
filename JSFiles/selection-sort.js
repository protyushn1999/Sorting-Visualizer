// Helper function to swap elements
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Selection sort algorithm
async function selectionSort() {
    console.log('In selectionSort()');
    const ele = document.querySelectorAll(".bar");
    const n = ele.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        ele[i].style.background = '#fcbd7a';

        for (let j = i + 1; j < n; j++) {
            ele[j].style.background = '#fcbd7a';

            // Pause execution for visualization
            await waitforme(delay);

            if (parseInt(ele[j].style.height) < parseInt(ele[minIndex].style.height)) {
                if (minIndex !== i) {
                    ele[minIndex].style.background = 'rgb(46, 255, 185)';
                }
                minIndex = j;
            } else {
                ele[j].style.background = 'rgb(46, 255, 185)';
            }
        }

        swap(ele[minIndex], ele[i]);
        ele[minIndex].style.background = 'rgb(46, 255, 185)';
        ele[i].style.background = '#064e63b0';
    }
    ele[n - 1].style.background = '#064e63b0';
}

// Event listener for selection sort button
const selectionSortBtn = document.querySelector(".selectionSort");
selectionSortBtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selectionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
