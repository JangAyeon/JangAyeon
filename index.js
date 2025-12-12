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
 
 ![ReactJS](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
 ![typeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
 ![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)<br>
 ![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
 ![React-query](https://img.shields.io/badge/react%20query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)<br>
 ![Styled-Component](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
 ![Scss](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white)
 ![Tailwind Css](https://img.shields.io/badge/Tailwind--CSS-06B6D4?style=for-the-badge&logo=Tailwind-css&logoColor=white)<br>
 ![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=Html5&logoColor=white) 
 ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=Css3&logoColor=white)
 ![javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)<br>
 ![git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)
 ![AWS](https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)
 ![Google Cloud](https://img.shields.io/badge/google%20cloud-4285F4?style=for-the-badge&logo=google%20cloud&logoColor=white)<br>
 ![FireBase](https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
 ![MongoDB](https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white)
 ![jira](https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white)
![Slack](https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![notion](https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white) 

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
