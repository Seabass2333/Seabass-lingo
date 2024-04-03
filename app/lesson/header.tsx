type Props = {
  hearts: number
  percentage: number
  hasActiveSubscription: boolean
}
const Header = ({ hearts, percentage, hasActiveSubscription }: Props) => {
  return (
    <header className='lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full'>
      Header
    </header>
  )
}

export default Header
