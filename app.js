function changeType(event) {
    const inputEle = document.querySelector('#pw');
    if (inputEle.type === "password") {
        inputEle.type = "text";
        event.target.className = "bx bx-hide";
    } else {
        inputEle.type = "password";
        event.target.className = "bx bx-show"
    }
}