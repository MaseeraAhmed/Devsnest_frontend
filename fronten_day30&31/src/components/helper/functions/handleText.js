import React from "react";

const handleFromatText = (text) => {
    return text.split('\n').map(str => <>{str}<br/></>)
}

const handleLimitedText = (text, count) => {
    return text.slice(0, count) + (text.length > count ? "..." : "")
}

export { handleFromatText, handleLimitedText }