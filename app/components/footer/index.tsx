import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="flex h-14 w-full items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400 sm:text-sm">
        Made by
        <IoMdHeart className="text-emerald-500" size={13} />
        by
        <strong className="font-medium">Sergio Sarui</strong>
      </span>
    </footer>
  )
}
