// 헤더 스크롤 감지
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 100) {
    header.classList.add("expanded");
    header.classList.remove("compact");
  } else {
    header.classList.remove("expanded");
    header.classList.add("compact");
  }
});

// 상담 신청 폼 전송 처리
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { "Accept": "application/json" }
  }).then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById("success-modal").style.display = "flex";
    } else {
      alert("전송 실패! 다시 시도해주세요.");
    }
  }).catch(() => {
    alert("문제가 발생했습니다. 다시 시도해주세요.");
  });
}

// 모달 닫기
function closeModal() {
  document.getElementById("success-modal").style.display = "none";
}
