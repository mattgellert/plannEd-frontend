import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import DirectorySearchForm from '../components/DirectorySearchForm';
import DirectoryCourses from '../components/DirectoryCourses';
import { removeAddConflict } from '../actions/students';

class DirectoryContainer extends Component {

  render() {
    if (this.props.addConflict) {
      alert(this.props.addConflict)
      this.props.onRemoveAddConflict()
    };
    
    if (this.props.student.id) {
      return (
        <div className="course-container-wrapper">
          <DirectorySearchForm />
          {this.props.addConflict}
          <DirectoryCourses history={this.props.history} courses={this.props.directoryCourses} studentCourses={this.props.studentCourses} student={this.props.student}/>
        </div>
      )
    } else {
      return (
        <Redirect to="/home"/>
      )
    }
  };
};


function mapStateToProps(state) {
  return {
    student: state.student,
    studentCourses: state.studentCourses,
    directoryCourses: state.directory.courses,
    addConflict: state.directory.addConflict
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onRemoveAddConflict: () => {
      dispatch(removeAddConflict());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectoryContainer);
