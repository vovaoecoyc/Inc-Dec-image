import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import styles from '../Main.module.css'
import PropTypes from 'prop-types'

class ShowImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //countPhoto: 1
    }
    console.log(this.props.images)
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          {this.props.images.map((image, i) => {
            return <img className={styles.imageOptions} key={`${image}-${i}`} src={image} alt={image} />
          })}
        </Row>
      </Container>
    )
  }
}

ShowImage.defaultProps = {
  images: []
}

ShowImage.propTypes = {
  images: PropTypes.array.isRequired
}

export default ShowImage
