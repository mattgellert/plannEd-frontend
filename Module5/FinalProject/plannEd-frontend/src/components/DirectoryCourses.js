import React, { Component } from 'react';
import CourseCard from './CourseCard';

export default class DirectoryCourses extends Component {

  render() {
    console.log("courselist props", this.props)
    const courses = this.props.courses.map((course, idx) => (
      <CourseCard key={idx} course={course} history={this.props.history}/>
    ))

    return (
      <div>
        {courses}
      </div>
    );
  };
};
