import React from 'react';

const UserData = props => {
   return (
      <div>
         <p>Username: {props.username}</p>
         <p>Level: {props.level}</p>
      </div>
   );
};

export default UserData;
