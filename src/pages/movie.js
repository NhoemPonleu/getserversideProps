import { useRouter } from 'next/router'
import React from 'react'

export default function movie() {
    const router=useRouter;
    const {id}=router.query;
  return (
    <div>
      <h1>Hello:{id}</h1>
    </div>
  )
}
