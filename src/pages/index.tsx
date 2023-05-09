import { Inter } from 'next/font/google'
import Link from 'next/link';
import { useRouter } from 'next/router'

function IndexPage() {
  const router = useRouter()

  const handleUser1Click = () => {
    router.push('/user/1/recherche')
  }

  const handleUser2Click = () => {
    router.push('/user/2/dashboard')
  }

  return (
    <main>
      <div className="top">
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        <div className="witch-user">
          <button onClick={handleUser1Click}>Espace Remplaçant</button>
          <button onClick={handleUser2Click}>Espace Remplacé</button>
        </div>
      </div>

      <div className="bottom">
        <button>Inscription</button>
      </div>
    </main>
  )
}

export default IndexPage