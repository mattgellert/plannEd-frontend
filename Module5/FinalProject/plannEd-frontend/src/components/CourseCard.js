import React, { Component } from 'react';

class CourseCard extends Component {
  render() {
    const course = this.props.course;
    const selectedStudentCourse = this.props.selectedStudentCourse;
    
    return(
      <div className="course-card-wrapper">
        <h1>{course.subject} {course.catalogNbr}: {course.titleLong}</h1>
        <p>{}</p>
        <p>{}</p>
        <p>{}</p>
        <p>{}</p>
        {selectedStudentCourse.showDetails === course.studentCourseId
          ?
            <div>
              <button onClick={this.handleHideCourseDetails}>Hide Details</button>
              <p>{course.description}</p>
            </div>
          :
            <button onClick={this.handleShowCourseDetails}>Show Details</button>
        }
      </div>
    );
  };
};

export default CourseCard;

//add course-level to-do items?
