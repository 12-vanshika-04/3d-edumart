import React from 'react'

function Footer() {
  return (
    <div>
      <footer className=" font-medium py-5 my-5 w-full text-center text-gray-600 mt-auto">
        &copy; {new Date().getFullYear()} 3D Education Platform. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer