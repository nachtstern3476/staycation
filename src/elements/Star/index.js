import React from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function Star({ className, value, height, width, spacing}) {
    const decimal = Number(value) % 1
    const star = []
    let leftPos = 0
    for (let i = 0; i < 5 && i < value - decimal; i++) {
        leftPos = leftPos + width
        star.push(
            <div className="star" key={`star-${i}`} style={{left: i * width, height: height, width: width, marginRight: spacing}}></div>
        )
    }
    if (decimal > 0 && value <= 5) {
        star.push(
            <div className="star" key={`star-decimal`} style={{left: leftPos, height: height, width: decimal * width - spacing, marginRight: spacing}}></div>
        )
    }

    const starPlaceholder = []
    for (let i = 0; i < 5; i++) {
        starPlaceholder.push(
            <div className="star placeholder" key={`star-placeholder-${i}`} style={{left: i * width, height: height, width: width, marginRight: spacing}}></div>
        )
    }
    return (
        <>
            <div className={['stars', className].join(' ')} style={{height: height}}>
                {starPlaceholder}
                {star}
            </div>
        </>
    )
}

Star.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number,
}
