


const Footer = () => {

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
  }

  return (
    <section className="flex justify-center h-[50px]">
      <div className="h-full w-[90%] lg:w-[1024px] rounded-std bg-white">
          <div className="flex justify-around items-center h-full">
            <div><button onClick={goToTop}>Go to Top</button></div>
            <div><a href="/disclaimer">Copyright / Disclaimer</a></div>
          </div>
      </div>
    </section>
  )
}

export default Footer