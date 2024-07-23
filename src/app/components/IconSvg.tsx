import React from 'react'
import Image from 'next/image'

interface IconSvgProps {
    id: number;
}

export default function IconSvg({ id }:IconSvgProps) {
  return (
    <Image 
        src={`/images/board-logo-0${id}.svg`}
        alt={`Logo ${id}`}
        width={35}
        height={35}
        className='rounded-full'
    />
  )
}
