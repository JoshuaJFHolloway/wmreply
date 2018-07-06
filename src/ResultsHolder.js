import React from "react";
import Results from './Results'

const ResultsHolder = (props) => {

  const resultsArray = [];
  const search = props.search;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  props.results.forEach((result, i) => {
    resultsArray.push(
      <Results
        key={i}
        firstName= {capitalizeFirstLetter(result.name.first)}
        lastName={capitalizeFirstLetter(result.name.last)}
        image={result.picture.medium}
        email={result.email}
      />
    );
  });

  if (props.search) {
    const names = resultsArray.find(name => (search === name.props.firstName) || (search === name.props.lastName));
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