export default function Web() {
    return (
        <div className="min-h-screen ">
            {/* <iframe
                src="https://www.juicer.io/api/feeds/shogunepsiln-676e9408-614c-486d-9c14-7b2168f5c29f/iframe?per=6"
                width="100%"
                // height="auto"
                style={{ display: "block", margin: "0 auto" }}
            ></iframe> */}
            <div
                className="juicer-feed"
                data-feed-id="shogunepsiln-676e9408-614c-486d-9c14-7b2168f5c29f"
                data-per="15"
            ></div>
        </div>
    );
}
