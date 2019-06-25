import React from 'react';
import Person from './Person';
import AddNewStudent from './AddNewStudent'
import './Cohort.css';

const Cohort = ({staff, students, addStudent}) => {
  const staffList = staff.map(member => {
    return <Person name={member.name} photo={member.photo} 
              quote={member.quote} superlative={member.superlative}/>
  })
  const studentList = students.map(member => {
    return <Person name={member.name} photo={member.photo} 
              quote={member.quote} superlative={member.superlative}/>
  })
  return (
    <main>
      <h2>Staff</h2>
      <div>
        {staffList}
      </div>
      <h2>Students</h2>
      <div>
        {studentList}
      </div>
      <AddNewStudent addStudent={addStudent}/>>
    </main>
  )
}

export default Cohort;
