import React from 'react'

const CounterResult = (props) => {
  const rest = props.count % 2

  return (
    <h2>{rest === 1 ? '홀수' : '짝수'}</h2>
  )
}

export default CounterResult