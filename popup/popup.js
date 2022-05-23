function saveColor(value) {
    browser.storage.local.set({
        diagramColor: value,
    });
}

let color = browser.storage.local.get().then(setSpanColor);

function setSpanColor(color) {
    $('.col-8 span').text(color.diagramColor);
}
