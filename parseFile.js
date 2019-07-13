export default function parseFile(state) {
    let preview = document.createElement('img');
    let activeImgClass = 'custom-img--is-active';

    preview.classList.add('custom-img');
    preview.addEventListener('click', function (e) {
        e.stopPropagation();
        if (e.target.classList.contains(activeImgClass)) {
            if (e.offsetX > e.target.offsetWidth/2) {
                state.activeImg.classList.remove(activeImgClass);
                state.activeImg = state.activeImg.nextSibling ? state.activeImg.nextSibling : images.firstElementChild;
                state.activeImg.classList.add(activeImgClass);
            } else {
                state.activeImg.classList.remove(activeImgClass);
                state.activeImg = state.activeImg.previousSibling ? state.activeImg.previousSibling : images.lastElementChild;
                state.activeImg.classList.add(activeImgClass);
            }
        } else {
            if (state.activeImg) {
                state.activeImg.classList.remove(activeImgClass);
            }
            state.activeImg = e.target;
            state.activeImg.classList.add(activeImgClass);
        }
    });
    let file = document.querySelector('#fileId').files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
        images.appendChild(preview);
    };

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}