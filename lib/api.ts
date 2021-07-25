export const HOMEPAGE_QUERY = `query Homepage($limit:IntType){
  allProducts(first:$limit) {
    title
    price
		formerPrice
    slug
    id
		productQuantity
		wigStatus
    image {
      url
      responsiveImage(imgixParams: {auto:format,q:60, h: 700, w:700, fit:crop}) {
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
    id
    description
    title
    price
    slug
		productQuantity
    formerPrice
		wigStatus
    image {
      responsiveImage(imgixParams: {auto: format, q: 60, h: 800, w: 800, fit: crop}) {
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
    wigImages {
      responsiveImage(imgixParams: {auto: format, q: 60, h: 300, w: 300, fit: crop}) {
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
    _seoMetaTags {
      attributes
      content
      tag
    }
    productMetaTag {
      description
      twitterCard
      title
      image {
        responsiveImage {
          bgColor
          base64
          aspectRatio
          alt
          height
          sizes
          src
          srcSet
          title
          width
          webpSrcSet
        }
      }
    }
    productQuantity
  }
}
`;

export const SITE_SEO_QUERY = `
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

export const HOMEPAGE_SEO_QUERY = `{
  site:_site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    seo:globalSeo {
      facebookPageUrl
      siteName
      titleSuffix
      twitterAccount
      fallbackSeo {
        description
        title
        image {
         url
        }
      }
    }
  }
}
`;

export const FETCH_ALL_PRODUCT_QUERY = `query FetchAllProduct{
  allProducts {
    description
    title
    price
		formerPrice
    id
		wigStatus
		productQuantity
    slug
    image {
      url
      responsiveImage(imgixParams: {auto:format, q:60, h:400, w:400,  fit: crop,}) {
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

export const READY_TO_SHIP_QUERY = `query ReadytoShip{
  allProducts (filter: {readyToShip: {eq: "true"}}) {
    description
    title
    price
    slug
    id
		wigStatus
		productQuantity
    image {
      url
      responsiveImage(imgixParams: {auto:format,q:60, h: 500, w:500, fit:crop}) {
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

export const SIGNATURE_WIGS = `query SignatureWigs {
  allProducts(filter: {signatureWigs: {eq: "true"}}) {
    description
    title
    id
		productQuantity
		wigStatus
    price
    slug
    image {
      url
      responsiveImage(imgixParams: {auto: format, q: 60, h: 500, w: 500, fit: crop}) {
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
}
`;

export const PRODUCT_SEO_QUERY = `query productSeo($slug:String!) {
  site: _site {
		favicon: faviconMetaTags {
			attributes
			content
			tag
		}
	}
	product(filter: {title: {matches: {pattern: $slug}}}) {
    seo:_seoMetaTags(locale: en) {
      content
      attributes
      tag
    }
  }
}
`;

export const DOLLAR_TO_NAIRA_RATE_QUERY = `query DOLLAR_TO_NAIRA_RATE_QUERY {
  dollarToNairaRate{
    rate
  }
}`;
