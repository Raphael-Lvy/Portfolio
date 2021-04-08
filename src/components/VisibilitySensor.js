import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const Visible = ({children, bottomOffset, delay, selector}) => {
  
    const [isVisible, setIsVisible] = useState(true);


      return (
        <VisibilitySensor
          onChange={(isVisible) => {
            setIsVisible(isVisible);
            console.log('ok')
          }}
          partialVisibility={'bottom'}
          offset={{bottom:-bottomOffset}}
        >
          <div
            style={{
              borderRadius: '10px',
              opacity: isVisible ? 1 : 0.01,
              transform: isVisible? 'translate(0,0)' : 'translate(0,200px)',
              scrollCheck:true,
              scrollThrottle:1,
              scrollDelay: 250,
              transition: ` ${delay}ms linear`,
              
            }}
            className={selector} 
            >
            {children}
           </div>
        </VisibilitySensor>
      );
    }
  
  
  export default Visible;