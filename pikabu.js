const BUTTON_CLASS = 'comment__tool hint other_class';
const BUTTON_ICON = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\n' +
    '     y="0px"\n' +
    '     viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
    '<g>\n' +
    '\t<g>\n' +
    '\t\t<path d="M256,200.348c-30.736,0-55.652,24.917-55.652,55.652s24.917,55.652,55.652,55.652s55.652-24.917,55.652-55.652\n' +
    '\t\t\tS286.736,200.348,256,200.348z M272.696,256c-9.208,0-16.696-7.492-16.696-16.696c0-9.204,7.487-16.696,16.696-16.696\n' +
    '\t\t\tc9.208,0,16.696,7.492,16.696,16.696C289.391,248.508,281.904,256,272.696,256z"/>\n' +
    '\t</g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '\t<g>\n' +
    '\t\t<path d="M418.265,117.344l22.177-22.179c6.529,3.119,13.752,5.009,21.471,5.009c27.662,0,50.087-22.424,50.087-50.087\n' +
    '\t\t\tS489.576,0,461.913,0s-50.087,22.424-50.087,50.087c0,7.718,1.89,14.94,5.009,21.471L389.092,99.3\n' +
    '\t\t\tC350.286,78.679,304.711,66.783,256,66.783S161.714,78.679,122.909,99.3L95.165,71.558c3.119-6.53,5.009-13.753,5.009-21.471\n' +
    '\t\t\tC100.174,22.424,77.749,0,50.087,0S0,22.424,0,50.087s22.424,50.087,50.087,50.087c7.718,0,14.94-1.89,21.471-5.009l22.177,22.177\n' +
    '\t\t\tC36.543,158.204,0,220.156,0,289.391C0,412.135,114.843,512,256,512s256-99.865,256-222.609\n' +
    '\t\t\tC512,220.156,475.457,158.204,418.265,117.344z M322.783,445.217H200.348c-9.223,0-16.696-7.473-16.696-16.696\n' +
    '\t\t\tc0-9.223,7.473-16.696,16.696-16.696h122.435c9.223,0,16.696,7.473,16.696,16.696\n' +
    '\t\t\tC339.478,437.744,332.005,445.217,322.783,445.217z M256,378.435c-67.51,0-122.435-54.934-122.435-122.435\n' +
    '\t\t\tS188.489,133.565,256,133.565c67.511,0,122.435,54.934,122.435,122.435S323.511,378.435,256,378.435z"/>\n' +
    '\t</g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '    <g>\n' +
    '</g>\n' +
    '</svg>';
const BUTTON_LABEL = 'Подробнее';
const OVERLAY_CLASS = 'overlay_mod';
const MODAL_CLASS = 'popup popup_modal popup_animation';
const COMPLAIN_DIV_CLASS = 'complain-form';
const COMPLAIN_DIV_HEADER_CLASS = 'complain-form__header';
const COMPLAIN_HEADER_TITLE_CLASS = 'header__title';
const COMPLAIN_MESSAGE_CLASS = 'complain-form__message complain-form__message_disabled-send monster__complain';
const COMPLAIN_FORM_FOOTER_CLASS = 'form_footer complain-form__footer_disabled-send';
const COMPLAIN_FORM_CLOSED_BUTTON_CLASS = 'button complain-form__close';
const COMPLAIN_HEADER_TITLE = 'Информация о пользователе';
const COMPLAIN_CLOSE_BUTTON_LABEL = 'Закрыть';
const POPUP_WRAPPER_CLASS = 'popup__wrapper';
const POPUP_CONTAINER_CLASS = 'popup__container';
const POPUP_CONTENT_CLASS = 'popup__content';
const CHART_BLOCK_CLASS = 'chart_block';
const MONSTER_BASE_URL = 'https://pikabu.monster/';
const ACTIVITY_POSTS_YEARS_DIAGRAM_LABEL = 'Создание постов по годам';
const ACTIVITY_COMMENTS_YEARS_DIAGRAM_LABEL = 'Комментарии по годам';
const ACTIVITY_POSTS_MONTHS_DIAGRAM_LABEL = 'Создание постов по месяцам';
const ACTIVITY_COMMENTS_MONTHS_DIAGRAM_LABEL = 'Комментарии по месяцам';
const MONSTER_METHODS = {
    userPostsYears: '-userpostsbyyears',
    userCommentsYears: '-usercommentsbyyears',
    userPostsMonths: '-userpostsbymonths',
    userCommentMonths: '-usercommentsbymonths',
};

document.querySelectorAll('.comment__body').forEach(
    function (CommentBodyElement) {
        let CommentToolElement = CommentBodyElement.querySelector('.comment__tools');
        let button = document.createElement('div');

        button.className = BUTTON_CLASS;
        button.innerHTML = BUTTON_ICON;
        button.setAttribute('aria-label', BUTTON_LABEL);

        CommentToolElement.append(button);

        button.addEventListener(
            'click',
            async function () {
                let modal = document.querySelector('div.popup_modal');
                let nickName = CommentBodyElement.querySelector('.comment__user').getAttribute('data-name');

                if (!modal) {
                    let overlay = document.createElement('div');
                    let popupWrapper = document.createElement('div');
                    let popupContainer = document.createElement('div');
                    let popupContent = document.createElement('div');
                    modal = document.createElement('div');

                    overlay.className = OVERLAY_CLASS;
                    popupWrapper.className = POPUP_WRAPPER_CLASS;
                    popupContainer.className = POPUP_CONTAINER_CLASS;
                    popupContent.className = POPUP_CONTENT_CLASS;

                    popupContent.style = 'max-height: 100%;';

                    overlay.setAttribute('z-index', "10000");
                    overlay.append(modal);
                    modal.append(popupWrapper);
                    popupWrapper.append(popupContainer);
                    popupContainer.append(popupContent);

                    overlay.addEventListener('click', function () {
                        document.querySelector('body').removeChild(this);
                    });

                    modal.className = MODAL_CLASS;

                    let complainDiv = document.createElement('div');
                    let complainHeader = document.createElement('div');
                    let complainHeaderTitle = document.createElement('div');
                    let complainBody = document.createElement('div');
                    let complainFooter = document.createElement('div');
                    let complainCloseButton = document.createElement('div');
                    let chartBlock = document.createElement('div');

                    complainDiv.className = COMPLAIN_DIV_CLASS;
                    complainHeader.className = COMPLAIN_DIV_HEADER_CLASS;
                    complainHeaderTitle.className = COMPLAIN_HEADER_TITLE_CLASS;
                    complainBody.className = COMPLAIN_MESSAGE_CLASS;
                    complainFooter.className = COMPLAIN_FORM_FOOTER_CLASS;
                    complainCloseButton.className = COMPLAIN_FORM_CLOSED_BUTTON_CLASS;
                    chartBlock.className = CHART_BLOCK_CLASS;

                    complainHeaderTitle.innerText = COMPLAIN_HEADER_TITLE;
                    complainCloseButton.innerText = COMPLAIN_CLOSE_BUTTON_LABEL;

                    let userIdPromise = await popupContentFunction(nickName);

                    if (userIdPromise.ok) {
                        let nickBlock = document.createElement('div');
                        let activityYearsPostsCanvas = document.createElement('canvas');
                        let activityYearsCommentsCanvas = document.createElement('canvas');
                        let activityMonthsCommentsCanvas = document.createElement('canvas');
                        let activityMonthsPostsCanvas = document.createElement('canvas');

                        activityYearsPostsCanvas.className = 'activity_years_canvas';

                        nickBlock.innerHTML = '<a href="' + MONSTER_BASE_URL + 'user/' + nickName + '-summary" target="_blank">' + nickName + '</a>';
                        complainBody.append(nickBlock);

                        let userId = await userIdPromise.json().then((data) => {
                            return data.ID;
                        });

                        chartsMonsterCanvas(
                            userId,
                            activityYearsPostsCanvas,
                            MONSTER_METHODS.userPostsYears,
                            chartBlock,
                            ACTIVITY_POSTS_YEARS_DIAGRAM_LABEL,
                        );

                        chartsMonsterCanvas(
                            userId,
                            activityYearsCommentsCanvas,
                            MONSTER_METHODS.userCommentsYears,
                            chartBlock,
                            ACTIVITY_COMMENTS_YEARS_DIAGRAM_LABEL,
                        );

                        chartsMonsterCanvas(
                            userId,
                            activityMonthsPostsCanvas,
                            MONSTER_METHODS.userPostsMonths,
                            chartBlock,
                            ACTIVITY_POSTS_MONTHS_DIAGRAM_LABEL,
                        );

                        chartsMonsterCanvas(
                            userId,
                            activityMonthsCommentsCanvas,
                            MONSTER_METHODS.userCommentMonths,
                            chartBlock,
                            ACTIVITY_COMMENTS_MONTHS_DIAGRAM_LABEL,
                        );

                        complainBody.append(chartBlock);
                    } else {
                        alert("Ошибка HTTP: " + userIdPromise.status);
                    }

                    complainHeader.append(complainHeaderTitle);
                    complainFooter.append(complainCloseButton);
                    complainDiv.append(complainHeader);
                    complainDiv.append(complainBody);
                    complainDiv.append(complainFooter);

                    popupContent.append(complainDiv);
                    document.querySelector('body').append(overlay);
                }

                modal.classList.toggle('popup_show');
            }
        );
    }
);

/**
 *
 * @param nickName
 *
 * @returns {Promise<Response>}
 */
function popupContentFunction(nickName) {
    return fetch(
        MONSTER_BASE_URL + 'api/0-getuser?name=' + nickName,
    );
}

function chartsMonsterCanvas(userId, canvas, method, complainBody, label) {
    $.ajax({
            type: 'GET',
            url: MONSTER_BASE_URL + 'api/' + userId + method,
            success: function (data) {
                let keys = Object.keys(data.data);

                if (keys.length) {
                    complainBody.append(canvas);
                    new Chart(canvas,
                        {
                            type: 'bar',
                            data: {
                                labels: keys,
                                datasets: [{
                                    label: label,
                                    data: Object.values(data.data),
                                    backgroundColor: ['yellowgreen']
                                }]
                            }
                        }
                    );
                }
            }
        }
    );
}
