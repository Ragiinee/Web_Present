import './card.css'

const theory = [
    {
        id: 1,
        front: [{
            name_front: "การซื้อขาย ",
            img: "https://static.tradingmoon.com/static/assets/images/tradingmoon-logo.svg"
        }],
        back: [{
            name_back: "การซื้อขายในตลาดการเงินคือ การแลกเปลี่ยนสินทรัพย์ (หุ้น, พันธบัตร, ฯลฯ) เพื่อ ทำกำไรจากราคาขึ้นลง ทั้งระยะสั้นและยาว ตลาดมีเครื่องมือเยอะ พัฒนาสู่ระบบออนไลน์ที่เร็วมาก การซื้อขาย เน้นกำไรเร็ว เสี่ยงสูง ต่างจากการลงทุนระยะยาว การเข้าใจพื้นฐานจึงสำคัญ",
            link: "https://tradingmoon.com/row/th/blog/cfd-trading/what-does-trading-mean/"
        }]
    },
    {
        id: 2,
        front: [{
            name_front: "แนวคิดเกี่ยวกับธุรกิจร้านขายอาหารสัตว์",
            img: "https://scontent.fbkk29-9.fna.fbcdn.net/v/t39.30808-6/495185903_1169171971672176_7800378232011813624_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9dTxw9n_d0cQ7kNvwGIYV49&_nc_oc=AdlxgQ_NCREXE5Nl5WtjEaXZNh1QfHl7ODxRT9iBo2vBrIbR0J9iaRFXXGa8pQ2vZZ20bBg5ln7tD_K65MeOQKJ2&_nc_zt=23&_nc_ht=scontent.fbkk29-9.fna&_nc_gid=cW-lmrcEk9G8aqCyXW-lig&oh=00_AfJT8WhO7kze91zrvsJKQkSVlN1Qcja-Iv9WAwcW3WMaug&oe=68275AAF"
        }],
        back: [{
            name_back: "ธุรกิจเกี่ยวกับสัตว์เลี้ยงในปัจจุบันกำลังเติบโตอย่างมากในประเทศไทย สาเหตุหลักมาจากโครงสร้างครอบครัวที่เปลี่ยนไป คนนิยมเลี้ยงสัตว์เป็นเพื่อนมากขึ้น ทำให้ความต้องการสินค้าและบริการสำหรับสัตว์เลี้ยงเพิ่มสูงขึ้นมาก ธุรกิจนี้มีการแข่งขันสูง มีสินค้าใหม่ๆ ออกมาตลอดเวลา ผู้ประกอบการที่ประสบความสำเร็จต้องมีความรู้ อัปเดตข้อมูล และสามารถให้คำแนะนำที่ดีแก่ลูกค้าได้",
            link: "https://dspace.spu.ac.th/server/api/core/bitstreams/cf9bc9b6-4e37-4962-9e7a-dc3a3709941b/content"
        }]
    },
    {
        id: 3,
        front: [{
            name_front: "การจัดการสต็อก",
            img: "./img/DRTANITSORAT-removebg-preview.png"
        }],
        back: [{
            name_back: "คลังสินค้าคือที่เก็บรักษาสินค้าให้พร้อมส่งมอบ มีการจัดเก็บ 2 แบบคือ แบบสุ่ม (เข้าก่อนออกก่อน เน้นใช้พื้นที่) และแบบกำหนดตำแหน่ง (ระบุที่เก็บตายตัว) ซึ่งปัจจุบันมีการใช้เทคโนโลยีอัตโนมัติช่วย โดยการจัดการสต็อกที่ดีช่วยเพิ่มกำไร ป้องกันสินค้าสูญหาย ลดค่าใช้จ่ายสินค้าค้างสต็อก และช่วยวางแผนการระบายสินค้า",
            link: "http://www.tanitsorat.com/"
        }]
    },
    {
        id: 4,
        front: [{
            name_front: "ฐานข้อมูลคลังสินค้า",
            img: "https://www.mindphp.com/images/info/mindphp-logo-v40.png"
        }],
        back: [{
            name_back: "คลังข้อมูลสำคัญเพราะช่วยให้เข้าใจสถานการณ์และตัดสินใจได้ดีขึ้น มีประโยชน์คือ เสริมความรู้ สนับสนุนการตัดสินใจ เข้าถึงข้อมูลเร็ว แยกฐานข้อมูลปฏิบัติงานกับวิเคราะห์ ให้ข้อมูลสรุปและเจาะลึกได้ โดยคลังข้อมูลเป็นระบบจัดการข้อมูลที่ออกแบบมาเพื่อสนับสนุนการวิเคราะห์ข้อมูลทางธุรกิจ โดยรวบรวมข้อมูลจากหลายแหล่งในอดีต เพื่อช่วยในการตัดสินใจ",
            link: "https://www.mindphp.com/forums/viewtopic.php?f=28&t=60570"
        }]
    },
    {
        id: 5,
        front: [{
            name_front: "พฤติกรรมผู้บริโภค",
            img: "https://ia800505.us.archive.org/view_archive.php?archive=/25/items/m_covers_0010/m_covers_0010_45.zip&file=0010450120-M.jpg"
        }],
        back: [{
            name_back: "พฤติกรรมผู้บริโภคคือการศึกษาว่าคน เลือก ซื้อ ใช้ และทิ้ง สินค้า/บริการ เพื่อตอบสนอง ความจำเป็นและความต้องการ โดยมีขั้นตอน 5 อย่าง 1) รับรู้ปัญหา: รู้ว่าต้องการอะไร 2) หาข้อมูล: ค้นหาสินค้าที่ต้องการ 3) เปรียบเทียบ: เลือกระหว่างยี่ห้อที่รู้จัก 4) ตัดสินใจซื้อ: เลือกซื้อสินค้าที่ชอบ 5)หลังซื้อ: ประเมินว่าพอใจหรือไม่",
            link: "https://openlibrary.org/books/OL30334377M/Marketing_Management_14th_Ed._By_Philip_Kotler"
        }]
    },
    {
        id: 6,
        front: [{
            name_front: "งานวิจัยเรื่องการพัฒนาเว็บไซต์เพื่อจำหน่ายอาหารสัตว์เลี้ยง: กรณีศึกษาร้าน Petshop ",
            img: "https://th.bing.com/th/id/OIP._1U8pL65y7TFnOqJzzsCIAHaHa?cb=iwc2&rs=1&pid=ImgDetMain"
        }],
        back: [{
            name_back: "พัฒนาเว็บไซต์ขายอาหารสัตว์เลี้ยงเพื่อลดต้นทุนค่าเช่าและเพิ่มช่องทางขาย โดยมีเป้าหมายเพื่อให้ลูกค้าซื้อสินค้าได้สะดวกขึ้นและลดค่าใช้จ่ายของร้าน  วิธีการคือสร้างเว็บไซต์ที่ลูกค้าสมัครสมาชิก ค้นหาสินค้า สั่งซื้อ และชำระเงินได้ โดยออกแบบให้ใช้งานได้ดีบนทุกอุปกรณ์ สรุปคือ ร้านทำเว็บไซต์ให้ลูกค้าซื้อของง่ายขึ้นและประหยัดค่าเช่าร้าน",
            link: "https://so03.tci-thaijo.org/index.php/jmspsru/article/view/258234/172740"
        }]
    },
    {
        id: 7,
        front: [{
            name_front: "งานวิจัยเรื่องการพัฒนาบริการซอฟต์แวร์คลาวด์สำหรับการบริหารจัดการร้านขายอาหารสัตว์ กรณีศึกษาร้านอู๊ดดี้เพ็ทช็อป",
            img: "https://scontent.fbkk29-9.fna.fbcdn.net/v/t39.30808-6/495185903_1169171971672176_7800378232011813624_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9dTxw9n_d0cQ7kNvwGIYV49&_nc_oc=AdlxgQ_NCREXE5Nl5WtjEaXZNh1QfHl7ODxRT9iBo2vBrIbR0J9iaRFXXGa8pQ2vZZ20bBg5ln7tD_K65MeOQKJ2&_nc_zt=23&_nc_ht=scontent.fbkk29-9.fna&_nc_gid=cW-lmrcEk9G8aqCyXW-lig&oh=00_AfJT8WhO7kze91zrvsJKQkSVlN1Qcja-Iv9WAwcW3WMaug&oe=68275AAF"
        }],
        back: [{
            name_back: "พัฒนาซอฟต์แวร์คลาวด์ใหม่สำหรับบริหารจัดการร้าน เพื่อให้การทำงานของร้านมีประสิทธิภาพมากขึ้น เช่น การบริการลูกค้า การจัดการสต็อกสินค้า และการดูข้อมูลเก่าๆ ได้ง่ายขึ้น โดยใช้ภาษา VB.NET ในการออกแบบและพัฒนา เริ่มจากการวิเคราะห์ ออกแบบระบบและฐานข้อมูล แล้วจึงสร้างโปรแกรม สรุปคือ ร้านสร้างโปรแกรมบนอินเทอร์เน็ตให้จัดการร้านได้ดีขึ้นและเข้าถึงข้อมูลได้ทุกที่",
            link: "https://dspace.spu.ac.th/server/api/core/bitstreams/cf9bc9b6-4e37-4962-9e7a-dc3a3709941b/content"
        }]
    },
    {
        id: 8,
        front: [{
            name_front: "งานวิจัยเรื่องการออกแบบและพัฒนาแอปพลิเคชันระบบจัดการออเดอร์และสต็อกสินค้ากรณีศึกษา Penguintory",
            img: "https://th.bing.com/th/id/R.a4cfcd3f85ab2e085750275c0ebf45a4?rik=d%2bJ3i3YHAnSBQw&riu=http%3a%2f%2fpws.npru.ac.th%2fkanet%2fdata%2fimages%2flogo_swu.gif&ehk=vN1Z%2bKm0vs%2fvxHgkTXi8rc1PsWQFx3aPKr50WMjJ4Bs%3d&risl=&pid=ImgRaw&r=0"
        }],
        back: [{
            name_back: "สร้างแอปพลิเคชันสำหรับจัดการออเดอร์และสินค้าคงคลัง เพื่อช่วยให้ผู้ประกอบการรายย่อยจัดการร้านได้ง่ายและมีประสิทธิภาพขึ้น  โดยใช้ขั้นตอน UX/UI เริ่มจากการหาข้อมูล ออกแบบตัวอย่างแอป ทดลองใช้กับกลุ่มเล็กๆ และนำข้อเสนอแนะมาปรับปรุง สรุปคือ สร้างแอปให้จัดการออเดอร์และสต็อกได้เร็วและดีขึ้น",
            link: "http://ir-ithesis.swu.ac.th/dspace/bitstream/123456789/1992/1/gs631130233.pdf"
        }]
    },
    {
        id: 9,
        front: [{
            name_front: "งานวิจัยเรื่องการเพิ่มประสิทธิภาพในการจัดสต็อกสินค้าของบริษัท สแกนเนอร์ อิเลคทริค อินเตอร์เนชั่นแนล จำกัด",
            img: "https://li01.tci-thaijo.org/public/journals/200/pageHeaderLogoImage_en_US.png"
        }],
        back: [{
            name_back: "ศึกษาปัญหาการจัดการสต็อกสินค้าและแก้ไขโดยการทำป้ายรหัสสินค้า เพื่อให้การเบิกจ่ายสินค้ารวดเร็วขึ้น ลดขั้นตอน และจัดเก็บสินค้าให้เป็นระเบียบ โดยใช้วิธีวิเคราะห์ปัญหาและสร้างป้ายรหัสสินค้าติดที่สินค้า  สรุปคือ ศึกษาปัญหาแล้วทำป้ายรหัสสินค้าเพื่อให้จัดการสต็อกได้ง่ายและเร็วขึ้น",
            link: "https://e-research.siam.edu/wp-content/uploads/2019/04/business-management-2017-coop-Stock-Management-Performance-Improvement-of-Scaner-Electric-International-Co.-Ltd..pdf"
        }]
    },
    {
        id: 10,
        front: [{
            name_front: "งานวิจัยเรื่องการพัฒนาระบบการจัดการสินค้าคงคลัง กรณีศึกษาบริษัทติดตั้งและบำรุงรักษา",
            img: "https://cdn.onefence.co/images/2022-05-27/8449d799-788a-4e04-8c09-2936191d4981.jpeg"
        }],
        back: [{
            name_back: "ศึกษาการจัดการสินค้าคงคลังโดยใช้ทฤษฎี ABC Analysis และ EOQ พร้อมทั้งทำใบ Stock card เพื่อให้บริหารจัดการสินค้าคงคลังได้ดีขึ้น ลดการสั่งซื้อซ้ำซ้อน และลดต้นทุนสินค้าค้างสต็อก โดยใช้วิธีวิเคราะห์และทำใบ Stock card ร่วมกับการใช้ทฤษฎี ABC Analysis และ EOQ สรุปคือ ศึกษาการจัดการสต็อกโดยใช้ทฤษฎีและทำเอกสารเพื่อให้จัดการสินค้าได้มีประสิทธิภาพและประหยัดต้นทุนมากขึ้น",
            link: "https://li01.tci-thaijo.org/index.php/Itech/article/download/29215/25400"
        }]
    },
    {
        id: 11,
        front: [{
            name_front: "Node Js",
            img: "https://www.nicepng.com/png/full/80-803546_javascript-vector-transparent-node-js-logo-png.png"
        }],
        back: [{
            name_back: "Node.js คือ Runtime Environment แบบ Cross-Platform สำหรับฝั่ง Server ที่เป็น Open Source และมี Library มากมายสำหรับพัฒนาเว็บแอปพลิเคชันด้วยภาษา JavaScript เหมาะสำหรับแอปพลิเคชันที่จัดการ ข้อมูลจำนวนมาก และนิยมใช้พัฒนาแอปพลิเคชันแบบ Realtime สามารถทำงานได้บนหลายระบบปฏิบัติการ เช่น Web Server, IoT, และอื่นๆ",
            link: "https://blog.openlandscape.cloud/nodejs"
        }]
    },
    {
        id: 12,
        front: [{
            name_front: "Electron Js",
            img: "https://www.pikpng.com/pngl/b/446-4460428_electron-js-logo-png-clipart.png"
        }],
        back: [{
            name_back: "Electron Js คือ กรอบงานที่ช่วยสร้างแอปพลิเคชันเดสก์ท็อป โดยใช้เทคโนโลยีเว็บที่คุณคุ้นเคยอย่าง JavaScript, HTML และ CSS มันรวมเอา Chromium (เบื้องหลังเบราว์เซอร์ Chrome) และ Node.js เข้าไว้ด้วยกัน ทำให้คุณสามารถ เขียนโค้ด JavaScript เพียงชุดเดียว และนำไปสร้างแอปพลิเคชันที่ทำงานได้บน Windows, macOS และ Linux โดยที่ไม่จำเป็นต้องมีความรู้ในการพัฒนาระบบปฏิบัติการโดยตรง",
            link: "https://www.electronjs.org/docs/latest"
        }]
    },
    {
        id: 13,
        front: [{
            name_front: "Tailwind CSS",
            img: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
        }],
        back: [{
            name_back: "Tailwind CSS คือ เครื่องมือ CSS ที่ช่วยสร้าง UI เร็วและง่าย มี class สำเร็จรูป เช่น bg-red-500 (พื้นหลังแดง) ไม่ต้องแก้ CSS หลัก ตั้งชื่อ class ง่าย มี Purge CSS ลดขนาดไฟล์ ทำ Responsive Design ง่ายใน HTML",
            link: "https://morphos.is/th/blog/tailwind-css-a-framework-that-makes-dev-work-easier"
        }]
    },
    {
        id: 14,
        front: [{
            name_front: "LINE Official Account (LineOA)",
            img: "https://www.seolnwza.com/assets/img/icon/LineAds/11.png"
        }],
        back: [{
            name_back: "LINE Official Account (LineOA) คือ บัญชีทางการของ LINE สำหรับธุรกิจ ช่วยให้ร้านค้า สร้างฐานลูกค้า สื่อสารโปรโมชั่น และจัดการการขาย ผ่านฟีเจอร์ต่างๆ เช่น ข้อความทักทายอัตโนมัติ, คูปอง, แชท 1-1, และการบรอดแคสต์ ริชเมสเสจ คือ การนำ รูปภาพและข้อความมารวมกัน ในรูปแบบที่สวยงามและคลิกไปยังลิงก์ต่างๆ ได้ ริชวิดีโอเมสเสจ คือ การส่ง ข้อความเป็นวิดีโอเล่นอัตโนมัติ ที่ดึงดูดสายตา และสามารถใส่ลิงก์ได้",
            link: "https://lineforbusiness.com/th/service/line-oa-features"
        }]
    },
    {
        id: 15,
        front: [{
            name_front: "Supabase",
            img: "https://companieslogo.com/img/orig/supabase-554aca1c.png?t=1701239800&download=true"
        }],
        back: [{
            name_back: "Supabase คือ แพลตฟอร์ม Opensource ที่ช่วยให้สร้าง Back-End สำหรับเว็บและมือถือได้อย่างรวดเร็วและง่ายดาย โดยใช้ฐานข้อมูล PostgreSQL ที่แข็งแกร่ง Supabase มีเป้าหมายให้นักพัฒนาทุกระดับสามารถสร้างแอปพลิเคชันได้อย่างรวดเร็ว โดยมีฟีเจอร์ครบครัน เช่น SQL ดิบ, ระบบความปลอดภัย, และการจัดการผู้ใช้งาน ทำให้เป็นทางเลือกที่ดีสำหรับผู้ที่ต้องการ Opensource ทางเลือกแทน Firebase",
            link: "https://blog.boldtech.dev/what-is-supabase-vs-firebase/."
        }]
    }
]

export function Square() {
    return (

        theory.map((items, index) => (
            <div className="md:col-span-1" key={index}>
                <div className="flex justify-center items-center bg-gray-50 shadow-2xl rounded-xl h-full">
                    <div className="w-full h-[500px] overflow-hidden">
                        <div className="w-full h-full card"
                        >
                            <div className="relative w-full h-full transition-transform duration-1000 card__content" >
                                {
                                    items.front.map((detail) => (
                                        <div key={index}
                                            className="top-0 right-0 bottom-0 left-0 absolute flex flex-col justify-between bg-white p-10 rounded-xl w-full h-full text-center cursor-pointer card__front"
                                        >
                                            <div className='flex justify-center items-center w-full h-full'>
                                                <div className='flex justify-center items-center w-50 h-50'>
                                                    <img src={detail.img} alt="front_image" className='w-full h-full' />
                                                </div>
                                            </div>
                                            <p className="font-bold text-black text-lg">{detail.name_front}</p>
                                        </div>
                                    ))

                                }
                                {
                                    items.back.map((detail) => (
                                        <div className="absolute inset-0 flex flex-col justify-between bg-[#ffae93]/30 p-10 rounded-xl card__back" key={index}>
                                            <h2 className="text-black text-md text-justify">{detail.name_back}</h2>
                                            <a href={detail.link} className='flex justify-center items-center'>
                                                <button className="self-center bg-white hover:bg-[#ffae93] hover:shadow-inner mt-auto px-4 py-2 rounded-full font-semibold text-amber-800 hover:text-white cursor-pointer">
                                                    {items.id !== 5 ? "ข้อมูลเพิ่มเติม" : "ศึกษาจากห้องสมุด"}
                                                </button>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        ))

    );
}


export function Layouy_CH2() {

    return (
        <div className="bg-gray-50 w-full h-full">
            <h1 className="mx-4 font-black text-5xl text-center">ทฤษฎีและเทคโนโลยีที่เกี่ยวข้อง</h1>
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 m-4 mt-15">
                <Square />
            </div>

        </div>
    )
}


export default function Charter_2() {
    return (
        <div id="Charter_2" className="pt-36 md:pt-30 pb-18">
            <Layouy_CH2 />
        </div>
    )
}