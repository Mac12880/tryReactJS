import React, { ReactNode } from "react";

interface Props {
    //to pass text
    // text: string;

    //to pass children
    // children: string;

    //to pass children/text with html
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
    return (
        <div className="alert alert-primary alert-dismissible">
            {children}
            <button
                type="button"
                className="btn-close"
                onClick={onClose}
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>
    );
};

export default Alert;
