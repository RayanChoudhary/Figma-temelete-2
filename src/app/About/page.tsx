import Moreinfo_1 from '@/app/Components/Moreinfo_1/Moreinfo_1'
import PageHeaders from '@/app/Components/Pageheader/Pageheader'
import React from 'react'
import Moreinfo_2 from '../Components/Moreinfo_2/Moreinfo_2'
import Features from '../Components/Features/Features'
import EmailSignUp from '../Components/Emailsignup/Emailsignup'


const About = () => {
  return (
    <div>
      
      <PageHeaders/>
      <Moreinfo_1/>
      <Moreinfo_2/>
      <Features/>
      <EmailSignUp/>
    </div>
  )
}

export default About
