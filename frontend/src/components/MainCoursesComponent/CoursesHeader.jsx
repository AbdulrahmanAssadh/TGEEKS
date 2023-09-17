import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
    Container as ContainerBase,
    ContentWithVerticalPadding,
    Content2Xl,
} from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import serverIllustrationImageSrc from "images/server-illustration-2.svg";

const PrimaryBackgroundContainer = tw.div`my-5 px-8 bg-primary-200 text-gray-100 lg:mt-8`;
const Container = tw(ContainerBase)``;
const Actions = styled.div`
    ${tw`relative max-w-md text-right mx-auto lg:mx-0 mt-10`}
    input {
        ${tw`pr-8 pl-8 py-4 py-5 rounded-full text-primary-900 text-right border-2 w-full font-medium focus:outline-none transition duration-300 focus:border-primary-500 hover:border-gray-500`}
    }
    button {
        ${tw`w-full absolute left-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold ml-2 my-2 rounded-full py-4 flex items-center justify-center w-24 md:w-32 lg:w-40 leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
    }
`;
const Row = tw.div`flex items-center justify-between flex-col md:flex-row lg:w-5/6 lg:mx-auto`;
const Column = tw.div`w-full`;
const TextColumn = tw(Column)`text-center lg:text-right md:w-5/12 lg:w-1/2`;
const IllustrationColumn = tw(Column)`lg:mr-16 md:w-7/12 lg:w-1/2`;
const Heading = tw(
    SectionHeading
)`max-w-3xl lg:max-w-4xl md:text-right leading-tight`;
const Description = tw(
    SectionDescription
)`mt-4 max-w-2xl text-gray-100 md:text-right mx-auto md:mx-0`;

const Image = tw.img`w-3/4 mx-auto md:float-left mt-10 md:mt-0`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
    heading = "تعلم البرمجة",
    description = "مع أكبر موقع عربي للمبرمجين.",
    // primaryButtonText = "Start Your 15 Day Free Trial",
    // primaryButtonUrl = "#",
    imageSrc = serverIllustrationImageSrc,
}) => {
    return (
        <PrimaryBackgroundContainer dir="rtl">
            <Content2Xl>
                <Container>
                    <ContentWithVerticalPadding>
                        <Row>
                            <TextColumn>
                                <Heading>{heading}</Heading>
                                <Description>{description}</Description>
                                <Actions>
                                    <button>بحث</button>
                                    <input
                                        dir="rtl"
                                        type="search"
                                        placeholder="ابحث عن دوراتنا "
                                    />
                                </Actions>
                            </TextColumn>
                            <IllustrationColumn>
                                <Image src={imageSrc} />
                            </IllustrationColumn>
                        </Row>
                    </ContentWithVerticalPadding>
                </Container>
            </Content2Xl>
        </PrimaryBackgroundContainer>
    );
};
