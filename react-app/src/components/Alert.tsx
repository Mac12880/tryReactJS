import React, { ReactNode } from "react";

interface Props {
    //to pass text
    // text: string;

    //to pass children
    // children: string;

    //to pass children/text with html
    children: ReactNode;
}

const Alert = ({ children }: Props) => {
    return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
