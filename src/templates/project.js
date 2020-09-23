import React from "react"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


// import "../styles/project-template.css"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Next from "../components/Next"
import Head from "../components/Head"
import Alert from '../components/Alert'

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      category
      type
      summary {
        summary
      }
      myRole {
        myRole
      }
      toolsUsed {
        toolsUsed
      }
      mainImage {
        file {
          url
        }
      }
      body {
        json
      }
    }
  }
`

const Project = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img style={{ borderRadius: "15px" }} alt={alt} src={url} />
      }
    },
  }

  let randomNum = Math.floor(Math.random() * 3)
  let randomNext = ''

  if (randomNum === 0 && props.data.contentfulProject.title !== 'History Hunt') {
    randomNext = 'historyHunt'
  } else if (randomNum === 1 && props.data.contentfulProject.title !== 'MediaBox') {
    randomNext = 'mediaBox'
  } else if (randomNum === 2 && props.data.contentfulProject.title !== 'Verbadisco') {
    randomNext = 'verbadisco'
  } else {
    randomNext = 'historyHunt'
  }

  return (
    <>
      <Head title={props.data.contentfulProject.title} />
      <Alert />
      <section className="hero is-medium">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <Navbar />
        </div>

        <div className="hero-body">
          <div className="container">
            <img
              style={{ borderRadius: "15px" }}
              src={props.data.contentfulProject.mainImage.file.url}
              alt={props.data.contentfulProject.title}
            />
            <h2 style={{ marginTop: "20px" }}>
              {props.data.contentfulProject.title}
            </h2>
            <h6>
              <b>My Role: </b>
              {props.data.contentfulProject.myRole.myRole}
            </h6>
            <h6>
              <b>Category: </b>
              {props.data.contentfulProject.category}
            </h6>
            <h6>
              <b>Content Type: </b>
              {props.data.contentfulProject.type}
            </h6>
            <h6>
              <b>Tools Used: </b>
              {props.data.contentfulProject.toolsUsed.toolsUsed}
            </h6>
            <h5>
              <b>Summary: </b>
              {props.data.contentfulProject.summary.summary}
            </h5>
          </div>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          {documentToReactComponents(
            props.data.contentfulProject.body.json,
            options
          )}
        </div>
      </section>

      <Next next={randomNext} />

      <Footer />
    </>
  )
}

export default Project
