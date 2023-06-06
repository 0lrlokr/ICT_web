import React from 'react'
import Sidebar from './Sidebar'

export default function Header() {
  return (
    <div className = "header">


      <Sidebar width = {280}>
      </Sidebar>

         <div className = "country"> <p> 경기도 고양시 덕양구 행신 2동 </p></div>
    </div>
  )
}
