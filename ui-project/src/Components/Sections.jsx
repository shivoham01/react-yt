import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

const Sections = (props) => {
  return (
    <div className='sections flex w-full h-[70vh] mt-[50px] ml-4'>
      <LeftSection />
      {props.user.map((elm, idx) => {
        return <RightSection key={idx} elm={elm} />
      })}
    </div>
  )
}

export default Sections
