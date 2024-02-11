import moment from 'moment'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [date, setDate] = useState('string')

  useEffect(() => {
    setDate(moment().format('dddd, MMMM D'))
  }, [])

  return (
    <footer className="flex w-full items-center justify-center px-6 pb-8 pt-40 text-zinc-500 sm:px-10">
      <div className="flex w-full max-w-lg items-center justify-center">
        <p>{date}</p>
      </div>
    </footer>
  )
}

export default Footer
