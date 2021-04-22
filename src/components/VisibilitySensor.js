import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const Visible = ({children, bottomOffset, delay}) => {
  
    const [isVisible, setIsVisible] = useState(true);


      return (
        <VisibilitySensor
          onChange={(isVisible) => {
            setIsVisible(isVisible);
            
          }}
          partialVisibility={'bottom'}
          offset={{bottom:-bottomOffset}}
        >
          <div
            style={{
              borderRadius: '10px',
              opacity: isVisible ? 1 : 0.01,
              transform: isVisible? 'translate(0,0)' : 'translate(0,150px)',
              scrollCheck:true,
              scrollThrottle:1,
              scrollDelay: 250,
              transition: `${delay}ms linear`,
              
              
            }}
            
            >
            {children}
           </div>
        </VisibilitySensor>
      );
    }
  
  
  export default Visible;