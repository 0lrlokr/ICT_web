import React, { useEffect, useRef, useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef();

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(width);
      setOpen(false);
    }
  };

  const handleClose = async e => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideChildren)) {
      await setX(width);
      await setOpen(false);
    }

  }

  useEffect(() => {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  })





  return (
    <div className="sidebar-container" >
      <div ref={side} className='sidebar' style={{ width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)` }}>
        <button onClick={() => toggleMenu()}
          className='side-btn'>
          {isOpen ?
            <span>X</span> :
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbXhQDr%2FbtsglzfjSJz%2F9NmjPLDtPkFGTGqq5Tfhk1%2Fimg.png" className='open-btn' />

          }
        </button>
        <div className="side-contents">
          <div>
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbJmhox%2Fbtsh2GXAjqp%2FN8xYF8ikwkIhog7d7IP3n1%2Fimg.png"
              style={{
                width: '250px',
                marginTop: '100px'
              }}></img>
          </div>



        </div>
      </div>
    </div>

  )
}

export default Sidebar;
