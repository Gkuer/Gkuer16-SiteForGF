// CSRF 토큰 가져오기
var csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

// AJAX를 사용하여 선택된 값들을 서버로 전송하는 함수
function sendData() {
  // 선택된 값들을 담을 변수 초기화
  var selectedValues = {};

  var question1Value = $("input[name='1q']:checked").val();
  selectedValues["question1"] = question1Value;

  var question2Value = $("input[name='2q']:checked").val();
  selectedValues["question2"] = question2Value;

  var question3Value = $("input[name='3q']:checked").val();
  selectedValues["question3"] = question3Value;

  var question4Value = $("input[name='4q']:checked").val();
  selectedValues["question4"] = question4Value;

  var question5Value = $("input[name='5q']:checked").val();
  selectedValues["question5"] = question5Value;

  var question6Value = $("input[name='6q']:checked").val();
  selectedValues["question6"] = question6Value;

  var instaName = document.getElementById("insta_name").value;
  selectedValues["instaName"] = instaName;

  // Axios 요청 보내기
  axios.post("/quiz/", selectedValues, {
  headers: {
    'X-CSRFToken': csrftoken
  }
})
    .then(function(response) {
      console.log("Values sent successfully!");
      submitButton.style.backgroundColor = "#42c58a"; // 연두색으로 색상 변경
      submitButton.textContent = "제출완료"; // 텍스트 변경
      setTimeout(function() {
      window.location.href = '{SECRET}';
      }, 1500);
    })
    .catch(function(error) {
      console.error("Error sending values: " + error);
    });
}

// 버튼 클릭 이벤트에 sendData 함수 연결
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", sendData);

var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(event) {
event.preventDefault(); // 폼 제출 이벤트 막기
// 필요한 작업 수행
myForm.disabled = true; // 폼 비활성화
});