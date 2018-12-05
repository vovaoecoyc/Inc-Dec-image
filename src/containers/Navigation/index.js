import React, { Component, Fragment } from 'react'
import { Row, Col, Button } from 'reactstrap'
import styles from '../Main.module.css'
import PropTypes from 'prop-types'

class NavWithOperations extends Component {
  handleClickRemove = e => {
    e.preventDefault()
    this.props.callbackRemoveImage()
  }
  handleClickAdd = e => {
    e.preventDefault()
    this.props.callbackAddImage()
  }
  render() {
    return (
      <Fragment>
        <Row className="justify-content-center text-center">
          <Col>Количество фотографий: {this.props.count}</Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center">
            <Button className={`${styles.btnInc}`} onClick={this.handleClickAdd} color="success">
              +
            </Button>
            <Button className={`${styles.btnDec}`} onClick={this.handleClickRemove} color="danger">
              -
            </Button>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

NavWithOperations.propTypes = {
  callbackAddImage: PropTypes.func,
  callbackRemoveImage: PropTypes.func,
  count: PropTypes.number
}

export default NavWithOperations
