// 샘플 데이터 (학번, 이름 기준)
const studentAccounts = [
  { id: "2023001", name: "김민수", googleId: "kimms@school.kr", password: "abc123!" },
  { id: "2023002", name: "이수정", googleId: "leesj@school.kr", password: "pass2023" },
  { id: "2023004", name: "김유정", googleId: "leessj@school.kr", password: "pass2023" },
  { id: "2023003", name: "박진영", googleId: "parkjy@school.kr", password: "pw456!" }
];

// 검색 이벤트 처리
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 폼 제출 시 새로고침 방지

  // 입력값 가져오기
  const studentId = document.getElementById("studentId").value.trim();
  const studentName = document.getElementById("studentName").value.trim();

  // 입력값 유효성 체크
  if (!studentId || !studentName) {
    alert("학번과 이름을 모두 입력해주세요.");
    return;
  }

  // 검색
  const student = studentAccounts.find(account =>
    account.id === studentId && account.name === studentName
  );

  // 결과 출력
  const accountId = document.getElementById("accountId");
  const account
