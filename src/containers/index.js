import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import ShowImage from './Image'
import NavWithOperations from './Navigation'
import { loadImage, addImage, removeImage } from '../store/actions'
import PropTypes from 'prop-types'

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.props.loadDataImage()
  }
  hanldeCallbackAddImage = () => {
    this.props.addNewImage()
  }
  hanldeCallbackRemoveImage = () => {
    if (this.props.images.length > 0) {
      this.props.removeLastImage()
    }
  }
  render() {
    return (
      <Container>
        <ShowImage images={this.props.images} />
        <NavWithOperations
          callbackAddImage={this.hanldeCallbackAddImage}
          callbackRemoveImage={this.hanldeCallbackRemoveImage}
          count={this.props.images.length}
        />
      </Container>
    )
  }
}

const mapStateToProp = state => {
  return {
    images: state.arrayOfImages
  }
}

const mapDispatchToProp = dispatch => ({
  loadDataImage: () => {
    dispatch(loadImage())
  },
  addNewImage: () => {
    dispatch(addImage())
  },
  removeLastImage: () => {
    dispatch(removeImage())
  }
})

MainContent.defaultProps = {
  images: []
}

MainContent.propTypes = {
  loadDataImage: PropTypes.func,
  addNewImage: PropTypes.func,
  removeLastImage: PropTypes.func,
  images: PropTypes.array.isRequired
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(MainContent)
