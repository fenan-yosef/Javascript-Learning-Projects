/* eslint-disable no-unused-vars */
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] 
    rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly
    items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        My name is Fenan Yosef, a Flutter mobile app developer and fullstack web developer.
        I specialize in building fast, scalable, and user-friendly applications using modern
        tools like Flutter, Firebase, Next.js, Node.js, Firebase and PostgreSQL.
        I've delivered tech solutions for businesses and private clients,
        ranging from custom apps to complete web platforms. I’m passionate about
        helping businesses grow through clean code, intuitive user interfaces, and
        effective digital strategies. Whether it's launching an MVP or optimizing
        an existing product, I bring practical experience and a problem-solving
        mindset to every project.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
