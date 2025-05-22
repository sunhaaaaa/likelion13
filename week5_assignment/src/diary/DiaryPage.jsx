import Header from "../components/header/Header";

import photo1 from "../assets/images/diary1.png";
import photo2 from "../assets/images/diary2.png";
import photo3 from "../assets/images/diary3.png";

import {
  Wrapper,
  IntroSection,
  Title,
  Description,
  Button,
  Canvas,
  Note,
  ImageCard
} from "./Diary.styles"; 

export default function DiaryPage() {
  return (
    <>
      <Header />
      <Wrapper>
        <IntroSection>
          <Title>Diary</Title>
          <Description>
            2025 서경대학교 아이디어톤의 소감을 적는 곳입니다. 여러분이 느꼈던 모든 것을 적어주세요!
            이미지를 올리셔도 됩니다. 배치도 자유롭게 설정할 수 있어요! 방명록이라고 편하게 생각 부탁함~
          </Description>
          <Button>방명록 쓰러가기</Button>
        </IntroSection>

        <Canvas>
          <Note style={{ top: "0", left: "0", background: "#FFD86F" }}>
            다들 사랑해요호!!!!!!!!
          </Note>
          <Note style={{ top: "0", left: "300px", background: "#CFFF4F" }}>
            최강동아리멋사<br />그 중 서경대가 최강
          </Note>
          <Note style={{ top: "240px", left: "40px", background: "#8187FF", color: "#fff" }}>
            내가더더더
          </Note>
          <ImageCard src={photo1} style={{ top: "200px", left: "240px", transform: "rotate(-5deg)" }} />
          <Note style={{ top: "450px", left: "20px", background: "#FF6F6F", color: "#fff", width: "300px" }}>
            글씨를 이렇게도 적게 쓸 수 있어요<br />시원하게 씁시다
          </Note>
          <ImageCard src={photo2} style={{ top: "460px", left: "350px" }} />
          <Note style={{ top: "500px", left: "580px", background: "#8650C9", color: "#fff", width: "240px" }}>
            여기 후기 쓰는 곳임<br />그래서 제 소감은요...<br />(이하생략)
          </Note>
          <ImageCard src={photo3} style={{ top: "660px", left: "140px" }} />
        </Canvas>
      </Wrapper>
    </>
  );
}
