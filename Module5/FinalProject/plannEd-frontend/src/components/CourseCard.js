import React, { Component } from 'react';

class CourseCard extends Component {

  handleHideStudentCourseDetails = () => {
    this.props.onHideStudentCourseDetails();
  };

  handleShowStudentCourseDetails = () => {
    this.props.onShowStudentCourseDetails(this.props.course.studentCourseId);
  };

//INCLUDE COURSE COMPONENT CARDS IF SELECTED
  // 
  // handleSelectStudentCourse = () => {
  //   this.props.onSelectStudentCourse(this.props.course.studentCourseId);
  // };
  //
  // handleDeselectStudentCourse = () => {
  //   this.props.onDeselectStudentCourse();
  // };

  render() {
    const course = this.props.course;
    const selectedStudentCourse = this.props.selectedStudentCourse;

    return(
      <div className="course-card-wrapper">
        <h1>{course.subject} {course.catalogNbr}: {course.title}</h1>
        <p>{course.facilityDescr}</p>
        <p>{course.timeStart} - {course.timeEnd} ({course.pattern})</p>
        {selectedStudentCourse.showDetails === course.studentCourseId
          ?
            <div>
              <button onClick={this.handleHideStudentCourseDetails}>Hide Details</button>
              <p>{course.description}</p>
            </div>
          :
            <button onClick={this.handleShowStudentCourseDetails}>Show Details</button>
        }
      </div>
    );
  };
};

export default CourseCard;

//add course-level to-do items?
