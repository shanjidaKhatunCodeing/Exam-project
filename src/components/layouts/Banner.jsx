import React, { useRef } from 'react'
import Container from '../../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'
import Flex from '../Flex'
import Icon from '../icons/icon'
import Option from '../Option'
import Icon2 from '../icons/Icon2'
import { IoIosArrowDown } from "react-icons/io";

const Banner = () => {

    let dropRef = useRef(null)
    let dropRef2 = useRef(null)
    let dropRef3 = useRef(null)

    let handleBtn = ()=>{

    if(dropRef.current.style.display =="block"){
      dropRef.current.style.display ="none"
    }

    else{
      dropRef.current.style.display="block"
    }
    }
    let handleBtn2 = ()=>{

    if(dropRef2.current.style.display =="block"){
      dropRef2.current.style.display ="none"
    }

    else{
      dropRef2.current.style.display="block"
    }
    }
    let handleBtn3 = ()=>{

    if(dropRef3.current.style.display =="block"){
      dropRef3.current.style.display ="none"
    }

    else{
      dropRef3.current.style.display="block"
    }
    }
  return (

    <>
    <section className='pt-[200px] pb-[50px] bg-bannerBg relative'>
        <Container>
            <Flex className=''>
                <Icon/>
                <Paragraph text='Real Estate Agency'/>
            </Flex>
                <Heading text='Find Your #Dream#' as="h2"/>
                <Heading text='House By Us' as="h2"/>
                <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipisicing'/>
                <Button className='mb-[200px]' text='View Properties'/>
        </Container>

        <div id='Choose' className='mb-[50px]'>
        <Container>
        <div className='py-[40px] bg-white rounded-sm absolute bottom-[-30px] w-[90%]'>
            <Flex className='gap-x-10 items-center'>
                <div className='w-[20%] relative'>
                     <div className='border-2 border-black text-center items-center'>
                        <button onClick={handleBtn}>
                            <Flex className='justify-center items-center'>
                                <Paragraph className='pt-[20px]' text='Choose Area'/>
                                <IoIosArrowDown className='items-center'/>
                            </Flex>
                        </button>
                     </div>
                       
                    <div className='w-full hidden absolute bottom-[-160px] left-[50px]' ref={dropRef}>
                        <Paragraph text='Bogura'/>
                        <Paragraph text='Bogura'/>
                        <Paragraph text='Bogura'/>
                        </div>
                </div>
        
                <div className='w-[20%] relative'>
                     <div className='border-2 border-black text-center items-center'>
                        <button onClick={handleBtn2}>
                            <Flex className='justify-center items-center'>
                                <Paragraph className='pt-[20px]' text='Choose Area'/>
                                <IoIosArrowDown className='items-center'/>
                            </Flex>
                        </button> 
                     </div>
                       
                    <div className='w-full hidden absolute bottom-[-160px] left-[0px]' ref={dropRef2}>
                        <Paragraph text='Bogura'/>
                        <Paragraph text='Bogura'/>                        <Paragraph text='Bogura'/>
                        </div>
                </div>
        
                <div className='w-[20%] relative'>
                     <div className='border-2 border-black text-center items-center'>
                        <button onClick={handleBtn3}>
                            <Flex className='justify-center items-center'>
                                <Paragraph className='pt-[20px]' text='Choose Area'/>
                                <IoIosArrowDown className='items-center'/>
                            </Flex>
                        </button>
                        
                     </div>
                       
                    <div className='w-full hidden absolute bottom-[-160px] left-[50px]' ref={dropRef3}>
                        <Paragraph text='Bogura'/>
                        <Paragraph text='Bogura'/>
                        <Paragraph text='Bogura'/>
                      </div>
                </div>
        
                <div className='w-[10%]'>
                    <Icon2/>
                </div>
                
                sn<div className='w-[30%]'>
                    <Button text='FIND NOW'/>
                </div>
            </Flex>
        </div>
        </Container>
        </div>
    </section>

    

   </> 
  )
}

export default Banner