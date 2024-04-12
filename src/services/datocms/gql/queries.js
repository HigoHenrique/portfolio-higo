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
      responsiveImage(imgixParams: {h: "100", w: "100", fit: scale, auto: format}) {
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