export const HOMEPAGE_QUERY = `query Homepage($limit:IntType){
  allProducts(first:$limit) {
    description
    title
    price
    slug
    id
    image {
      responsiveImage(imgixParams: {h: "400", w:"400",  fit: max,}) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
          bgColor
      }
    }
  }
}`;

export const PRODUCTPAGE_QUERY = `query Productpage($slug: String) {
    allProducts(filter: {slug: {eq: $slug}}) {
      description
      title
      price
      slug
      id
      image {
        responsiveImage(imgixParams: {h: 400}) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
          bgColor
        }
      }
    }
  }`;

export const SEO_QUERY = `
  {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
  
  product {
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
  } 
}`;


export const SLIDER_BANNER = `query GetSliderBanner {
  allSliders {
    sliderBanner {
      url
    }
  }
}
`