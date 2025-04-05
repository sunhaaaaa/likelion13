import "./App.css";

export default function App() { //React 컴포넌트를 내보내는 코드
  return (
    <div>
      <header className="header">
        <h1>My Profile</h1>
        <p>나만의 웹사이트를 만들어봐요!</p>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#about">자기소개</a></li>
          <li><a href="#features">관심사</a></li>
          <li><a href="#contact">연락하기</a></li>
          <li><a href="https://skulikelion.com" target="_blank" >멋사 사이트 바로가기</a></li>
        </ul>
      </nav>

      <main className="main">
        <section id="about" className="section">
          <h2>안녕하세요!</h2>
          <p>만나서 반갑습니다. 저는 전자컴퓨터공학과에 재학중인 23학번 황선하입니다.</p>
          <p>함께 즐거운 동아리 생활 보내봐요 ^^</p>
          <img
            className="img"
            src="https://mblogthumb-phinf.pstatic.net/MjAxODExMTlfMTI1/MDAxNTQyNjE5MzM1NTYx.4-hD9-Hz-hRBUQtYm-uz7mF8eW9WjN-Todg8vqdEA4Eg.k8EhOoVXP8LUCv9h3G3livmDZK0W-PsaDuJuzQ0wm80g.JPEG.ondo_h/image_4182205431542619126060.jpg?type=w800"
            alt="hi_image"
          />
        </section>

        <section id="features" className="section">
          <h2>관심사</h2>
          
          <h3>취미</h3>
          <ul>
            <li>영화 보기</li>
            <li>음악 감상</li>
            <li>책 읽기</li>
          </ul>
          <img
            className="img"
            src="https://www.kocca.kr/trend/vol30/img/s11/img_1.jpg"
            alt="netflix_image"
          />

          <h3>좋아하는 음식 순위</h3>
          <ol>
            <li>김치찌개</li>
            <li>닭볶음탕</li>
            <li>초밥</li>
          </ol>
          <img
            className="img"
            src="https://cdn.imweb.me/thumbnail/20220926/77e76d0642f3e.png"
            alt="kimchi_image"
          />

          <h3>좋아하는 노래 순위</h3>
          <ol>
            <li>Welcome to the Black Parade by My Chemical Romance</li>
            <li>Don't Look Back in Anger by Oasis</li>
            <li>pretender by OFFICIAL HIGE DANDISM</li>
          </ol>
          <img
          className="img"
          src="https://i.namu.wiki/i/Wb-CaNRgWjsaiopWnz_IIwrdslXXL_F8Y3VRhctA8sUI5uWj9jgn3K-JhpzMmum2vbMZpmv1f_S_6xdlaYtYvwiCDsfxNhFREI_Lb2zCYYJzUNH-4KFrel4zsjx0TRbx9KnHMaa7_rKuS1_GFRAKnA.webp"
          alt="album_image"
          />
        </section>

        <section id="contact" className="section">
          <h2>연락하기</h2>
          <p>이메일: sunha219@skuniv.com</p>
          <p>전화번호: 010-4536-1631</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025. SKU LIKELION. All rights reserved.</p>
      </footer>
    </div>
  );
}
