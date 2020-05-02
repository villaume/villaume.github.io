import React from 'react'
import PropTypes from 'prop-types'
import { Button as BaseButton } from 'rebass'

const Button = ({ disabled, onClick , props }) => (
    <Button disabled={disabled} onClick={onClick} {...props}>
    </Button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
}

export default Button
