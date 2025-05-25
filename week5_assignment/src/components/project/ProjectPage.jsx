import {
  Container,
  TitleSection,
  Title,
  Subtitle,
  Grid,
  ProjectCard,
  TitleWrapper
} from ".//Project.styles";

import img1 from "../../assets/images/project/댕댕.png";
import img2 from "../../assets/images/project/트래.png";
import img3 from "../../assets/images/project/아이랑.png";
import img4 from "../../assets/images/project/톡식.png";
import img5 from "../../assets/images/project/김비서.png";
import img6 from "../../assets/images/project/꼬북.png";
import img7 from "../../assets/images/project/프레임.png";
import img8 from "../../assets/images/project/티피오.png";
import pinkIcon from "../../assets/images/pink.svg";

const projectList = [
  { image: img1, title: "댕댕일기" },
  { image: img2, title: "travAI" },
  { image: img3, title: "아이랑" },
  { image: img4, title: "톡식" },
  { image: img5, title: "김비서" },
  { image: img6, title: "꼬북" },
  { image: img7, title: "FrameOut" },
  { image: img8, title: "TPOcket" }
];

export default function ProjectPage() {
  return (
    <>
      <Container>
        <TitleSection>
        <TitleWrapper>
            <img src={pinkIcon} alt="Project Icon" className="title-icon" />
            <Title>Project</Title>
          </TitleWrapper>
          <Subtitle>
            2025 서경대학교 아이디어톤의 프로젝트 파일입니다. 클릭하여 상세한 정보를 확인하세요!<br />
            모아 놓으니 더 예쁘네요. 다들 너무 수고하셨습니다!
          </Subtitle>
        </TitleSection>
        <Grid>
          {projectList.map((project, index) => (
            <ProjectCard key={index}>
              <img src={project.image} alt={project.title} />
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </>
  );
}
