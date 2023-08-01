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
    if (index === 7) {
        $(`.btn-prev`).html(`<img src="./assets/Refresh Icon.svg" /> Review`);
        $(`.btn-next`).html(`Submit Answers <img src="./assets/Next Icon.svg" />`);
    } else {
        $(`.btn-prev`).html(`<img src="./assets/Back Icon.svg" /> Go Back`);
        $(`.btn-next`).html(`Next Question <img src="./assets/Next Icon.svg" />`);
    }

    if(index===0) {
        $(`.btn-prev`).prop('disabled', true);
    } else {
        $(`.btn-prev`).prop('disabled', false);
    }
}

onPrevQuestion = () => {
    activeIndicator = activeIndicator === 7 ? 0 : activeIndicator === 0 ? 7 : (activeIndicator - 1) % 8;
    setIndicatorActive(activeIndicator);
}

onNextQuestion = () => {
    activeIndicator = (activeIndicator + 1) % 8;
    setIndicatorActive(activeIndicator);
}