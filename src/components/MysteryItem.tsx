// wild thought,
// and hear me out:
// maybe don't steal this one 😱
// and sell it for profit 😏
// after all, my version is *always* better
// 🖕🖕🖕
//
// yours truly,
// Logan 😘

import { Heart, X } from '@phosphor-icons/react'
import Loader from 'components/Loader'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { cn } from 'utils/tw'

const Gradients = () => (
  <div className="pointer-events-none fixed bottom-0 left-0 -z-10 select-none blur-3xl">
    <svg
      width="599"
      height="513"
      viewBox="0 0 599 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -bottom-44 -left-44 scale-75"
    >
      <path
        d="M571.803 182.317C670.803 383.817 474.693 450.951 381.334 499.216C248.834 567.716 234.208 356.177 149.66 394.757C-127.697 521.317 97.8032 275.317 26.303 207.817C-77.6638 109.667 154.224 -77.5869 241.803 34.8173C368.803 197.817 479.083 -6.40036 571.803 182.317Z"
        fill="url(#paint0_linear_410_39)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_410_39"
          x1="202.454"
          y1="58.8314"
          x2="561.312"
          y2="362.87"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B1E3FF" />
          <stop offset="0.5" stopColor="#E9D984" />
          <stop offset="1" stopColor="#FF9A61" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      width="443"
      height="495"
      viewBox="0 0 443 495"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -bottom-44 -left-20 scale-75 animate-bouncy mix-blend-overlay"
    >
      <path
        d="M426.531 253.899C481.647 274.462 386.39 427.633 293.031 475.898C160.531 544.398 -25.8753 403.49 61.3572 371.439C217.857 313.939 12.9606 246.53 1.3574 166.44C-19.1426 24.9396 197.324 60.4811 328.531 4.89857C422.857 -35.0604 229.531 180.398 426.531 253.899Z"
        fill="url(#paint0_linear_410_38)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_410_38"
          x1="217.552"
          y1="-37.4329"
          x2="217.552"
          y2="533.165"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3300FF" />
          <stop offset="0.5" stopColor="#52E4FF" />
          <stop offset="1" stopColor="#56D7FF" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

const Envelope = (props: { onClick?: () => void; state: boolean }) => (
  <div className="fixed bottom-8 left-8 h-[72px]">
    <button
      className={cn(
        'relative shadow-xl transition-all focus-within:outline-none hover:-rotate-3 hover:scale-95 hover:shadow-lg active:scale-90 active:shadow-md',
        {
          '-rotate-3 scale-90 shadow-md': props.state,
        },
      )}
      onClick={props.onClick}
    >
      <svg
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'absolute left-1/2 top-1/2 z-[11] -translate-x-1/2 -translate-y-1/2 transition-all delay-75 duration-200 ease-bounce',
          { '-rotate-12 scale-75 opacity-0 delay-0': props.state },
        )}
      >
        <g filter="url(#filter0_d_410_46)">
          <path
            d="M23.1041 1.5132C23.3043 1.25373 23.6957 1.25373 23.8959 1.5132L26.0369 4.28859C26.1987 4.4984 26.4962 4.54551 26.7149 4.39598L29.6088 2.41803C29.8793 2.23311 30.2516 2.35408 30.3618 2.66271L31.5404 5.96386C31.6294 6.21341 31.8978 6.35012 32.152 6.27552L35.5154 5.28862C35.8299 5.19636 36.1466 5.42646 36.156 5.75402L36.2568 9.2578C36.2644 9.52267 36.4773 9.7356 36.7422 9.74322L40.246 9.84399C40.5735 9.85341 40.8036 10.1701 40.7114 10.4846L39.7245 13.848C39.6499 14.1022 39.7866 14.3706 40.0361 14.4596L43.3373 15.6382C43.6459 15.7484 43.7669 16.1207 43.582 16.3912L41.604 19.2851C41.4545 19.5038 41.5016 19.8013 41.7114 19.9631L44.4868 22.1041C44.7463 22.3043 44.7463 22.6957 44.4868 22.8959L41.7114 25.0369C41.5016 25.1987 41.4545 25.4962 41.604 25.7149L43.582 28.6088C43.7669 28.8793 43.6459 29.2516 43.3373 29.3618L40.0361 30.5404C39.7866 30.6294 39.6499 30.8978 39.7245 31.152L40.7114 34.5154C40.8036 34.8299 40.5735 35.1466 40.246 35.156L36.7422 35.2568C36.4773 35.2644 36.2644 35.4773 36.2568 35.7422L36.156 39.246C36.1466 39.5735 35.8299 39.8036 35.5154 39.7114L32.152 38.7245C31.8978 38.6499 31.6294 38.7866 31.5404 39.0361L30.3618 42.3373C30.2516 42.6459 29.8793 42.7669 29.6088 42.582L26.7149 40.604C26.4962 40.4545 26.1987 40.5016 26.0369 40.7114L23.8959 43.4868C23.6957 43.7463 23.3043 43.7463 23.1041 43.4868L20.9631 40.7114C20.8013 40.5016 20.5038 40.4545 20.2851 40.604L17.3912 42.582C17.1207 42.7669 16.7484 42.6459 16.6382 42.3373L15.4596 39.0361C15.3706 38.7866 15.1022 38.6499 14.848 38.7245L11.4846 39.7114C11.1701 39.8036 10.8534 39.5735 10.844 39.246L10.7432 35.7422C10.7356 35.4773 10.5227 35.2644 10.2578 35.2568L6.75402 35.156C6.42646 35.1466 6.19636 34.8299 6.28862 34.5154L7.27552 31.152C7.35012 30.8978 7.21341 30.6294 6.96386 30.5404L3.66271 29.3618C3.35408 29.2516 3.23311 28.8793 3.41803 28.6088L5.39598 25.7149C5.54551 25.4962 5.4984 25.1987 5.28859 25.0369L2.5132 22.8959C2.25373 22.6957 2.25373 22.3043 2.5132 22.1041L5.28859 19.9631C5.4984 19.8013 5.54551 19.5038 5.39598 19.2851L3.41803 16.3912C3.23311 16.1207 3.35408 15.7484 3.66271 15.6382L6.96386 14.4596C7.21341 14.3706 7.35012 14.1022 7.27552 13.848L6.28862 10.4846C6.19636 10.1701 6.42646 9.85341 6.75402 9.84399L10.2578 9.74322C10.5227 9.7356 10.7356 9.52267 10.7432 9.2578L10.844 5.75402C10.8534 5.42646 11.1701 5.19636 11.4846 5.28862L14.848 6.27552C15.1022 6.35012 15.3706 6.21341 15.4596 5.96386L16.6382 2.66271C16.7484 2.35408 17.1207 2.23311 17.3912 2.41803L20.2851 4.39598C20.5038 4.54551 20.8013 4.4984 20.9631 4.28859L23.1041 1.5132Z"
            fill="url(#paint0_linear_410_46)"
          />
        </g>
        <path
          d="M21.8739 34.0857C20.4736 34.1801 19.3596 33.9586 18.5321 33.421C17.7031 32.8615 17.0735 31.838 16.6434 30.3504C16.3289 29.2726 16.0764 28.1357 15.8858 26.9397C15.717 25.7422 15.6002 24.6621 15.5352 23.6994C15.4703 22.7366 15.4432 21.6834 15.4539 20.5398C15.485 19.3727 15.5935 18.2115 15.7793 17.056C15.9695 15.9662 16.351 15.1052 16.9238 14.4731C17.4966 13.841 18.3765 13.364 19.5637 13.0421C20.7509 12.7202 22.3509 12.4913 24.3639 12.3555C26.0924 12.2389 27.6681 12.4622 29.0908 13.0256C30.5354 13.5875 31.7061 14.4866 32.6027 15.7229C33.5198 16.9359 34.0426 18.4941 34.171 20.3977C34.2995 22.3013 34.001 23.9039 33.2756 25.2057C32.5706 26.4842 31.6043 27.4725 30.3766 28.1708C29.1474 28.8472 27.8217 29.2334 26.3995 29.3294C26.1807 29.3441 26.0056 29.3559 25.8744 29.3648C25.765 29.3722 25.6556 29.3796 25.5462 29.387C25.3492 29.4002 25.2231 29.4857 25.1678 29.6433C25.111 29.779 25.0886 29.9344 25.1004 30.1094C25.1033 30.1532 25.1063 30.1969 25.1092 30.2407C25.1122 30.2844 25.1151 30.3282 25.1181 30.372C25.121 30.4157 25.1247 30.4704 25.1292 30.5361C25.169 31.1268 25.1184 31.6797 24.9773 32.1948C24.8363 32.7098 24.5244 33.1375 24.0419 33.4778C23.5593 33.8181 22.8366 34.0207 21.8739 34.0857ZM24.3506 22.9067C24.8757 22.8712 25.3059 22.7323 25.6412 22.4899C25.9765 22.2475 26.1302 21.9184 26.1021 21.5027C26.0726 21.0651 25.8886 20.7808 25.55 20.6497C25.21 20.4969 24.7884 20.4374 24.2851 20.4713C24.132 20.4817 23.9905 20.5022 23.8607 20.533C23.7528 20.5622 23.658 20.6236 23.5764 20.717C23.5166 20.8089 23.4701 20.933 23.4366 21.0891C23.4251 21.2437 23.4282 21.4523 23.4459 21.7149C23.4666 22.0212 23.5054 22.2713 23.5625 22.4653C23.6399 22.6359 23.7363 22.7613 23.8516 22.8414C23.9873 22.8982 24.1536 22.92 24.3506 22.9067Z"
          fill="#E0BC41"
        />
        <defs>
          <filter
            id="filter0_d_410_46"
            x="0.318604"
            y="0.318604"
            width="46.3628"
            height="46.3628"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_410_46"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_410_46"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_410_46"
            x1="2"
            y1="1"
            x2="45"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF4CE" />
            <stop offset="1" stopColor="#F1C842" />
          </linearGradient>
        </defs>
      </svg>

      {/* envelope fold */}
      <svg
        width="98"
        height="45"
        viewBox="0 0 98 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'absolute z-10 drop-shadow transition-all duration-100 ease-out',
          {
            '-translate-y-11 -scale-y-100 drop-shadow-none': props.state,
          },
        )}
      >
        <path
          d="M46.2623 43.4299C47.8014 44.8748 50.1986 44.8748 51.7377 43.4299L98 -1.54972e-06H0L46.2623 43.4299Z"
          fill="white"
        />
      </svg>

      {/* envelope */}
      <svg
        width="98"
        height="72"
        viewBox="0 0 98 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_410_41)">
          <path
            d="M0 0H98V70C98 71.1046 97.1046 72 96 72H2C0.89543 72 0 71.1046 0 70V0Z"
            fill="#F5F5F5"
          />
          <g filter="url(#filter0_dd_410_41)">
            <path d="M0 0L49 37.6364L98 0V72H0V0Z" fill="white" />
          </g>
          <g filter="url(#filter1_dd_410_41)">
            <path
              d="M46.3214 30.2334C47.8435 28.8611 50.1565 28.8611 51.6786 30.2334L98 72.0001H0L46.3214 30.2334Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_dd_410_41"
            x="-3"
            y="-2"
            width="104"
            height="78"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_410_41"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect2_dropShadow_410_41"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_410_41"
              result="effect2_dropShadow_410_41"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_410_41"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_dd_410_41"
            x="-3"
            y="27.2041"
            width="104"
            height="48.7959"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_410_41"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="effect2_dropShadow_410_41"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_410_41"
              result="effect2_dropShadow_410_41"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_410_41"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_410_41">
            <path
              d="M0 0H98V70C98 71.1046 97.1046 72 96 72H2C0.89543 72 0 71.1046 0 70V0Z"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  </div>
)

const MysteryItem = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // control where newsletter shows up
  const router = useRouter()
  const currentPage = router.pathname
  const excludedPages = ['/blog/']

  if (excludedPages.some((prefix) => currentPage.startsWith(prefix))) {
    return null
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/addEntry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        // alert('Successfully subscribed!')
        setSubscribed(true)
        setLoading(false)
        setMenuOpen(false)
        setEmail('') // Reset form after successful submission
        setTimeout(() => {
          setSubscribed(false)
        }, 1500)
      } else {
        alert('Unable to subscribe, your email may already be subscribed.')
        setMenuOpen(false)
        setLoading(false)
        setEmail('')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <>
      <div
        className={cn(
          'invisible fixed bottom-32 left-8 z-[50] flex origin-bottom-left translate-x-10 translate-y-10 scale-0 items-center gap-1 rounded-2xl bg-white p-3 opacity-0 shadow-2xl shadow-zinc-500/10 duration-200 ease-[cubic-bezier(0.8,0.5,0,1.2)]',
          {
            'visible translate-x-0 translate-y-0 scale-100 opacity-100 duration-500':
              subscribed,
          },
        )}
      >
        <p>Success! Thanks for subscribing</p>
        <Heart weight="fill" className="text-red-400" size={20} />
      </div>
      <div
        className={cn(
          'group invisible fixed bottom-40 left-8 z-10 origin-bottom-left translate-x-10 translate-y-20 scale-0 rounded-2xl bg-white p-5 pt-10 opacity-0 shadow-2xl shadow-zinc-500/10 duration-200 ease-[cubic-bezier(0.8,0.5,0,1.2)]',
          {
            'visible translate-x-0 translate-y-0 scale-100 opacity-100 duration-[400ms]':
              menuOpen,
          },
        )}
      >
        <button
          className="absolute right-2 top-2 flex size-10 items-center justify-center rounded-lg bg-transparent text-zinc-400 transition-transform duration-100 hover:bg-zinc-100/75"
          onClick={() => setMenuOpen(false)}
        >
          <X size={18} weight="bold" />
        </button>

        <div className="absolute z-10 flex h-1/2 w-2/3">
          <div className="flex size-full rotate-6 flex-col items-center justify-center gap-4 rounded-sm bg-gradient-to-tl from-yellow-100 to-yellow-50 shadow-lg">
            <div className="absolute -top-1 left-1/2 size-8 -translate-x-1/2 rounded-full bg-gradient-to-tl from-red-500 to-red-400 shadow-[-2px_2px_0px_#991b1b]">
              <div className="absolute -top-0.5 left-2/3 size-6 -translate-x-1/2 rounded-full bg-gradient-to-tl from-red-500 to-red-400 shadow-[-2.5px_2.5px_0px_#991b1b]" />
            </div>
            <p className="text-lg font-medium text-zinc-900">
              Taking a break <br /> :shrug:
            </p>
          </div>
        </div>

        <div className="relative mx-auto mb-4 flex size-40 items-center justify-center overflow-hidden rounded-full bg-indigo-500 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-full after:border-8 after:border-white/20">
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute -bottom-0.5 -left-1 scale-[2.4]"
          >
            <source src={'/videos/ollie.mp4'} type="video/mp4" />
          </video> */}
        </div>
        <header className="mb-3">
          <h2 className="pr-2 text-xl font-semibold">
            Something's on the horizon
          </h2>
          <p className="pr-2 text-zinc-500">Join the waitlist</p>
        </header>
        <form onSubmit={handleSubmit} className="text-zinc-800">
          <label htmlFor="email" className="block">
            <span className="block text-xs font-medium text-zinc-600">
              Email
            </span>
            <input
              disabled
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded bg-zinc-100 p-2.5 text-sm placeholder:text-zinc-400 focus:outline-none"
              placeholder="tim@apple.com"
              ref={inputRef}
            />
          </label>
          <button
            title="Subscribe"
            type="submit"
            className="relative mt-5 flex items-center gap-2 overflow-hidden rounded-full bg-zinc-100 bg-gradient-to-t from-blue-600 to-blue-400 px-4 py-1 font-semibold text-white after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-1/2 after:w-full after:select-none after:bg-white/15 after:blur-[0.5px] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100"
            disabled
          >
            Subscribe
            <span className={cn('-mr-1 hidden', { block: loading })}>
              <Loader />
            </span>
          </button>
        </form>
      </div>
      <Gradients />
      <Envelope
        onClick={() => {
          setMenuOpen(!menuOpen),
            setTimeout(() => {
              inputRef.current?.focus()
            }, 200)
        }}
        state={menuOpen}
      />
    </>
  )
}

export default MysteryItem
