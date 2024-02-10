import Tooltip from 'components/Tooltip'
import Button from 'components/calendar/Button'
import Gallery from 'components/calendar/Gallery'
import Modal from 'components/calendar/Modal'
import TextBlock from 'components/calendar/TextBlock'
import useClickOutside from 'hooks/useClickOutside'
import moment from 'moment'
import Image, { StaticImageData } from 'next/image'
import placeholder from 'public/images/placeholder.jpg'
import { Fragment, useEffect, useState } from 'react'
import { cn } from 'utils/tw'

const Calendar = (props: { data: any }) => {
  const [calBgColor, setCalBgColor] = useState('none')
  const [takeover, setTakeover] = useState(false)
  const [clip, setClip] = useState(false)
  const [loadIn, setLoadIn] = useState(true)
  const [modal, setModal] = useState(false)

  const [modalImage, setModalImage] = useState<string | StaticImageData>(
    placeholder,
  )

  const monthDays = moment().month(props.data[0].month).daysInMonth()
  const tiles = Array.from({ length: monthDays })

  const clickOutsideRef = useClickOutside(() => {
    if (modal) {
    } else {
      setTakeover(false)
      setClip(false)
      setCalBgColor('none')
    }
  })

  const handleClip = () => {
    setTimeout(() => {
      setClip(true)
    }, 500)
  }
  const handleLoadIn = () => {
    setTimeout(() => {
      setLoadIn(false)
    }, 1200)
  }

  handleLoadIn()

  return (
    <>
      <Modal open={modal} setOpen={setModal}>
        <Image src={modalImage} alt="image" />
      </Modal>
      <section
        className={cn(
          'reveal my-10 flex w-full max-w-sm animate-rotate flex-col gap-4 overflow-y-scroll rounded-3xl bg-zinc-800 p-7 shadow-xl',
          {
            'bg-sky-500': calBgColor === 'Project',
            'bg-indigo-600': calBgColor === 'Blog',
            'bg-violet-400': calBgColor === 'Small Project',
          },
        )}
        ref={clickOutsideRef}
      >
        <h2 className="reveal animate-revealSm text-sm font-bold tracking-wider text-zinc-300">
          {moment().month(props.data[0].month).format('MMMM')}
        </h2>
        <div className="grid w-full grid-cols-7 gap-2">
          {tiles.map((_, index) => {
            const dayData = props.data[0].days.find(
              (data: any) => data.day === index + 1,
            )

            const [active, setActive] = useState(false)

            useEffect(() => {
              if (takeover === false) {
                setActive(false)
              }
            }, [takeover])

            return (
              <div
                key={index}
                className={cn({
                  'scaleFade animate-scaleFade': loadIn,
                })}
                style={{
                  animationDelay: `${index / 50 + 0.04}s`,
                }}
              >
                {takeover && active && (
                  <div
                    className={cn(
                      'absolute left-0 top-0 z-50 flex h-max min-h-full w-full animate-fadeSm flex-col',
                      {
                        'bg-sky-500': dayData?.type === 'Project',
                        'bg-indigo-600': dayData?.type === 'Blog',
                        'bg-violet-400': dayData?.type === 'Small Project',
                      },
                    )}
                  >
                    <div className="sticky -top-7 z-10 animate-revealSm pl-2 pt-2">
                      <button
                        className="z-50 block w-max rounded-full bg-white px-3 py-1.5 font-bold tracking-wide text-zinc-600 shadow-md transition-transform active:scale-90 sm:hover:scale-90 sm:active:scale-75"
                        onClick={() => {
                          setTakeover(false)
                          setActive(false)
                          setClip(false)
                          setCalBgColor('none')
                        }}
                      >
                        back
                      </button>
                    </div>
                    <ul className="relative my-2 flex w-full flex-col gap-2 odd:*:animate-rotateAlt even:*:animate-rotate">
                      {/* Map day content */}
                      {dayData?.content.map(
                        (contentItem: any, contentIndex: number) => (
                          <Fragment key={contentIndex}>
                            {contentItem.text && (
                              <TextBlock data={contentItem.text} />
                            )}
                            {contentItem.image && (
                              <Gallery
                                image={contentItem.image || placeholder}
                                onClick={() => {
                                  setModal(true)
                                  setModalImage(
                                    contentItem.image || placeholder,
                                  )
                                }}
                              />
                            )}
                            {contentItem.link && (
                              <Button data={contentItem.link} />
                            )}
                          </Fragment>
                        ),
                      )}
                    </ul>
                  </div>
                )}
                {dayData ? (
                  <div
                    className={cn('group/tooltip relative delay-100', {
                      'invisible opacity-0 delay-0': takeover && !active,
                      'overflow-clip overscroll-y-none': clip,
                    })}
                  >
                    <Tooltip text={dayData.type} state={takeover} />
                    <button
                      onClick={() => {
                        setTakeover(true)
                        handleClip()
                        setActive(true)
                        setTimeout(() => {
                          setCalBgColor(dayData?.type)
                        }, 400)
                      }}
                      className={cn(
                        'block h-8 w-full rounded-lg transition-all duration-150 hover:scale-90 active:scale-75 min-[400px]:h-10',
                        {
                          'bg-sky-500': dayData.type === 'Project',
                          'bg-indigo-600': dayData.type === 'Blog',
                          'bg-violet-400': dayData.type === 'Small Project',
                          'scale-[20] cursor-default duration-300 hover:scale-[20] active:scale-[20]':
                            active && takeover,
                        },
                      )}
                    />
                  </div>
                ) : (
                  <div
                    className={cn(
                      'h-8 w-full rounded-lg bg-zinc-700/50 transition-all delay-100 duration-300 min-[400px]:h-10',
                      {
                        'invisible opacity-0 delay-0 duration-0': takeover,
                      },
                    )}
                  />
                )}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Calendar
