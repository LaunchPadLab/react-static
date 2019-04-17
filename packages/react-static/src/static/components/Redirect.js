import React from 'react'
import Head from 'react-helmet'
//

export default class Redirect extends React.Component {
  render() {
    const basePath = process.env.REACT_STATIC_PUBLIC_PATH || ''
    const { to, fromPath } = this.props
    let resolvedTo = typeof to === 'object' ? to.pathname : to
    if (!resolvedTo.includes('//')) {
      resolvedTo = `${basePath}${resolvedTo === '/' ? '' : resolvedTo}`
    }
    return (
      <Head>
        {fromPath && (
          <title>{`${basePath}${fromPath === '/' ? '' : fromPath}`}</title>
        )}
        <link rel="canonical" href={resolvedTo} />
        <meta name="robots" content="noindex" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta httpEquiv="refresh" content={`0; url=${resolvedTo}`} />
      </Head>
    )
  }
}
