import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'rebass'


const PrimaryButton = ({ disabled, onClick , props }) => (
    <Button disabled={disabled} onClick={onClick} {...props}>
    </Button>
)



PrimaryButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

PrimaryButton.defaultProps = {
  disabled: false,
  onClick: () => {},
}

export default PrimaryButton
