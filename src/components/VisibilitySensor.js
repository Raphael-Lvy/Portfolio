import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const Visible = ({children}) => {
  
    const [isVisible, setIsVisible] = useState(true);


      return (
        <VisibilitySensor
          onChange={(isVisible) => {
            setIsVisible(isVisible);
          }}
          partialVisibility={'bottom'}
          offset={{bottom:-450}}
        >
          <div
            style={{
              borderRadius: '10px',
              opacity: isVisible ? 1 : 0.01,
              transform: isVisible? 'translate(0,0)' : 'translate(0,200px)',
              scrollCheck:true,
              scrollThrottle:1,
              scrollDelay:1500,
              transition: ' 750ms linear',
              
            }}>
            {children}
           </div>
        </VisibilitySensor>
      );
    }
  
  
  export default Visible;