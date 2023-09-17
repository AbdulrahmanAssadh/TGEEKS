// import React, {useEffect, useState} from "react";
// import { motion } from "framer-motion";
// import tw from "twin.macro";
// import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
// import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
// import { SectionHeading } from "components/misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import { ReactComponent as StarIcon } from "images/star-icon.svg";
// import pythonImage from "../../images/icons/python_112px.png";
// import reactImage from "../../images/icons/react_native_112px.png";
// import nodesJsImge from "../../images/icons/nodejs_112px.png";
// import javaScriptImage from "../../images/icons/javascript_112px.png";
// import TypeSc from "../../images/icons/typescript_112px.png";
// import R from "../../images/icons/react_native_112px.png";
// import SQLIM from "../../images/icons/postgresql_112px.png";
// import net from "../../images/icons/network.jpg";
// import intr from "../../images/inter.jpg";
// import oficee from "../../images/office.jpg";
// import axios from "axios";
//
// const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
// const Header = tw(SectionHeading)``;
// const TabsControl = tw.div`flex flex-wrap justify-around bg-gray-200 px-2 py-2 rounded leading-none mt-12 w-5/6 xl:w-2/5`;
//
// const TabControl = styled.div`
//   ${tw`w-2/5 md:w-1/4 cursor-pointer px-6 py-3 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base text-center`}
//   &:hover {
//     ${tw`bg-gray-300 text-gray-700`}
//   }
//   ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
//   }
// `;
//
// const TabContent = tw(
//     motion.div
// )`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
// const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
// const Card = tw(
//     motion.a
// )`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
// const CardImageContainer = styled.div`
//     ${(props) =>
//         css`
//             background-image: url("${props.imageSrc}");
//         `}
//     ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
// `;
// const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
// const CardRating = styled.div`
//     ${tw`mr-1 text-sm font-bold flex items-end`}
//     svg {
//         ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
//     }
// `;
//
// const CardHoverOverlay = styled(motion.div)`
//     background-color: rgba(255, 255, 255, 0.5);
//     ${tw`absolute inset-0 flex justify-center items-center`}
// `;
// const CardButton = tw(PrimaryButtonBase)`text-sm`;
//
// const CardReview = tw.div`font-medium text-xs text-gray-600`;
//
// const CardText = tw.div`p-4 text-gray-900`;
// const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
// const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
// const CardPrice = tw.p`mt-4 text-xl font-bold`;
//
// // eslint-disable-next-line import/no-anonymous-default-export
// const CoursesSection = ({
//     heading = "اهم الكورسات",
//     tabs = {
//         // cours: ["HTML", "CSS", "JAVA", "PHP", "Sex"],
//         dataSience: [
//             {
//                 imageSrc: R,
//                 title: "R",
//                 content: "لغة R",
//                 // price: "$5.99",
//                 rating: "5.0",
//                 reviews: "87",
//                 url: "#",
//             },
//
//             {
//                 imageSrc: pythonImage,
//                 title: "بايثون",
//                 content: "لغة بايثون",
//                 // price: "$2.99",
//                 rating: "4.8",
//                 reviews: "32",
//                 url: "#",
//             },
//             {
//                 imageSrc: SQLIM,
//                 title: "SQL",
//                 content: "استعلامات SQL",
//                 // price: "$7.99",
//                 rating: "4.9",
//                 reviews: "89",
//                 url: "#",
//             },
//
//             // {
//             //   imageSrc:
//             //     "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             //   title: "Cajun Chicken",
//             //   content: "Roasted Chicken & Egg",
//             //   price: "$7.99",
//             //   rating: "4.2",
//             //   reviews: "19",
//             //   url: "#",
//             // },
//             // {
//             //   imageSrc:
//             //     "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             //   title: "Chillie Cake",
//             //   content: "Deepfried Chicken",
//             //   price: "$2.99",
//             //   rating: "5.0",
//             //   reviews: "61",
//             //   url: "#",
//             // },
//             // {
//             //   imageSrc:
//             //     "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             //   title: "Guacamole Mex",
//             //   content: "Mexican Chilli",
//             //   price: "$3.99",
//             //   rating: "4.2",
//             //   reviews: "95",
//             //   url: "#",
//             // },
//             // {
//             //   imageSrc:
//             //     "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
//             //   title: "Carnet Nachos",
//             //   content: "Chilli Crispy Nachos",
//             //   price: "$3.99",
//             //   rating: "3.9",
//             //   reviews: "26",
//             //   url: "#",
//             // },
//         ],
//         شبكات: getCssCards(),
//         JavaScript: getJavaScriptCards(),
//         ICDL: getPhpCards(),
//     },
// }) => {
//     /*
//      * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
//      * as the key and value of the key will be its content (as an array of objects).
//      * To see what attributes are configurable of each object inside this array see the example above for "Starters".
//      */
//     const tabsKeys = Object.keys(tabs);
//     const [activeTab, setActiveTab] = useState(tabsKeys[0]);
//     const [coursesData, setCoursesData] = useState([]);
//
//     useEffect(()=>{
//         const sql = 'SELECT id, title, image, description FROM courses'
//         axios.get(`${process.env.REACT_APP_API_URL}/courses/${sql}`).then(response=>{
//             if (response.status === 200) {
//                 setCoursesData(response.data);
//                 // console.log(response.data)
//             }
//         }).catch(error=>console.log(error.message));
//     },[])
//
//     return (
//         <Container>
//             <ContentWithPaddingXl>
//                 <HeaderRow>
//                     <Header>{heading}</Header>
//                     <TabsControl>
//                         {Object.keys(tabs).map((tabName, index) => (
//                             <TabControl
//                                 key={index}
//                                 active={activeTab === tabName}
//                                 onClick={() => setActiveTab(tabName)}
//                             >
//                                 {tabName}
//                             </TabControl>
//                         ))}
//                     </TabsControl>
//                 </HeaderRow>
//
//                 {tabsKeys.map((tabKey, index) => (
//                     <TabContent
//                         key={index}
//                         variants={{
//                             current: {
//                                 opacity: 1,
//                                 scale: 1,
//                                 display: "flex",
//                             },
//                             hidden: {
//                                 opacity: 0,
//                                 scale: 0.8,
//                                 display: "none",
//                             },
//                         }}
//                         transition={{ duration: 0.4 }}
//                         initial={activeTab === tabKey ? "current" : "hidden"}
//                         animate={activeTab === tabKey ? "current" : "hidden"}
//                     >
//                         {tabs[tabKey].map((card, index) => (
//                             <CardContainer key={index}>
//                                 <Card
//                                     className="group"
//                                     href={card.url}
//                                     initial="rest"
//                                     whileHover="hover"
//                                     animate="rest"
//                                 >
//                                     <CardImageContainer
//                                         imageSrc={card.imageSrc}
//                                     >
//                                         <CardRatingContainer>
//                                             <CardRating>
//                                                 <StarIcon />
//                                                 {card.rating}
//                                             </CardRating>
//                                             <CardReview>
//                                                 ({card.reviews})
//                                             </CardReview>
//                                         </CardRatingContainer>
//                                         <CardHoverOverlay
//                                             variants={{
//                                                 hover: {
//                                                     opacity: 1,
//                                                     height: "auto",
//                                                 },
//                                                 rest: {
//                                                     opacity: 0,
//                                                     height: 0,
//                                                 },
//                                             }}
//                                             transition={{ duration: 0.3 }}
//                                         >
//                                             <CardButton>ابدأ الآن</CardButton>
//                                         </CardHoverOverlay>
//                                     </CardImageContainer>
//                                     <CardText>
//                                         <CardTitle>{card.title}</CardTitle>
//                                         <CardContent>
//                                             {card.content}
//                                         </CardContent>
//                                         <CardPrice>{card.price}</CardPrice>
//                                     </CardText>
//                                 </Card>
//                             </CardContainer>
//                         ))}
//                     </TabContent>
//                 ))}
//             </ContentWithPaddingXl>
//         </Container>
//     );
// };
//
// /* This function is only there for demo purposes. It populates placeholder cards */
// const getCssCards = () => {
//     const CSSCards = [
//         {
//             imageSrc: net,
//             title: "شبكات",
//             content: "Learn CNNA Course",
//             // price: "$5.99",
//             rating: "5.0",
//             reviews: "87",
//             url: "#",
//         },
//         {
//             imageSrc: net,
//             title: "شبكات",
//             content: "Learn CNNB Course",
//             // price: "$3.99",
//             rating: "4.5",
//             reviews: "34",
//             url: "#",
//         },
//         {
//             imageSrc: net,
//             title: "شبكات",
//             content: "Learn CNNAB Course",
//             // price: "$3.99",
//             rating: "3.9",
//             reviews: "26",
//             url: "#",
//         },
//         {
//             imageSrc: net,
//             title: "شبكات",
//             content: "Learn CNNA Course",
//             // price: "$3.99",
//             rating: "4.2",
//             reviews: "95",
//             url: "#",
//         },
//     ];
//     return CSSCards;
// };
// const getJavaScriptCards = () => {
//     const JavaScriptCards = [
//         {
//             imageSrc: javaScriptImage,
//             title: "Java script",
//             content: "Learn javaScript Course",
//             // price: "$5.99",
//             rating: "5.0",
//             reviews: "87",
//             url: "#",
//         },
//         {
//             imageSrc: TypeSc,
//             title: "TypeScript",
//             content: "Learn TypeScript Course",
//             // price: "$3.99",
//             rating: "4.5",
//             reviews: "34",
//             url: "#",
//         },
//         {
//             imageSrc: nodesJsImge,
//             title: "Node js",
//             content: "Learn node js Course",
//             // price: "$3.99",
//             rating: "3.9",
//             reviews: "26",
//             url: "#",
//         },
//         {
//             imageSrc: reactImage,
//             title: "React",
//             content: "Learn javaScript React Course",
//             // price: "$3.99",
//             rating: "4.2",
//             reviews: "95",
//             url: "#",
//         },
//     ];
//     return JavaScriptCards;
// };
// const getPhpCards = () => {
//     const PhpCards = [
//         {
//             imageSrc: oficee,
//             title: "ICDL",
//             content: " تعلم word",
//             // price: "$5.99",
//             rating: "5.0",
//             reviews: "87",
//             url: "#",
//         },
//         {
//             imageSrc: oficee,
//             title: "ICDL",
//             content: " تعلم accele",
//             // price: "$3.99",
//             rating: "4.5",
//             reviews: "34",
//             url: "#",
//         },
//         {
//             imageSrc: oficee,
//             title: "ICDL",
//             content: " تعلم power point",
//             // price: "$3.99",
//             rating: "3.9",
//             reviews: "26",
//             url: "#",
//         },
//         {
//             imageSrc: intr,
//             title: "ICDL",
//             content: " تعلم الانترنت",
//             // price: "$3.99",
//             rating: "4.2",
//             reviews: "95",
//             url: "#",
//         },
//     ];
//     return PhpCards;
// };
// export default CoursesSection;


import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import dataSi from "../../images/dataSi.jpg";
import FStack from "../../images/fullStack.jpg";
import mobe from "../../images/mobile.jpg";
import network from "../../images/icons/network.jpg";
import axios from "axios";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 overflow-hidden`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex! justify-between! items-center`;
const ControlButton = styled(PrimaryButtonBase)`
    ${tw`mt-4 sm:mt-0 rounded-full p-2`}
    svg {
        ${tw`w-6 h-6`}
    }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
    ${tw`mt-16`}
    .slick-track {
        ${tw`flex`}
    }
    .slick-slide {
        ${tw`h-auto flex justify-center mb-1`}
    }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
    ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
    svg {
        ${tw`w-6 h-6 text-yellow-500 fill-current`}
    }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-right text-sm leading-loose mt-2 sm:mt-4`;

const PrimaryButton = tw(
    PrimaryButtonBase
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
// eslint-disable-next-line import/no-anonymous-default-export
const CoursesSection = () => {
    // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
    const [sliderRef, setSliderRef] = useState(null);
    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                },
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [coursesData, setCoursesData] = useState([]);

        useEffect(()=>{
        const sql = 'SELECT id, title, image, description FROM courses'
        axios.get(`${process.env.REACT_APP_API_URL}/courses/${sql}`).then(response=>{
            if (response.status === 200) {
                setCoursesData(response.data);
            }
        }).catch(error=>console.log(error.message));
    },[])

    return (
        <Container>
            <Content>
                <HeadingWithControl>
                    <Heading>الكورسات الاكثر زيارة</Heading>
                    <Controls>
                        <PrevButton onClick={sliderRef?.slickNext}>
                            <ChevronRightIcon />
                        </PrevButton>
                        <NextButton onClick={sliderRef?.slickPrev}>
                            <ChevronLeftIcon />
                        </NextButton>
                    </Controls>
                </HeadingWithControl>
                <CardSlider
                    tw="transform-none translate-x-0"
                    ref={setSliderRef}
                    {...sliderSettings}
                >
                    {coursesData.map((course, index) => (
                        <Card dir="rtl" key={index}>
                            <CardImage imageSrc={`${process.env.REACT_APP_API_URL}/${course.image}`} />
                            <TextInfo>
                                <TitleReviewContainer>
                                    <Title>{course.title}</Title>
                                    <RatingsInfo dir="ltr">
                                        <StarIcon />
                                        <Rating>{course.rating}</Rating>
                                    </RatingsInfo>
                                </TitleReviewContainer>
                                <Description>{course.description}</Description>
                            </TextInfo>
                            <PrimaryButton> ابدأ التعلم</PrimaryButton>
                        </Card>
                    ))}
                </CardSlider>
            </Content>
        </Container>
    );
};

export default CoursesSection;
