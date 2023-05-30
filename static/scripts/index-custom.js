// 1995년 5월 22일의 타임스탬프를 생성합니다.
var targetDate = new Date('1995-05-22').getTime();

// 초를 업데이트하는 함수를 정의합니다.
function updateElapsedSeconds() {
    // 현재 시간의 타임스탬프를 가져옵니다.
    var currentDate = new Date().getTime();

    // 경과된 초를 계산합니다.
    var elapsedSeconds = Math.floor((currentDate - targetDate) / 1000);

    // 쉼표를 추가하여 숫자를 포맷팅합니다.
    var formattedSeconds = addCommas(elapsedSeconds);

    // 경과된 초를 업데이트합니다.
    document.getElementById('elapsed-seconds').textContent = formattedSeconds;

    // 1초마다 업데이트를 반복합니다.
    setTimeout(updateElapsedSeconds, 1000);
}

// 숫자에 쉼표를 추가하는 함수를 정의합니다.
function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 페이지 로드 시 경과된 초를 업데이트합니다.
updateElapsedSeconds();