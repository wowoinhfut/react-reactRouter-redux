import React from 'react'
import {connect} from 'react-redux'

import {IndexPage} from '../components'

const mapStateToProps = state => {

  return {
    courseList: 'bbb'
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
