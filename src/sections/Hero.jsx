import React, { Suspense } from 'react';
import { words } from '../constants/constants';
import Button from '../components/Button';
import HeroExperience from '../components/HeroModels/HeroExperience';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LazyImage from '../components/LazyImage';


const Hero = () => {
    useGSAP(() => {
    gsap.fromTo(['.hero-line-1', '.hero-line-2', '.hero-line-3'],
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.inOut'
        }
    );
});

    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src="/images/bg.png" alt="backgroung" />
            </div>
            <div className='hero-layout'>
                {/* Left: hero content */}
                <header className=' flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        {/* <Suspense fallback={<div>Loading Room...</div>}> */}
                            <div className='hero-text'>
                                <h1 className='hero-line-1'>Shaping
                                    <span className='slide'>
                                    <span className='wrapper'>
                                        {words?.map((word, idx) => (
                                        <span key={`${word?.text}-${idx}`} className='flex items-center md:gap-3 gap-1 pb-2'>
                                            <LazyImage src={word?.imgPath} alt={word?.text}
                                            className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                                            <span>{word?.text}</span>
                                        </span>
                                        ))}
                                    </span>
                                    </span>
                                </h1>
                                <h1 className='hero-line-2'>into Real Projects</h1>
                                <h1 className='hero-line-3'>that Deliver Results.</h1>
                            </div>
                        {/* </Suspense> */}
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                            Hi, I'm Sarvesh, a Software Developer based in Mumbai with passion for code.
                        </p>
                        <Button 
                            className='md:w-80 md:h-16 h-12'
                            id='button'
                            text='See my work' 
                        />
                    </div>
                </header>
                {/* Right: hero content */}
                <figure>
                    <div className='hero-3d-layout'>
                        <HeroExperience/>
                    </div>
                </figure>
            </div>
        </section>
    );
}

export default Hero;

{/* <div className='hero-text'>
    <h1>Hey, I'm Savesh 👨‍💻</h1>
    <h1>a Software Developer</h1>
    <h1>shaping
        <span className='slide'>
            <span className='wrapper'>
                {words?.map((word) => (
                <span key={word?.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                    <img
                    src={word?.imgPath}
                    alt={word?.text}
                    className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                    />
                    <span>{word?.text}</span>
                </span>
                ))}
            </span>
        </span>
    </h1>
    <h1>into Real Projects.</h1>
</div> */}
