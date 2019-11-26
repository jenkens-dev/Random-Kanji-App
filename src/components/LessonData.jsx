import React from 'react';

const LessonData = props => {
   return (
      <div>
         <p>Avaiable Lessons: {props.lessons}</p>
         <p>Avaiable Reviews: {props.reviews}</p>
      </div>
   );
};

export default LessonData;
