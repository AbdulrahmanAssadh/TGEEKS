import React from "react";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton } from "components/misc/Buttons.js";

const Content = tw.div`max-w-screen-xl mx-auto sm:pb-10 sm:pt-0`;

const Row = tw.div`flex items-center justify-between flex-col px-8`;

const FormColumn = tw.div`w-full sm:w-5/6 md:w-2/3 mt-8 lg:mt-5 sm:w-auto border border-gray-400 shadow p-3 bg-indigo-100`;

const HeadingInfoContainer = tw.div`  mr-6 mt-3 sm:mt-0`;
const Heading = tw(
    SectionHeading
)`text-secondary-800 sm:text-center leading-none text-3xl text-right `;

const Form = tw.form`flex items-center flex-wrap justify-around text-sm max-w-sm sm:p-0 sm:max-w-none mx-auto`;
const Button = tw(
    PrimaryButton
)`p-3 m-2 sm:w-auto bg-primary-300 text-gray-100 hocus:bg-primary-700 hocus:text-white`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <>
            <HeadingInfoContainer>
                <Heading> الفئات</Heading>
            </HeadingInfoContainer>

            <Content>
                <Row>
                    <FormColumn>
                        <Form>
                            <Button type="text">مطور الويب </Button>
                            <Button type="text">علم البيانات </Button>
                            <Button type="text">الذكاء الاصطناعي</Button>
                            <Button type="text">تطبيقات سطح المكتب</Button>
                            <Button type="text">تطبيقات الجوال</Button>
                            <Button type="text">الشبكات</Button>
                            <Button type="text">قواعد البيانات</Button>
                            <Button type="text">امن سيبراني</Button>
                        </Form>
                    </FormColumn>
                </Row>
            </Content>
        </>
    );
};
