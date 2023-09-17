import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

// ///////////////////////////////////////////////////////////
// This component is used to render posts 'member content'
// //////////////////////////////////////////////////////////

import styled from "styled-components";

import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`w-2/3 sm:w-1/2 md:w-2/3 flex flex-col shadow-lg shadow-gray-500 rounded-md lg:rounded-3xl lg:flex-row-reverse md:items-center md:max-w-screen-xl my-10 mx-auto p-0 md:py-12 lg:px-12`;
const LeftColumn = tw.div`relative lg:w-6/12 flex-shrink-0 flex-col justify-between text-center h-56 lg:h-64 p-4 pb-6 sm:pb-8 md:pb-0 lg:text-right`;
const RightColumn = tw.div`relative -mt-12 lg:w-6/12 lg:-mt-10 flex flex-col justify-center`;
const Img = tw.img`rounded-t-lg lg:rounded-t-none lg:rounded-l-lg`;
const Heading = tw.h1`font-black text-right text-3xl md:text-5xl leading-snug max-w-3xl h-2/6`;
const Date = tw.small``;
const Paragraph = tw.p`my-2 lg:my-3 text-sm text-right font-medium text-gray-600 h-3/6 max-w-lg mx-auto lg:mx-0 truncate`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center h-1/6 lg:justify-start mt-3`;
const ReadPostButton = styled.button`
  ${tw`mb-4 sm:mb-0 sm:ml-8 flex items-center w-auto text-secondary-300 space-x-2 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-4 font-medium`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center items-center relative -mt-10 sm:-mt-5 md:mt-0 max-w-3xl lg:max-w-none`;

const ListPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`)
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data);
        }
      })
      .catch((error) => console.error(error.message));
  }, []);

  const navigator = useNavigate();
  const toggleModal = (e, id) => {
    e.preventDefault();
    navigator(`/readPost/${id}`);
  };

  return (
    <Container>
      {posts.map((post, i) => (
        <TwoColumn key={i}>
          <RightColumn>
            <IllustrationContainer>
              <Img
                src={
                  "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                }
                alt="Hero"
              />
              {/* {post.imageDecoratorBlob && <DecoratorBlob2 />} */}
            </IllustrationContainer>
          </RightColumn>
          <LeftColumn>
            <Heading>{post.title}</Heading>
            {/* <Date>
              {() => {
                let date = new Date(post.init_date);
                return date.getFullYear().toString;
              }}
            </Date> */}
            <Paragraph>{post.description}</Paragraph>
            <Actions>
              <ReadPostButton onClick={(e) => toggleModal(e, post.id)}>
                <span classsName="playText">أكمل القراءة</span>
                <span className="playIconContainer">
                  <AutoStoriesIcon className="playIcon" />
                </span>
              </ReadPostButton>
            </Actions>
          </LeftColumn>
        </TwoColumn>
      ))}
    </Container>
  );

  //   const renderData = async () => {
  //     content = posts.map((post, index) => {
  //       return (
  //         <li key={index}>
  //           <Link to={`/readPost/${post.id}`}>
  //             <h2>{post.id}</h2>
  //             <h2>{post.title}</h2>
  //             <h4>{post.description}</h4>
  //             <h6>{post.init_date}</h6>
  //             <h6>{post.tags}</h6>
  //           </Link>
  //         </li>
  //       );
  //     });
  //   };

  //   renderData();
  //   return (
  //     <>
  //       <div>
  //         <ol style={{ listStyle: "none" }}>{content}</ol>
  //       </div>
  //     </>
  //   );
};

export default ListPosts;
