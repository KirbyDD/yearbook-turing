import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <article>
      <img src={props.photo} alt="Staff member"/>
      <h3>{props.name}</h3>
      <p>{props.quote}</p>
      <p>{props.superlative}</p>
    </article>
  )
}

export default Person;
