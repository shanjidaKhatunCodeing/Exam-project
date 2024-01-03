import React from 'react'

const Paragraph = ({className, text}) => {

    let patternt = /#([^#]+)#/g
    let findtext =text.replace(patternt, "<span class='two'>$1</span>");

  return (
    <p className={`font-pop text-base pb-[26px] ${className}`} dangerouslySetInnerHTML={{ __html: findtext }}></p>
  )
}

export default Paragraph