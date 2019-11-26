import React from 'react';

const KanjiData = props => {
   return (
      <div>
         <p>Character: {props.character}</p>
         <p>Meaning: {props.meaning}</p>
         <p>Kunyomi Reading: {props.kunyomi}</p>
         <p>Onyomi Reading: {props.onyomi}</p>
      </div>
   );
};

export default KanjiData;
