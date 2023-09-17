import React, { useState } from "react";
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
const RoadmapSection = () => {
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

    /* Change this according to your needs */
    const cards = [
        {
            imageSrc: dataSi,
            title: "علم بيانات",
            description:
                " في هذه الوحدة، ستستعرض المنهج الدراسي للدورة للتعرف على ما سيتم تدريسه في هذه الدورة. ستستمع إلى المتخصصين في علم البيانات لمعرفة ماهية علم البيانات وما يؤديه علماء البيانات والأدوات والخوارزميات التي يستخدمها علماء البيانات بصفة يومية. وأخيرًا، ستُكمل تكليف القراءة لمعرفة سبب اعتبار علم البيانات الوظيفة الأكثر جاذبية في القرن الحادي والعشرين",

            rating: 4.5,
        },
        {
            imageSrc: network,
            title: " الذكاء الاصطناعي",
            description:
                "يدخل الذكاء الاصطناعي في العديد من المجالات الإلكترونية والرقمية، وهو موجود على أشكال مختلفة وفي أجهزة كثيرة، بحيث يحاكي الذكاء الموجود في العقل البشري،",

            rating: 4.5,
        },
        {
            imageSrc: FStack,
            title: "Full-Stack ",
            description:
                "تصميم واجهات المواقع وطور البنى التحتية وقواعد البيانات لها، وأصبح مطور ويب متكامل يحمل حزمة من المهارات الأكثر طلباً بعد إنهائك للمعسكر.",

            rating: 4.5,
        },
        {
            imageSrc: mobe,
            title: "برمجة الجوال",
            description:
                "برمجة تطبيقات الجوال هي عملية إنشاء وتطوير برامج مصمَمة للتشغيل على الأجهزة المحمولة التي تعمل على نظام الأندرويد أو الآيفون، وتطوير كفاءة هذه البرامج بشكلٍ مستمر لتحقيق الهدف الذي صُنعت من أجله، باستخدام إحدى لغات البرمجة. ولا يعني هذا التعريف مجرد كتابة الأكواد البرمجية فحسب، بل يشمل ذلك اختبار وإطلاق تطبيق ناجح يعمل على أجهزة الجوال المختلفة.",
            rating: 4.5,
        },
    ];

    return (
        <Container>
            <Content>
                <HeadingWithControl>
                    <Heading>المسارات الاكثر زيارة</Heading>
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
                    {cards.map((card, index) => (
                        <Card dir="rtl" key={index}>
                            <CardImage imageSrc={card.imageSrc} />
                            <TextInfo>
                                <TitleReviewContainer>
                                    <Title>{card.title}</Title>
                                    <RatingsInfo dir="ltr">
                                        <StarIcon />
                                        <Rating>{card.rating}</Rating>
                                    </RatingsInfo>
                                </TitleReviewContainer>

                                <Description>{card.description}</Description>
                            </TextInfo>
                            <PrimaryButton> ابدأ التعلم</PrimaryButton>
                        </Card>
                    ))}
                </CardSlider>
            </Content>
        </Container>
    );
};

export default RoadmapSection;
