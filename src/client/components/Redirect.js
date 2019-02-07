import React from 'react'
import { Redirect as ReactRouterRedirect } from 'react-router-dom'
import Head from 'react-helmet'
//

function join(a, b) {
  var trimmedA = a.endsWith('/') ? a.slice(0, -1) : a;
  var trimmedB = b.startsWith('/') ? b.slice(1) : b;
  return trimmedA + '/' + trimmedB;
}


export default class Redirect extends React.Component {
  render() {
    const { to, delay = 0, fromPath, ...rest } = this.props
    if (typeof document === 'undefined') {
      let resolvedTo = typeof to === 'object' ? to.pathname : to
      if (!resolvedTo.includes('//')) {
        resolvedTo = join(process.env.REACT_STATIC_PUBLIC_PATH, resolvedTo)
      }
      return (
        // ReactRouterRedirect
        <Head>
          {fromPath && (
            <title>
              {`${process.env.REACT_STATIC_PUBLIC_PATH}${
                fromPath === '/' ? '' : fromPath
              }`}
            </title>
          )}
          <link rel="canonical" href={resolvedTo} />
          <meta name="robots" content="noindex" />
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="refresh" content={`${delay}; url=${resolvedTo}`} />
        </Head>
      )
    }
    return <ReactRouterRedirect to={to} {...rest} />
  }
}
