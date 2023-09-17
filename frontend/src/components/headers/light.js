import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { NavLink as MyNv, useNavigate } from "react-router-dom";
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import { useContext } from "react";
import AuthContext from "context/auth_provider.jsx";

import logo from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto pt-5
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.button`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
    ${tw`flex items-center font-black border-b-0 text-2xl! mr-0!`};

    img {
        ${tw`w-10 mr-3`}
    }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between px-4 md:px-6`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
    ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
    ${NavLinks} {
        ${tw`flex flex-col items-center`}
    }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-stretch
`;

const Light = ({
    roundedHeaderButton = false,
    logoLink,
    links,
    className,
    collapseBreakpointClass = "lg",
}) => {
    const { auth, setAuth } = useContext(AuthContext);
    let navigate = useNavigate();
    /*
     * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
     * This links props should be an array of "NavLinks" components which is exported from this file.
     * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
     * This allows this Header to be multi column.
     * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
     * Left part will be LogoLink, and the right part will be the the NavLinks component you
     * supplied.
     * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
     * You can also choose to directly modify the links here by not passing any links from the parent component and
     * changing the defaultLinks variable below below.
     * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
     */

    const logoutButtonClickEventHandler = (e) => {
        e.preventDefault();
        setAuth(null);
    };

    const defaultLinks = [
        <>
            <NavLinks key={1}>
                <MyNv to="/">
                    <NavLink> الرئيسية </NavLink>
                </MyNv>
                <MyNv to="/MainCoursesPage">
                    <NavLink> الكورسات </NavLink>
                </MyNv>
                {auth != null ? (
                    <MyNv to="/addPost">
                        <NavLink>كتابة مقالة </NavLink>
                    </MyNv>
                ) : null}
                <MyNv to="/listPosts">
                    <NavLink>المقالات </NavLink>
                </MyNv>
                <MyNv to="#">
                    <NavLink>حول الموقع </NavLink>
                </MyNv>
                <MyNv to="/conntactUs">
                    <NavLink>التواصل</NavLink>
                </MyNv>
            </NavLinks>
            {auth == null ? (
                <MyNv to={"/register"}>
                    <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}>
                        تسجيل
                    </PrimaryLink>
                </MyNv>
            ) : (
                <PrimaryLink
                    css={roundedHeaderButton && tw`rounded-full`}
                    onClick={logoutButtonClickEventHandler}
                >
                    خروج
                </PrimaryLink>
            )}
        </>,
    ];

    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
    const collapseBreakpointCss =
        collapseBreakPointCssMap[collapseBreakpointClass];

    const navButtonClickEvent = (e, route) => {
        e.preventDefault();
        navigate(route);
    };

    const defaultLogoLink = (
        <LogoLink onClick={(e) => navButtonClickEvent(e, "/")}>
            GEEKS
            <img src={logo} alt="logo" />
        </LogoLink>
    );

    logoLink = logoLink || defaultLogoLink;
    links = links || defaultLinks;
    return (
        <Header className={className || "header-light"}>
            <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
                {logoLink}
                {links}
            </DesktopNavLinks>

            <MobileNavLinksContainer
                css={collapseBreakpointCss.mobileNavLinksContainer}
            >
                {logoLink}
                <MobileNavLinks
                    initial={{ x: "150%", display: "none" }}
                    animate={animation}
                    css={collapseBreakpointCss.mobileNavLinks}
                >
                    {links}
                </MobileNavLinks>
                <NavToggle
                    onClick={toggleNavbar}
                    className={showNavLinks ? "open" : "closed"}
                >
                    {showNavLinks ? (
                        <CloseIcon tw="w-6 h-6 md:w-8 md:h-8 fixed -mx-8 -my-4" />
                    ) : (
                        <MenuIcon tw="w-6 h-6" />
                    )}
                </NavToggle>
            </MobileNavLinksContainer>
        </Header>
    );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
    sm: {
        mobileNavLinks: tw`sm:hidden`,
        desktopNavLinks: tw`sm:flex`,
        mobileNavLinksContainer: tw`sm:hidden`,
    },
    md: {
        mobileNavLinks: tw`md:hidden`,
        desktopNavLinks: tw`md:flex`,
        mobileNavLinksContainer: tw`md:hidden`,
    },
    lg: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex lg:items-center`,
        mobileNavLinksContainer: tw`lg:hidden`,
    },
    xl: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex lg:items-center`,
        mobileNavLinksContainer: tw`lg:hidden`,
    },
};

export default Light;
