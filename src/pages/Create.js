import React from 'react';
import { Link } from 'react-router-dom';

const Create = () => {

  // Define the stylish button styles
  const stylishButtonStyle = {
    backgroundColor: '#007bff', // Primary color
    borderColor: '#007bff', // Border color
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)', // Shadow for depth
    color: 'white', // Text color
    textDecoration: 'none', // Remove underline from links
    display: 'inline-block', // Allow width and height
    fontSize: '1.25rem', // Larger text
    padding: '0.5rem 1rem', // Padding for button size
    borderRadius: '0.3rem', // Rounded borders
    transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s', // Smooth transition
  };

  return (
    <main role="main">
      <div className="jumbotron" style={{ backgroundColor: '#eaeef4' }}> {/* An off-white background color */}
        <div className="container">
          <h2 className="display-6 text-center">Creating Videos from Papers</h2>
          <div style={{ height: '20px' }}></div>
          <p>Create allows academics and researchers to submit and generate video content based on their research studies. Users can easily upload their videos with provided resources or use our AI-driven tool to create videos from research papers, enhancing the academic dissemination process.</p>
        </div>
      </div>

      <div className="container my-4"> {/* Add vertical margin around the container */}
        <div className='container'>
          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/create.png`} alt="Channel Banner" width="100%" height="100%" />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3 text-center">
            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/upload.jpeg`} alt="Upload" />
            <div style={{ height: '20px' }}></div>
            <Link to="/upload-video" style={stylishButtonStyle} className="btn my-2 w-50">Submit Video</Link>
            <div style={{ height: '20px' }}></div>
            <div className="text-left mt-3">
              <p>Prepare your video ensuring it meets our submission guidelines, including format, length, and content relevance to academic research.</p>
              <p><strong>Upload Your Video</strong></p>
              <p>Navigate to the submission section, and upload your video file. Provide a brief description, select relevant tags, and link it to the corresponding research paper or article.</p>
              <p><strong>Peer Review Process</strong></p>
              <p>Once submitted, your video will undergo a peer review process to ensure it meets academic standards and quality benchmarks.</p>
              <p><strong>Publication</strong></p>
              <p>After approval, your video will be published on the Peereviewed platform, making it accessible to a global audience of academics and researchers.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3 text-center">
            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/generate.jpeg`} alt="Generate" />
            <div style={{ height: '20px' }}></div>
            <Link to="/generate-video" style={stylishButtonStyle} className="btn my-2 w-50">Generate Video</Link>
            <div style={{ height: '20px' }}></div>
            <div className="text-left mt-3">
              <p>Upload your research paper or input key findings, and our AI-driven tool will automatically create a draft video.</p>
              <p><strong>Customization</strong></p>
              <p>Review the generated video and use our editing tools to make adjustments, add visuals, or incorporate additional information to better convey your research.</p>
              <p><strong>Final Review and Submission</strong></p>
              <p>Once you are satisfied with the video, submit it for a quick review to ensure compliance with our content standards.</p>
              <p><strong>Publishing</strong></p>
              <p>After the review, your video will be published on Peereviewed, ready to be viewed and shared with the academic community.</p>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
};

export default Create;
