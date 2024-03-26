
import { useContext, useEffect, useState } from 'react';
import './Header.css';
import '../../contexts/StyleProvider'



function header ({ title }) {
    return (
        <div className="Title">
          <h1 style={style.greenColor}>{ title }</h1>
        </div>
      )
}

export default header;