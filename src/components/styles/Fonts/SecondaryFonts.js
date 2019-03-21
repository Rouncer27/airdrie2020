import * as pm from "../../../fonts/permanentMarker"

const SecondaryFonts = `
@font-face {
  font-family: 'Permanent Marker';
  font-style: normal;
  font-weight: 400;
  src: local('Permanent Marker Regular'), local('PermanentMarker-Regular'),
  url("${pm.PERMANENTMARKER300WOFF2}") format("woff2"),
  url("${pm.PERMANENTMARKER300WOFF}")  format("woff");
}
`

export default SecondaryFonts
