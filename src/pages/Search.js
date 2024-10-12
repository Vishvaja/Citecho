import React from 'react';
import { useLocation } from 'react-router-dom';
import VideoSearchGallery from '../components/VideoSearchGallery';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = () => {
  const query = useQuery();
  const searchQuery = query.get("query");

  // Optional: You can display the search query on the page
  // useEffect to fetch or filter videos based on the searchQuery if needed

  return (
    <div className="container">
      <h2>Search Results for: {searchQuery}</h2>
      {/* You can modify VideoGallery to take a searchQuery prop and handle filtering there, or filter your videos based on the query here */}
      <VideoSearchGallery searchQuery={decodeURIComponent(searchQuery)} />
    </div>
  );
};

export default SearchPage;
