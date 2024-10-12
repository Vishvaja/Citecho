import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import videoUrls from '../files/videoUrls.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


function VideoGallery() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const videosWithLikes = videoUrls.map(video => ({ ...video, liked: false }));
        setVideos(videosWithLikes);
    }, []);

    // Function to toggle the like state for a video
    const toggleLike = (index) => {
        const updatedVideos = videos.map((video, idx) => {
            if (idx === index) {
                return { ...video, liked: !video.liked };
            }
            return video;
        });
        setVideos(updatedVideos);
    };

    // Inline CSS for the video wrapper to maintain aspect ratio
    const videoWrapperStyle = {
        position: 'relative',
        paddingTop: '56.25%', // 16:9 Aspect Ratio
        height: '0', // Collapse the container
    };

    // Inline CSS for React Player to fill the video wrapper
    const reactPlayerStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
    };

    // Inline CSS for the container that joins the video and details
    const videoContainerStyle = {
        marginBottom: '40px', // Space between video containers
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Optional: adds a subtle shadow around the video container
        borderRadius: '4px', // Optional: rounds the corners of the video container
        overflow: 'hidden', // Ensures the border radius clips the content
    };

    // Inline CSS for video details to reduce vertical spacing
    const videoDetailsStyle = {
        padding: '15px', // Adjust padding around video details
    };

    return (
        <div className="container">
            <div style={{ height: '30px' }}></div> {/* Adjusted spacing */}
            <div className="row">
                {videos.map((video, index) => (
                    <div key={index} className="col-md-6">
                        <div style={videoContainerStyle}> {/* Container for video and its details */}
                            <div style={videoWrapperStyle}>
                                <ReactPlayer
                                    url={video.url}
                                    style={reactPlayerStyle}
                                    width="100%"
                                    height="100%"
                                    controls
                                />
                            </div>
                            <div style={videoDetailsStyle}> {/* Reduced spacing for details */}
                                <div><strong>Title:</strong> {video.title}</div>
                                <div><strong>Authors:</strong> {video.authors}</div>
                                <div><strong>Content Type:</strong> {video.contentType}</div>
                                <div><strong>Publisher:</strong> {video.publisher}</div>
                                <div><strong>Date:</strong> {video.date}</div>
                                <div><strong>DOI:</strong> {video.doi}</div>
                                <div className="mt-2"><a href={video.link} target="_blank" rel="noopener noreferrer">View Publication</a></div>
                            </div>
                            <button onClick={() => toggleLike(index)} className="btn btn-outline-primary">
                                    <FontAwesomeIcon icon={faThumbsUp} /> {video.liked ? 'Remove from Insights' : 'Add to Insights'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoGallery;
