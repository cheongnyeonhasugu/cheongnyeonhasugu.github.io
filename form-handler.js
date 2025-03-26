function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { "Accept": "application/json" }
  }).then(response => {
    if (response.ok) {
      form.reset(); // 입력값 초기화
      document.getElementById("success-modal").style.display = "flex"; // 모달창 표시
    } else {
      alert("전송 실패! 다시 시도해주세요.");
    }
  }).catch(() => {
    alert("문제가 발생했습니다. 다시 시도해주세요.");
  });
}
