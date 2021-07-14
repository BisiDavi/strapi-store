export const pageview = (url, title) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
        page_path: url,
				page_title: title
    });
};

export const event = ({ action, params }) => {
    window.gtag('event', action, params);
};
