import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Charter_1 from './Charter_1';
import Charter_2 from './Charter_2';
import Charter_3 from './Cherter_3';
import Charter_4 from './Cherter_4';
import Charter_5 from './Cherter_5';

// animation
export function FadeInWhenVisible({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // สำหรับเมนูหัวข้องาน

  const dropdownRef = useRef(null); // 👉 ref สำหรับ dropdown

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  // 👉 ปิด dropdown เมื่อคลิกนอก dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false); // ปิด dropdown ด้วย
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="z-50 relative bg-amber-200 shadow-lg">
        <div className="flex flex-wrap justify-between items-center mx-auto p-4 max-w-screen-xl">
          <a href="#Home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./img/logoVRU.png" className="hidden md:block h-16" alt="Logo VRU" />
            <div className="flex flex-col">
              <span className="py-1 font-black text-lg md:text-xl whitespace-nowrap">
                ระบบบริหารจัดการร้านเติมรักเพ็ทมาร์ท
              </span>
              <span className="font-semibold text-xs whitespace-nowrap">
                คณะวิทยาศาสตร์และเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์
              </span>
              <span className="font-semibold text-xs whitespace-nowrap">
                มหาวิทยาลัยราชภัฎวไลยอลงกรณ์ในพระบรมราชูปถัมภ์
              </span>
            </div>
          </a>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden inline-flex z-50 justify-center items-center bg-transparent hover:bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 w-10 h-10 text-amber-900 text-sm"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <div className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block z-50`} id="navbar-default">
            <ul className="flex md:flex-row flex-col rtl:space-x-reverse md:space-x-8 bg-gray-50 md:bg-transparent mt-4 md:mt-0 p-4 md:p-0 border border-amber-900 md:border-0 rounded-lg font-medium">
              {/* เมนูบนจอเล็ก */}
              <li className="md:hidden">
                <ul>
                  <li><a href="#Charter_1" className="block hover:bg-gray-100 px-3 py-2 rounded-sm text-gray-900">บทนำ</a></li>
                  <li><a href="#Charter_2" className="block hover:bg-gray-100 px-3 py-2 rounded-sm text-gray-900">ทฤษฎีและเทคโนโลยีที่เกี่ยวข้อง</a></li>
                  <li><a href="#Charter_3" className="block hover:bg-gray-100 px-3 py-2 rounded-sm text-gray-900">วิธีดำเนินการ</a></li>
                  <li><a href="#Charter_4" className="block hover:bg-gray-100 px-3 py-2 rounded-sm text-gray-900">ผลการประเมิน</a></li>
                  <li><a href="#Charter_5" className="block hover:bg-gray-100 px-3 py-2 rounded-sm text-gray-900">บทสรุปและข้อเสนอแนะ</a></li>
                </ul>
              </li>

              {/* เมนูบนจอใหญ่ (dropdown แบบคลิก) */}
              <li className="hidden md:block relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center font-black text-gray-900 hover:text-amber-700"
                >
                  หัวข้องาน
                  <svg className="ml-2 w-2.5 h-2.5" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="z-9999 absolute bg-white shadow-md mt-2 rounded-md w-48 text-gray-700 text-sm">
                    <li><a href="#Charter_1" className="block hover:bg-gray-100 px-4 py-2">บทนำ</a></li>
                    <li><a href="#Charter_2" className="block hover:bg-gray-100 px-4 py-2">ทฤษฎีและเทคโนโลยีที่เกี่ยวข้อง</a></li>
                    <li><a href="#Charter_3" className="block hover:bg-gray-100 px-4 py-2">วิธีดำเนินการ</a></li>
                    <li><a href="#Charter_4" className="block hover:bg-gray-100 px-4 py-2">ผลการประเมิน</a></li>
                    <li><a href="#Charter_5" className="block hover:bg-gray-100 px-4 py-2">บทสรุปและข้อเสนอแนะ</a></li>
                  </ul>
                )}
              </li>

              <li>
                <a href="#Test_progarm" className="block md:hover:bg-transparent hover:bg-gray-100 md:p-0 px-3 py-2 md:border-0 rounded-sm md:font-black text-gray-900 md:hover:text-amber-700">การทดสอบระบบ</a>
              </li>
              <li>
                <a href="#Producer" className="block md:hover:bg-transparent hover:bg-gray-100 md:p-0 px-3 py-2 md:border-0 rounded-sm md:font-black text-gray-900 md:hover:text-amber-700">สมาชิก</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="z-40 fixed inset-0 bg-black/70 bg-opacity-50 backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-amber-100 p-4 rounded-t-4xl">
      <div className="flex flex-wrap justify-between items-center mx-auto p-4 max-w-screen-xl">

        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
          <div className="col-span-3 md:border-r">
            <h1 className="font-bold text-2xl">การพัฒนาเว็บไชต์</h1>
            <div className="px-6 py-4">
              <p className="mb-4 text-sm text-justify indent-8 leading-loose">
                เว็บไซต์นี้พัฒนาด้วย React.JS, Vite.JS และ TailwindCSS โดยได้นำข้อมูลมาจากโครงงานระบบบริหารจัดการร้านเติมรักเพ็ทมาร์ท ทางคณะผู้จัดทำขอขอบพระคุณ อาจารย์ณัฐรดี อนุพงค์ อาจารย์ที่ปรึกษาโครงงาน
                ที่ให้คำแนะนำอย่างใกล้ชิด ตรวจสอบ และชี้แนะแนวทางด้วยความเอาใจใส่ ทำให้โครงงานมีทิศทางที่ชัดเจนและสมบูรณ์ยิ่งขึ้น
              </p>

              <p className="mb-4 text-sm text-justify indent-8 leading-loose">
                ขอขอบคุณอาจารย์วิศรุต ขวัญคุ้ม ประธานกรรมการสอบโครงงาน ที่ให้ข้อเสนอแนะอันเป็นประโยชน์ต่อการปรับปรุงและพัฒนาโครงงานให้มีคุณภาพ
              </p>

              <p className="mb-4 text-sm text-justify indent-8 leading-loose">
                ขอขอบคุณ คณะวิทยาศาสตร์และเทคโนโลยี และ สาขาวิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ในพระบรมราชูปถัมภ์
                ที่สนับสนุนด้านวิชาการ อุปกรณ์ และสถานที่ในการดำเนินงาน
              </p>

              <p className="text-sm text-justify indent-8 leading-loose">
                ขอขอบคุณร้านเติมรักเพ็ทมาร์ท ที่ให้ความร่วมมือในการให้ข้อมูลและคำแนะนำที่เป็นประโยชน์ต่อการพัฒนาระบบ รวมถึงขอขอบคุณเพื่อนและครอบครัว
                ที่ให้กำลังใจและสนับสนุนอย่างต่อเนื่องตลอดการทำงาน
              </p>
            </div>
          </div>

          <div className="col-span-1 mx-4 md:border-hidden border-t">
            <h1 className="mt-4 md:mt-0 font-bold text-2xl text-center">ข้อมูลผู้พัฒนาเว็บไซต์</h1>
            <div className="flex justify-center items-center m-4">
              <div className="relative flex justify-center items-center bg-amber-900/10 hover:bg-amber-500 shadow-inner backdrop-blur-sm rounded-full w-44 h-44">
                <img
                  src="./img/person.png"
                  alt="person_create_web"
                  className="z-10 rounded-full w-40 h-40"
                />
              </div>
            </div>
            <div className="flex flex-col items-center text-justify">
              <span className="font-bold text-md">นายนพรัตน์ มุณีอุปถัมภ์</span>
              <span className="text-sm">คณะวิทยาศาสตร์และเทคโนโลยี </span>
              <span className="text-sm">สาขาวิทยาการคอมพิวเตอร์</span>

              <span className="mt-2 font-bold text-sm">ข้อมูลติดต่อ</span>
              <div className="flex flex-col justify-between text-sm">
                <div className="flex m-1">
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-amber-900">
                      <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <a href="mailto:offaof2002@gmail.com?subject " className="hover:text-amber-900">
                    offaof2002@gmail.com
                  </a>
                </div>
                <div className="flex m-1">
                  <span className="mx-2">
                    <svg className="size-6 text-amber-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  >  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                  </span>
                  <a href="https://github.com/Ragiinee" className="hover:text-amber-900">
                    Ragiinee
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export function Producer() {

  const [activeId, setActiveId] = useState(2);

  const members = [
    {
      id: 1,
      name: "นายนพรัตน์ มุณีอุปถัมภ์",
      email: "nopparat.mu@vru.ac.th",
      img: "./img/person.png",
    },
    {
      id: 2,
      name: "นายสุวาทิน ขยายวงศ์",
      email: "suwartin.ka@vru.ac.th",
      img: "./img/suwathem.png",
    },
    {
      id: 3,
      name: "นายนิธิวิทย์ เขียวทองเงินดี",
      email: "nitiwit.keaw@vru.ac.th",
      img: "./img/Nithiwit.png",
    },
    {
      id: 4,
      name: "พิทักษ์บุญ ขุนไกร",
      email: "pitiakboon.kun@vru.ac.th",
      img: "./img/Pitakboon.png"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-8 h-full md:h-[420px]" id="Producer">
      <div className="col-span-1 md:border-r">
        <FadeInWhenVisible>

          <h1 className="font-black text-2xl text-center">อาจารย์ที่ปรึกษากลุ่ม</h1>
          <div className="flex justify-center items-center m-4">
            <div className="relative flex justify-center items-center bg-amber-900/10 hover:bg-amber-500 shadow-inner backdrop-blur-sm rounded-full w-50 h-50 overflow-hidden">
              <img
                src="https://sci.vru.ac.th/assets/images/people/img_20241128092522000000_1732760722306_edit.jpg"
                alt="teacher"
                className="z-10 mt-20 rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-justify">
            <span className="font-bold text-md">อาจารย์ณัฐรดี อนุพงค์</span>
            <span className="text-sm">คณะวิทยาศาสตร์และเทคโนโลยี </span>
            <span className="text-sm">สาขาวิทยาการคอมพิวเตอร์</span>

            <div className="flex flex-col justify-between text-sm">
              <div className="flex m-1">
                <span className="mx-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-amber-900">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </span>
                <a href="#" className="hover:text-amber-900">
                  natradee@vru.ac.th
                </a>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
      <div className="col-span-2">
        <FadeInWhenVisible>
          <h1 className="font-black text-2xl text-center">สมาชิกผู้จัดทำ</h1>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-4 p-4">
            {members.map((member) => (
              <div key={member.id} className="col-span-1">
                <button onClick={() => setActiveId(member.id)} className="w-full cursor-pointer">
                  <div className="flex justify-center items-center m-4">
                    <div className={`relative rounded-full overflow-hidden  duration-300 ${activeId === member.id ? "w-50 h-50" : "w-36 h-36"}`}>
                      <img
                        src={member.img}
                        alt={member.name}
                        className={`z-10  rounded-full transition-all duration-300 grayscale ${activeId === member.id ? "grayscale-0" : "grayscale"}`}
                      />
                    </div>
                  </div>
                </button>

                {activeId === member.id && (
                  <div className="mt-2">
                    <span className="flex justify-center font-bold text-md">{member.name}</span>
                    <div className="flex justify-center items-center mt-1 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 w-5 h-5 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      <a href="#" className="text-sm">{member.email}</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>

    </div >
  );
}
//function start 
function Divone(icons, text, setDataDescription, Description, VideoPlay_Array, setVideo) {
  return (
    <span
      href="#"
      className="group flex items-center hover:bg-gray-100 p-2 rounded-lg text-gray-900"
      onClick={() => {
        setDataDescription(Description);
        setVideo(VideoPlay_Array);
      }}
    >
      {icons}
      <span className="ms-3">{text}</span>
    </span>
  );
}
export function DropdownMenu({ icons, text, sub_menu_funtion, setDataDescription, Description, VideoPlay_Array, setVideo }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  //console.log(sub_menu_funtion);
  //console.log("icons:", icons);
  if (sub_menu_funtion.length <= 0 || !sub_menu_funtion) {
    return Divone(icons, text, setDataDescription, Description, VideoPlay_Array, setVideo);
  } else {
    return (
      <>
        <button
          onClick={toggleDropdown}
          type="button"
          className="group flex items-center hover:bg-gray-100 p-2 rounded-lg w-full text-gray-900 transition duration-75"
        >
          {icons}
          <span className="flex-1 ms-3 text-left whitespace-nowrap">{text}</span>
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
              }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (/*ตรงนี้ต้องรับค่าใาแล้ว Map*/
          <ul className="space-y-2 py-2">
            {sub_menu_funtion.map((items) => (
              <li key={items.sub_id}
                onClick={() => { setDataDescription(items.desciption); setVideo(items.link) }
                }>
                <span

                  className="group flex items-center hover:bg-gray-100 p-2 pl-11 rounded-lg w-full text-gray-900 transition duration-75"
                >
                  {items.sub_desciption}
                </span>
              </li>
            ))}
          </ul>

        )}
      </>
    );
  }
}
export function Desciption({ data }) {
  return (
    <div className="text-justify break-words">
      {data}
    </div>
  );
}
//function end

export function Test_progarm() {
  const [activeId, setActiveId] = useState(1);

  const text_desciption = `
      ระบบเติมรักเพ็ทมาร์ท ประกอบด้วยระบบการใช้งานที่สำหรับเจ้าของร้าน พนักงาน และสมาชิกร้านค้า โดยในการใช่งานระบบมี 2 ส่วน ได้แก่ ระบบร้านค้า POS และ ระบบ CRM (ใช้งานผ่าน LINE OA)
      โดยโปรแกรมที่ใช้พัฒนา ได้แก่ Visual Studio Code, ChatGPT, LINE Developers, Electron JS, Tailwind CSS, LINE Official Account Manager
  `

  const [dataDescription, setDataDescription] = useState(text_desciption);

  const [VideoPlay, setVideoPlay] = useState('video/demo_system.mp4')

  const testing = [
    {
      id: 1,
      name: 'ระบบเจ้าของร้านและพนักงาน',
      menu: [
        {
          menu_id: 1,
          description: "ระบบเข้าสู่ระบบ",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75">
              <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          ),
          sub_menu: [
            {
              sub_id: 1,
              sub_desciption: "เข้าสู่ระบบด้วยบัญชีพนักงาน",
              desciption: "การเข้าสู่ระบบด้วยบัญชีพนักงาน ระบบที่สามารถใช้งานได้ คือ ระบบการขาย ระบบจัดการสต็อก และระบบจัดการข้อมูลส่วนตัว",
              link: 'video/Login-system employee2568-03-29-9-48-39.mp4'/*link testprogram*/
            },
            {
              sub_id: 2,
              sub_desciption: "เข้าสู่ระบบด้วยบัญชีเจ้าของ",
              desciption: "การเข้าสู่ระบบด้วยบัญชีเจ้าของ ระบบที่สามารถใช้งานได้ คือ ระบบการขาย ระบบจัดการสต็อก ระบบจัดการข้อมูลส่วนตัว ระบบจัดการสินค้า ระบบรายงาน และระบบจัดการข้อมูลสมาชิก",
              link: 'video/Login-system owner2568-03-29-9-48-39.mp4'/*link testprogram*/
            }
          ]
        },
        {
          menu_id: 2,
          description: "ระบบจัดการข้อมูลส่วนตัว",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75">
              <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>
          ),
          sub_menu: [
            {
              sub_id: 1,
              sub_desciption: "จัดการข้อมูลบัญชี",
              desciption: "การจัดการข้อมูลบัญชี คือ ฟังก์ชันในการทำการเพิ่ม ลบ แก้ไขข้อมูลบัญชีของผู้ใช้งานระบบร้านค้า",
              link: 'video/managerprofile.mp4'/*link testprogram*/
            },
            {
              sub_id: 2,
              sub_desciption: "เจ้าของจัดการข้อมูลบัญชี",
              desciption: "เจ้าของจัดการข้อมูลบัญชี คือ ฟังก์ชันในการทำการเพิ่ม ลบ แก้ไขข้อมูลบัญชีของผู้ใช้งานระบบร้านค้าทุกคนในระบบ และสามารถดูประวัติการใช้งานระบบของผู้ใช้งานระบบทุกคน",
              link: 'video/Owneraccount manager.mp4'/*link testprogram*/
            }
          ],
        },
        {
          menu_id: 3,
          description: "ระบบจัดการข้อมูลสมาชิก",
          desciption: "ระบบจัดการข้อมูลสมาชิก คือ ฟังก์ชันในการทำการเพิ่ม ลบ แก้ไขข้อมูลบัญชีสมาชิกของร้านค้าในระบบ",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75">
              <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
            </svg>
          ),
          link: "video/membermanager.mp4",
          sub_menu: []
        },
        {
          menu_id: 4,
          description: "ระบบจัดการสินค้า",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75">
              <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
            </svg>
          ),
          sub_menu: [
            {
              sub_id: 1,
              sub_desciption: "จัดการสินค้าแลกเปลี่ยน",
              desciption: "ระบบจัดการสินค้า คือ ฟังก์ชันในการทำการเพิ่ม ลบ แก้ไขข้อมูลสินค้าในระบบ",
              link: 'video/manager_Exchange_product.mp4'/*link testprogram*/
            },
            {
              sub_id: 2,
              sub_desciption: "ปรับราคาสินค้า",
              desciption: "ระบบปรับราคาสินค้า  คือ ฟังก์ชันในการแก้ไขราคาสินค้าในระบบ โดยไม่ต้องเข้าไปแก้ไขในหน้าสินค้า",
              link: 'video/managerproduct_adjustsell.mp4'/*link testprogram*/
            }
          ],
        },
        {
          menu_id: 5,
          description: "ระบบลงทะเบียน",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75">
              <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
            </svg>
          ),
          sub_menu: [
            {
              sub_id: 1,
              sub_desciption: "ลงทะเบียนบัญชีพนักงาน",
              desciption: "ระบบลงทะเบียนบัญชีพนักงาน คือ การสมัครบัญชีการใช้งานระบบของพนักงาน โดยบัญชีจะมีข้อจำกัดการใช้งานระบบบางส่วน",
              link: 'video/registersystem_employee.mp4'/*link testprogram*/
            },
            {
              sub_id: 2,
              sub_desciption: "ลงทะเบียนบัญชีเจ้าของ",
              desciption: "ระบบลงทะเบียนบัญชีเจ้าของ คือ การสมัครบัญชีการใช้งานระบบของเจ้าของ โดยบัญชีจะมีไม่มีข้อจำกัดการใช้งานระบบใดทั้งสิ้น",
              link: 'video/registersystem_owner.mp4'/*link testprogram*/
            }
          ]
        },
        {
          menu_id: 6,
          description: "ระบบรายงาน",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75">
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
            </svg>
          ),
          sub_menu: [
            {
              sub_id: 1,
              sub_desciption: "ดูรายงาน",
              desciption: "ระบบดูรายงาน คือ การดูข้อมูลรายงานการขาย รายงานสินค้าคงคลัง และรายงานสมาชิกร้านค้า ในรูปแบบ Dashboard",
              link: 'video/Document_Watch.mp4'/*link testprogram*/
            },
            {
              sub_id: 2,
              sub_desciption: "จัดการรายงาน",
              desciption: "ระบบจัดการรายงาน คือ การสร้างรายงาน ดูรายงานในรูปแบบเอกสาร การลบรายงานเอกสาร และการพิมพ์รายงานเอกสาร",
              link: 'video/Document_manager.mp4'/*link testprogram*/
            }
          ]
        },
        {
          menu_id: 7,
          description: "ระบบขายสินค้า",
          desciption: "ระบบขายสินค้า คือ ระบบ POS ที่ขายสินค้าให้ลูกค้า โดยจะมีช่องสินค้า สรุปยอดต้องชำระ ช่องกรอกการรับเงินทอนเงิน และช่องกรอกข้อมูลสมาชิก หลังขายเสร็จจะออกบิลและส่งข้อมูลการซื้อไปที่่สมาชิกร้านค้าที่ทำการซื้อสินค้า",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>

          ),
          link: "video/sale-product.mp4",
          sub_menu: []
        },
        {
          menu_id: 8,
          description: "ระบบจัดการสต็อก",
          desciption: "ระบบจัดการสต็อก คือ ระบบเพิ่ม ลบ และแก้ไขข้อมูลสินค้าทั้งหมดในระบบ",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75">
              <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
              <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
            </svg>
          ),
          link: "video/managerstock.mp4",
          sub_menu: []
        },
      ]
    },
    {
      id: 2,
      name: 'ระบบสมาชิกร้านค้า',
      menu: [
        {
          menu_id: 9,
          description: "ระบบตรวจสอบตัวตน ดูคะแนนสะสมและดูประวัติการสั่งซื้อผ่าน LINE OA",
          desciption: "ระบบตรวจสอบตัวตน ดูคะแนนสะสมและดูประวัติการสั่งซื้อผ่าน LINE OA คือ การใช้งานระบบ LINE OA โดยผู้ใช้งานจะต้องทำการยืนยันตัวตนเสียก่อน ถึงจะใช้งานระบบการดูคะแนนจากการซื้อสินค้าและบริการ และการใช้งานระบบดูประวัติการสั่งซื้อที่ลูกค้าทำการซื้อสินค้า",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-gray-500 group-hover:text-gray-900 transition duration-75">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
          ),
          link: "video/point-history-checkaccount.mp4",
          sub_menu: []
        },
        {
          menu_id: 10,
          description: "ระบบแลกสินค้า และจัดการข้อมูลสมาชิกผ่าน LINE OA",
          desciption: "ระบบแลกสินค้า และจัดการข้อมูลสมาชิกผ่าน LINE OA คือ ระบบหลังลูกค้าทำการยืนยีนตัวตนเสร็จสิ้น ในระบบแลกสินค้าประกอบด้วยสินค้าที่ทางร้านเปิดให้ทำการแลกโดยใช้คะแนนสะสม และระบบจัดการข้อมูลสมาชิกสามารถเพิ่ม ลบ แก้ไขข้อมูลส่วนตัวได้ด้วยตนเอง",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-500 group-hover:text-gray-900 transition duration-75">
              <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
            </svg>
          ),
          link: "video/exchange-account manager.mp4",
          sub_menu: []
        },
      ]
    }
  ]

  return (
    <div className='bg-amber-100 p-8 pt-36 md:pt-30 pb-30 rounded-b-4xl w-full h-full' id='Test_progarm'>
      <FadeInWhenVisible>
        <h1 className='my-2 pb-6 font-black text-5xl'>การทดสอบระบบ</h1>
        <div className="flex justify-start items-center">
          {testing.map((testdata) => (
            <button
              key={testdata.id}
              onClick={() => {
                // console.log(testdata.id);
                setActiveId(testdata.id)
                setDataDescription(text_desciption)
                setVideoPlay('video/demo_system.mp4')
              }
              }
              className={`m-4 px-6 py-3 rounded-xl transition-all duration-300 ${activeId === testdata.id
                ? "bg-amber-900 text-white"
                : "bg-white text-black border border-amber-500"
                }`}
            >
              {testdata.name}
            </button>

          ))
          }
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 mt-5">
          <div className="col-span-1 md:mr-4 mb-4 md:mb-0">
            <h1 className='mb-2 ml-4 font-bold text-xl text-center'>
              เมนูการทดสอบ
            </h1>
            <aside id="sidebar-multi-level-sidebar" className="w-full transition-transform sm:translate-x-0" aria-label="Sidebar" >
              <div className="bg-gray-50 px-3 py-4 pb-8 h-full md:h-[500px] overflow-y-auto">
                {
                  testing.filter((items) => items.id === activeId)
                    .map((data) => (
                      <ul key={data.id} className='space-y-2 font-medium'  >
                        {data.menu.map((detail) => (
                          <li key={detail.menu_id} /*onClick={() => console.log(detail) }*/
                          >
                            {
                              <DropdownMenu
                                icons={detail.icon}
                                text={detail.description}
                                sub_menu_funtion={detail.sub_menu}
                                setDataDescription={setDataDescription}
                                Description={detail.desciption}
                                VideoPlay_Array={detail.link}
                                setVideo={setVideoPlay}
                              />
                            }
                          </li>
                        ))}
                      </ul>
                    ))
                }
              </div>
            </aside>
          </div>
          <div className="col-span-3">
            <div className="relative w-full h-full object-cover">
              <iframe
                src={`${VideoPlay}?autoplay=1&muted=1`}
                className="rounded-lg w-full h-full object-cover"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-span-1 mt-4 md:mt-0 md:ml-4 h-full">
            <div className="bg-gray-50 p-4 h-full">
              <div className="h-full overflow-auto">
                <Desciption data={dataDescription} />
              </div>
            </div>
          </div>
        </div >
        {/*grid video present*/}
      </FadeInWhenVisible>
    </div >
  );
}


export function Home_page() {
  return (
    <div className="relative w-full h-full lg:h-[900px]" id="Home">
      {/* วิดีโอ background */}
      <video
        className="top-0 left-0 absolute w-full h-full object-cover"
        src="video/demo_system.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Backdrop สีเทาโปร่งใส */}
      <div className="top-0 left-0 absolute bg-white/50 backdrop-blur-sm w-full h-full" />

      {/* เนื้อหาที่อยู่ด้านหน้าวิดีโอ */}

      <div className="z-10 relative flex-wrap justify-between items-center mx-auto p-4 max-w-screen-xl h-full">
        <motion.h1 className="my-8 pt-16 font-bold text-black text-4xl"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          ระบบเติมรัก ❤ เพ็ทมาร์ท 🐈🐕
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className='flex mt-10 text-xl text-justify md:text-balance text-pretty'>
          <p className='h-full indent-8 leading-loose whitespace-normal'>
            โครงการเป็นส่วนหนึ่งของวิชาการพัฒนานวัตกรรมคอมพิวเตอร์และบริการชุมชน โครงการนี้มุ่งพัฒนาระบบบริหารจัดการร้านขายอาหารสัตว์เลี้ยงเติมรักเพ็ทมาร์ท      ตั้งอยู่ที่ตลาดสี่มุมเมือง จังหวัดปทุมธานี ซึ่งเผชิญปัญหาการจัดการสต็อกที่ไม่มีประสิทธิภาพ เช่น การขาดแคลน หรือ      ล้นสต็อก สินค้าหมดอายุ และความซับซ้อนของระบบเดิมที่ทำให้พนักงานใช้งานยาก ส่งผลต่อการจัดการข้อมูลในระบบ โครงการจึงมีเป้าหมายเพื่อปรับปรุงระบบหลังบ้าน (Back-End) และหน้าบ้าน (Front-End) โดยพัฒนาอินเทอร์เฟซที่ใช้งานง่ายและระบบจัดการสต็อกที่มีประสิทธิภาพ รวมถึงการเชื่อมต่อกับ LINE Official Account (LineOA) เพื่อให้ลูกค้าสามารถดูคะแนนสะสม ประวัติการสั่งซื้อ และจัดการข้อมูลสมาชิกได้สะดวกยิ่งขึ้น
            ระบบใหม่พัฒนาด้วยเทคโนโลยี Node.js และ Electron.js สำหรับการจัดการ Back end และแอปพลิเคชันเดสก์ท็อป, JavaScript, HTML&CSS และ Tailwind CSS สำหรับส่วนติดต่อผู้ใช้ที่ทันสมัย, Supabase สำหรับการจัดการข้อมูลแบบเรียลไทม์ และ line messaging api สำหรับการสื่อสารกับลูกค้า วัตถุประสงค์หลัก ได้แก่ การวิเคราะห์ปัญหาการจัดการสต็อก, ออกแบบระบบที่ตอบโจทย์การใช้งาน, และประเมินความพึงพอใจของผู้ใช้ ผลลัพธ์ที่คาดหวังคือระบบที่ช่วยลดความผิดพลาดในการจัดการสต็อก ลดต้นทุนที่ไม่จำเป็น เพิ่มประสิทธิภาพการดำเนินงาน และยกระดับความพึงพอใจของลูกค้า
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className='group'>
          <a href="#Charter_1">
            <button className='flex justify-center items-center bg-amber-400 hover:bg-rose-900 my-20 rounded-full w-56 h-20 text-rose-900 hover:text-white cursor-pointer'>
              ดูเพิ่มเติม
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-3 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}


//ไม่ควรเรียกใช้ function ปกติในการทำ hook หรือ useState(); เพราะ reder ไม่ได้ 
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <header className="top-0 z-[99999] sticky w-full">
        <Navbar />
      </header>

      {/* Home Section (ไม่ควรอยู่ใน header) */}
      <section >
        <Home_page />
      </section>

      {/* Main content */}
      <main className="flex-1">
        <Charter_1 />
        <Charter_2 />
        <Charter_3 />
        <Charter_4 />
        <Charter_5 />
        <Test_progarm />
        <Producer />
      </main>


      {/* Footer */}
      <Footer />
    </div>
  )
}