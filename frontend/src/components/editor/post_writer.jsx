import React, { useContext, useRef } from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import TGeeksEditor from "./tgeeks_editor";
import styled from "styled-components";
import tw from "twin.macro";
import AuthContext from "context/auth_provider";
import { useNavigate } from "react-router-dom";
import { Parser } from "html-to-react";

const Container = tw.div`flex h-screen w-screen items-center justify-evenly mx-0 mt-4 bg-purple-200`;
const TwoColumn = tw.div`w-2/4 h-full flex justify-center items-center`;
const Column = tw.div`w-1/4 h-full flex justify-center items-center`;

const RenderContainer = tw.div`w-5/6 h-5/6 overflow-y-auto break-words text-right bg-white p-1 rounded-lg`;
const Title = tw.h1`text-center text-2xl py-2 font-bold text-purple-700`;

const InputContainer = tw.div`py-2 mt-2 first:mt-4 flex flex-col justify-evenly w-full h-auto`;
const Label = tw.label`tracking-wide font-semibold text-sm w-full text-right`;
const Img = tw.img`w-48 h-48 mx-auto mt-2`;
const Input = tw.input`w-full`;
const SubmitButton = tw.button`w-full mt-3 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg text-sm transition duration-300 transform focus:shadow-outline hover:bg-gray-300 hover:text-primary-700`;
const FormContainer = styled.div`
  ${tw`p-5 sm:p-12 md:p-6 bg-primary-300 text-gray-100 rounded-lg relative w-5/6 flex flex-col justify-evenly h-auto`}
  form {
    ${tw`mt-4 text-right`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

function PostWriter({ index = 0 }) {
  const date = new Date().toLocaleDateString();

  const initState = {
    title: "",
    member_id: 0,
    description: "",
    content: "",
    init_date: date,
    tags: "",
  };

  const [post, setPost] = useState(initState); // Lesson data state object

  const [requiredFields, setRequiredFields] = useState({
    title: false,
    content: false,
    description: false,
    tags: false,
  }); // Required fields state object

  const { auth } = useContext(AuthContext);
  const [img, setImg] = useState(null);
  const imgRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth == null) navigate("/");
    setPost({
      ...post,
      member_id: auth.id,
    });
    if (index !== 0) {
      Axios.get(`${process.env.REACT_APP_API_URL}/post/${index}`)
        .then((response) => {
          if (response.status === 200) {
            setPost(response.data);
          } else {
            console.log("error");
          }
        })
        .catch((error) => console.log(error.message));
    }
  }, [auth]);

  // Check if fields filled with data
  const checkRequiredFields = () => {
    if (requiredFields.title === false) return false;
    if (requiredFields.content === false) return false;
    if (requiredFields.description === false) return false;
    if (requiredFields.tags === false) return false;
    return true;
  };

  // Save button click event handler \save content to articale table
  const saveButtonEventHandler = (e) => {
    e.preventDefault();
    setPost({ ...post });
    if (checkRequiredFields()) {
      Axios.post(`${process.env.REACT_APP_API_URL}/post`, post)
        .then((response) => {
          if (response.status === 201) {
            console.log("done");
            setPost(initState);
          }
        })
        .catch((error) => console.log(error.message));
    } else {
      alert("one field is empty");
    }
  };

  // Save button click event handler \save content to lessons table
  const editButtonEventHandler = (e) => {
    e.preventDefault();
    setPost({ ...post });
    if (checkRequiredFields()) {
      Axios.put(`${process.env.REACT_APP_API_URL}post/${index}`, post)
        .then((response) => {
          if (response.status === 200) {
            console.log("done");
          } else {
            console.log("failed");
          }
        })
        .catch((error) => console.log(error.message));
    } else {
      alert("one field is empty");
    }
  };

  const onEditorChanges = (content, editor) => {
    setPost({ ...post, content: content });
    if (content === "") {
      setRequiredFields({ ...requiredFields, content: false });
    } else {
      setRequiredFields({ ...requiredFields, content: true });
    }
  };

  return (
    <Container className={"bg-gray-500"}>
      <Column>
        <FormContainer tw="mx-auto">
          <h2>كتابة مقاله</h2>
          <InputContainer>
            <Label htmlFor="title">صورة الغلاف</Label>
            <Img src={img || null} onClick={() => imgRef.current.click()} />
            <Input
              id="title"
              type="text"
              ref={imgRef}
              hidden={true}
              onChange={(e) => {
                setPost({
                  ...post,
                  title: e.target.value,
                });
                if (e.target.value === "") {
                  setRequiredFields({
                    ...requiredFields,
                    title: false,
                  });
                } else {
                  setRequiredFields({
                    ...requiredFields,
                    title: true,
                  });
                }
              }}
              value={post.title}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="title">عنوان المقالة</Label>
            <Input
              id="title"
              type="text"
              onChange={(e) => {
                setPost({
                  ...post,
                  title: e.target.value,
                });
                if (e.target.value === "") {
                  setRequiredFields({
                    ...requiredFields,
                    title: false,
                  });
                } else {
                  setRequiredFields({
                    ...requiredFields,
                    title: true,
                  });
                }
              }}
              required
              value={post.title}
            />
          </InputContainer>
          {/* كلمات دلالية */}

          <InputContainer>
            <Label htmlFor="tags">كلمات دلالية </Label>
            <input
              id="tags"
              type="text"
              multiple={true}
              onChange={(e) => {
                setPost({
                  ...post,
                  tags: e.target.value,
                });
                if (e.target.value === "") {
                  setRequiredFields({
                    ...requiredFields,
                    tags: false,
                  });
                } else {
                  setRequiredFields({
                    ...requiredFields,
                    tags: true,
                  });
                }
              }}
              value={post.tags}
            />
          </InputContainer>

          {/* حقل الوصف */}
          <InputContainer tw="flex-1">
            <Label htmlFor="description">وصف بسيط للمنشور</Label>
            <Input
              id="description"
              type="text"
              multiple={true}
              onChange={(e) => {
                setPost({
                  ...post,
                  description: e.target.value,
                });
                if (e.target.value === "") {
                  setRequiredFields({
                    ...requiredFields,
                    description: false,
                  });
                } else {
                  setRequiredFields({
                    ...requiredFields,
                    description: true,
                  });
                }
              }}
              value={post.description}
            />
          </InputContainer>
          {index === 0 && (
            <SubmitButton onClick={saveButtonEventHandler}>Save</SubmitButton>
          )}
          {index !== 0 && (
            <SubmitButton onClick={editButtonEventHandler}>edit</SubmitButton>
          )}
        </FormContainer>
      </Column>
      <TwoColumn tw="h-3/4">
        <TGeeksEditor fun={onEditorChanges} content={post.content} />
      </TwoColumn>
      <Column>
        <RenderContainer>
          <div>
            <Title tw="text-center text-4xl">{post.title}</Title>
          </div>
          {Parser().parse(post.content)}
        </RenderContainer>
      </Column>
    </Container>
  );
}

export default PostWriter;
