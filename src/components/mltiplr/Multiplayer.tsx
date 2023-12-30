import Modal from 'components/Modal'
import Login from 'components/mltiplr/Login'
import MultiplayerBar from 'components/mltiplr/MultiplayerBar'
import { auth } from 'lib/firebase'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const Multiplayer = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      setModalOpen(false)
    }
  }, [user])

  return (
    <>
      <Modal open={modalOpen} setOpen={setModalOpen}>
        <Login
          onClick={() => setModalOpen(false)}
          userData={{ user, loading }}
        />
      </Modal>

      <MultiplayerBar
        loginButtonProps={{
          onClick: () => {
            setModalOpen(true)
          },
          text: 'Join lobby',
        }}
        logoutButtonProps={{
          onClick: () => {
            auth.signOut()
          },
          text: 'Log out',
        }}
        userData={{ user, loading }}
      />
    </>
  )
}

export default Multiplayer
