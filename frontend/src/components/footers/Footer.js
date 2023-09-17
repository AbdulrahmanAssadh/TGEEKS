import React, { useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/logo-light.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
import { useNavigate } from "react-router-dom";
import AuthContext from "context/auth_provider";

const Container = tw.div`relative bg-gray-900 text-gray-100 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-8 pb-4`;
const FiveColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold text-right pb-2`;

const LinkList = tw.ul`text-sm font-medium flex flex-col justify-around`;
const LinkListItem = tw.li`my-2 text-right`;
const LinkContainer = tw.div`w-full text-right`;

const Link = tw.button`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 transition duration-300`;
const ContactLink = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 font-black text-xl`;

const CompanyAddress = tw.div`mt-4 max-w-xs font-medium text-sm leading-loose w-auto text-right`;

const SocialLinksContainer = tw.div`mt-4 text-right`;
const SocialLink = styled.a`
    ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 last:mr-0`}
    svg {
        ${tw`w-4 h-4 `}
    }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-center items-center`;
const CopyrightNotice = tw.div`mt-2`;

const Divider = tw.div`my-2 border-b-2 border-gray-800`;
export default () => {
    let navigate = useNavigate();

    const navButtonClickEvent = (e, route) => {
        e.preventDefault();
        navigate(route);
    };

    const { auth, setAuth } = useContext(AuthContext);

    return (
        <Container>
            <Content>
                <FiveColumns>
                    <CompanyColumn>
                        <LogoContainer>
                            <LogoText>Geeks</LogoText>
                            <LogoImg src={LogoImage} />
                        </LogoContainer>
                        <CompanyAddress>
                            <LinkList>
                                <LinkListItem key={"k-0"}>
                                    <LinkContainer>
                                        {auth == null ? (
                                            <Link
                                                onClick={(e) =>
                                                    navButtonClickEvent(
                                                        e,
                                                        "/register"
                                                    )
                                                }
                                            >
                                                تسجيل
                                            </Link>
                                        ) : (
                                            <Link
                                                onClick={(e) => setAuth(null)}
                                            >
                                                خروج
                                            </Link>
                                        )}
                                    </LinkContainer>
                                </LinkListItem>
                                <LinkListItem key={'k-1'}>
                                    <LinkContainer>
                                        <Link
                                            onClick={(e) =>
                                                navButtonClickEvent(e, "/#")
                                            }
                                        >
                                            من نحن
                                        </Link>
                                    </LinkContainer>
                                </LinkListItem>
                                <LinkListItem key={'k-2'}>
                                    <LinkContainer>
                                        <Link
                                            onClick={(e) =>
                                                navButtonClickEvent(
                                                    e,
                                                    "/conntactUs"
                                                )
                                            }
                                        >
                                            التواصل
                                        </Link>
                                    </LinkContainer>
                                </LinkListItem>
                            </LinkList>
                        </CompanyAddress>
                        <SocialLinksContainer>
                            <SocialLink href="https://facebook.com">
                                <FacebookIcon />
                            </SocialLink>
                            <SocialLink href="https://twitter.com">
                                <TwitterIcon />
                            </SocialLink>
                            <SocialLink href="https://youtube.com">
                                <YoutubeIcon />
                            </SocialLink>
                        </SocialLinksContainer>
                    </CompanyColumn>
                    <Column>
                        <ColumnHeading>Full-Stack</ColumnHeading>
                        <LinkList>
                            <LinkListItem key={'k-3'}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    HTML
                                </Link>
                            </LinkListItem>
                            <LinkListItem key={'k-4'}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    CSS
                                </Link>
                            </LinkListItem>
                            <LinkListItem key={'k-5'}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    Java Script
                                </Link>
                            </LinkListItem>
                            <LinkListItem key={'k-6'}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    Php
                                </Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>Data Science</ColumnHeading>
                        <LinkList>
                            <LinkListItem key={"k-7"}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    Python
                                </Link>
                            </LinkListItem>
                            <LinkListItem key={"k-8"}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    Matlab
                                </Link>
                            </LinkListItem>
                            <LinkListItem key={"k-9"}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    R
                                </Link>
                            </LinkListItem>
                            <LinkListItem key={"k-10"}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    Java
                                </Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>Mobile Development</ColumnHeading>
                        <LinkList>
                            <LinkListItem key={"k-11"}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    Flutter
                                </Link>
                            </LinkListItem>
                            <LinkListItem key={"k-12"}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    Kotlin
                                </Link>
                            </LinkListItem>
                            <LinkListItem key={"k-13"}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    Java
                                </Link>
                            </LinkListItem>
                            <LinkListItem key={"k-14"}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    Swift
                                </Link>
                            </LinkListItem>
                            <LinkListItem key={"k-15"}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    Objective-C
                                </Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                    <CompanyColumn>
                        <ColumnHeading>التواصل</ColumnHeading>
                        <LinkList>
                            <LinkListItem dir="ltr">
                                +967(739) (711)-876
                            </LinkListItem>
                            <LinkListItem dir="ltr">
                                <ContactLink href="mailto:ehabmohammeedd@gmail.com">
                                    ehabmohammeedd@gmail.com
                                </ContactLink>
                            </LinkListItem>
                            <LinkListItem key={"k-16"}>
                                <Link
                                    onClick={(e) =>
                                        navButtonClickEvent(e, "/#")
                                    }
                                >
                                    سياسة الخصوصية
                                </Link>
                            </LinkListItem>
                        </LinkList>
                    </CompanyColumn>
                </FiveColumns>
                <Divider />
                <CopyrightAndCompanyInfoRow dir="ltr">
                    <CopyrightNotice>
                        &copy; Copyright 2023,{" "}
                        <span tw="text-primary-300">F-Coders</span>.
                    </CopyrightNotice>
                </CopyrightAndCompanyInfoRow>
            </Content>
        </Container>
    );
};
