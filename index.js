import { writeFileSync } from "node:fs";
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `
<h2>JangAyeon </h2>
<h3>⭐ About Me</h3>

\`\`\`javascript
class JangAyeon {
  constructor() {
    this.name = "장아연";
    this.contract = "hixkix59@gmail.com";
    this.major = [
      "Computational Science & Engineering",
      "Biomechanical Engineering"
    ];
    this.goals = [
      "Full-Stack Development",
      "Sustained Open-Source Contributions",
      "Scalable, Optimized, and Maintainable Architecture"
    ];
    this.interest = ["Web", "Cloud technology", "Developer Relations"];
    this.certifications = ["정보처리기사", "SQLD", "ADsP"];
    this.vibe = "문제 생기면 정의부터 하는 타입 😎";
  }
}
\`\`\`

<h3>👩‍💻 Work Experience</h3>
<b>25.09 ~</b> : 메디아크<br>
<b>23.12 ~ 24.02</b> : 모바일앱개발협동조합 간판스토어 웹 플랫폼<br>
<b>23.01 ~ 23.02</b> : 리브라이블리<br>

<h3>🖥 Dev Activity</h3>
<b>25.09 ~ 25.11</b> : 2025 오픈소스 컨트리뷰션 아카데미 [체험형-2차] MDN 문서 한글화<br>
<b>25.02 ~ 25.05</b> : 서울시여성가족재단 주관 우먼잇츠 Seoul Women IT's 스터디 3기<br>
<b>22.03 ~ 22.08</b> : 이화여대 웹개발 커리어클럽 Efub 2기 Front-End Lead<br>
<b>21.07 ~ 22.07</b> : Google Student Developer Club Ewha 3기<br>
<b>21.01 ~ 21.07</b> : 빅데이터 분석 대표 동아리 Tobig's<br>
<b>20.01 ~ 20.12</b> : 여학생 산업기술현장 체험프로그램 K-Girls' Day 2020 서포터즈 5기<br>

<h3> ⚙️ Available:  </h3>

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![typeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![ReactJS](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)<br>

![Tailwind Css](https://img.shields.io/badge/Tailwind--CSS-06B6D4?style=for-the-badge&logo=Tailwind-css&logoColor=white)
![Tanstack-query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)

![zustand](https://img.shields.io/badge/-Zustand-FFB441?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0i...SVG_BASE64...&logoColor=black)

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=microsoft-playwright&logoColor=white)<br>

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)
![Google Cloud](https://img.shields.io/badge/google%20cloud-4285F4?style=for-the-badge&logo=google%20cloud&logoColor=white)<br>

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=Html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=Css3&logoColor=white)
![javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)<br>

![git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white)
![jira](https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white)
![FireBase](https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)

## 📕 Recent Posts
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
