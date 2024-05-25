import React, { useState } from "react"
import ReactDOM from "react-dom"

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  console.log('data: ',data);
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("boilerplate-update-me")
})

function OurComponent(props) {
  const listbets = JSON.parse(props.lists);
  const isSidebar = props.isSidebar;
  console.log('front-end loaded', 'isSidebar: ', props.isSidebar);
  const Sidebar = ({ listbets }) => {
    return (
      <div className="flex flex-col space-y-1">
        {/* <h1 className="text-base font-bold text-center">Nhà Cái Uy Tín</h1> */}
        {listbets && listbets.map((item, index) =>
          <div className={`topnhacai-${index} my-5 relative`}>
            <div className={` ${index < 3 ? 'bg-[url(https://topgamebai.biz/wp-content/themes/flatsome-child/images/medal_orange.png)]' : 'bg-[url(https://topgamebai.biz/wp-content/themes/flatsome-child/images/medal_blue.png)]'} bg-cover absolute z-[1] -top-[15px] left-0 w-[30px] h-[38px] inline-block text-base font-bold text-white leading-7 text-center`}>
              {index + 1}
            </div>
            <div className={`bg-white rounded-md drop-shadow-lg p-2 text-black shadow-xl border border-slate-100`}>
              <div className="flex justify-center space-x-2">
                <div className="flex items-center justify-center w-[30%]">
                  <img src={item.logo} alt="" className="avatar w-24 h-24 rounded-lg" />
                </div>
                <div className="w-[70%] text-center">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <h2 className="text-orange-500 text-base font-bold">{item.giftTitle}</h2>
                  {/* <p className="text-sm font-bold">{item.giftDesc}</p> */}
                  <div className="w-100% flex flex-col justify-center items-center mt-1">
                    <span className="my-0 relative">
                      <i class='bx bxs-star text-yellow-500 text-xs'></i>
                      <i class='bx bxs-star text-yellow-500 text-xs'></i>
                      <i class='bx bxs-star text-yellow-500 text-xs'></i>
                      <i class='bx bxs-star text-yellow-500 text-xs'></i>
                      <i class='bx bxs-star text-yellow-500 text-xs'></i>
                      <img src="https://topgamebai.biz/wp-content/uploads/2024/05/hot.gif" className="absolute -top-2 -right-3" />
                    </span>
                    <a className="text-sm text-[#087be7] font-bold " href="/">
                      <p>{item.slogan}</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center space-x-2 py-2 items-center text-center mt-1 border-t border-red-500">
                <a href={item.link} className={`w-full bg-[#ec3434] hover:bg-[#c93b3b] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `} target="_blank" rel="nofollow sponsored noopener"><i class='bx bxs-chevron-right-circle text-white'></i><span className="text-white">Cược ngay</span></a>
                <a href={item.link_review ? item.link_review : '/'} className={`w-full bg-[#f3b505] hover:bg-[#f3a805] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `} target="_blank" rel="nofollow sponsored noopener"><i class='bx bxs-chevron-down-circle text-white'></i><span className="text-white">Đọc Review</span></a>
              </div>
            </div>
          </div>)}
      </div>
    )
  }
  const MainContent = ({ listbets }) => {
    return (
      <>
        {listbets && listbets.map((item, index) =>
          <div className={`topnhacai-${index} my-5 relative`}>
            <div className={` ${index < 3 ? 'bg-[url(https://topgamebai.biz/wp-content/themes/flatsome-child/images/medal_orange.png)]' : 'bg-[url(https://topgamebai.biz/wp-content/themes/flatsome-child/images/medal_blue.png)]'} bg-cover absolute z-[1] -top-[15px] left-0 w-[30px] h-[38px] inline-block text-base font-bold text-white leading-7 text-center`}>
              {index + 1}
            </div>
            <div className={`bg-white rounded-md drop-shadow-lg p-2 text-black shadow-xl border border-slate-100`}>
              <div className="flex justify-center space-x-2">
                <div className="flex items-center justify-center w-[30%] md:w-[20%] md:border-r border-red-200">
                  <img src={item.logo} alt="" className="avatar w-24 h-24 rounded-lg" />
                </div>
                <div className="w-[70%] md:w-[30%] md:border-r border-red-200 text-center">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <h2 className="text-orange-500 text-lg font-bold">{item.giftTitle}</h2>
                  <p className="text-sm font-bold">{item.giftDesc}</p>

                </div>
                <div className="description flex justify-center items-center text-center w-[25%]  md:border-r border-red-200">
                  <div className="">
                    <span className="my-0 relative">
                      <i class='bx bxs-star text-yellow-500 text-xs'></i>
                      <i class='bx bxs-star text-yellow-500 text-xs'></i>
                      <i class='bx bxs-star text-yellow-500 text-xs'></i>
                      <i class='bx bxs-star text-yellow-500 text-xs'></i>
                      <i class='bx bxs-star text-yellow-500 text-xs'></i>
                      <img src="https://topgamebai.biz/wp-content/uploads/2024/05/hot.gif" className="absolute -top-2 -right-3" />
                    </span>
                    <a className="text-sm text-[#087be7] font-bold " href="/">
                      <p>{item.slogan}</p>
                    </a>
                  </div>
                </div>
                <div className="description relative flex flex-col justify-center items-center w-[25%] space-y-2">
                  <a href={item.link} className={`min-w-32 bg-[#ec3434] hover:bg-[#c93b3b] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `} target="_blank" rel="nofollow sponsored noopener"><i class='bx bxs-chevron-right-circle text-white'></i><span className="text-white">Cược ngay</span></a>
                  <a href={item.link_review} className={`min-w-32 bg-[#f3b505] hover:bg-[#f3a805] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `} target="_blank" rel="nofollow sponsored noopener"><i class='bx bxs-chevron-down-circle text-white'></i><span className="text-white">Đọc Review</span></a>
                </div>
              </div>
              <div className="mb-description flex flex-1 justify-center space-x-2 py-2 items-center text-center mt-1 border-t border-red-500">
                <a href={item.link} className={`w-full bg-[#ec3434] hover:bg-[#c93b3b] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `} target="_blank" rel="nofollow sponsored noopener"><i class='bx bxs-chevron-right-circle text-white'></i><span className="text-white">Cược ngay</span></a>
                <a href={item.link_review ? item.link_review : '/'} className={`w-full bg-[#f3b505] hover:bg-[#f3a805] text-sm font-light text-center px-2 py-2 rounded-md flex items-center justify-center space-x-1 whitespace-nowrap
                 `} target="_blank" rel="nofollow sponsored noopener"><i class='bx bxs-chevron-down-circle text-white'></i><span className="text-white">Đọc Review</span></a>
              </div>
            </div>
          </div>)}
      </>
    )
  }
  return (
    <>
      {isSidebar ? <Sidebar listbets={listbets} /> : <MainContent listbets={listbets}
        />}
    </>
  )
}
