import Image from "next/image";
import { Inter } from "next/font/google";
import {
  DownOutlined,
  FacebookFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { useState, useRef, useEffect } from "react";
import {
  createFromIconfontCN,
  InstagramOutlined,
  GithubFilled,
  LikeOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //đóng mở menu account - start
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    // Thêm sự kiện "click" cho toàn bộ trang web
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  function handleAccountClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  //đóng mở menu account - end

  //đóng mở menu mobile - start
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  //đóng mở menu mobile - end

  //menu cà phê, trà sữa và soda -start
  const [activeTab, setActiveTab] = useState("coffee");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  //menu cà phê, trà sữa và soda -End
  return (
    <main className="min-h-screen">
      <div className="relative">
        <div id="header" className="z-50 absolute w-full top-0">
          <nav className="bg-gradient-to-b from-[#000000]/60 to-[#0A0A097B]/30 h-20 w-full ">
            <div id="pc-nav" className="max-sm:hidden flex items-center ">
              <div className="my-6 mx-20">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-full">
                <ul className="flex justify-around ">
                  <li className="text-3xl font-semibold text-[#ffffff]/[0.5] hover:text-[#ffffff]">
                    <a href="#">Trang chủ</a>
                  </li>
                  <li className="text-3xl font-semibold text-[#ffffff]/[0.5] hover:text-[#ffffff]">
                    <a href="#">Thực Đơn</a>
                  </li>
                  <li className="text-3xl font-semibold">
                    <a href="#">
                      <Image
                        src="/image/logo.png"
                        alt=""
                        width={72}
                        height={72}
                      />
                    </a>
                  </li>
                  <li className="text-3xl font-semibold text-[#ffffff]/[0.5] hover:text-[#ffffff]">
                    <a href="#">Ưu Đãi </a>
                  </li>
                  <li className="text-3xl font-semibold text-[#ffffff]/[0.5] hover:text-[#ffffff]">
                    <a href="#">Về Chúng Tôi </a>
                  </li>
                </ul>
              </div>
              <div className="mr-[96px]">
                <ul className="flex">
                  <li className="text-3xl font-semibold text-[#ffffff]">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li
                    id="account"
                    className="text-3xl font-semibold relative cursor-pointer ml-[40px]"
                    onClick={handleAccountClick}
                    ref={dropdownRef}
                  >
                    <Image
                      src="/image/Avatar.png"
                      alt=""
                      width={114}
                      height={80}
                    />
                    {isDropdownOpen && (
                      <div
                        id="dropdown-menu"
                        className="absolute w-52 h-auto bg-[#242424] top-[72px] right-[-76px]"
                      >
                        <div className="border-b-2 border-[#F68422]">
                          <h6 className="text-sm text-[#F68422] text-center pt-4">
                            Nguyễn Minh Tri
                          </h6>
                          <p className="text-xs text-[#ffffff]/[0.6] text-center pb-3">
                            ID: #12512
                          </p>
                        </div>
                        <ul>
                          <li className="hover:bg-[#F68422] font-sm text-white text-xs uppercase text-center py-4 text-[#ffffff]/[0.6] hover:text-[#ffffff]">
                            <a href="#">Trang chủ</a>
                          </li>
                          <li className="hover:bg-[#F68422] font-sm text-white text-xs uppercase text-center py-4 text-[#ffffff]/[0.6] hover:text-[#ffffff]">
                            <a href="#">Giỏ hàng</a>
                          </li>
                          <li className="hover:bg-[#F68422] font-sm text-white text-xs uppercase text-center py-4 text-[#ffffff]/[0.6] hover:text-[#ffffff]">
                            <a href="#">VOUCHER</a>
                          </li>
                          <li className="hover:bg-[#F68422] font-sm text-white text-xs uppercase text-center py-4 text-[#ffffff]/[0.6] hover:text-[#ffffff]">
                            <a href="#">Lịch sử</a>
                          </li>
                          <li className="hover:bg-[#F68422] font-sm text-white text-xs uppercase text-center py-4 text-[#ffffff]/[0.6] hover:text-[#ffffff]">
                            <a href="#">Cài đặt</a>
                          </li>
                          <li className="hover:bg-[#F68422] font-sm text-white text-xs uppercase text-center py-4 text-[#ffffff]/[0.6] hover:text-[#ffffff]">
                            <a href="#">Đăng xuất</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="mobile-menu"
              className="sm:hidden text-white flex justify-between h-full items-center mx-[48px]"
            >
              <div>
                <Image src="/image/logo.png" alt="" width={88} height={64} />
              </div>
              <div id="mobile-nav" className="relative w-[240px] ">
                <svg
                  id="open-menu"
                  onClick={handleOpenMenu}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-12 h-12 ml-auto "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* làm mờ màn hình khi mở menu */}
                {isOpen && (
                  <div
                    className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50"
                    onClick={handleCloseMenu}
                  />
                )}
                <div
                  id="nav-menu-mobile"
                  className={`bg-[#2E2E2E] absolute w-full p-[8px] left-[50px] h-[100vh] top-[-18px] ${
                    isOpen ? "" : "transform translate-x-full"
                  } transition-all duration-300`}
                  onClick={handleCloseMenu}
                >
                  <div className="border-[2px] w-[47px] ml-auto">
                    <svg
                      id="close-menu"
                      onClick={handleCloseMenu}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-11 h-11"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <ul>
                      <li className="py-[20px] mx-[12px] border-b-[1px] border-gray-200/25">
                        <a href="#">Thực Đơn</a>
                      </li>
                      <li className="py-[20px] mx-[12px] border-b-[1px] border-gray-200/25">
                        <a href="#">Tin Tức</a>
                      </li>
                      <li className="py-[20px] mx-[12px] border-b-[1px] border-gray-200/25">
                        <a href="#">Ưu Đãi</a>
                      </li>
                      <li className="py-[20px] mx-[12px] border-b-[1px] border-gray-200/25">
                        <a href="#">Về Chúng Tôi</a>
                      </li>
                      <li className="py-[20px] mx-[12px] border-b-[1px] border-gray-200/25">
                        <a href="#">Giỏ Hàng</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div
          id="banner"
          className="bg-[url('/image/banner.png')] bg-center bg-cover bg-no-repeat w-full max-sm:h-[100vh] h-[1280px] flex items-center absolute z-0 top-0"
        >
          <div className="sm:ml-[80px] max-sm:text-center  max-sm:mx-auto">
            <div className="">
              <h6 className="text-[30px] text-[#7F4924]">#Welcome To</h6>
              <p className="text-[#DCD7C9] max-sm:text-[32px] text-[82px] whitespace-pre-wrap leading-none font-medium">
                THE LANGTHANG <br></br>COFFEE HOUSE
              </p>
              <p className="text-[#ffffff]/[66%] text-[18px] tracking-[.1em] max-sm:mt-[16px] max-sm:text-[16px] max-sm:w-4/5 max-sm:mx-auto">
                không chỉ là coffee , chúng tôi bán cả sự trải nghiệm
              </p>
            </div>
            <div className="mt-[22px]  max-sm:hidden">
              <button className="text-[16px] py-[15px] px-[50px] bg-[#F68422] mr-[40px] font-bold rounded-lg">
                Đặt hàng
              </button>
              <a href="#" className="text-[#ffffff] underline decoration-solid">
                Xem video giới thiệu
              </a>
            </div>
            <div>
              <button className="text-[16px] py-[15px] px-[50px] bg-[#F68422] font-bold rounded-2xl mt-[36px] sm:hidden">
                Trải nghiệm
              </button>
            </div>
          </div>
        </div>
        <div className="absolute max-sm:w-full max-sm:top-[100vh] top-[1280px]">
          <div className="w-full h-[532px] max-sm:h-auto sm:flex justify-around items-center bg-black">
            <div className="sm:w-2/5 max-sm:w-11/12 max-sm:mx-auto">
              <h2 className="text-center text-[#F68422] max-sm:text-[#DCD7C9] text-[58px] max-sm:text-[24px] max-sm:mb-[12px] font-bold uppercase">
                Về không gian
              </h2>
              <p className="max-sm:mx-auto max-sm:w-11/12 text-justify text-white text-[20px] max-sm:text-[14px] max-sm:mb-[12px]">
                Không gian của LANGTHANG COFFEE được thiết kế với tông màu vàng
                ấm áp và thoải mái. Đồ nội thất được bố trí thông minh và tinh
                tế để mang lại sự thoải mái cho khách hàng. Bức tranh nghệ thuật
                treo trên tường cùng với đèn lồng pha lê tạo ra một không gian
                sang trọng và quyến rũ. Bạn có thể ngồi ở các góc ngồi riêng tư
                hoặc các bàn đơn tùy theo sở thích của mình. LANGTHANG COFFEE sẽ
                là một nơi lý tưởng để bạn tìm kiếm sự yên bình và thư giãn.
              </p>
            </div>
            <div className="max-sm:w-11/12 max-sm:mx-auto">
              <Image src="/image/slider.png" alt="" width={720} height={480} />
            </div>
          </div>
          <div className="bg-[url('/image/orange.png')] relative w-full h-[800px] grid place-items-center">
            <Image
              alt=""
              width={720}
              height={480}
              src="/image/GroupAds.png"
              className="mt-[128px] mb-[-128px] max-sm:hidden"
            />
            <Image
              alt=""
              width={256}
              height={480}
              src="/image/groupadsmb.png"
              className="mb-[-128px] sm:hidden"
            />
            <button className="border-solid border-black border-2 py-[16px] rounded-full w-[256px] font-bold mt-[px]">
              Cùng tìm hiểu thêm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block ml-[8px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div id="content" className="w-full h-auto bg-[#161311]">
            <div className="w-11/12 mx-auto">
              <h2 className="text-[#F68422] text-[60px] font-bold text-center sm:pt-[180px] pt-[46px] max-sm:w-3/5 max-sm:text-[40px] max-sm:text-start">
                Có gì trong thực đơn ?
              </h2>
              <ul className="mt-[68px] max-sm:flex max-sm:flex-wrap max-sm:w-4/5">
                <li
                  onClick={() => handleTabClick("coffee")}
                  className={`${
                    activeTab === "coffee" ? "active " : ""
                  } cursor-pointer text-white/50 sm:min-w-[156px] text-[14px] font-medium border-[1px] inline-block rounded-xl  text-center sm:px-[54px] py-[9px] max-sm:mr-[10px] max-sm:w-[40%] sm:mr-[20px]`}
                >
                  Cà phê
                </li>
                <li
                  onClick={() => handleTabClick("tea")}
                  className={`${
                    activeTab === "tea" ? "active " : ""
                  } cursor-pointer text-white/50 sm:min-w-[156px] text-[14px] font-medium border-[1px] inline-block rounded-xl  text-center sm:px-[54px] py-[9px] max-sm:mr-[10px] max-sm:w-[40%] sm:mr-[20px]`}
                >
                  Trà sữa
                </li>
                <li
                  onClick={() => handleTabClick("soda")}
                  className={`${
                    activeTab === "soda" ? "active " : ""
                  } cursor-pointer text-white/50 sm:min-w-[156px] text-[14px] font-medium border-[1px] inline-block rounded-xl  text-center sm:px-[54px] py-[9px] max-sm:mr-[10px] max-sm:w-[40%] sm:mr-[20px] max-sm:mt-[40px]`}
                >
                  Soda
                </li>
              </ul>
              {activeTab === "coffee" && (
                <ul
                  id="Coffee"
                  className="mt-[58px] flex justify-between max-sm:flex-wrap"
                >
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/capheden.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Đen
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={48}
                        src={"/image/caphesua.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Sữa
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/caphethuong.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Thường
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/caphephomai.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Phô Mai
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/millo.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Milo
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
              {activeTab === "tea" && (
                <ul
                  id="milk-tea"
                  className="mt-[58px] flex justify-between max-sm:flex-wrap"
                >
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/trasua.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Đen
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/trasua.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Đen
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/trasua.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Đen
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/trasua.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Đen
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/trasua.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Đen
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
              {activeTab === "soda" && (
                <ul
                  id="soda"
                  className="mt-[58px] flex justify-between max-sm:flex-wrap"
                >
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/soda.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Đen
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/soda.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Đen
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/soda.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Đen
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/soda.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Đen
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[17.5%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[30px]">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={128}
                        height={62}
                        src={"/image/soda.png"}
                        className="p-[24px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[13px]">
                            Cà Phê Đen
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[10px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px]">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <div className="mt-[130px] w-11/12 mx-auto">
              <h2 className="text-[#F68422] text-[60px] font-semibold text-center max-sm:text-[36px] max-sm:font-extrabold max-sm:w-11/12 max-sm:mx-auto">
                Cùng với những ưu đãi
              </h2>
              <div className="mt-[60px] ">
                <div className="sm:flex justify-between">
                  <Image
                    alt=""
                    width={520}
                    height={520}
                    src="/image/uudai1.png"
                    className="max-sm:mx-auto"
                  />
                  <div className="sm:ml-[64px] bg-[url('/image/orange.png')] rounded-3xl sm:w-[60%] max-sm:mt-[32px]">
                    <div>
                      <h1 className="font-extrabold text-[58px] sm:ml-[5%] mt-[2%] max-sm:text-[30px] max-sm:text-center max-sm:pt-[12px]">
                        Ưu đãi #1
                      </h1>
                      <p className="text-justify text-[170%] mx-[5%] max-sm:text-[16px]">
                        Sự kết hợp giữa Cappuccino và bánh bông lan nhân khô nho
                        là một cách tuyệt vời để kết hợp hương vị ngọt ngào và
                        tươi mát. Cappucino thơm ngon và mát lạnh sẽ làm dịu cơn
                        khát vào những ngày nóng bức. Bánh bông lan nhân khô nho
                        sẽ tạo ra một vị ngọt dịu, cùng với vị giòn của bánh,
                        mang lại trải nghiệm thưởng thức đầy tuyệt vời. Hãy đến
                        LangThang Coffee của chúng tôi để thưởng thức Ưu Đãi này
                        ngay hôm nay!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-[32px] sm:mt-[64px] max-sm:flex-col max-sm:flex-col-reverse">
                  <div className="sm:mr-[64px] bg-[url('/image/orange.png')] rounded-3xl sm:w-[60%] max-sm:mt-[32px] max-sm:pb-[12px]">
                    <h1 className="font-extrabold text-[58px] ml-[5%] mt-[2%] max-sm:text-[30px]">
                      Ưu đãi #2
                    </h1>
                    <p className="text-justify text-[170%] mx-[5%] max-sm:text-[16px]">
                      Cappuccino kết hợp với bánh sừng bò mặn tạo ra sự kết hợp
                      ngon miệng giữa hương vị ngọt và mặn. Bạn có thể thưởng
                      thức miếng bánh sừng bò mặn giòn tan kèm với một cốc
                      Cappuccino thơm ngon và mát lạnh để tạo ra một trải nghiệm
                      thưởng thức thực phẩm hoàn hảo.
                    </p>
                  </div>
                  <Image
                    alt=""
                    width={520}
                    height={520}
                    src="/image/uudai2.png"
                    className="max-sm:mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[100px] w-11/12 mx-auto">
              <div className="text-center">
                <h1 className="text-[#F68422] text-[72px] font-bold tracking-wide max-sm:text-[32px] max-sm:font-extrabold">
                  Bánh Ngọt
                </h1>
                <h1 className="text-[#F68422] text-[72px] font-bold tracking-wide max-sm:text-[32px] max-sm:font-extrabold">
                  Sao lại không?
                </h1>
              </div>
              <div>
                <ul
                  id="Coffee"
                  className="mt-[58px] flex flex-wrap justify-between"
                >
                  <li className="w-[21%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[24px] ">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={256}
                        height={62}
                        src={"/image/banhdemo.png"}
                        className="sm:p-[24px] max-sm:py-[24px] max-sm:px-[8px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[12px]">
                            Bánh
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[12px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px] ">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[21%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[24px] ">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={256}
                        height={48}
                        src={"/image/banhdemo.png"}
                        className="sm:p-[24px] max-sm:py-[24px] max-sm:px-[8px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[12px]">
                            Bánh
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[12px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px] ">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[21%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[24px] ">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={256}
                        height={62}
                        src={"/image/banhdemo.png"}
                        className="sm:p-[24px] max-sm:py-[24px] max-sm:px-[8px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[12px]">
                            Bánh
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[12px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px] ">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[21%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[24px] ">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={256}
                        height={62}
                        src={"/image/banhdemo.png"}
                        className="sm:p-[24px] max-sm:py-[24px] max-sm:px-[8px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[12px]">
                            Bánh
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[12px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px] ">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[21%] mt-[4%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[24px] ">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={256}
                        height={62}
                        src={"/image/banhdemo.png"}
                        className="sm:p-[24px] max-sm:py-[24px] max-sm:px-[8px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[12px]">
                            Bánh
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[12px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px] ">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[21%] mt-[4%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[24px] ">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={256}
                        height={62}
                        src={"/image/banhdemo.png"}
                        className="sm:p-[24px] max-sm:py-[24px] max-sm:px-[8px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[12px]">
                            Bánh
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[12px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px] ">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[21%] mt-[4%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[24px] ">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={256}
                        height={0}
                        src={"/image/banhdemo.png"}
                        className="sm:p-[24px] max-sm:py-[24px] max-sm:px-[8px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[12px]">
                            Bánh
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[12px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px] ">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="w-[21%] mt-[4%] bg-[#2E2E2E] pt-[10px] rounded-xl max-sm:w-[48%] max-sm:mb-[24px] ">
                    <div
                      id="top"
                      className="flex justify-center bg-[#242424] w-[90%] mx-auto mb-[10px] rounded-xl h-[217px]"
                    >
                      <Image
                        alt=""
                        width={256}
                        height={62}
                        src={"/image/banhdemo.png"}
                        className="sm:p-[24px] max-sm:py-[24px] max-sm:px-[8px]"
                      />
                    </div>
                    <div id="bottom ">
                      <div className="flex justify-between w-[90%] mx-auto">
                        <div>
                          <h3 className="text-white text-[16px] max-sm:text-[12px]">
                            Bánh
                          </h3>
                          <h4 className="text-white text-[12px] max-sm:text-[12px]">
                            25.000 VNĐ
                          </h4>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#F68422"
                          className="w-8 h-8 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#F68422] w-[90%] mt-[12px] rounded-xl h-[32px] mb-[12px] max-sm:text-[12px] ">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[url('/image/orange.png')] mt-[80px] w-full ">
              <div className="w-11/12 mx-auto">
                <div className="text-center pt-[80px]">
                  <h1 className="text-black tracking-wide font-semibold text-[72px] uppercase max-sm:text-[36px] max-sm:font-bold">
                    Vì sao chúng tôi là nơi lí
                  </h1>
                  <h1 className="text-black tracking-wide font-semibold text-[72px] uppercase max-sm:text-[36px] max-sm:font-bold">
                    tưởng dành cho bạn
                  </h1>
                </div>
                <div className="mt-[45px] sm:flex justify-between items-center mb-[62px]">
                  <Image
                    src="/image/vecafe.png"
                    width={462}
                    height={0}
                    alt=""
                    className="max-sm:rounded-3xl"
                  />
                  <div className="sm:ml-[80px] ">
                    <h1 className="underline-offset-4 underline text-[48px] font-bold uppercase max-sm:text-center max-sm:text-[36px]">
                      về cà phê
                    </h1>
                    <p className="text-justify text-[22px] font-medium sm:mt-[44px] ">
                      Cà phê tại quán của chúng tôi được pha chế từ những hạt cà
                      phê chọn lọc kỹ càng và rang theo phương pháp truyền thống
                      để đảm bảo hương vị đặc trưng và chất lượng tuyệt vời. Đến
                      với quán cà phê của chúng tôi, bạn sẽ được thưởng thức một
                      tách cà phê đậm đà và thơm ngon nhất.
                    </p>
                  </div>
                </div>
                <div className="mt-[45px] flex justify-between items-center mb-[62px] max-sm:flex-col max-sm:flex-col-reverse">
                  <div className="sm:mr-[80px]">
                    <h1 className="underline-offset-4 underline text-[48px] font-bold uppercase max-sm:text-[36px] max-sm:mt-[15px] max-sm:text-center">
                      về Môi Trường
                    </h1>
                    <p className="text-justify text-[22px] font-medium sm:mt-[44px]">
                      Quán của chúng tôi có không gian ấm cúng và thiết kế sang
                      trọng, tạo ra một môi trường thư giãn và đầy cảm hứng cho
                      khách hàng. Bạn sẽ có cơ hội thưởng thức cà phê tuyệt vời
                      trong một không gian thoải mái và đầy hứng khởi. Hãy ghé
                      thăm quán của chúng tôi để tận hưởng không gian đẹp và
                      thoải mái nhất.
                    </p>
                  </div>
                  <Image
                    src="/image/vemoitruong.png"
                    width={560}
                    height={0}
                    alt=""
                    className="max-sm:rounded-3xl"
                  />
                </div>
                <div className="mt-[45px] sm:flex justify-between items-center pb-[110px]">
                  <Image
                    src="/image/vegiaohang.png"
                    width={462}
                    height={0}
                    alt=""
                    className="max-sm:w-4/5 max-sm:mx-auto max-sm:rounded-3xl"
                  />
                  <div className="sm:ml-[80px] max-sm:mt-[28px]">
                    <h1 className="underline-offset-4 underline text-[48px] font-bold uppercase max-sm:text-[36px] max-sm:text-center">
                      về Giao Hàng
                    </h1>
                    <p className="text-justify text-[22px] font-medium sm:mt-[44px] ">
                      Quán của chúng tôi có không gian ấm cúng và thiết kế sang
                      trọng, tạo ra một môi trường thư giãn và đầy cảm hứng cho
                      khách hàng. Bạn sẽ có cơ hội thưởng thức cà phê tuyệt vời
                      trong một không gian thoải mái và đầy hứng khởi. Hãy ghé
                      thăm quán của chúng tôi để tận hưởng không gian đẹp và
                      thoải mái nhất.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-11/12 mx-auto bg-[#161311] sm:flex justify-between pt-[110px] pb-[135px]">
              <div className="sm:w-[47%]">
                <h2 className="text-[#F68422] text-[28px] font-bold text-center max-sm:text-[20px]">
                  Ưu đãi Dành riêng
                </h2>
                <h2 className="text-[#F68422] text-[28px] font-bold text-center max-sm:text-[20px]">
                  Cho khách hàng qua website
                </h2>
                <p className="text-white text-justify text-[20px] max-sm:text-[15px] max-sm:mt-[32px] max-sm:italic">
                  Chúng tôi rất cảm kích sự quan tâm của bạn đến LangThang
                  Coffee House và mong muốn có cơ hội chào đón bạn tới thưởng
                  thức các loại nước uống và bánh ngọt tuyệt vời của chúng tôi.
                  Hãy để lại thông tin của bạn để nhận ngay ưu đãi đặc biệt của
                  chúng tôi - giảm ngay 30% trên tổng hóa đơn khi mua nước và
                  bánh tại cửa hàng. Bằng cách đăng ký, bạn sẽ trở thành một
                  phần của cộng đồng LangThang và được cập nhật về những sự kiện
                  và ưu đãi đặc biệt sớm nhất. Chúng tôi cam kết bảo mật thông
                  tin của bạn và chỉ sử dụng để gửi cho bạn các ưu đãi và tin
                  tức mới nhất từ LangThang Coffee House. Một lần nữa, chúng tôi
                  rất trân trọng sự quan tâm của bạn và hy vọng được đón tiếp
                  bạn tại LangThang Coffee House sớm nhất!
                </p>
              </div>
              <div className="sm:w-[47%] max-sm:mt-[32px]">
                <h2 className="text-[#F68422] text-[28px] font-bold text-center ">
                  Thông Tin
                </h2>
                <form className="flex flex-col mt-[35px]">
                  <div className="mx-auto">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Họ và tên khách hàng"
                      className="px-[72px] rounded-3xl bg-[#000000] mb-[48px] py-[14px] text-white"
                    />
                  </div>
                  <div className="mx-auto">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Gmail khách hàng"
                      className="px-[72px] rounded-3xl bg-[#000000] mb-[48px] py-[14px] text-white"
                    />
                  </div>
                  <div className="mx-auto">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Lời nhắn của khách hàng"
                      className="px-[84px] rounded-3xl bg-[#000000] resize-none sm:py-[14px] py-[2px] text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#F68422] w-[150px] mx-auto mt-[48px] rounded-2xl py-[10px]"
                  >
                    Gửi
                  </button>
                </form>
              </div>
            </div>
            <div className="bg-[url('/image/orange.png')] pt-[80px] w-full pb-[120px]">
              <div className="w-11/12 mx-auto text-center">
                <h1 className="font-semibold text-[84px] uppercase max-sm:text-[40px]">
                  Và Chúng tôi
                </h1>
                <div className="mt-[84px] flex justify-between max-sm:hidden">
                  <div className="w-1/4 h-[432px] bg-[#2E2E2E] rounded-2xl flex flex-col ">
                    <div className="pt-[50px] mx-auto">
                      <Image
                        alt=""
                        width={156}
                        height={156}
                        src={"/image/vechungtoi.png"}
                      />
                    </div>
                    <div className="pt-[24px]">
                      <h3 className="text-white font-semibold text-[24px]">
                        Nguyễn Minh Trí
                      </h3>
                      <h3 className="text-white font-medium text-[21px]">
                        Manager
                      </h3>
                    </div>
                    <div>
                      <Space className="pt-[50px]">
                        <a href="#">
                          <InstagramOutlined className="text-white text-[35px]" />
                        </a>
                        <a href="#">
                          <IconFont
                            type="icon-facebook"
                            className="text-white text-[35px] mx-[32px]"
                          />
                        </a>
                        <a href="#">
                          <GithubFilled className="text-white text-[35px]" />
                        </a>
                      </Space>
                    </div>
                  </div>
                  <div className="w-1/4 h-[432px] bg-[#2E2E2E] rounded-2xl flex flex-col ">
                    <div className="pt-[50px] mx-auto">
                      <Image
                        alt=""
                        width={156}
                        height={156}
                        src={"/image/vechungtoi.png"}
                      />
                    </div>
                    <div className="pt-[24px]">
                      <h3 className="text-white font-semibold text-[24px]">
                        Nguyễn Minh Trí
                      </h3>
                      <h3 className="text-white font-medium text-[21px]">
                        Manager
                      </h3>
                    </div>
                    <div>
                      <Space className="pt-[50px]">
                        <a href="#">
                          <InstagramOutlined className="text-white text-[35px]" />
                        </a>
                        <a href="#">
                          <IconFont
                            type="icon-facebook"
                            className="text-white text-[35px] mx-[32px]"
                          />
                        </a>
                        <a href="#">
                          <GithubFilled className="text-white text-[35px]" />
                        </a>
                      </Space>
                    </div>
                  </div>
                  <div className="w-1/4 h-[432px] bg-[#2E2E2E] rounded-2xl flex flex-col ">
                    <div className="pt-[50px] mx-auto">
                      <Image
                        alt=""
                        width={156}
                        height={156}
                        src={"/image/vechungtoi.png"}
                      />
                    </div>
                    <div className="pt-[24px]">
                      <h3 className="text-white font-semibold text-[24px]">
                        Nguyễn Minh Trí
                      </h3>
                      <h3 className="text-white font-medium text-[21px]">
                        Manager
                      </h3>
                    </div>
                    <div>
                      <Space className="pt-[50px]">
                        <a href="#">
                          <InstagramOutlined className="text-white text-[35px]" />
                        </a>
                        <a href="#">
                          <IconFont
                            type="icon-facebook"
                            className="text-white text-[35px] mx-[32px]"
                          />
                        </a>
                        <a href="#">
                          <GithubFilled className="text-white text-[35px]" />
                        </a>
                      </Space>
                    </div>
                  </div>
                </div>
                <div className="sm:hidden">
                  <div className="mt-[78px]">
                    <Image
                      src="/image/aboutus.png"
                      alt=""
                      width={256}
                      height={64}
                      className="mx-auto"
                    />
                    <div className="mt-[18px] font-medium">
                      <h1 className="text-[24px]">Nguyễn Minh Trí</h1>
                      <h2 className="text-[21px]">Manager</h2>
                    </div>
                  </div>
                  <div className="mt-[78px]">
                    <Image
                      src="/image/aboutus.png"
                      alt=""
                      width={256}
                      height={64}
                      className="mx-auto"
                    />
                    <div className="mt-[18px] font-medium">
                      <h1 className="text-[24px]">Nguyễn Minh Trí</h1>
                      <h2 className="text-[21px]">Manager</h2>
                    </div>
                  </div>
                  <div className="mt-[78px]">
                    <Image
                      src="/image/aboutus.png"
                      alt=""
                      width={256}
                      height={64}
                      className="mx-auto"
                    />
                    <div className="mt-[18px] font-medium">
                      <h1 className="text-[24px]">Nguyễn Minh Trí</h1>
                      <h2 className="text-[21px]">Manager</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-11/12 mx-auto bg-[#161311] pt-[50px]">
              <div>
                <h1 className="text-[#F68422] text-[60px] font-semibold text-center">
                  Khách hàng nghĩ gì về chúng tôi
                </h1>
                <p className="text-[#ffffff] sm:w-2/5 text-[26px] font-semibold text-center mx-auto mt-[44px] opacity-60">
                  “Sự hài lòng của các bạn chính là sự thành công lớn nhất của
                  chúng tôi”
                </p>
              </div>
              <div className="sm:flex justify-around overflow-hidden flex-nowrap">
                <div className="relative  sm:w-1/4 mt-[120px]">
                  <div className="absolute top-[-56px] left-1/2 transform -translate-x-1/2">
                    <Image
                      alt=""
                      src={"/image/khachnghigivechungtoi.png"}
                      width={115}
                      height={115}
                    />
                  </div>
                  <div className="rounded-2xl text-white text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-no-repeat bg-cover">
                    <h1 className="pt-[80px] text-[16px] font-medium ">
                      Vũ Thắng
                    </h1>
                    <h2 className="mt-[-4px] text-12px opacity-90">
                      Doanh nhân
                    </h2>
                    <a href="#" className="">
                      <LikeOutlined className="text-[30px] pt-[10px]" />
                    </a>
                    <p className="text-[14px] w-11/12 mx-auto pt-[12px] pb-[20px] opacity-90">
                      Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Doanh số bán
                      hàng của chúng tôi tăng lên đáng kể. Kiểu, khách hàng cũng
                      phần nào phản hồi tích cực. Hy vọng chúng ta có nhiều cơ
                      hội làm việc với nhau hơn.
                    </p>
                  </div>
                </div>
                <div className="relative  sm:w-1/4 mt-[120px] max-sm:hidden">
                  <div className="absolute top-[-56px] left-1/2 transform -translate-x-1/2">
                    <Image
                      alt=""
                      src={"/image/khachnghigivechungtoi.png"}
                      width={115}
                      height={115}
                    />
                  </div>
                  <div className="rounded-2xl text-white text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-no-repeat bg-cover">
                    <h1 className="pt-[80px] text-[16px] font-medium ">
                      Vũ Thắng
                    </h1>
                    <h2 className="mt-[-4px] text-12px opacity-90">
                      Doanh nhân
                    </h2>
                    <a href="#" className="">
                      <LikeOutlined className="text-[30px] pt-[10px]" />
                    </a>
                    <p className="text-[14px] w-11/12 mx-auto pt-[12px] pb-[20px] opacity-90">
                      Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Doanh số bán
                      hàng của chúng tôi tăng lên đáng kể. Kiểu, khách hàng cũng
                      phần nào phản hồi tích cực. Hy vọng chúng ta có nhiều cơ
                      hội làm việc với nhau hơn.
                    </p>
                  </div>
                </div>
                <div className="relative  sm:w-1/4 mt-[120px] max-sm:hidden">
                  <div className="absolute top-[-56px] left-1/2 transform -translate-x-1/2">
                    <Image
                      alt=""
                      src={"/image/khachnghigivechungtoi.png"}
                      width={115}
                      height={115}
                    />
                  </div>
                  <div className="rounded-2xl text-white text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-no-repeat bg-cover">
                    <h1 className="pt-[80px] text-[16px] font-medium ">
                      Vũ Thắng
                    </h1>
                    <h2 className="mt-[-4px] text-12px opacity-90">
                      Doanh nhân
                    </h2>
                    <a href="#" className="">
                      <LikeOutlined className="text-[30px] pt-[10px]" />
                    </a>
                    <p className="text-[14px] w-11/12 mx-auto pt-[12px] pb-[20px] opacity-90">
                      Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Doanh số bán
                      hàng của chúng tôi tăng lên đáng kể. Kiểu, khách hàng cũng
                      phần nào phản hồi tích cực. Hy vọng chúng ta có nhiều cơ
                      hội làm việc với nhau hơn.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex pb-[78px]">
                <button className="mx-auto mt-[65px] bg-[#F68422] rounded-3xl px-[36px] py-[12px]">
                  Đóng góp ý kiến
                </button>
              </div>
            </div>
            <div className="bg-[url('/image/black.png')] w-full h-[700px] flex item-center justify-center">
              <div className="text-center m-auto">
                <Image
                  alt=""
                  width={126}
                  height={126}
                  src={"/image/logo.png"}
                  className="mx-auto"
                />
                <h1 className="text-[#F68422] text-[80px] font-semibold max-sm:text-[32px] max-sm:mt-[32px]">
                  “Bởi vì chúng tôi có thể.”
                </h1>
              </div>
            </div>
            <div className="w-full bg-[#0C0907] pb-[70px]">
              <div className="w-11/12 mx-auto">
                <div className="pt-[24px]">
                  <Image
                    alt=""
                    width={126}
                    height={66}
                    src={"/image/logo.png"}
                  />
                  <p className="pt-[24px] text-[20px] font-light text-white w-[40%] leading-[24px] opacity-80">
                    Nơi đây là không gian, và cà phê là phương tiện để chúng ta
                    sát lại gần nhau hơn
                  </p>
                </div>
                <div className="flex mt-[46px] max-sm:flex-wrap">
                  <div className="sm:w-[38%]">
                    <h1 className="text-[24px] text-[#F68422] font-semibold">
                      Thông tin liên hệ
                    </h1>
                    <div className="text-white pt-[8px] text-[18px]">
                      <h3>
                        <EnvironmentOutlined className="text-[28px] mr-[4px]" />{" "}
                        Hồ Chí Minh
                      </h3>
                      <p className="pt-[4px] opacity-80 ml-[8%]">
                        391A Đ. Nam Kỳ Khởi Nghĩa, Phường 14, Quận 3
                      </p>
                    </div>
                    <div className="text-white pt-[12px] text-[18px]">
                      <h3>
                        <MailOutlined className="text-[28px] mr-[4px]" /> Email
                      </h3>
                      <p className="pt-[4px] opacity-80 ml-[8%]">
                        Thelangthang96@gmail.com
                      </p>
                    </div>
                    <div className="text-white pt-[20px] text-[28px]">
                      <a href="#">
                        <FacebookFilled />
                      </a>
                      <a href="#">
                        <InstagramOutlined className="ml-[30px]" />
                      </a>
                      <a href="#">
                        <TwitterCircleFilled className="ml-[30px]" />
                      </a>
                    </div>
                  </div>
                  <div className="w-[15%] max-sm:w-[48%] max-sm:mt-[50px]">
                    <h1 className="text-[24px] text-[#F68422] font-semibold">
                      Sản phẩm
                    </h1>
                    <ul className="list-none">
                      <a href="#">
                        <li className="text-[18px] text-white opacity-70">
                          Cà Phê
                        </li>
                      </a>
                      <a href="#">
                        <li className="text-[18px] text-white opacity-70">
                          Sữa tươi
                        </li>
                      </a>
                      <a href="#">
                        <li className="text-[18px] text-white opacity-70">
                          Trà sữa
                        </li>
                      </a>
                      <a href="#">
                        <li className="text-[18px] text-white opacity-70">
                          Soda
                        </li>
                      </a>
                      <a href="#">
                        <li className="text-[18px] text-white opacity-70">
                          Bánh ngọt
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="w-[15%] max-sm:w-[48%] max-sm:mt-[50px]">
                    <h1 className="text-[24px] text-[#F68422] font-semibold">
                      Giúp đỡ
                    </h1>
                    <ul className="list-none">
                      <a href="#">
                        <li className="text-[18px] text-white opacity-70">
                          Tìm kiếm
                        </li>
                      </a>
                      <a href="#">
                        <li className="text-[18px] text-white opacity-70">
                          Giới thiệu
                        </li>
                      </a>
                      <a href="#">
                        <li className="text-[18px] text-white opacity-70">
                          Tuyển dụng
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="sm:w-[25%] max-sm:mt-[50px]">
                    <h1 className="text-[24px] text-[#F68422] font-semibold">
                      Khác
                    </h1>
                    <p className="text-[18px] text-white opacity-70">
                      Đăng Ký Nhận Khuyến Mãi
                    </p>
                    <div>
                      <input
                        type="email"
                        placeholder="Nhập email của bạn"
                        className="text-white mt-[10px] py-[10px] px-[18px] border border-neutral-300 bg-black rounded-3xl w-full"
                      ></input>
                      <button
                        type="submit"
                        className="mt-[12px] rounded-3xl py-[4px] bg-[#F68422] w-[25%]"
                      >
                        Gửi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
