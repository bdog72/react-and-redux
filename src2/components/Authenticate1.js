import React from 'react'

export default function Authenticate1 ({error, isFetching, onAuth}) {
  return (
    <div>
      <h1>{'Authenticate'}</h1>
      <p>Facebook Authentication</p>
      {error ? <p>{error}</p> : null}
    </div>
  )
}
