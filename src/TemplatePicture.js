import React from 'react';
import template from './figma_template.png'; // Tell webpack this JS file uses this image

function TemplatePicture() {
    return (
        <div style={{ backgroundImage: "url(" + template + ")"}}>
        </div>
      );
}

export default TemplatePicture;