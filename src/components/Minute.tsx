import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { hourSelector, minuteState, recoilLocalState } from '../recoil/atoms'


export default function Minute() {
  const [minutes, setMinutes] = useRecoilState(minuteState)
  // console.log(Object.values(minutes))
  const [hours, setHours] = useRecoilState(hourSelector)

  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value)
  }

  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value)
  }
  return (
    <div>
      <input onChange={onMinutesChange} value={minutes} type="number " placeholder='Miuntes' />
      <input onChange={onHoursChange} value={hours} type="number" placeholder='Hours' />
    </div>
  )
}
