

const RoundBox = (props) => {
    return (
      <div className='shrink-0 rounded-lg w-[14%]   h-[25vh] bg-white shadow shadow-[#53535330] mr-6' >
        <div className='mt-[-19%] '>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="47" viewBox="0 0 76 33" fill="none"  >
            <rect x="29" width="18" height="33" fill="#EB002B" />
            <rect x="58" width="18" height="33" fill="#EB002B" />
            <rect width="18" height="33" fill="#EB002B" />
          </svg>
        </div>
        {props.children}
        </div>
    )
  }
  
  export default RoundBox
  
  