// import React from "react";
// import styled from "styled-components";
// import tw from "twin.macro";
// import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import HTMLPhoto from "../../images/icons/html_5_112px.png";
// import CssPhoto from "../../images/icons/css3_112px.png";
// import JavaScriptPhoto from "../../images/icons/javascript_112px.png";
// import PythonPhoto from "../../images/icons/python_112px.png";
// import SqltPhoto from "../../images/icons/source_code_112px.png";
// const Container = tw.div`relative`;

// const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

// const HeadingInfoContainer = tw.div`flex flex-col items-center`;
// const Content = tw.div`mt-16 w-1/2`;
// const Card = styled.div((props) => [
//   tw`p-0 m-3 border rounded-md flex-row-reverse h-10 md:flex justify-between items-center bg-gray-300 sm:justify-center`,
//   props.reversed ? tw`flex-row-reverse` : "flex-row",
// ]);
// const Image = styled.div((props) => [
//   `background-image: url("${props.imageSrc}");`,
//   tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
// ]);
// const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
// const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
// const Title = tw.h4`text-3xl font-bold text-gray-900`;
// const Description = tw.p`mt-2 text-xl leading-loose`;
// const Link = styled(PrimaryButtonBase)`
//   ${tw`block mt-4`}
// `;
// // eslint-disable-next-line import/no-anonymous-default-export
// export default () => {
//   const cards = [
//     {
//       imageSrc: HTMLPhoto,
//       subtitle: "مجاني",
//       title: "HTML",
//       description: "اللغة المستخدمة في بناء تطبيقات الويب ",
//       url: "https://timerse.com",
//       color: " bg-gray-400",
//     },

//     {
//       imageSrc: CssPhoto,
//       subtitle: "مجاني",
//       title: "CSS",
//       description: "اللغة المستخدمة في تنسيق تطبيقات الويب ",
//       url: "https://timerse.com",
//       color: "bg-gray-300",
//     },
//     {
//       imageSrc: JavaScriptPhoto,
//       subtitle: "مجاني",
//       title: "جافا سكربت",
//       description: "اللغة المستخدمة في برمجة تطبيقات الويب ",
//       url: "https://timerse.com",
//       color: "bg-gray-200",
//     },
//     {
//       imageSrc: PythonPhoto,
//       subtitle: "مجاني",
//       title: "بايثون ",
//       description: " من اللغات المستخدمه في عده مجالات ",
//       url: "https://timerse.com",
//       color: "bg-gray-100",
//     },
//     {
//       imageSrc: SqltPhoto,
//       subtitle: "مجاني",
//       title: "SQL",
//       description: " اللغة المستخدمه للتعامل مع قواعد البيانات",
//       url: "https://timerse.com",
//       color: "bg-gray-500",
//     },
//   ];

//   return (
//     <Container>
//       <SingleColumn>
//         <HeadingInfoContainer>
//           <HeadingTitle> اللغات الشائعة</HeadingTitle>
//         </HeadingInfoContainer>

//         <Content dir="rtl">
//           {cards.map((card, i) => (
//             <Card key={i} reversed={1}>
//               <Image imageSrc={card.imageSrc} />
//               <Details dir="rtl">
//                 <Subtitle>{card.subtitle}</Subtitle>
//                 <Title>{card.title}</Title>
//                 <Description>{card.description}</Description>
//                 <Content>
//                   <Link>ابدا الكورس</Link>
//                   <Link>فيديو للكورس</Link>
//                 </Content>
//               </Details>
//             </Card>
//           ))}
//         </Content>
//       </SingleColumn>
//     </Container>
//   );
// };
