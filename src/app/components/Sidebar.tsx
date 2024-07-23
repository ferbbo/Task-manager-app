'use client'

import React, { useState } from 'react'
import cn from 'classnames'
import IconSvg from './IconSvg'

export default function Sidebar() {
  const [ mode, setMode ] = useState('dark')
  const [ collapse, setCollapse ] = useState(false)

  const handleClick = (evt) => {
    evt.preventDefault()
    setMode(mode === 'light'? 'dark' : 'light')
  }
  const HandleClose = (evt) => {
    evt.preventDefault()
    setCollapse(!collapse)
  }
  return (
    <aside className={cn('flex  flex-col max-w-[350px] pt-5 pb-3 px-3 overflow-hidden transition-all',
      [collapse ? 'w-[73px]' :  'w-[350px]'  ])}
      aria-label="Sidebar Navigation">
      <button 
        className={cn('bg-gray w-10 h-12 flex items-center ms-1 justify-center rounded-full transition-colors hover:bg-gray-dark'
      )} onClick={HandleClose}
        aria-expanded={!collapse}
        aria-label={collapse ? 'Expand Sidebar' : 'Collapse Sidebar'}>
        { collapse ? (
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
          <path d="M5 7h14M5 12h8M5 17h14" stroke="#FEF7EE" stroke-width="2" stroke-linecap="round"/>
        </svg>
       
        ):(
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6L18 18" stroke="#FEF7EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ) }
      </button>
      <div className={cn('h-full mt-9 flex flex-col gap-2')}>
        <ul className='p-0 gap-2 list-none'>
          { [1,2,3].map(el => (
          <li className={
            cn('flex items-center gap-2 font-medium text-white-dark border-black border-2  hover:border-blue', 
            [collapse ? 'rounded-[50%] h-[47] w-[47] p-1' : 'rounded-3xl h-12  p-2 px-1'])
          }>
          <IconSvg id={el} />
           <span className={ cn('text-nowrap overflow-hidden text-ellipsis',
            { 'hidden': collapse }) }>
              Frontend Board
          </span>
          </li>
          )) }
        </ul>
        <button className={cn('rounded-3xl flex items-center overflow-hidden gap-2 text-lg font-medium text-white-dark border-black border hover:border-blue-light',
          [ collapse ? 'rounded-[50%] h-[40] w-[40] p-1 justify-center ' : 'p-2' ]
        )}>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18Z" fill="#FEF7EE"/>
          </svg>
          <span className={ cn('text-nowrap overflow-hidden text-ellipsis',
             { 'hidden': collapse }) }> 
            Add  new board
          </span>
        </button>
      </div>
      <div className={cn('relative  flex justify-center gap-3 overflow-hidden', 
        [ collapse ? 'w-10 h-[46px]' :  'bg-gray rounded-xl p-1' ]
      )}>
        <button 
          className={cn(
            'flex gap-2 items-center justify-center text-white-dark font-medium rounded-xl border-0',
            [ collapse && ( mode === 'dark' ? 'translate-x-0' : 'translate-x-10') ],
            [ !collapse && (mode === 'dark' ? 'bg-black': 'bg-gray') ],
            [ collapse ? 'absolute rounded-[50%] w-[40] h-[40] p-1 transition-transform bg-black': 'p-3 w-6/12' ]
          )}
          onClick={handleClick}
          aria-label="Switch to dark mode">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 4c.292 0 .438 0 .578.042.614.184.9.89.586 1.449-.072.128-.29.339-.726.76C13.935 7.704 13 9.743 13 12s.935 4.296 2.439 5.751c.436.422.654.633.726.761.314.558.028 1.264-.586 1.448-.14.042-.286.042-.578.042v0C10.582 20 7 16.418 7 12S10.582 4 15 4v0z" fill="#FEF7EE"/>
          </svg>
          <span className={cn({ 'hidden': collapse }) }>
            Dark
          </span>
        </button>
        <button className={cn('flex gap-2 items-center justify-center text-white-dark font-medium rounded-xl border-0',
          [ collapse && ( mode === 'light' ? 'translate-x-0' : '-translate-x-10') ],
          [ !collapse &&( mode === 'light' ? 'bg-black ': 'bg-gray ') ],
          [ collapse ? 'absolute rounded-[50%] w-[40] h-[40] p-1 transition-transform bg-black': 'p-3 w-6/12']
          )}
          onClick={handleClick}
          aria-label="Switch to light mode">
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <circle cx="12" cy="12" r="4" fill="#FEF7EE"/>
          <path d="M12 5V3M12 21V19M16.95 7.05l1.414-1.414M5.636 18.364l1.414-1.414M19 12h2M3 12h2M16.95 16.95l1.414 1.414M5.636 5.636l1.414 1.414" stroke="#FEF7EE" stroke-width="2" stroke-linecap="round"/>
        </svg>
          <span className={ cn({ 'hidden': collapse }) }
          >
            Light
          </span>
          
        </button>
      </div>
    </aside>
  )
}
