import React, { useState, useEffect } from 'react';
import "./style.css";
import "./pps.css";
import { colors } from 'keep-react/keepTheme';

const newsUpdates = [
  { id: 1, title: "PMSSS 2024 Applications Open", date: "September 15, 2024", description: "The application process for PMSSS 2024 has started. Eligible students from Jammu & Kashmir and Ladakh can now apply for scholarships." },
  { id: 2, title: "Scholarship Distribution Ceremony", date: "August 30, 2024", description: "A ceremony for the distribution of scholarships under the PMSSS program was held in New Delhi." },
  { id: 3, title: "New Courses Added to PMSSS", date: "July 20, 2024", description: "The PMSSS program has added new engineering and medical courses for the upcoming academic year." },
  { id: 4, title: "PMSSS Counselling Session", date: "June 10, 2024", description: "Counselling sessions for students applying under PMSSS were conducted to guide students through the process." }
];

const photos = [
  "/src/Images/amrit_75years.jpg",
  "/src/Images/196764_1687931215KomrGw.jpg",
  "/src/Images/Mug.webp",
  "/src/Images/shutterstock_1772895590-min-1024x341.png",
  "/src/Images/bjp-flag_660_080713123655.webp",
];

const newPhotos = [
  "https://www.gdcramkote.in/upload_imgss/gdcramkote_565_logo1jpg_1690526207.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLdqOrzXFaTIwF9JJOi3NxBzg5w9ZTyAOUA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlfj51cR2dotiP5_SpevDv3kdVHndTw_fIA&s",
  "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Jadavpur_University_Logo.svg/220px-Jadavpur_University_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/b/b0/Chandigarh_University_Seal.png",
  "https://bharateducation.org/logos/188-logo1628496320.jpeg",
  "https://upload.wikimedia.org/wikipedia/en/d/d7/Bangalore_Institute_of_Technology_logo.png"

];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change photo every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? photos.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === photos.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="">
      {/* Slideshow */}
      <div className='w-[92.7vw] h-[50vh] relative mt-4 mb-12'>
        <img
          src={photos[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "80%" }}
          className="centered-photo rounded-xl"
        />
        <button className="prev-button" onClick={goToPrevious}>
          ❮
        </button>
        <button className="next-button" onClick={goToNext}>
          ❯
        </button>
      </div>

      {/* Sections below slideshow */}
      <div className="sections-container">
        {/* Existing Sections */}
        <section className="section">
          <div className="content">
            <h1>PMSSS</h1>
            <p>The Prime Minister’s Special Scholarship Scheme (PMSSS) is a government initiative aimed at providing financial assistance to meritorious students from Jammu and Kashmir and Ladakh to pursue higher education. Implemented by the All India Council for Technical Education (AICTE), the scheme supports students from economically weaker sections by offering scholarships for undergraduate courses in engineering, medical, and general education across India. It covers tuition fees, hostel fees, and maintenance expenses, enabling students to access quality education in recognized institutions. The primary goal of PMSSS is to promote educational upliftment and national integration by encouraging students from these regions to study in institutions outside their home states. The scheme not only eases the financial burden on students but also helps in fostering a sense of national unity by exposing them to diverse educational and cultural environments. Through its structured application and counseling process, PMSSS ensures that deserving students are placed in reputable institutions, offering them a brighter future and opportunities for growth.</p>
          </div>
        </section>
        
        <section className="section">
          <div className="content">
            <h1>Eligibility Criteria</h1>
            <ul>
              <li>Indian citizen.</li>
              <li>Permanent resident of Jammu & Kashmir or Ladakh.</li>
              <li>Completed Class 12 from a recognized board.</li>
              <li>Age typically 18-25 years (varies by course).</li>
              <li>Family income generally should not exceed ₹8 lakhs per annum.</li>
              <li>Minimum percentage in Class 12 as required by the course and institution.</li>
              <li>Pursue course at an institution recognized under PMSSS.</li>
              <li>Apply through PMSSS portal by the deadline</li>
              <li>Additional criteria may apply for reserved categories such as SC/ST/OBC or specific courses</li>
            </ul>
          </div>
          <div className="image">
            <img src="https://thedispatch.blob.core.windows.net/thedispatchimages/2022/02/634786-kashmir-students-afp.jpg" alt="Introduction" />
          </div>
        </section>

        <section className="section">
        <div className="content">
            <h1>PMSSS News and Updates</h1>
            <ul className="news-list">
              {newsUpdates.map((newsItem) => (
                <li key={newsItem.id} className="news-item">
                  <h3>{newsItem.title}</h3>
                  <span className="news-date">{newsItem.date}</span>
                  <p>{newsItem.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="ima">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5PiHOGR7IgaVa_IzSwiOwHmu9CxAAnLJjYJpgMOy6cJ5FHiZMnpxDEVpzh1CrXAoXI0&usqp=CAU" alt="Features" />
          </div>
        </section>

        <section className="section">
          <div className="content">
            <h1>Features</h1>
            <ul>
              <li>Digital Document Uploading.</li>
              <li>Upload all necessary documents securely through the online portal.</li>
              <li>Automated Verification.</li>
              <li>Get your documents verified automatically.</li>
              <li>Reducing the processing time.</li>
              <li>Real-Time Tracking.</li>
              <li>Rack the status of your scholarship submission and payment in real-time.</li>
            </ul>
          </div>
          <div className="image">
            <img src="https://builtin.com/sites/www.builtin.com/files/2024-01/feature-engineering.jpg" alt="About Us" />
          </div>
        </section>
      </div>

      {/* Marquee Section */}
      <div className="sections-container mt-8">
      <section className= "section">
          <div className= "student1">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQFFomkCx116vA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706696688399?e=2147483647&v=beta&t=La80k3CpU3_6NcgNQOoDIDla4oZbTcgzEXbLHiSIo7I" alt="student" />
              <div className="detail"><h1>Madaya Fayaz</h1>
              <p>B.Tech student that granted the 100% scholarships by Prime Minister Scholarship Special scheme for Jammu & Kashmir Students.</p></div>          
          </div>
          <div className="student1">
            <img src="https://kashmirconvener.com/wp-content/uploads/2023/09/IMG-20230901-WA0019.jpg" />
              <div className="detail">
                <h1>Nasir Khuehami</h1>
                <p>Medical student that granted the 100% scholarships by Prime Minister Scholarship Special scheme for Jammu & Kashmir Students.</p>
              </div>
          </div>
          <div className="student1">
            <img src="https://i.pinimg.com/736x/38/18/b5/3818b50c97f7dd27551a2a9ef46be66e.jpg" />
              <div className="detail">
                <h1>Winn Chorol</h1>
                <p>Pharamacy student from Ladakh that granted the 100% scholarships by Prime Minister Scholarship Special scheme for Jammu & Kashmir Students.</p>
              </div>
          </div>
            
          <div className="student1">
          <img src="https://i.pinimg.com/550x/f1/79/3e/f1793e26bd3372a59d97ecfe18732749.jpg" />
              <div className="detail"><h1>Jagdish Kumar Sidhi</h1>
              <p>Sports student from Jammu that granted the 100% scholarships by Prime Minister Scholarship Special scheme for Jammu & Kashmir Students.</p></div>
          </div>
        </section>
        <section className="section mb-8">
          <div className="marquee-container">
            <div className="marquee-content">
              {[...newPhotos,...newPhotos,...newPhotos,...newPhotos].map((imageURL, index) => (
                <img key={index} src={imageURL} alt={`Marquee ${index}`} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
