import React from "react";

const Subscribe = () => {
    return (
        <div className="mailinglist ">
            <h1>JOIN OUT MAILING LIST!</h1>
            <p>
                Be among the first to hear abou our discount sales, new arrivals
                & more!
            </p>
            <form>
                <input placeholder="Email" type="email" required />
                <button type="submit">Subscribe</button>
                <p>
                    By completing this form you are signing up to receive our
                    emails and can unsubscribe at any time
                </p>
            </form>
        </div>
    );
};

export default Subscribe;
