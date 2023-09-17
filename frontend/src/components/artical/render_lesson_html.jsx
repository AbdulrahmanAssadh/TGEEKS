import axios from "axios";
import React, { useContext, useReducer, useEffect } from "react";
import { Parser } from "html-to-react";
import AuthContext from "context/auth_provider";
import HelmetHeader from "components/headers/helmet_header";
import tw from "twin.macro";

const Container = tw.div`w-5/6 h-auto mt-4 mx-auto rounded-xl shadow-xl shadow-gray-500`;
const Title = tw.h1`w-full text-right text-6xl border-r-8 border-red-500 mr-5 my-2`;
const Content = tw.div`text-right m-2`;

const RenderPostHtml = ({ id }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "GET":
        return { ...action.data };
      case "UPDATE":
        return { ...state, favorited: action.favorited };
      default:
        return state;
    }
  }

  const { auth } = useContext(AuthContext);
  const [post, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/post/${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: "GET", data: response.data });
        }
      })
      .catch((error) => console.log(error.message));
  }, []);

  const favClickEventHandler = (e) => {
    e.preventDefault();
    let temp = Number(post.favorited) + 1;
    dispatch({ type: "UPDATE", favorited: temp });
    axios
      .post(`${process.env.REACT_APP_API_URL}post/favorite`, {
        postID: post.id,
        userID: null,
      })
      .catch((error) => console.log(error.message));
  };

  const unfavClickEventHandler = (e) => {
    e.preventDefault();
    if (Number(post.favorited) > 0) {
      var temp = Number(post.favorited) - 1;
      dispatch({ type: "UPDATE", favorited: temp });
      axios
        .post(`${process.env.REACT_APP_API_URL}post/unfavorite`, {
          postID: post.id,
          userID: null,
        })
        .catch((error) => console.log(error.message));
    } else {
      console.log("Can't decrease");
    }
  };

  // document.title = post.title;
  // document.getElementsByName("keywords").value = String(
  //     post.tags
  // ).toString();

  return (
    <>
      <HelmetHeader
        title={post.title}
        keywords={post.tags}
        description={post.description}
      />
      <Container>
        <article>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: "65px",
                borderRight: "10px solid red",
                margin: "20px",
                paddingRight: "30px",
              }}
            >
              {post.title}
            </h1>
            <h2>{post.viewed}</h2>
            {auth != null ? (
              <>
                <button
                  onClick={favClickEventHandler}
                  style={{
                    fontWeight: "bold",
                    borderRadius: "10px",
                    width: "80px",
                    padding: "10px",
                    marginLeft: "20px",
                    backgroundColor: "yellow",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
                  Fav
                </button>
                <h2>{post.favorited}</h2>
                <button
                  onClick={unfavClickEventHandler}
                  style={{
                    fontWeight: "bold",
                    borderRadius: "10px",
                    width: "80px",
                    padding: "10px",
                    marginLeft: "20px",
                    backgroundColor: "yellow",
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
                  Unfav
                </button>
              </>
            ) : null}
          </div>
          <hr /> */}
          <Title>{post.title}</Title>
          <hr />
          <Content>{Parser().parse(post.content)}</Content>
        </article>
      </Container>
    </>
  );
};

export default RenderPostHtml;
