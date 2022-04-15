window.addEventListener('DOMContentLoaded', () => {
    const inputV = document.getElementById('input')
    const outputP = document.getElementById('output')

    function logInput() {
        let addOn = inputV.value
        addOn = addOn / 599.4167
        addOn = addOn * 27.63819357299415
        outputP.textContent += "\r\n" + addOn
        outputP.scrollTop = outputP.scrollHeight;
        navigator.clipboard.writeText(addOn);
        inputV.value = ""
    }

    window.addEventListener('keydown', (e) => {
        if (e.code == 'Enter') {
            logInput()
        }
    })
})