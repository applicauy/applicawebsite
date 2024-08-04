export const onMeetOurProcessClick = () => {
    const { protocol, hostname, port } = window.location;
    window.location.href = `${protocol}//${hostname}:${port}/#hiring-process`;
};

export const onStartNowClick = () => {
    window.location.href = "/contact";
};

export const onLetsTalkClick = () => {
    window.location.href = "/contact";
};
