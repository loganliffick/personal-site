import moment from 'moment'

const Footer = () => (
  <footer className="flex w-full items-center justify-center px-6 pb-8 pt-40 text-zinc-500 sm:px-10">
    <div className="flex w-full max-w-lg items-center justify-center">
      <p>{moment().format('dddd, MMMM D')}</p>
    </div>
  </footer>
)

export default Footer
