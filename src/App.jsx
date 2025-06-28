import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <NavigationBar/>
      <MainShow/>
      <Footer/>
    </div>
  )
}

const normalButton = {
  backgroundColor: "white",
  border: "0px",
  fontFamily: "poppins",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: "400",
  paddingTop: "10px",
  paddingLeft: "10px",
  cursor: "pointer"
}

const aboutRedirect = () => {
  window.location.href = "https://about.google/";
};

const storeRedirect = () => {
  window.location.href = "https://store.google.com/";
};
const mailRedirect = () => {
  window.location.href = "https://mail.google.com/";
};
const imagesRedirect = () => {
  window.location.href = "https://www.google.com/imghp?hl=en&ogbl";
};
const accountsRedirect = () => {
  window.location.href = "https://accounts.google.com/";
};
const labsRedirect = () => {
  window.location.ref = "https://labs.google.com/"
}

const NavigationBar = () => {
  return (
    <div style={{display: "flex"}}>
      <div style={{display: "flex"}}>
        <button style={normalButton} onClick={aboutRedirect}>
          About
        </button>
        <button style={normalButton} onClick={storeRedirect}>
          Store
        </button>
      </div>
      <div style={{display: "flex", paddingLeft: "860px"}}>
        <button style={normalButton} onClick={mailRedirect}>
          Gmail
        </button>
        <button style={normalButton} onClick={imagesRedirect}>
          Images
        </button>
        <img src="https://storage.googleapis.com/support-kms-prod/cGGjo9CcfMkEzQALYQ9oADD7XkRTe98JzRCD" style={{height: "30px", width: "30px", paddingTop: "10px", paddingLeft: "15px", cursor: "pointer"}} onClick={labsRedirect} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeFoC9mAYwRHxnSoA9hSZsQyER41wT_Xkmg&s" style={{height: "25px", width: "25px", paddingTop: "13px", paddingLeft: "15px"}} />
        <img src="https://s3-alpha.figma.com/profile/411b7e7a-ed1d-4347-ae82-314a722d8ce7" style={{height: "43px", width: "43px", borderRadius: "500px", paddingLeft: "0px", marginLeft: "10px", marginTop: "5px", cursor: "pointer"}} onClick={accountsRedirect} />
      </div>

    </div>
  )
}

const MainShow = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.location.href = searchUrl;
    }
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.location.href = searchUrl;
    }
  };

  const handleFeelingHappy = () => {
    window.location.href = "https://www.google.com/doodles";
  };

  return (    
    <div style={{ backgroundColor: "white", marginTop: "35px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ color: "#2782D8", fontFamily: "Poppins", fontSize: "120px", fontWeight: 600 }}>G</div>
          <div style={{ color: "#EA4335", fontFamily: "Poppins", fontSize: "120px", fontWeight: 600 }}>o</div>
          <div style={{ color: "#FBBC05", fontFamily: "Poppins", fontSize: "120px", fontWeight: 600 }}>o</div>
          <div style={{ color: "#4285F4", fontFamily: "Poppins", fontSize: "120px", fontWeight: 600 }}>g</div>
          <div style={{ color: "#34A853", fontFamily: "Poppins", fontSize: "120px", fontWeight: 600 }}>l</div>
          <div style={{ color: "#EA4335", fontFamily: "Poppins", fontSize: "120px", fontWeight: 600 }}>e</div>
        </div>

        <div style={{ position: "relative", width: "600px" }}>
          <input
            type="text"
            style={{
              width: "473px",
              height: "40px",
              borderRadius: "50px",
              border: "1px solid #000",
              background: "#FFF",
              paddingLeft: "40px",
              paddingRight: "80px",
              fontSize: "20px",
              fontFamily: "Poppins",
              boxShadow: isHovered
                ? "0px 4px 12px rgba(0, 0, 0, 0.3)"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
              transition: "box-shadow 0.2s ease"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <img
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
            alt="Search"
            style={{
              position: "absolute",
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              height: "20px",
              width: "20px",
              cursor: "pointer"
            }}
            onClick={handleSearch}
          />

          <img
            src="data:image/png;base64,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"
            alt="Mic"
            style={{
              position: "absolute",
              top: "50%",
              right: "50px",
              transform: "translateY(-50%)",
              height: "24px",
              width: "24px"
            }}
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Google_Lens_Icon.svg"
            alt="Search by Image"
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              height: "24px",
              width: "24px"
            }}
          />
        </div>

        {/* Search Buttons */}
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button
            onClick={handleSearch}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "Poppins",
              fontSize: "14px"
            }}
          >
            Google Search
          </button>
          <button
            onClick={handleFeelingHappy}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "Poppins",
              fontSize: "14px"
            }}
          >
            I'm Feeling Happy
          </button>
        </div>
      </div>
    </div>
  );
};


const Footer = () => {
  return (
    <div style={{ width: "100%", position: "absolute", bottom: 0 }}>
      <div style={{
        backgroundColor: "#f2f2f2",
        padding: "15px 30px",
        fontFamily: "Poppins",
        fontSize: "14px",
        borderTop: "1px solid #ddd"
      }}>
        India
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#f2f2f2",
        padding: "15px 30px",
        fontFamily: "Poppins",
        fontSize: "14px",
        borderTop: "1px solid #ddd"
      }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={footerLinkStyle}>Advertising</a>
          <a href="#" style={footerLinkStyle}>Business</a>
          <a href="#" style={footerLinkStyle}>How Search Works</a>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={footerLinkStyle}>Privacy</a>
          <a href="#" style={footerLinkStyle}>Terms</a>
          <a href="#" style={footerLinkStyle}>Settings</a>
        </div>
      </div>
    </div>
  );
}

const footerLinkStyle = {
  textDecoration: "none",
  color: "#202124",
  cursor: "pointer"
};

export default App
