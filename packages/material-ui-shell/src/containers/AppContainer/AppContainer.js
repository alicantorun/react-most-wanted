import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function ({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ display: 'flex' }}>{children}</div>
    </React.Fragment>
  )
}
