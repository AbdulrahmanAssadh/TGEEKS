import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import cvIm from "../../images/icons/cv.jpg";
import pho from "../../images/icons/pho.webp";
import photoShop from "../../images/icons/adobe_photoshop_112px.png";
import c from "../../images/icons/c++.jpg";

const Container = tw.div`relative`;
const Content = tw.div`w-5/6 lg:max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-5 w-full md:w-2/3 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-row justify-between`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-screen-lg flex flex-col h-full shadow-xl`;
const Image = styled.div((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`bg-cover bg-center h-80 lg:h-64 rounded-lg rounded-bl-none rounded-br-none`,
]);

const Details = tw.div`p-6 border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-start text-right justify-between lg:block lg:text-right rounded-lg rounded-tl-none rounded-tr-none`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
    ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none ml-6 last:ml-0`}
    svg {
        ${tw`w-4 h-4 ml-1`}
    }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100 h-48 text-ellipsis overflow-hidden`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
    ${tw`inline-block mt-4 text-sm font-semibold`}
`;
const MyheadTitle = styled(HeadingTitle)`
    ${tw`text-3xl`}
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
    heading = (
        <>
            <span tw="text-primary-500">المجانية</span>
        </>
    ),
}) => {
    const blogPosts = [
        {
            imageSrc: pho,

            title: "Photoshop CC",
            description:
                "اجمع صورك ونقحها وادمجها. أضِف لونًا جديدًا إلى صورك القديمة بالأبيض والأسود. تمتع بإخفاء الأجزاء غير المرغوبة، أو تحويل خلفية مملة إلى قطعة من الجنة. باستخدام Photoshop، يستطيع الجميع تحقيق أحلامه.",
            url: "https://reddit.com",
        },
        {
            imageSrc: cvIm,
            title: "معالجة صور",
            description:
                "معالجة الصور هي عملية فيزيائية تُستخدم لتحويل إشارة الصورة، سواء كانت رقمية أو تمثيلية، إلى صورة مادية. يمكن أن يكون الإخراج الفعلي نفسه صورة مادية فعلية أو خصائص صورة. والنوع الأكثر شيوعًا هو التصوير الفوتوغرافي، حيث يتم التقاط الصورة باستخدام الكاميرا لإنشاء صورة رقمية أو تمثيلية. من أجل إنتاج صورة مادية، تتم معالجة الصورة باستخدام التقنية المناسبة بناءً على نوع مصدر الإدخال.",
            url: "https://timerse.com",
        },
        {
            imageSrc: c,
            title: "اساسيات ++C",
            description: "تعرف على دورة احتراف لغه C++ من الصفر حتى الاحتراف",
            url: "https://timerse.com",
        },
    ];
    return (
        <Container dir="rtl">
            <Content>
                <HeadingInfoContainer dir="rtl">
                    <MyheadTitle>{heading}</MyheadTitle>
                    <span tw="flex items-center">
                        <span>الكل</span>
                        <button tw="w-1/12">
                            <ChevronLeftIcon />
                        </button>
                    </span>
                </HeadingInfoContainer>
                <ThreeColumn>
                    {blogPosts.map((post, index) => (
                        <Column key={index}>
                            <Card>
                                <Image imageSrc={post.imageSrc} />
                                <Details>
                                    <MetaContainer>
                                        <Meta>
                                            <UserIcon />
                                            <div>{post.author}</div>
                                        </Meta>
                                        <Meta>
                                            <TagIcon />
                                            <div>{post.category}</div>
                                        </Meta>
                                    </MetaContainer>
                                    <Title>{post.title}</Title>
                                    <Description>
                                        {post.description}
                                    </Description>
                                    <Link href={post.url}>ابدا الكورس </Link>
                                </Details>
                            </Card>
                        </Column>
                    ))}
                </ThreeColumn>
            </Content>
        </Container>
    );
};
