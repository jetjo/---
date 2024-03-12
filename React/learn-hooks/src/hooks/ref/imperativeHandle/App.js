import { useRef } from 'react'
import Post from './Post'
import './index.css'

export default function Page() {
  const postRef = useRef(null)

  const handleClick = () => postRef.current.scrollAndFocusAddComment()

  return (
    <>
      <button onClick={handleClick}>write a comment</button>
      <Post ref={postRef} />
    </>
  )
}
