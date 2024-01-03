import React from 'react'

const Button = ({text, href, className}) => {
  return (
    <a href={href}>
        <button className={`py-[15px] px-[25px] bg-btnColor text-white text-sm rounded-sm ${className}`}>{text}</button>
    </a>
  )
}

export default Button