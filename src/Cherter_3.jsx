import { useState, useEffect } from "react"

const Data_Ch3 = [
    {
        id_CH3: 1,
        name: "เครื่องมือในการวิจัย",
        data: [
            {
                id_desciption: 1,
                name_desciption: "แบบสัมภาษณ์ความต้องการระบบ",
                desciption: "ในการออกแบบการสัมภาษณ์ คณะผู้วิจัยใช้การสัมภาษณ์แบบกึ่งโครงสร้าง เริ่มจากการสร้างความคุ้นเคยก่อนใช้แบบสัมภาษณ์ที่มีโครงสร้างเพื่อเก็บข้อมูลความต้องการระบบจัดการร้านเพ็ทมาร์ท โดยกำหนดประเด็นและคำถาม ศึกษาทฤษฎี กำหนดประเด็นปัญหาเดิม สร้างคำถามปลายเปิด 3 ตอน (ข้อมูลพื้นฐาน, ปัญหาเดิม, ความต้องการใหม่) และทำการตรวจสอบความถูกต้องจากผู้เชี่ยวชาญ 3 ท่านตรวจสอบความเหมาะสมของคำถามกับวัตถุประสงค์วิจัย (IOC) เพื่อให้คำถามตรงประเด็น ได้ผลลัพธ์ ระหว่าง 0.50 - 1.00 แสดงว่าสามารถใช้แบบสัมภาษณ์นี้ได้ จากนั้นจึงจัดทำเอกสารและการเก็บข้อมูล โดยข้อมูลจากการสัมภาษณ์ที่ได้คือ เจ้าของร้าน/พนักงาน ไม่เข้าใจการทำงานของระบบเดิม  และความต้องการระบบใหม่ ที่ใช้งานง่าย คณะผู้วิจัยจึงนำข้อมูลนี้จะนำไปวิเคราะห์และออกแบบระบบใหม่ให้ตรงความต้องการของระบบ",
                pdf_IOC: "./PDF/IOC1.pdf",
                pdf_form: "./PDF/From1.pdf"
            },
            {
                id_desciption: 2,
                name_desciption: "แบบประเมินความพึงพอใจ",
                desciption: "การออกแบบแบบประเมินความพึงพอใจ คณะผู้วิจัยสร้างแบบประเมินเพื่อวัดความพอใจผู้ใช้ระบบใหม่ โดยมีเป้าหมายเพื่อออกแบบ/พัฒนาระบบ, สำรวจความพอใจ, และวิเคราะห์ปัญหาการจัดการร้าน แบบประเมินมี 3 ตอน (ข้อมูลทั่วไป, ความพอใจในการใช้งาน) ในตรวจสอบความถูกต้อง คณะผู้วิจัยได้ให้ผู้เชี่ยวชาญ 3 ท่านตรวจสอบความสอดคล้องของคำถามกับวัตถุประสงค์วิจัย (IOC) และความชัดเจนของภาษา เพื่อให้แบบประเมินเหมาะสมและตรงประเด็น โดยได้ผลลัพธ์ ระหว่าง 0.50 - 1.00 แสดงว่าแบบประเมินความพึงพอใจนี้สามารถใช้ได้ จากนั้นเมื่อพัฒนาระบบเสร็จ จะนำแบบประเมินไปให้ผู้ใช้งานประเมินความพึงพอใจในการใช้งานระบบใหม่",
                pdf_IOC: "./PDF/IOC2.pdf",
                pdf_form: "./PDF/From2.pdf"
            },
            {
                id_desciption: 3,
                name_desciption: "แบบประเมินปประสิทธิภาพ",
                desciption: "การจัดทำแผนการทดสอบการพัฒนาระบบจัดการร้านเติมรักเพ็ทมาร์ท คณะผู้วิจัยได้สร้างแผนการทดสอบ (Test plan)  ซึ่งประกอบด้วย ประกอบด้วยสถานการณ์การทดสอบ (Test Scenario) และกรณีทดสอบระบบ (Test Case) เพื่อวิเคราะห์ประสิทธิภาพของระบบ โดยใช้เกณฑ์การประเมินผ่าน (PASS) หรือ ไม่ผ่าน (FALL) หากผลการทดสอบคือ ไม่ผ่าน จะต้องดำเนินการแก้ไขระบบจนกว่าจะผ่านเกณฑ์ที่กำหนด",
                pdf_IOC: "./PDF/Test_case.pdf",
                pdf_form: "#Test_progarm"
            }
        ]
    },
    {
        id_CH3: 2,
        name: "การเก็บรวบรวมข้อมูล",
        data: [
            {
                id_desciption: 1,
                name_desciption: "ลงพื้นที่ศึกษาปัญหา",
                desciption: "ลงพื้นที่ศึกษาปัญหา เริ่มด้วยการสำรวจชุมชนโดยใช้เครื่องมือต่างๆ เช่น แผนที่เดินดิน, เส้นแบ่งเวลา, โครงสร้างองค์กร, โอ่งชีวิต, และต้นไม้ปัญหา เพื่อทำความเข้าใจบริบทของร้านและระบุปัญหาหลัก จากนั้นจึงทำการสัมภาษณ์เจ้าของร้านเติมรักเพ็ทมาร์ทแบบกึ่งโครงสร้างในวันที่ 17 กันยายน 2567 โดยอธิบายรายละเอียดและวัตถุประสงค์อย่างเป็นกันเองเพื่อเก็บข้อมูลที่ตรงประเด็น ข้อมูลจากการสัมภาษณ์ถูกนำมาวิเคราะห์เชิงเนื้อหาเพื่อสรุปความต้องการและปัญหาเดิม พร้อมทั้งใช้สถิติเชิงพรรณนาเพื่อนำเสนอข้อมูลทั่วไปของผู้ให้สัมภาษณ์และแนวโน้มความคิดเห็นเกี่ยวกับระบบปัจจุบันและความต้องการระบบใหม่ ควบคู่กันไป ข้อมูลจากการสำรวจชุมชน โดยเฉพาะจากโอ่งชีวิตและต้นไม้ปัญหา ถูกวิเคราะห์เพื่อระบุจุดแข็ง (สินค้าหลากหลาย) และจุดอ่อน (การซื้อสินค้าคงคลังมากเกินไปจากปัญหาระบบ POS) ซึ่งนำไปสู่แนวทางการแก้ไขด้วยการพัฒนาระบบจัดการสต็อกที่มีประสิทธิภาพ สุดท้าย ข้อมูลทั้งหมดจากการสัมภาษณ์ การสำรวจ และการวิเคราะห์ จะถูกนำมาประมวลผลและจัดทำเป็นข้อกำหนดสำหรับการพัฒนาระบบใหม่ รวมถึงการปรับปรุงด้านต่างๆ เพื่อให้ระบบใหม่ตอบสนองความต้องการของร้านได้อย่างครบถ้วน",
            },
            {
                id_desciption: 2,
                name_desciption: "ความต้องการระบบจากปัญหา",
                desciption: <Require_system />,
                data: [
                    {
                        id: 1,
                        img: "https://scontent.fbkk29-5.fna.fbcdn.net/v/t1.15752-9/494829194_1060563649264230_9195539912066260901_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Nebo_RV00c0Q7kNvwGLg2qA&_nc_oc=AdnSLBaRvuQQeqVQ1Q4gYfp5ik7w8uWbw5iMei621Hau5z5Sk4gzzqCliAsLH1zEzW9nLYIcONeQbqWq3hSHMLB4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&oh=03_Q7cD2QEhU10s2htXx894SvQ77FyfLszNOyddYZALvk674V7R9g&oe=6849AF6A",
                        name_subscriber: "ขอบเขตของเจ้าของร้าน",
                        subscriber_use_system: "สามารถขายสินค้า จัดการสต็อก เข้าสู่ระบบ/ลงทะเบียน จัดการรายงาน จัดการสมาชิก จัดการข้อมูลส่วนตัว และจัดการสินค้า"
                    },
                    {
                        id: 2,
                        img: "https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/494828636_702829742197135_3939621750554367545_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=TJpdD1UNtF4Q7kNvwGla5m0&_nc_oc=AdnP9CNKJ9nGOCyQVoCRywq2I3vL_YzVKIWpclEHYUc6srql8LpYxfNBCM597wabC-UFEDZg6OvrjXsMAPm9LAjo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk29-7.fna&oh=03_Q7cD2QEEZ9zJ_l2-TijVq-9jomTkazPOwAyc2GrD3VsCCl1QAw&oe=6849A07C",
                        name_subscriber: "ขอบเขตของพนักงาน",
                        subscriber_use_system: "สามารถขายสินค้า จัดการสต็อก เข้าสู่ระบบ/ลงทะเบียน และจัดการข้อมูลส่วนตัว"
                    },
                    {
                        id: 3,
                        img: "https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/494829441_1809003906325082_3120463032288191522_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=RzMnM1X4c8QQ7kNvwEbrws1&_nc_oc=AdmR7mjqwK-L45gRZhuZLolydTifxjFcw1Q6f6_OCOPW-ogLlsNy0J1x2hU4E52R87Gf4EViSqQzxL5RNTmigxM9&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk29-6.fna&oh=03_Q7cD2QFxwMmrb6R5O5xGLTdqh-W11BWhpvavoKkOsXngDPPIsQ&oe=6849B3E5",
                        name_subscriber: "ขอบเขตของสมาชิกร้านค้า",
                        subscriber_use_system: "สามารถดูคะแนนสะสม, ดูประวัติการสั่งซื้อ, จัดการข้อมูลสมาชิก, แลกสินค้า ใช้งานผ่านLINE OA"
                    }
                ]
            },
            {
                id_desciption: 3,
                name_desciption: "ถ่ายทอดความรู้ให้แก่ชุมชน",
                desciption: "การถ่ายทอดความรู้ คู่มือการใช้งานระบบให้แก่ชุมชน เริ่มด้วยการนัดหมายอบรมการใช้งานระบบบริหารจัดการร้านเติมรักเพ็ทมาร์ทที่สร้างเสร็จแล้ว (กำหนดวันที่ 30 มีนาคม 2568) ให้แก่พนักงานและผู้เกี่ยวข้อง พร้อมทั้งส่งมอบคู่มือการใช้งานระบบเพื่อให้ผู้เข้ารับการอบรมมีความเข้าใจในฟังก์ชันต่างๆ ของระบบมากยิ่งขึ้น เมื่อเสร็จสิ้นการถ่ายทอดความรู้ คณะผู้จัดทำได้ให้ผู้เข้าร่วมทำการประเมินความพึงพอใจในการใช้ระบบใหม่ โดยมีเกณฑ์การวัดความพึงพอใจเป็น 5 ระดับ ตั้งแต่ความพึงพอใจน้อยที่สุด (ค่าเฉลี่ย 1.00-1.50) ไปจนถึงความพึงพอใจมากที่สุด (ค่าเฉลี่ย 4.51-5.00) สุดท้าย ผลจากการประเมินความพึงพอใจนี้จะถูกนำไปใช้ในการประเมินผลของโครงงาน เพื่อทำการวิเคราะห์และนำเสนอต่อไป",
            },
        ]
    },
    {
        id_CH3: 3,//ux ui
        name: "การออกแบบระบบ",
        data: [
            {
                id_desciption: 1,
                name_desciption: "การออกแบบ Diagarm",
                desciption: "Diagarm",
                desing: [
                    {
                        img: "use case",
                        img_desciption: "อธิบายความสามารถ",
                    },
                    {
                        img: "Class diagarm",
                        img_desciption: "อธิบายความสามารถ"
                    }
                ]
            },
            {
                id_desciption: 2,
                name_desciption: "ส่วนนำเข้า",
                desciption: "อธิบายออกแบบ ",
                desing: [//เปลี่ยน
                    {
                        img: "1",
                        img_desciption: "รายงาน 3",
                    },
                    {
                        img: "2",
                        img_desciption: "ใบเสร็จ",
                    },
                    {
                        img: "3",
                        img_desciption: "หน้าจอรายงานการขาย",
                    },
                    {
                        img: "4",
                        img_desciption: "หน้าจอการขายสินค้า",
                    },
                    {
                        img: "5",
                        img_desciption: "หน้าจอเมนู Line OA",
                    }
                ]
            },
            {
                id_desciption: 3,
                name_desciption: "ส่วนนำออก",
                desciption: "",
                desing: [
                    {
                        img: "1",
                        img_desciption: "รายงาน 3",
                    },
                    {
                        img: "2",
                        img_desciption: "ใบเสร็จ",
                    },
                    {
                        img: "3",
                        img_desciption: "หน้าจอรายงานการขาย",
                    },
                    {
                        img: "4",
                        img_desciption: "หน้าจอการขายสินค้า",
                    },
                    {
                        img: "5",
                        img_desciption: "หน้าจอเมนู Line OA",
                    }
                ]
            },
        ]
    }
]


export function Layouy_CH3() {
    //ปุ่ม
    const [activeId_CH3, setActiveId_CH3] = useState('')
    const [activeDetailId_CH3, setDetailActiveId_CH3] = useState('')
    //ปุ่ม
    const [ShowDesciption_CH3, setShowDesciption_CH3] = useState('')

    const [ButtonClick, setButtomClick] = useState(['', '', ''])

    // โหลดข้อมูลเริ่มต้นเมื่อเปิดหน้า
    useEffect(() => {
        const initialData = Data_Ch3.find((item) => item.id_CH3 === 1);
        if (initialData) {
            setActiveId_CH3(initialData.id_CH3);
            setShowDesciption_CH3(initialData.data);
            setDetailActiveId_CH3(initialData.data[0]?.id_desciption || '');
            setButtomClick([
                initialData.data[0]?.desciption || '',
                initialData.data[0]?.pdf_IOC || '',
                initialData.data[0]?.pdf_form || ''
            ]);
        }
    }, []);

    return (
        <div className="bg-gray-50 w-full h-full md:h-[900px]">
            <div className="flex-warp justify-between mx-auto max-w-screen-xl">
                <h1 className="mx-4 font-black text-5xl text-center">วิธีดำเนินการโครงการ</h1>
                <div className="md:flex justify-between mx-4 mt-12" >
                    {
                        Data_Ch3.map((item) => (
                            <button key={item.id_CH3}
                                onClick={() => {
                                    setActiveId_CH3(item.id_CH3); setShowDesciption_CH3(item.data); setButtomClick(['', '', '']); setDetailActiveId_CH3('')
                                }}
                                className={`px-6 py-6 rounded-full cursor-pointer transition-all duration-300 font-bold md:my-0 my-4 md:mx-4 mx-0 w-full
                                    ${activeId_CH3 == item.id_CH3
                                        ? "bg-amber-600 text-white shadow-xl scale-105"
                                        : "bg-amber-100 text-gray-800 hover:bg-amber-400 hover:text-white shadow-inner"}`}>
                                {item.name}
                            </button>
                        ))
                    }
                </div>

                {/*ส่วนอธิบาย*/}
                <div className="mx-4 mt-8">
                    {
                        activeId_CH3 &&
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="flex flex-col justify-between col-span-1">
                                {
                                    ShowDesciption_CH3.map((detail) => (
                                        <div className="flex flex-col justify-center md:h-40" key={detail.id_desciption}>
                                            <button className={`px-6 py-6 rounded-full cursor-pointer transition-all duration-300 font-bold m-4 
                                                ${activeDetailId_CH3 === detail.id_desciption
                                                    ? "bg-rose-600 text-white shadow-xl scale-105"
                                                    : "bg-rose-100 text-gray-800 hover:bg-rose-400 hover:text-white shadow-inner"}`}
                                                onClick={() => {
                                                    //Class Buttom
                                                    setDetailActiveId_CH3(detail.id_desciption);
                                                    //Class Buttom
                                                    setButtomClick([detail.desciption, detail.pdf_IOC, detail.pdf_form]);
                                                    //มีอีก 2 ตัว
                                                }
                                                }
                                            >{detail.name_desciption}
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>
                            {

                            }
                            <div className="flex flex-col justify-between gap-4 col-span-1 md:col-span-2 mx-8">
                                <div className="col-span-1 md:col-span-2 text-md text-justify leading-loose whitespace-normal">
                                    {ButtonClick[0]}
                                </div>

                                {(ButtonClick[0] && activeId_CH3 == 1) &&
                                    <div className="gap-4 grid grid-cols-2 col-span-1 md:col-span-2">
                                        <div className="flex justify-center">
                                            <a href={ButtonClick[1]}>
                                                <div className="text-center">
                                                    <p className="my-5 p-2 font-bold underline">{ButtonClick[1] !== "./PDF/Test_case.pdf" ? "แบบประเมินความสอดคล้อง (IOC)" : "แผนการทดสอบ"}  </p>
                                                    <img
                                                        src="https://th.bing.com/th/id/OIP.F2w3iA2aa3QIZeFH_Gi3tgHaHa?cb=iwc2&rs=1&pid=ImgDetMain"
                                                        alt="PDF"
                                                        className="mx-auto w-12 h-12"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="flex justify-center">
                                            <a href={ButtonClick[2]}>
                                                <div className="text-center">
                                                    <p className="my-5 p-2 font-bold underline">{ButtonClick[2] == "./PDF/From1.pdf" ? "แบบสัมภาษณ์ความต้องการระบบ" : `${ButtonClick[2] == "./PDF/From2.pdf" ? "แบบประเมินความพึงพอใจ" : "การทดสอบระบบ"}`}</p>
                                                    <img
                                                        src={ButtonClick[2] !== "#Test_progarm" ? "https://th.bing.com/th/id/OIP.F2w3iA2aa3QIZeFH_Gi3tgHaHa?cb=iwc2&rs=1&pid=ImgDetMain" : "https://cdn-icons-png.flaticon.com/512/5710/5710191.png"}
                                                        alt="PDF"
                                                        className="mx-auto w-12 h-12"
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export function Require_system() {
    return (
        <div>
            <span>
                การพัฒนาระบบงาน ใช้การวิเคราะห์และออกแบบเชิงวัตถุ (Object Oriented Analysis and Design) โดยสร้าง Use Case Diagram/Description,
                Class Diagram, Sequence Diagram, Activity Diagram จากการกำหนดขอบเขตการใช้งานระบบ จากนั้นทำการออกแบบสิ่งนำออก (Output Design) ได่แก่
                ออกแบบรายงานการขาย, รายงานสต็อก, รายงานสมาชิก, ใบเสร็จ, หน้าจอรายงานต่างๆ, หน้าจอการขายสินค้า และออกแบบสิ่งนำเข้า (Input Design) ได่แก่
                ออกแบบหน้าจอจัดการสินค้า, จัดการสต็อก, จัดการข้อมูล, จัดการสมาชิก (ทั้งในระบบและผ่าน Line OA), หน้าจอลงทะเบียน, หน้าจอเข้าสู่ระบบ, หน้าจอเมนู Line OA
                เพื่อตอบสนองความต้องการระบบใหม่
            </span>

            <h3 className="font-bold text-center underline">
                ขอบเขตการทำงาน
            </h3>

            {
                Data_Ch3
                    .filter(item => item.id_CH3 === 2)
                    .map(detail => (
                        detail.data.filter((Iddesciption) => Iddesciption.id_desciption === 2)
                            .map((Desciption) => (
                                <div className="grid grid-cols-1 md:grid-cols-3" key={Desciption.id_desciption} >
                                    {Desciption.data.map((index, num) => (
                                        <div className="col-span-1 mt-4" key={num} onClick={() => (console.log(index)
                                        )}>
                                            <div className="flex justify-center items-center">
                                                <img src={index.img} alt="preson" className="shadow-inner rounded-full w-40" />
                                            </div>
                                            <span className="flex justify-center items-center my-4 font-semibold">
                                                {index.name_subscriber}
                                            </span>

                                            <p className="m-4">
                                                {index.subscriber_use_system}
                                            </p>

                                        </div>
                                    ))}
                                </div>
                            ))
                    ))
            }
        </div>

    )
}

export default function Charter_3() {
    return (
        <div id="Charter_3" className="pt-36 md:pt-30 pb-18">
            <Layouy_CH3 />
        </div>
    )
}