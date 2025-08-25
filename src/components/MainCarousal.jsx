import React from 'react'

const MainCarousal = () => {
  return (
    <div className='mb-10'> <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src = "https://www.infinitimall.com/wp-content/uploads/2022/06/Nykaa-Health-Beauty-Infinti-Mall-Andheri.jpg"
      className="w-full h-96" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://theradishingreview.com/wp-content/uploads/2020/03/SkinCare_RR.jpg"
      className="w-full h-96" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://tse1.mm.bing.net/th/id/OIP.J5qj_osiVlVpko8oeotEOQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
      className="w-full h-96" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://tse1.explicit.bing.net/th/id/OIP.-SAmCK6Bj0TiQTOZIJOUKAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
      className="w-full h-96" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div></div>
  )
}

export default MainCarousal