import React from 'react'
import { pathJoin, makePathAbsolute } from '../../utils/shared'

const REGEX_FOR_SCRIPT = /<(\/)?(script)/gi

const generateRouteInformation = embeddedRouteInfo => ({
  __html: `
    window.__routeInfo = ${JSON.stringify(embeddedRouteInfo).replace(
      REGEX_FOR_SCRIPT,
      '<"+"$1$2'
    )};`,
})

// Not only do we pass react-helmet attributes and the app.js here, but
// we also need to  hard code site props and route props into the page to
// prevent flashing when react mounts onto the HTML.
export const makeBodyWithMeta = ({
  head,
  route,
  // This embeddedRouteInfo will be inlined into the HTML for this route.
  // It should only include the full props, not the partials.
  embeddedRouteInfo,
  clientScripts = [],
}) => ({ children, ...rest }) => (
  <body {...head.bodyProps} {...rest}>
    {children}
    {!route.redirect && (
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={generateRouteInformation(embeddedRouteInfo)}
      />
    )}
    {!route.redirect &&
      clientScripts.map(script => (
        <script
          key={script}
          defer
          type="text/javascript"
          src={makePathAbsolute(
            pathJoin(process.env.REACT_STATIC_ASSETS_PATH, script)
          )}
        />
      ))}
  </body>
)
