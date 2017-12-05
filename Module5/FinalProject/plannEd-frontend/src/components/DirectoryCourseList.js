import React, { Component } from 'react';
import DirectoryCourseCard from './DirectoryCourseCard';

export default class DirectoryCourseList extends Component {

  render() {
    console.log("courselist props", this.props)
    const courses = this.props.courses.map((course, idx) => (
      <DirectoryCourseCard key={idx} course={course} history={this.props.history}/>
    ))

    return (
      <div>
        {courses}
      </div>
    );
  };
};
