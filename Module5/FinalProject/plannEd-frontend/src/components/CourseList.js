import React, { Component } from 'react';
import CourseCard from './CourseCard';

class CourseList extends Component {
  render() {
    const selectedStudentCourse = this.props.selectedStudentCourse;
    const courses = this.props.courses.map(course => {
      <CourseCard course={course} selectedStudentCourse={selectedStudentCourse}/>
    });

    return(
      <div className="course-list-wrapper">
        {courses}
      </div>
    );
  };
};

export default CourseList;
