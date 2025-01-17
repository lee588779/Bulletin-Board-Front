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

    const postLink = document.createElement("a");
    postLink.href = `postDetail.html?id=${post.id}`;
    postContent.innerHTML = `
        <span class="postId">${post.id}</span>
        <span class="postTitle">${post.title}</span>
        <span class="postWriter">${post.name}</span>
        <span class="postTime">${new Date(post.time).toLocaleString()}</span>
      `;
    postListContainer.appendChild(postLink);
    postListContainer.appendChild(postContent);
  });
}

// 페이지가 로드되면 게시물 목록을 생성
document.addEventListener("DOMContentLoaded", generatePostList);
