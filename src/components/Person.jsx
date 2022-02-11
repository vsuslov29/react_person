import React from 'react';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    {name && (
      <h2 className="Person__name">{`My name is ${name}`}</h2>
    )}

    {age && (
      <p className="Person__age">{`I am ${age}`}</p>
    )}

    <p className="Person__partner">
      {isMarried
        ? (
          `My ${sex === 'f' ? 'wife' : 'husband'}&apos;s name is ${partnerName}`
        )
        : 'I am not married'}
    </p>
  </section>
);