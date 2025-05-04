import React from 'react';
import LazyImage from '../components/LazyImage';

const ShowcaseSection = () => {
    return (
        <div id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* Left side */}
                    <div className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <LazyImage src="/images/projects/beyoung-store.png" alt="beyoung-img" />
                        </div>
                        <div className='text-content'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseSection;
