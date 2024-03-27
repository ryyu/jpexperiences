'use client'

import React from 'react'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import MaxWidthWrapper from './MaxWidthWrapper'

import config from "../../next.config.mjs";

const imageSrc = [
    "IMG_1803.JPG",
    "IMG_1808.JPG",
    "IMG_1804.JPG",
    "IMG_1809.JPG"
]

const AboutUs = () => {
    const basePath = config.basePath;
  return (
    <MaxWidthWrapper>
    <div id={'AboutUs'} className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-light text-slate-100 sm:text-6xl'>We&apos;ve done the research for you</h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>With extensive experience trecking across the Japanese countryside, we know what makes for a {' '}
            <span className='text-blue-600'>once in a lifetime</span> {' '}adventure
        </p>
        <Carousel className='py-20 w-full max-w-xs'>
            <CarouselContent>
                <CarouselItem>
                    <div className="p-1 aspect-square">
                        
                            
                            <img 
                                src={`${basePath}/IMG_1803.JPG`}
                                className='rounded-xl'
                                style={{
                                    objectFit: 'cover'
                                    
                                }}
                                alt={'ex'}
                            />
                            
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1 aspect-square">
                        
                            <img 
                                src={`${basePath}/IMG_1808.JPG`}
                                className='rounded-xl'
                                style={{
                                    objectFit: 'cover'
                                    
                                }}
                                alt={'ex'}
                            />
                            
                        
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1 aspect-square">
                        
                            <img 
                                src={`${basePath}/IMG_1804.JPG`}
                                className='rounded-xl'
                                style={{
                                    objectFit: 'cover'
                                    
                                }}
                                alt={'ex'}
                            />
                            
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1 aspect-square">
                        
                            <img 
                                src={`${basePath}/IMG_1809.JPG`}
                                className='roundedxl'
                                style={{
                                    objectFit: 'cover'
                                    
                                }}
                                alt={'ex'}
                            />
                            
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    </div>
    </MaxWidthWrapper>
  )
}

export default AboutUs