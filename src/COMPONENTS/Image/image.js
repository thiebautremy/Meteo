import React from 'react';
import { Image as Picture} from 'semantic-ui-react';
import Clouds from '../../pictures/Clouds.png';
import Rain from '../../pictures/Rain.png';
import Clear from '../../pictures/Clear.png';
import { handleSrcImage } from '../../selectors/selectors';
import './style.scss';

const Image = ({ weather }) => (
 
  <Picture src={Rain} size='small' />
);




export default Image;
