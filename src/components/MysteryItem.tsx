import Button from 'components/Button'
import Modal from 'components/Modal'
import { useState } from 'react'

const MysteryItem = () => {
  const [active, setActive] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/addEntry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        alert('Successfully subscribed!')
        setEmail('') // Reset form after successful submission
      } else {
        alert('Failed to subscribe.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <>
      <Modal open={active} setOpen={setActive}>
        <h2 className="text-xl font-semibold">Something's on the horizon...</h2>
        <form onSubmit={handleSubmit} className="text-zinc-800">
          <label htmlFor="email" className="block">
            <span className="block text-sm font-medium text-zinc-600">
              Email
            </span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded bg-zinc-100 p-2.5 text-sm placeholder:text-zinc-400 focus:outline-none"
              placeholder="hello@mac.com"
            />
          </label>
          <Button title="Subscribe" type="submit" className="bg-zinc-100" />
        </form>
      </Modal>
      <button
        className="group fixed bottom-8 left-8 p-1"
        onClick={() => setActive(!active)}
      >
        <div className="flex size-10 items-center justify-center rounded-full bg-orange-200">
          P
        </div>
      </button>
    </>
  )
}

export default MysteryItem
