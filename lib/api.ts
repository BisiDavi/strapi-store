export const HOMEPAGE_QUERY = `query Homepage($limit:IntType){
  allProducts(first:$limit) {
    description
    title
    price
    slug
    id
    image {
      url
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
      globalSeo {
        siteName
        titleSuffix
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

export const HOMEPAGE_SEO_QUERY = `{
  site:_site {
    globalSeo {      
      siteName
      titleSuffix  
    }
    favicon {      
      url
    }
  }
}
`;

export const FETCH_ALL_PRODUCT_QUERY = `query FetchAllProduct{
  allProducts {
    description
    title
    price
    slug
    id
    image {
      url
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

export const READY_TO_SHIP_QUERY = `query ReadytoShip($limit:IntType){
  allProducts(first:$limit) {
    description
    title
    price
    slug
    id
    image {
      url
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