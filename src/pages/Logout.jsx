import React from 'react'

const Logout = () => {
  React.useEffect(() => {
    sessionStorage.clear()
    window.location.href = '/'
  }, [])

  return <div>Logging out...</div>
}

export default Logout
