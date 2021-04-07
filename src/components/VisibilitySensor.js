import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const Visible = ({children}) => {
  
    const [isVisible, setIsVisible] = useState(true);


      return (
        <VisibilitySensor
          onChange={(isVisible) => {
            setIsVisible(!isVisible);
          }}
          partialVisibility={'bottom'}
          offset={{bottom:-200}}
        >
          <div
            style={{
              borderRadius: '10px',
              opacity: isVisible ? 0.05 : 1,
              background : !isVisible? 'rgba(10,10,10,0.4)': '',
              transition: 'opacity 1500ms linear',
              
            }}>
            {children}
           </div>
        </VisibilitySensor>
      );
    }
  
  
  export default Visible;