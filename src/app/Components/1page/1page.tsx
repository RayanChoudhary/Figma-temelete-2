import React from 'react'
import Image from 'next/image'

const firstpage = () => {
  return (
    <div>
        <div>

            <Image
            
            src="firstpic.jpeg"
            width={720}
            height={352}
            alt='1'
            >

            </Image>
        </div>
        <div>
            <div>Homeware that puts quality and style at the heart of its brand</div>
            <div>With our new collection, view over 400 bespoke pieces
            from homeware through to furniture today</div>
        </div>
    </div>
  )
}

export default firstpage
