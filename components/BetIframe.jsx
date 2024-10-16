"use client";


const BetIframe = ({ url, title }) => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <iframe
                src={url}
                title={title}
                className="w-full h-full border-none"
            />
        </div>
    );
}

export default BetIframe;