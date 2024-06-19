"use client"

import { Button } from '@/components/ui/button'
import { Sheet,SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger, } from '@/components/ui/sheet'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <></>
  )
}
function Header() {

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    // <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
    //     {/* <Image src={'/logo.svg'} width={160} height={100} alt='logo' /> */}
    //     <div className='text-2xl text-black font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>AceMock AI 🤖</div>
    //     <ul className='hidden md:flex gap-6'>
    //       <Link href={"/dashboard"}>
    //         <li className={`hover:text-primary hover:font-bold transition-all
    //         cursor-pointer
    //         ${path=='/dashboard'&&'text-primary font-bold'}
    //         `}
            
    //         >Dashboard</li>
    //         </Link>
            
    //         <li className={`hover:text-primary hover:font-bold transition-all
    //         cursor-pointer
    //         ${path=='/dashboard/questions'&&'text-primary font-bold'}
    //         `}>Questions</li>
    //           <Link href={"/dashboard/upgrade"}>
    //         <li className={`hover:text-primary hover:font-bold transition-all
    //         cursor-pointer
    //         ${path=='/dashboard/upgrade'&&'text-primary font-bold'}
    //         `}>Upgrade</li>
    //         </Link>
    //         <li className={`hover:text-primary hover:font-bold transition-all
    //         cursor-pointer
    //         ${path=='/dashboard/how'&&'text-primary font-bold'}
    //         `}>How it Works?</li>
    //     </ul>
    //     <UserButton/>
    // </div>
    <>
    {/* <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        
        <span className='text-2xl text-black font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>AceMock AI 🤖</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link href={"/"} className="font-bold hover:underline" prefetch={false}>
          Home
        </Link>
        <Link href={"/dashboard"} className="font-bold hover:underline" prefetch={false}>
          Dashboard
        </Link>
        <Link href={"/dashboard/upgrade"} className="font-bold hover:underline" prefetch={false}>
        Upgrade
        </Link>
        <Link href="#" className="font-bold hover:underline" prefetch={false}>
          Contact
        </Link>
        <UserButton/>
        
      </nav>
      
    </header> */}
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className='text-2xl text-black font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>AceMock AI 🤖</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
      <Link href={"/"} className="font-bold hover:underline" prefetch={false}>
          Home
        </Link>
        <Link href={"/dashboard"} className="font-bold hover:underline" prefetch={false}>
          Dashboard
        </Link>
        <Link href={"/dashboard/upgrade"} className="font-bold hover:underline" prefetch={false}>
        Upgrade
        </Link>
        <Link href="#" className="font-bold hover:underline" prefetch={false}>
          Contact
        </Link>
        <UserButton/>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            <Link href={"/"} className="font-medium hover:underline hover:underline-offset-4" prefetch={false}>
              Home
            </Link>
            <Link href={"/dashboard"} className="font-medium hover:underline hover:underline-offset-4" prefetch={false}>
              Dashboard
            </Link>
            <Link href={"/dashboard/upgrade"} className="font-medium hover:underline hover:underline-offset-4" prefetch={false}>
            Upgrade
            </Link>
            <Link href="#" className="font-medium hover:underline hover:underline-offset-4" prefetch={false}>
              Contact
            </Link>
            <UserButton/>
          </div>
        </SheetContent>
      </Sheet>
    </header>
    </>
  )
}

export default Header





