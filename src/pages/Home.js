import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoGallery from '../components/VideoGallery';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to the search page with the query as a URL parameter
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <main role="main">
      <div className="jumbotron" style={{ backgroundColor: '#eaeef4' }}> {/* An off-white background color */}
        <div className="container">
          <h1 className="display-6 text-center">A Collection of Videos on Published Papers!</h1>
          <div style={{ height: '30px' }}></div>
          <p>A website for academics and researchers to submit and generate video content based on their research. Making research findings more accessible and engaging.</p>
          <div style={{ height: '20px' }}></div>
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

      <div className="container my-4"> {/* Add vertical margin around the container */}
        <h2 className="text-center mb-4">Share, Post & Find Research Videos</h2>

        {/* Spacer div for adding extra space */}
        <div style={{ height: '50px' }}></div>

        <div className="row">
          <div className="col-md-6 mb-3"> {/* Add bottom margin to add space between this column and anything below it */}
            <div className="card mb-4 box-shadow">
              <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/trademark.png`} alt="Channel Banner" width="100%" height="100%" />
            </div>
          </div>
          <div className="col-md-6 mb-3"> {/* Similarly, add bottom margin to this column */}
            <p className="px-3"> {/* Add horizontal padding to the paragraph for better readability */}
              Join our platform! Whether you are a published author or aspiring to be one, engage with and explain fascinating research papers from a range of disciplines, sharing your insights and expanding knowledge frontiers.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-center">Recently Uploaded Videos</h2>
      <div style={{ height: '50px' }}></div>
      <VideoGallery />
    </main>
  );
};

export default Home;
