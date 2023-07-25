const INDICATOR_COUNT = 8;
let activeIndicator = 0;

$(document).ready(() => {
    let indicatorList = $("#indicatorList");
    for (let i = 0; i < INDICATOR_COUNT; i++) {
        indicatorList.append(`<div class='indicator' id='indicator${i}'></div>`);
        $(`#indicator${i}`).click(() => {
            setIndicatorActive(i);
        });
        $(`.question-div-${i + 1}`).hide();
    }

    $("#indicator0").addClass("ind-active");
    $(`.question-div-1`).show();
})

setIndicatorActive = (index) => {
    activeIndicator = index;
    for (let i = 0; i <= index; i++) {
        $(`#indicator${i}`).addClass("ind-active")
        $(`.question-div-${i + 1}`).hide();
    }
    for (let i = index + 1; i < INDICATOR_COUNT; i++) {
        $(`#indicator${i}`).removeClass("ind-active");
        $(`.question-div-${i + 1}`).hide();
    }
    $(`.question-div-${index + 1}`).show();
}

onPrevQuestion = () => {
    activeIndicator = activeIndicator === 0 ? 7 : (activeIndicator - 1) % 8;
    setIndicatorActive(activeIndicator);
}

onNextQuestion = () => {
    activeIndicator = (activeIndicator + 1) % 8;
    setIndicatorActive(activeIndicator);
}