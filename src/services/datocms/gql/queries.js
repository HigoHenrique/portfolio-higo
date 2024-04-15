export const TECH_QUERY = `query MyQuery {
    allTeches {
      name
      id
      image {
        responsiveImage(imgixParams: {fit: scale, h: "400", w: "400", auto: format}) {
          src
          title
          width
          sizes
          height
          alt
          base64
        }
      }
    }
  }`;

export const PROJECT_QUERY = `query MyQuery {
  allProjects(filter: {active: {eq: "true"}}) {
    id
    title
    linkSite
    repositoryLink
    active
    description
    siteImage {
      responsiveImage(imgixParams: {h: "500", w: "700", fit: scale, auto: enhance}) {
        src
        title
        width
        height
        alt
        base64
        sizes
      }
    }
    stacks {
      id
      name
      image {
        responsiveImage(imgixParams: {auto: format, fit: scale, h: "40", w: "40"}) {
          src
          title
          width
          height
          alt
          base64
          sizes
        }
      }
    }
  }
}
`
export const CARD_PROJECT_QUERY = `query MyQuery {
  allProjects(filter: {active: {eq: "true"}}) {
    id
    active
    linkSite
    siteImage {
      responsiveImage(imgixParams: {h: "300", w: "600", fit: scale, auto: format}) {
        src
        title
        width
        height
        alt
        base64
        sizes
      }
    }
  }
}

`

export const PROJECT_DETAIL_QUERY_ID = (id) => {
  return (`query MyQuery {
    project(filter: {id: {eq: "${id}"}, AND: {active: {eq: "true"}}}) {
      description
      repositoryLink
      linkSite
      title
      stacks {
        name
        image {
          responsiveImage(imgixParams: {h: "500", w: "500", fit: scale, auto: enhance}) {
            src
            title
            srcSet
            base64
            height
            width
            alt
          }
        }
      }
    }
  }`)
}