import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
    SectionHeading,
    Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row justify-between max-w-screen-xl mx-auto py-12 lg:py-2`;
const Column = tw.div`mx-auto lg:max-w-xl lg:mx-0`;
const ImageColumn = tw(
    Column
)`w-5/6 lg:w-7/12 flex-shrink-0 h-80 lg:mt-0 mx-auto lg:h-auto`;
const TextColumn = styled(Column)((props) => [
    tw`w-5/6 lg:w-5/12 mt-16 mx-auto lg:mt-0 lg:flex justify-end`,
    props.textOnRight
        ? tw`lg:mr-16 md:order-last`
        : tw`lg:ml-16 md:order-first`,
]);

const Image = styled.div((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center lg:text-right`;

const Subheading = tw(SubheadingBase)`text-center lg:text-right`;
const Heading = tw(
    SectionHeading
)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center lg:text-right leading-tight`;
const Description = tw.p`mt-4 text-center lg:text-right text-sm lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 lg:mt-10 text-sm flex flex-col max-w-md mx-auto lg:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
    ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
    subheading = "تواصل معنا ",
    heading = (
        <>
            إشعر بالحرية <span tw="text-primary-500">تواصل </span>
            <wbr /> معنا .
        </>
    ),
    description = "نسعد بتواصلكم , قدموا مقترحاتكم  لنوافيكم بكل جديد ",
    submitButtonText = "إرسال ",
    formAction = "#",
    formMethod = "get",
    textOnRight = true,
}) => {
    // The textOnRight boolean prop can be used to display either the text on left or right side of the image.

    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <Image imageSrc={EmailIllustrationSrc} />
                </ImageColumn>
                <TextColumn textOnRight={textOnRight}>
                    <TextContent>
                        {subheading && <Subheading>{subheading}</Subheading>}
                        <Heading>{heading}</Heading>
                        {description && (
                            <Description>{description}</Description>
                        )}
                        <Form action={formAction} method={formMethod}>
                            <Input
                                type="email"
                                name="email"
                                placeholder="إدخل بريدك الإلكتروني "
                            />
                            <Input
                                type="text"
                                name="name"
                                placeholder="الإسم كاملا "
                            />
                            <Input
                                type="text"
                                name="subject"
                                placeholder="الموضوع "
                            />
                            <Textarea
                                name="message"
                                placeholder="إكتب رسالنك هنا "
                            />
                            <SubmitButton type="submit">
                                {submitButtonText}
                            </SubmitButton>
                        </Form>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
