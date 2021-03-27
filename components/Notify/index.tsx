import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = (text) => {
    const notify = () =>
        toast.success(text, {
            position: "top-left",
            draggable: true,
            closeOnClick: true,
        });

    return notify;
};

export default Notify;
