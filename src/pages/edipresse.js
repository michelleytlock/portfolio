import React from "react"
import "../styles/Project.css"

//Components
import Project from "../components/Project"

const Edipresse = () => {
  return (
    <Project
      title="📚 Hong Kong Tatler Weddings"
      mainImage="https://res.cloudinary.com/michelleytlock/image/upload/v1597831011/portfolio/IMG_7835color_rzucdp.png"
      time="Summer 2014"
      myRole="Layout Design, Typography, Retouching"
      category="Editorial Design"
      contentType="Magazine"
      toolsUsed="Adobe InDesign & Photoshop"
      summary="Summer internship at Edipresse Media where I spent most of my time helping to design pages for the August 2014 issue of Hong Kong Tatler Weddings magazine"
    >
      <div className="project__block">
        <p>
          I had an amazing art internship in the summer of 2014 at Edipresse
          Media Asia in Hong Kong. One of my main projects was the August 2014
          issue of Hong Kong Tatler Weddings. Under the senior art direction of
          Haymond Yip, I designed layouts, edited and retouched photos,
          communicated with editors and production and worked under strict
          deadlines. I am very proud of my work in this distinguished magazine
          in Hong Kong and Asia.
        </p>
      </div>
    </Project>
  )
}

export default Edipresse
