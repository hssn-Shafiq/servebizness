

export const ServicesImageBanner = ({subtitle,title,desc1,desc2, bgImgUrl}) => {

    return (
        <>
         <div className="banner-section">
          <div className="image-section d-flex align-items-center justify-content-start px-5" style={{backgroundImage:`url(${bgImgUrl})`}} >
            <div className="col-lg-8 text-light">
              <p>{subtitle}</p>
              <h1>{title}</h1>
              <p>
                {desc1}
              </p>
              <p>
                {desc2}
              </p>
              <div className="button-section">
                <a href="/contact">
                  <button className="text-light px-3 py-2 rounded-5 button1">
                    Contact us now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}