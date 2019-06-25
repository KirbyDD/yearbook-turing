import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  console.log(props)
  const staff = props.staff.map(member => {
    return <Person name={member.name} photo={member.photo} 
              quote={member.quote} superlative={member.superlative} key={props.id}/>
  })
  return (
    <main>
      <h1>Hi</h1>
      {staff}
    </main>
  )
}

export default Cohort;
