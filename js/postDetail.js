const boardDeatil = {
  id: 1,
  boardType: "자유게시판",
  title:
    "글 내용 연습해봅시ㅓ라오러오려ㅑㄷ보ㅑㅕ공나ㅓㅁ뤼ㅓㄹ며ㅑㅣㅗㅕ댜ㅗ갸ㅕ오ㅓㅏㅇ무라ㅓ우랴ㅓㅁ모ㅕㅑ롣쟈ㅕ고벼ㅐㅑ뎌갸ㅐ98배ㅛ482ㅛ고ㅕㅓㅏ추타ㅏ재ㅗㄱ932ㅛㅕ8ㄱ932ㅛㅕ8ㅔ로아ㅝㅏ루ㅏㅓ오렫2ㅛㅔ8겨ㅑㄷ모러ㅏㅇㄴ러ㅏㅇ누랑너랴조댜ㅕㅗ댜ㅕㅕ게ㅕㅑ저먀니우라ㅣ누리ㅏㅜ아리ㅜㅇ니ㅏ뤼ㅏㅇㄴ멀9ㅑㄷ2ㅕ3984983ㅕ4982ㅕ849327489274",
  content:
    " fkld;skflfjeiowjirouwiro23894udfisafjk연습해봅시ㅓ라오러오려ㅑㄷ보ㅑㅕ공나ㅓㅁ뤼ㅓㄹ며ㅑㅣㅗㅕ댜ㅗ갸ㅕ오ㅓㅏㅇ무라ㅓ우랴ㅓㅁ모ㅕㅑ롣쟈ㅕ고벼ㅐㅑ뎌갸ㅐ98배ㅛ482ㅛ고ㅕㅓㅏ추타ㅏ재ㅗㄱ932ㅛㅕ8ㄱ932ㅛㅕ8ㅔ로아ㅝㅏ루ㅏㅓ오렫2ㅛㅔ8겨ㅑㄷ모러ㅏㅇㄴ러ㅏㅇ누랑너랴조댜ㅕㅗ댜ㅕㅕ게ㅕㅑ저먀니우라ㅣ누리ㅏㅜ아리ㅜㅇ니ㅏ뤼ㅏㅇㄴ멀9ㅑㄷ2ㅕ3984983ㅕ4982ㅕ849327489274safjldjsifod;ojldns어러라ㅣ;ㅇㄴ먀램ㄷ74823942ㅘㅓㅇㄴㅁ뤙ㄴ무ㅏㄹ나ㅣ릉;ㅛㅁ884ㅐ",
  name: "작성자",
  time: "2019-02-05T 12:00:6",
};

function generatePostDetail() {
  const postContainer = document.getElementById("postDetail");
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id"); // URL에서 ID 추출
  console.log(postId);

  const postContent = document.createElement("div");
  postContent.classList.add("post"); // 이름 변경
  postContent.innerHTML = `
    <span class="boardType">${boardDeatil.boardType}</span>
    <br />
    <div class="postDetailTitle">${boardDeatil.title}</div>
    <hr />
    <span class="postDetailAuthor">작성자: ${boardDeatil.name}</span>
    <div class="postDetailContent"> <!-- 클래스 이름 변경 -->
      ${boardDeatil.content}
    </div>
    <span class="postDetailTime">${new Date(
      boardDeatil.time
    ).toLocaleString()}</span>
  `;

  postContainer.appendChild(postContent);
}

document.addEventListener("DOMContentLoaded", generatePostDetail);
