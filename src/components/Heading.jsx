import React from 'react'

const Heading = (props) => {

    let patternt = /#([^#]+)#/g
    let findtext = props.text.replace(patternt, "<span class='one'>$1</span>");

  return (
    <props.as className={`font-pop text-[60px] font-bold ${props.className}`} dangerouslySetInnerHTML={{ __html: findtext }}></props.as>
  )
}

export default Heading