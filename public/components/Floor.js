import { Entity, Animation } from 'aframe-react';
import React from 'react';

const Floor = ({material}) => {

	return (
		<Entity>
			<Entity geometry="primitive: plane; width: 60; height: 50" 
        material={material}
        position="0 -2 0"
        rotation="-90 0 0">
      </Entity>	
		</Entity>
	)
};

export default Floor;