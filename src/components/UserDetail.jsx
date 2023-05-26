import React from 'react'
import { useParams } from 'react-router-dom'
function UserDetail() {
    const param = useParams()
    const userId = param.userId
  return (
    <div>UserDetail {userId}</div>
  )
}

export default UserDetail