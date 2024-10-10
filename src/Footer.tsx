import logo from "/src/assets/jcaslogofooter.png"


const Footer = () => {
  return (
    <div className="w-full bg-brandWhite flex flex-col items-center justify-center p-5">
      <img src={logo} className="size-16 ml-3"/>
      <h1 className="text-brandBlack roboto-bold text-4xl">JCAS</h1>
      <h2 className="text-brandBlack roboto-regular text-base">Sports Alley</h2>
      <p className="text-brandBlack text-sm mt-2">© 2024 JCAS Sports Alley. All Rights Reserved</p>
    </div>
  )
}

export default Footer
