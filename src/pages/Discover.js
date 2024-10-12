import React, { useState } from 'react';
import VideoSearchGallery from '../components/VideoSearchGallery';

const Discover = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    // The searchQuery state already holds the input for searching
  };

  return (
    <main role="main">
      <div className="jumbotron" style={{ backgroundColor: '#eaeef4' }}> {/* An off-white background color */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <form className="form-inline my-2 my-lg-0 justify-content-center" onSubmit={handleSearch}>
                <div className="input-group w-100">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '50px' }}></div>
      <h2 className="text-center">Videos</h2>
      {/* Pass searchQuery to VideoGallery */}
      <VideoSearchGallery searchQuery={searchQuery} />
    </main>
  );
};

export default Discover;
