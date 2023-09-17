/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState, Link } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import javaScriptImage from "../../images/icons/javascript_112px.png";
import chatgpt from "../../images/chatgpt-image.jpg";
import win11 from "../../images/windows11.jpg";
import opengraph from "../../images/opengraph-home.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Row = tw.div`flex flex-col lg:flex-row lg:justify-between -mb-10`;
const Heading = tw(
  SectionHeading
)`text-center lg:text-right lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`w-5/6 mx-auto lg:w-2/3`;
const PostsContainer = tw.div`w-full mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start mx-auto`;
const Post = tw(
  motion.div
)`block w-5/6 sm:w-2/5 cursor-pointer mb-16 lg:ml-6 mx-auto lg:mx-0 shadow p-2 rounded-lg`;
const Image = styled(motion.div)((props) => [
  `background-image: url("${props.$imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`,
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500 text-right!`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm text-right`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg text-right`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex w-full flex-wrap md:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-5/6 md:w-4/5 xl:w-full mx-auto`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 md:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div`text-right`;

const ArticleSection = () => {
  const navigate = useNavigate();
  const [recentPosts, setLatestPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/post/mainPage`)
      .then((response) => {
        if (response.status === 200) {
          //   console.warn(response.data.most_viewed);
          setLatestPosts(response.data.recent);
          setPopularPosts(response.data.most_viewed);
          // console.log(response.data);
        }
      })
      .catch((error) => console.log(error.message));
  }, []);

  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%",
    },
    hover: {
      backgroundSize: "110%",
    },
  };

  // const navigateToLatestPost = (e, id) => {};

  return (
    <Container dir="rtl">
      <ContentWithPaddingXl tw="py-10 lg:py-12">
        <Row>
          <PopularPostsContainer>
            <Heading>المقالات الشائعة </Heading>
            <PostsContainer>
              {popularPosts &&
                popularPosts.map((post, index) => (
                  <Post
                    key={index}
                    className="group"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/readPost/${post.id}`);
                    }}
                  >
                    <Image
                      transition={{ duration: 0.3 }}
                      variants={postBackgroundSizeAnimation}
                      $imageSrc={post.image || null}
                    />
                    <Title>{post.title}</Title>
                    <Description>{post.description}</Description>
                    <AuthorInfo>
                      <AuthorImage
                        src={`${process.env.REACT_APP_API_URL}${post.image}`}
                        tw={"ml-1"}
                      />
                      <AuthorNameAndProfession>
                        <AuthorName>{post.username}</AuthorName>
                        <AuthorProfile>{post.authorProfile}</AuthorProfile>
                      </AuthorNameAndProfession>
                    </AuthorInfo>
                  </Post>
                ))}
            </PostsContainer>
          </PopularPostsContainer>
          <RecentPostsContainer>
            <Heading>المنشورات الاخيرة</Heading>
            <PostsContainer>
              {recentPosts &&
                recentPosts.map((post, index) => (
                  <Post
                    key={index}
                    className="group"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/readPost/${post.id}`);
                    }}
                  >
                    <PostTextContainer>
                      <Title>{post.title}</Title>
                      <AuthorName>{post.username}</AuthorName>
                    </PostTextContainer>
                    <Image $imageSrc={null} />
                  </Post>
                ))}
            </PostsContainer>
          </RecentPostsContainer>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default ArticleSection;
