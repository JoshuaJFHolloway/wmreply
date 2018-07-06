import React from "react";
import Results from './Results'

const ResultsHolder = (props) => {

  const resultsArray = [];

  props.results.forEach((result, i) => {
    resultsArray.push(
      <Results
        key={i}
        firstName= {result.name.first}
        lastName={result.name.last}
        image={result.picture.medium}
        email={result.email}
      />
    );
  });

  if (props.search) {
    const names = resultsArray.find(name => (props.search === name.props.firstName) || (props.search === name.props.lastName));
    resultsArray.length = 0;
    resultsArray.push(names);
  }

  return (
    <div>
      {resultsArray}
    </div>
  )
};

export default ResultsHolder;