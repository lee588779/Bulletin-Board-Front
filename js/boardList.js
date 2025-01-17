const boardData = [
  {
    id: 1,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 2,
    title:
      "글자수 테스트를 위해 넣고있습니다 ㅣㄹㅇㄴ머랑ㄴ모려ㅑㅇ노려ㅑ돌ㅇ나ㅜ링누랑ㄴ란러아ㅜ랑눌먀ㅣㅜㅕ두랸ㅇㄹㅈ벼ㅑㄷ재ㅕ쟈ㅐ더장ㅌ쿠츠텯ㄹ오",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 3,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 4,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 5,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 6,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 7,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 8,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 9,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 10,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 11,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 12,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
  {
    id: 13,
    title: "테스트용 입니다",
    name: "작성자 이름",
    time: "2019-02-05T 12:00:6",
  },
];
function generatePostList() {
  const postListContainer = document.getElementById("postList");

  boardData.map((post) => {
    const postContent = document.createElement("div");
    postContent.classList.add("postContent");

    const urlParams = new URLSearchParams(window.location.search);
    const boardType = urlParams.get("boardType");

    const boardTypeDis = document.getElementById("boardTypeName");
    if (boardType == "0") {
      boardTypeDis.textContent = "공지사항";
    } else if (boardType == "1") {
      boardTypeDis.textContent = "자유게시판";
    }

    // 게시글 링크를 감싸는 a 태그 생성
    const postLink = document.createElement("a");
    postLink.href = `./postDetail.html?id=${post.id}`;
    postLink.classList.add("postLink");

    // postLink 안에 내용을 추가
    postLink.innerHTML = `
      <span class="postId">${post.id}</span>
      <span class="postTitle">${post.title}</span>
      <span class="postWriter" id="postWriter-${post.id}">${post.name}</span>
      <span class="postTime">${new Date(post.time).toLocaleString()}</span>
    `;

    // postContent에 postLink 추가 후 DOM에 추가
    postContent.appendChild(postLink);
    postListContainer.appendChild(postContent);

    // DOM에 추가된 후 postWriter 선택
    const postWriter = document.getElementById(`postWriter-${post.id}`);
    if (boardType == "0") {
      postWriter.textContent = "관리자";
    }
  });
}

// 페이지가 로드되면 게시물 목록을 생성
document.addEventListener("DOMContentLoaded", generatePostList);
