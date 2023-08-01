const INDICATOR_COUNT = 8;

// states of active indicator
let activeIndicator = 0;    // current one
let prevActiveIndicator = 0;    // previous one

$(document).ready(() => {
    let indicatorList = $("#indicatorList");
    for (let i = 0; i < INDICATOR_COUNT; i++) {
        indicatorList.append(`<div class='indicator' id='indicator${i}'></div>`);
        $(`#indicator${i}`).click(() => {
            setIndicatorActive(i);
        });
    }

    $("#indicator0").addClass("ind-active");
})

setIndicatorActive = (index) => {
    activeIndicator = index;
    for (let i = 0; i <= index; i++) {
        $(`#indicator${i}`).addClass("ind-active")
    }
    for (let i = index + 1; i < INDICATOR_COUNT; i++) {
        $(`#indicator${i}`).removeClass("ind-active");
    }

    $(`.question-div-${prevActiveIndicator + 1}`).removeClass("active-question");
    $(`.question-div-${prevActiveIndicator + 1}`).addClass("question");

    $(`.question-div-${activeIndicator + 1}`).removeClass("question");
    $(`.question-div-${activeIndicator + 1}`).addClass("active-question");

    if (index === 7) {
        $(`.btn-prev`).html(`<img src="./assets/Refresh Icon.svg" /> Review`);
        $(`.btn-next`).html(`Submit Answers <img src="./assets/Next Icon.svg" />`);
    } else {
        $(`.btn-prev`).html(`<img src="./assets/Back Icon.svg" /> Go Back`);
        $(`.btn-next`).html(`Next Question <img src="./assets/Next Icon.svg" />`);
    }

    if (index === 0) {
        $(`.btn-prev`).prop('disabled', true);
    } else {
        $(`.btn-prev`).prop('disabled', false);
    }
}

onPrevQuestion = () => {
    prevActiveIndicator = activeIndicator;
    activeIndicator = activeIndicator === 7 ? 0 : activeIndicator === 0 ? 7 : (activeIndicator - 1) % 8;
    setIndicatorActive(activeIndicator);
}

onNextQuestion = () => {
    if (activeIndicator === 7) {
        alert("Submitted");
        return;
    }
    prevActiveIndicator = activeIndicator
    activeIndicator = (activeIndicator + 1) % 8;
    setIndicatorActive(activeIndicator);
}