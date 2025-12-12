import { writeFileSync } from "node:fs";
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `
<h2>Hi👋</h2>
<h3>🎓 Education</h3>

\`2019 ~ 2025\` : Computational Science and Engineering, Ewha Womans University<br>
\`2019 ~ 2025\` : Biomechanical Engineering, Ewha Womans University</h5>

<h3>🖥 Activity</h3>

\`23.12  ~ 24.02\`  : 모바일앱개발협동조합 간판스토어 웹 플랫폼<br>
\`23.01  ~ 23.02\`  : 리브라이블리 헬스케어 스타트업<br>
\`22.03 ~ 22.08\` : 이화여대 웹개발 커리어클럽 Efub 2기 Front-End Lead<br>
\`21.07 ~ 22.07\` : Google Student Developer Club Ewha 3기<br>
\`21.01 ~ 21.07\` : 빅데이터 분석 대표 동아리 Tobig’s<br>
\`20.01 ~ 20.12\`  : 여학생 산업기술현장 체험프로그램 K-Girls' Day 2020 서포터즈 5기<br>

<h3>⭐ Interests</h3>
Javascript 기반 웹 풀스택 개발<br>
Cloud Computing - AWS, Docker, GCP<br>

<h3> ⚙️ Available:  </h3>

... 생략 ...

## 📕 최근 작성된 글
`;

// rss-parser 생성
const parser = new Parser({
  headers: {
    Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
  },
});

(async () => {
  // 피드 목록
  const feed = await parser.parseURL("https://hixsch-kixsch59.tistory.com/rss"); // 본인의 블로그 주소

  text += `<ul>`;

  // 최신 10개의 글의 제목과 링크를 가져온 후 text에 추가
  for (let i = 0; i < 10; i++) {
    const { title, link } = feed.items[i];
    console.log(`${i + 1}번째 게시물`);
    console.log(`추가될 제목: ${title}`);
    console.log(`추가될 링크: ${link}`);
    text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
  }

  text += `</ul>`;

  // README.md 파일 생성
  writeFileSync("README.md", text, "utf8", (e) => {
    console.log(e);
  });
  console.log("업데이트 완료");
})();
