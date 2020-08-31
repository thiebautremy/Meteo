import React from 'react';
import { Image as Picture} from 'semantic-ui-react';
import Clouds from '../../pictures/Clouds.png';
import Rain from '../../pictures/Rain.png';
import Clear from '../../pictures/Clear.png';

import './style.scss';

const Image = ({ weather }) => {
  return (
    <div>
      {weather === 'Clouds' && 
        <Picture src={Clouds} size='small' />
      }
      {weather === 'Rain' && 
        <Picture src={Rain} size='small' />
      }
      {weather === 'Clear' && 
        <Picture src={Clear} size='tiny' />
      }
    </div>
  
  );
}
export default Image;
