import React from 'react'

const MovieDetail = ({ movie: { title, vote_average, vote_count, release_date } }) => {
  return (
    <div className='header-section'>
      <div className='header-left'>
        <h2 className=''>{title}</h2>
        <p className='header-Desc'> {release_date ? release_date.split("-")[0] : "N/A"} • PG-13 • 2h 15m</p>
      </div>
      <div className='header-right'>
        <div className="header-rating">
          <img src="/star.svg" alt="star Icon" width={17} height={17} />
          <p className="inline-flex items-center space-x-1">
            {vote_average ? (
              <>
                <strong className="text-white">{vote_average.toFixed(1)}</strong>
                <span>/10 ({vote_count}K)</span>
              </>
            ) : (
              "N/A"
            )}
          </p>
        </div>
        <div className="header-rating">
          <img src="/graph.svg" alt="star Icon" width={17} height={17} />
          <p className="inline-flex items-center space-x-1">1</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
