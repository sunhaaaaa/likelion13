import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ButtonGroup,
  Container,
  DeleteButton,
  EditButton,
  ErrorMsg,
  Form,
  Heading,
  Heading2,
  Input,
  LoadingMsg,
  NoPostsMsg,
  PatchButton,
  PostContent,
  PostItem,
  PostList,
  PostTitle,
  SubmitButton,
  Textarea,
} from "./App.style";

function App() {
  const [posts, setPosts] = useState([]); // 게시글
  const [form, setForm] = useState({ title: "", content: "", id: null }); // 입력 폼
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 게시물 목록 불러오는 함수
  const fetchPosts = () => {
    setLoading(true); // 로딩 중이라는 상태를 나타냄

    axios
      .get("http://localhost:4000/posts")
      .then((response) => {
        setPosts(Array.isArray(response.data) ? response.data : []);
        setError(null);
      })
      .catch((err) => {
        setError("게시글 불러오기 실패");
        console.error(err);
      })
      .finally(() => setLoading(false)); // 모든 작업이 끝난 후 로딩이 끝났다는 상태를 나타냄
  };

  // 리액트가 렌더링이 끝나자마자 곧바로 실행되는 함수
  useEffect(() => {
    fetchPosts();
  }, []);

  // 입력 폼의 입력 감지
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // "글 작성하기" 또는 "글 수정하기" 버튼 눌렀을 때
  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title: form.title.trim(),
      content: form.content.trim(),
    };

    if (!postData.title || !postData.content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    // form.id가 존재한다는 것은 이미 존재하는 게시글의 id를 따왔다는 것이기 때문에,
    // 이 id의 존재 유무를 통해 새 글을 작성할지, 아니면 이미 존재하는 게시글을 수정할지를 판단 가능함
    if (form.id !== null) {
      // PUT 요청 = 게시글의 제목과 내용을 한번에 수정
      axios
        .put(`http://localhost:4000/posts/${form.id}`, postData)
        .then(() => {
          setForm({ title: "", content: "", id: null }); // 입력 폼 초기화
          fetchPosts(); // 게시글을 다시 불러옴. (업데이트된 게시글 목록을 불러옴, 리프레쉬하는 느낌)
          setError(null);
        })
        .catch((err) => {
          setError("글 수정 실패");
          console.error(err);
        });
    } else {
      // POST 요청 = 새 글 등록
      axios
        .post("http://localhost:4000/posts", postData)
        .then(() => {
          setForm({ title: "", content: "", id: null });
          fetchPosts();
          setError(null);
        })
        .catch((err) => {
          setError("글 작성 실패");
          console.error(err);
        });
    }
  };

  // "수정 (PUT)" 버튼을 눌렀을 때
  const handleEdit = (post) => {
    setForm(post); // 수정하려는 게시글의 제목과 글을 입력 폼에 미리 채워놓음
    window.scrollTo({ top: 0, behavior: "smooth" }); // 만약 화면이 아래로 스크롤이 되어있을 때, 이 함수가 실행되면 화면이 맨 위로 올라감.
  };

  // "삭제 (DELETE)" 버튼을 눌렀을 때
  const handleDelete = (id) => {
    if (window.confirm("정말 이 글을 삭제하시겠습니까?")) {
      // DELETE 요청
      axios
        .delete(`http://localhost:4000/posts/${id}`)
        .then(() => {
          fetchPosts();
          setError(null);
        })
        .catch((err) => {
          setError("글 삭제 실패");
          console.error(err);
        });
    }
  };

  // "빠른 제목 수정 (PATCH)" 버튼을 눌렀을 때
  const handleQuickPatchTitle = (post) => {
    const newTitle = window.prompt("새 제목을 입력하세요:", post.title);

    if (newTitle !== null && newTitle.trim() !== "" && newTitle !== post.title) {
      // PATCH 요청
      axios
        .patch(`http://localhost:4000/posts/${post.id}`, { title: newTitle.trim() })
        .then(() => fetchPosts())
        .catch((err) => {
          setError("빠른 제목 수정 실패");
          console.error(err);
        });
    }
  };

  return (
    <Container>
      <Heading>REST API 테스트용 CRUD 게시판</Heading>
      <Heading2>(Create, Read, Update, Delete)</Heading2>

      <Form onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholder="제목을 입력하세요"
          value={form.title}
          onChange={handleChange}
          maxLength={100}
          required
        />
        <Textarea
          name="content"
          placeholder="내용을 입력하세요"
          value={form.content}
          onChange={handleChange}
          maxLength={1000}
          required
        />
        <SubmitButton type="submit">{form.id ? "글 수정하기" : "글 작성하기"}</SubmitButton>
      </Form>

      {error && <ErrorMsg>{error}</ErrorMsg>}
      {loading && <LoadingMsg>불러오는 중...</LoadingMsg>}

      {!loading && posts.length === 0 && <NoPostsMsg>작성된 게시글이 없습니다.</NoPostsMsg>}

      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>

            <ButtonGroup>
              <EditButton onClick={() => handleEdit(post)}>수정 (PUT)</EditButton>
              <PatchButton onClick={() => handleQuickPatchTitle(post)}>
                빠른 제목 수정 (PATCH)
              </PatchButton>
              <DeleteButton onClick={() => handleDelete(post.id)}>삭제 (DELETE)</DeleteButton>
            </ButtonGroup>
          </PostItem>
        ))}
      </PostList>
    </Container>
  );
}

export default App;
