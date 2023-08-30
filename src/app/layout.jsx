"use client"

import React, { Component } from 'react'
import "./global.css"
export default class layout extends Component {
  render() {
    const {children} =this.props
    return (
      <html lang='en' >
        <body>
          {children}
        </body>
      </html>
    )
  }
}
