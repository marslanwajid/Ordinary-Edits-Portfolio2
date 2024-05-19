import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "carouselw/01w.jpg",
    // thumbnail: "carouselw/01w.jpg",
  },
  {
    original: "carouselw/02w.jpg",
    // thumbnail: "carouselw/02w.jpg",
  },
  {
    original:  "carouselw/03w.jpg",
    // thumbnail: "carouselw/03w.jpg",
  },
  {
    original:  "carouselw/04w.jpg",
    // thumbnail: "carouselw/04w.jpg",
  },
  {
    original:  "carouselw/05w.jpg",
    // thumbnail: "carouselw/05w.jpg",
  },
  {
    original:  "carouselw/06w.jpg",
    // thumbnail: "carouselw/06w.jpg",
  },
  {
    original:  "carouselw/07w.jpg",
    // thumbnail: "carouselw/06w.jpg",
  },
  {
    original:  "carouselw/08w.jpg",
    // thumbnail: "carouselw/06w.jpg",
  },
  {
    original:  "carouselw/09w.jpg",
    // thumbnail: "carouselw/06w.jpg",
  },
  {
    original:  "carouselw/10w.jpg",
    // thumbnail: "carouselw/06w.jpg",
  },
  {
    original:  "carouselw/11w.jpg",
    // thumbnail: "carouselw/06w.jpg",
  },
  {
    original:  "carouselw/12w.jpg",
    // thumbnail: "carouselw/06w.jpg",
  },
  {
    original:  "carouselw/13w.jpg",
    // thumbnail: "carouselw/06w.jpg",
  },
  {
    original:  "carouselw/14w.jpg",
    // thumbnail: "carouselw/06w.jpg",
  },
  {
    original:  "carouselw/15w.jpg",
    // thumbnail: "carouselw/06w.jpg",
  },
  {
    original:  "carouselp/01p.jpg",
    // thumbnail: "carouselp/06p.jpg",
  },
  {
    original:  "carouselp/02p.jpg",
    // thumbnail: "carouselp/06p.jpg",
  },
  {
    original:  "carouselp/03p.jpg",
    // thumbnail: "carouselp/06p.jpg",
  },
  {
    original:  "carouselp/04p.jpg",
    // thumbnail: "carouselp/06p.jpg",
  },
  {
    original:  "carouselp/05p.jpg",
    // thumbnail: "carouselp/06p.jpg",
  },
  {
    original:  "carouselp/06p.jpg",
    // thumbnail: "carouselp/06p.jpg",
  },
  {
    original:  "carouselp/07p.jpg",
    // thumbnail: "carouselp/06p.jpg",
  },
  {
    original:  "carouselpd/01pd.png",
    // thumbnail: "carouselpd/06pd.png",
  },
  {
    original:  "carouselpd/02pd.png",
    // thumbnail: "carouselpd/06pd.png",
  },
  {
    original:  "carouselpd/03pd.png",
    // thumbnail: "carouselpd/06pd.png",
  },
  {
    original:  "carouselpd/04pd.jpg",
    // thumbnail: "carouselpd/06pd.jpg",
  },
  {
    original:  "carouselpd/05pd.png",
    // thumbnail: "carouselpd/06pd.jpg",
  },
  {
    original:  "carouselpd/06pd.jpg",
    // thumbnail: "carouselpd/06pd.jpg",
  },
  {
    original:  "carouselpd/07pd.jpg",
    // thumbnail: "carouselpd/06pd.jpg",
  },
  {
    original:  "carouselpd/08pd.jpg",
    // thumbnail: "carouselpd/06pd.jpg",
  },
  {
    original:  "carouselpd/09pd.png",
    // thumbnail: "carouselpd/06pd.jpg",
  },
  {
    original:  "carouselpd/10pd.jpg",
    // thumbnail: "carouselpd/06pd.jpg",
  },
  {
    original:  "carouselr/01r.jpg",
    // thumbnail: "carouselr/06r.jpg",
  },
  {
    original:  "carouselr/02r.jpg",
    // thumbnail: "carouselr/06r.jpg",
  },
  {
    original:  "carouselr/03r.jpg",
    // thumbnail: "carouselr/06r.jpg",
  },
  {
    original:  "carouselr/04r.jpg",
    // thumbnail: "carouselr/06r.jpg",
  },
  {
    original:  "carouselr/05r.jpg",
    // thumbnail: "carouselr/06r.jpg",
  },
  
];

import React from 'react'

const Imggal = () => {
  return (
    <>
    <ImageGallery autoPlay="true" items={images} />
    </>
  )
}

export default Imggal
