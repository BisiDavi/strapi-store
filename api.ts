export const HOMEPAGE_QUERY = `query Homepage($limit:IntType){
    allProducts(first:$limit) {
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

export const PRODUCTPAGE_QUERY = `query Productpage($slug: String) {
    allProducts(filter: {slug: {eq: $slug}}) {
      description
      title
      price
      slug
      id
      image {
        responsiveImage {
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
