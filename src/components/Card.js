import noPostPng from "../img/no-post-image.png"

const Card = ({ data }) => {

    /* Gelen veriye göre kutudaki ikonların tanımlanan değişkenlere atanması */

    let boxIcon;
    let likeIcon;
    let shareIcon;
    let eyesIcon = <i className="fa-solid fa-eye me-2"></i>
    let commentIcon = <i className="fa-regular fa-message me-2"></i>

    if (data.account.channel === "instagrambusiness") {

        boxIcon = <i className="fa-brands fa-instagram"></i>

        likeIcon = <i className="fa-regular fa-thumbs-up me-2"></i>
        shareIcon = <i className="fa-solid fa-share-nodes me-2"></i>

    } else if (data.account.channel === "twitter") {

        boxIcon = <i className="fa-brands fa-twitter"></i>

        likeIcon = <i className="fa-regular fa-heart me-2"></i>
        shareIcon = <i className="fa-solid fa-retweet me-2"></i>

    } else if (data.account.channel === "facebook") {

        boxIcon = <i className="fa-brands fa-facebook-f"></i>

        likeIcon = <i className="fa-regular fa-thumbs-up me-2"></i>
        shareIcon = <i className="fa-solid fa-share-nodes me-2"></i>

    }

    let boxIconBgColor = data.status === 0
        ?
        "rgba(247, 191, 56, 1)"
        :
        data.status === 1
            ?
            "rgba(58, 193, 131, 1)"
            :
            data.status === 3
                ?
                "#AAAAAA"
                :
                "rgba(251, 100, 80, 1)"

    /* TOP ICON  */

    let topIcon;
    if (data.is_published) {
        topIcon = <div className="top-icon ">
            <i className="fa-solid fa-trash-can ms-3"></i>
            <i className="fa-solid fa-ellipsis ms-3"></i>
        </div>
    } else {
        if (data.status === 1) {
            topIcon = <div className="top-icon ">
                <i className="fa-solid fa-ban ms-3"></i>
                <i className="fa-solid fa-trash-can ms-3"></i>
                <i className="fa-solid fa-ellipsis ms-3"></i>
            </div>
        } else if (data.status === 0) {
            topIcon = <div className="top-icon ">
                <i className="fa-solid fa-check ms-3"></i>
                <i className="fa-solid fa-trash-can ms-3"></i>
                <i className="fa-solid fa-ellipsis ms-3"></i>
            </div>
        }

    }

    /* DATE */

    function formatDate(newDate) {
        const months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December',
        }
        const d = newDate
        const year = d.getFullYear()
        const date = d.getDate()
        const monthName = months[d.getMonth()]
        const hours = d.getHours();
        const minutes = d.getMinutes()
        const formatted = `${date} ${monthName} ${year} - ${hours}:${minutes}`
        return formatted.toString()
    }

    let topDate = formatDate(new Date(data.published_at))

    return (

        <div style={{ width: "371px" ,zIndex:"1"}} className="col">
            <div className="card justify-content-between  d-flex flex-row border-0">

                {/* BOX ICON */}
                <div
                    className="media-icon p-2 d-flex flex-column justify-content-center align-items-center rounded-start"
                    style={{ backgroundColor: boxIconBgColor }}>
                    {boxIcon}
                </div>

                <div className="px-4 py-3 text-muted d-flex flex-column justify-content-between align-items-center">

                    {/* DATE || TOP ICON */}

                    <div className="d-flex justify-content-between align-items-center w-100 mb-2">
                        <small className="card-text fs-6">
                            {topDate}
                        </small>
                        {topIcon}
                    </div>

                    {/* İNFO */}

                    <p className="info-text card-text w-100  fw-bold ">{data.entry.message}</p>


                    {/* IMAGE */}


                    <img
                        src={data.entry.image[0]}

                        onError={({ currentTarget }) => {
                            currentTarget.src = noPostPng;
                        }}

                        className="card-img rounded-0 mb-2"
                        alt={data.entry.type}
                        style={{ width: "100%", height: "239px", objectFit: "fill" }}
                    />



                    {/* BOTTOM İCON  */}

                    {
                        data.account.channel === "facebook" || data.account.channel === "instagrambusiness"
                            ?
                            <div className="bottom-icon w-100">
                                <span>{likeIcon}0</span>
                                <span>{commentIcon}0</span>
                                <span>{shareIcon}0</span>
                                <span>{eyesIcon}0</span>
                            </div>
                            :
                            data.account.channel === "twitter"
                                ?
                                <div className="bottom-icon w-100">
                                    <span>{likeIcon}0</span>
                                    <span>{shareIcon}0</span>
                                    <span>{commentIcon}0</span>
                                    <span>{eyesIcon}0</span>
                                </div>
                                :
                                <div>
                                    <p>ERROR</p>
                                </div>
                    }

                </div>
            </div>
        </div>

    )
}

export default Card;