import React from 'react'

function Invitation() {
  return (
    <div className='container' id='invitation' style={{ marginTop: '1vh', padding: '5vh' }}>
      <div className='card p-4' style={{ marginBottom: '4vh', backgroundColor: '#FFF5EA', opacity: '0.90' }}>
        <div style={{ fontFamily: 'Quicksand', color: '#968C83' }}>
          <div style={{ padding: '1vh', color: '#968C83' }} >
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 640 512" fill='currentColor'>
              <path d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V48H264c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2V512h96V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96h96V251.2c0-16.9-8.8-32.5-23.3-41.2L344 142.4V96h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4V464c0 26.5 21.5 48 48 48h80V273.6L24.9 330.3zM592 512c26.5 0 48-21.5 48-48V372.4c0-17.5-9.5-33.6-24.9-42.1L512 273.6V512h80z" />
            </svg>
          </div>
          <span style={{ fontFamily: 'Quicksand', fontSize: '3vh' }}> <b> Holy Matrimony </b> </span>
          <hr />
        </div>
        <div style={{ justifyContent: 'start', alignContent: 'start', textAlign: 'start' }}>
          {/* ICON CALENDAR */}
          <div style={{ margin: '1vh', color: '#968C83' }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            <span style={{ fontFamily: 'Quicksand', color: '#968C83', marginLeft: '2vh', fontSize: '2vh' }}> 17 January 2024 </span>
          </div>

          {/* ICON CLOCK */}
          <div style={{ margin: '1vh', color: '#968C83' }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            <span style={{ fontFamily: 'Quicksand', color: '#968C83', marginLeft: '2vh', fontSize: '2vh', marginTop: '1vh', }}> 10.00 WITA </span>
          </div>

          {/* ICON LOCATION */}
          <div style={{ margin: '1vh', color: '#968C83' }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
              <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
            </svg>
            <a
              href="https://maps.app.goo.gl/mHWpRp786TXRK5Ve6"
              target="_blank"
              style={{ fontFamily: 'Quicksand', color: '#968C83', marginLeft: '2vh', fontSize: '2vh', marginTop: '1vh' }}>
              Chapel of Mother Mary (Bukit Doa), Tomohon
            </a>
          </div>
        </div>

        <div style={{ padding: '1vh' }}>
          <a
            href="https://calendar.google.com/calendar/r/eventedit?text=Grayfield+%26+Cinia+Wedding+&amp;dates=20240117T100000/20240117T120000&amp;ctz=Asia/Singapore&amp;details=We+would+be+more+than+happy+to+see+Your+bright+faces+in+our+wedding&amp;pli=1&amp;uid=1521339627addtocalendar&amp;sf=true&amp;output=xml"
            style={{ color: '#556052' }}
            target="_blank"
          >
            <button className='btn btn-save' style={{ backgroundColor: '#968C83', color: '#F7F4E3', padding: '1vh' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
                <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
              </svg> Save the date!
            </button>
          </a>
        </div>


        {/* ---------- */}

      </div>
      <div className='card p-4' style={{ marginBottom: '4vh', backgroundColor: '#968C83', opacity: '0.90' }}>
        <div style={{ fontFamily: 'Quicksand', color: '#F7F4E3' }}>
          <div style={{ padding: '1vh', color: '#F7F4E3' }} >
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 640 512" fill='currentColor'>
              <path d="M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z" />
            </svg>
          </div>
          <span style={{ fontFamily: 'Quicksand', fontSize: '3vh' }}> <b> Reception </b></span>
          <hr />
        </div>

        <div style={{ justifyContent: 'start', alignContent: 'start', textAlign: 'start' }}>
          {/* ICON CALENDAR */}
          <div style={{ margin: '1vh', color: '#F7F4E3' }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            <span style={{ fontFamily: 'Quicksand', color: '#F7F4E3', marginLeft: '2vh', fontSize: '2vh' }}> 17 January 2024 </span>
          </div>

          {/* ICON CLOCK */}
          <div style={{ margin: '1vh', color: '#F7F4E3' }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            <span style={{ fontFamily: 'Quicksand', color: '#F7F4E3', marginLeft: '2vh', fontSize: '2vh', marginTop: '1vh', }}> 17.00 WITA </span>
          </div>

          {/* ICON LOCATION */}
          <div style={{ margin: '1vh', color: '#F7F4E3' }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
              <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
            </svg>
            <a
              href="https://maps.app.goo.gl/iCzrog3DQoH6AMmJ8"
              target="_blank"
              style={{ fontFamily: 'Quicksand', color: '#F7F4E3', marginLeft: '2vh', fontSize: '2vh', marginTop: '1vh' }}
            >
              Jhoanie Hotel and Resto, Tomohon
            </a>
          </div>
        </div>

        <div style={{ padding: '1vh' }}>
          <a
            href="https://calendar.google.com/calendar/r/eventedit?text=Grayfield+%26+Cinia+Wedding+&amp;dates=20240117T170000/20240117T200000&amp;ctz=Asia/Singapore&amp;details=We+would+be+more+than+happy+to+see+Your+bright+faces+in+our+wedding&amp;pli=1&amp;uid=1521339627addtocalendar&amp;sf=true&amp;output=xml"
            style={{ color: '#556052' }}
            target="_blank"
          >
            <button className='btn btn-save' style={{ backgroundColor: '#F7F4E3', color: '#B3A492', padding: '1vh' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
                <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
              </svg> Save the date!
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Invitation