import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectStudentCourse, deselectStudentCourse } from '../actions/students';

class CourseContainer extends Component {

  render() {
    return(
      <div className="course-container-wrapper">
        {this.props.student.id
          ?
            <div className="course-container">
              <CourseList courses={this.props.studentCourses}/>
            </div>
          :
          <Redirect to="/"/>
        }
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    studentCourses: state.studentCourses,
    selectedStudentCourse: state.selectedStudentCourse
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onSelectStudentCourse: (studentCourseId) => {
      dispatch(selectStudentCourse(studentCourseId));
    },
    onDeselectStudentCourse: () => [
      dispatch(deselectStudentCourse());
    ]
  }
}

export default connect(mapStateToProps)(CourseContainer)
