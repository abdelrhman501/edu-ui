import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import CourseCard from '../components/CourseCard'
import { getYoutubeThumbnail } from '../common/util'

const CoursesPage = ({ data }) => {
  const {
    allStrapiCourse: { edges: courses },
  } = data

  return (
    <Layout>
      <Seo title="Courses" />
      <div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
          {courses.map(({ node: course }) => {
            const {
              lectures: [firstLecture],
            } = course
            const { url: imageUrl } = firstLecture
            return (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                image={getYoutubeThumbnail(imageUrl)}
                slug={course.slug}
                tags={course.tags}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

CoursesPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default CoursesPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiCourse(sort: { fields: created_at, order: DESC }) {
      edges {
        node {
          id
          title
          description
          slug
          tags {
            tagName
          }
          lectures {
            url
          }
        }
      }
    }
  }
`
