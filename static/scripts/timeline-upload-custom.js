//Removing Preloader
setTimeout(function(){
  var preloader = document.getElementById('preloader')
  if(preloader){preloader.classList.add('preloader-hide');}
},150);

document.addEventListener('DOMContentLoaded', () => {
  'use strict'

AWS.config.region = 'ap-northeast-2';
AWS.config.accessKeyId = '{SECRET}';
AWS.config.secretAccessKey = '{SECRET}';

function uploadToS3() {
const fileInput = document.getElementById('imageInput');
const file = fileInput.files[0];

const s3 = new AWS.S3();
const params = {
  Bucket: '{SECRET}',
  Key: 'user-upload/' + file.name,
  ContentType: file.type,
  Body: file
};

s3.upload(params, (err, data) => {
  if (err) {
    console.error('S3 업로드 오류:', err);
  } else {
    const imageUrl = data.Location;
    const text1 = document.getElementById('text1Input').value;
    const text2 = document.getElementById('text2Input').value;

    const payload = {
      imageUrl: imageUrl,
      text1: text1,
      text2: text2
    };

    var button = document.getElementById('uploadLabel2');
    button.value = "업로드 중...";

    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    axios.defaults.headers.common['X-CSRFToken'] = csrftoken;

    axios.post('/timeline-store/', JSON.stringify(payload), {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      }
    }).then(response => {
        console.log('요청이 성공적으로 처리됨');
        window.location.href = '/timeline';
      })
      .catch(error => {
        console.error('요청이 실패하거나 에러가 발생함', error);
      });

  }
});
}

function updateUploadStatus(input) {
  var uploadLabel = document.getElementById('uploadLabel');
  if (input.files && input.files.length > 0) {
    uploadLabel.textContent = '업로드 완료';
  } else {
    uploadLabel.textContent = '사진 업로드';
  }
}

function updateUploadStatus2(input) {
  var uploadLabel2 = document.getElementById('uploadLabel');
  if (input.files && input.files.length > 0) {
    uploadLabel2.textContent = '공유중 50%...(잠시만 기다려주세요)';
  } else {
    uploadLabel2.textContent = '공유하기';
  }
}
});
