import { chainPropTypes } from "@mui/utils";
import React from "react";
import { Helmet } from "react-helmet";

export default function HelmetHeader(props) {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name="keywords" content={`${props.keywords}`} />
            <meta name="descritpion" content={`${props.description}`} />
        </Helmet>
    );
}
