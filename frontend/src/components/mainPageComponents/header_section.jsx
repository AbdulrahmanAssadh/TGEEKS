import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Header from "../headers/light.js";
import DesignIllustration from "../../images/design-illustration-2.svg";

const Container = tw.div`relative px-5`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-8 md:py-12`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto md:max-w-none md:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-right text-gray-900 leading-loose`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg text-right`;

const Actions = styled.div`
    ${tw`relative w-full text-center md:max-w-md lg:max-w-sm lg:mx-0`}
    button {
        ${tw`w-full h-20 bg-primary-500 text-gray-100 text-2xl font-bold my-4 rounded-xl py-4 flex items-center justify-center sm:leading-none hover:bg-primary-900 transition duration-300`}
    }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center lg:mr-4`;
// eslint-disable-next-line import/no-anonymous-default-export
const HeaderSection = ({ roundedHeaderButton }) => {
    return (
        <>
            <Header roundedHeaderButton={roundedHeaderButton} />
            <Container>
                <TwoColumn>
                    <LeftColumn>
                        <Heading>
                            مرحبا بكم اعزائنا الطلاب في هذا الموقع
                            <span tw="text-primary-500!"> T-Geeks</span>
                        </Heading>
                        <Paragraph>
                            أونلاين، ابدأ رحلتك التعليمية مجاناً
                            <br />
                            <span className="text-primary-500">
                                كورسات فى البرمجة والجرافيك و الحاسوب و الذكاء
                                الاصطناعي والأعمال يتم تدريسها من قبل خبراء.
                            </span>
                        </Paragraph>
                        <Paragraph
                            tw="font-extrabold"
                            style={{
                                color: "blueviolet",
                                fontSize: "30px",
                                // fontWight: "bolder",
                                // marginRight: "81px",
                            }}
                        >
                            احترافك يبدأ من هنا
                        </Paragraph>
                        <Actions>
                            <button> ابدأ الان </button>
                        </Actions>
                    </LeftColumn>
                    <RightColumn>
                        <IllustrationContainer>
                            <img
                                tw="w-full max-w-lg -my-6 xl:max-w-3xl"
                                src={DesignIllustration}
                                alt="Design Illustration"
                            />
                        </IllustrationContainer>
                    </RightColumn>
                </TwoColumn>
            </Container>
        </>
    );
};

export default HeaderSection;
