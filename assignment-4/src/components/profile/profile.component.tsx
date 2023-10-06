import Image from 'next/image'
import avatar from '../../assets/images/avatar.png'
import ThemeToggleInputComponent from '../toogle/theme-toggle-input.component'

export default function ProfileComponent() {
  return (
    <div className="flex justify-between">
      <div className="text-[1.4rem] font-bold">Bookstore</div>
      <div className="flex items-center justify-center">
        <div
          className="flex items-center justify-center text-[0.9rem]
          pl-2
        "
        >
          <ThemeToggleInputComponent />
          <span>Light mode</span>
        </div>
        <div
          className="flex items-center justify-center
          pl-2 pr-2 text-[0.9rem]"
        >
          <Image
            className="
            rounded-full

            w-[2rem]"
            src={avatar}
            alt=""
          />
          <div className="pl-2">Alibaba</div>
        </div>
      </div>
    </div>
  )
}
