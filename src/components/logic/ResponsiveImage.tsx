import { useState, useEffect } from 'react';
// import Spline from '@splinetool/react-spline';
// import { LaptopModelo, TelefonoModelo } from '../../utils/magicVariables';

export default function ResponsiveImage() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
      {width < 760 ? (
        // <Spline scene={LaptopModelo} />
        <img src='/phoneResponsiveDiferente.webp' title='No cargo telefono' className='aspect-1/1 object-cover size-56'/>
      ) : (
        // <Spline scene={TelefonoModelo} />
        <img src='/laptopResponsive.webp' title='No cargo Computador' className='aspect-1/1 object-cover size-56'/>
      )}
    </div>
  );
};