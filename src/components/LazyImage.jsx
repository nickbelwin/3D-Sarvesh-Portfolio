import { useState, useEffect } from "react";

const LazyImage = ({ src, alt, style, className }) => {
  const [loadedSrc, setLoadedSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoadedSrc(src);
  }, [src]);

  return (
    <img
      src={loadedSrc || "images/placeholder_img.png"} 
      className={className}
      alt={alt}
      style={{...style}}
    />
  );
};

export default LazyImage;