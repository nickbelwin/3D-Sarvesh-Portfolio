import React, { Suspense, lazy } from 'react';
import Loader from './components/Loader/Loader';
import ShowcaseSection from './sections/ShowcaseSection';
// import Hero from './sections/Hero';
const Hero = lazy(() => import('./sections/Hero'));
const App = () => {
    return (
        <>
        <Suspense fallback={<Loader/>}>
            <Hero/>
            <ShowcaseSection/>
            {/* <Loader/> */}
        </Suspense>
        </>
    );
}

export default App;
