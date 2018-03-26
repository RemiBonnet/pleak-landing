const url = process.env.PUBLIC_URL + '/fonts/'

const fonts = `
  @font-face {
    font-family: 'inter-regular';
    src: url('${url}Inter-UI-Regular.woff2') format('woff2'),
        url('${url}Inter-UI-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'inter-medium';
    src: url('${url}Inter-UI-Medium.woff2') format('woff2'),
        url('${url}Inter-UI-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`

export default fonts


