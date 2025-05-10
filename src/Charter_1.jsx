import { useState } from "react"

export function desciption_CH1(Id, desciption_CH1_1, settextDescription) {
    if (Id == 1) {
        return (<>

        </>)
    } else if (Id == 2) {
        return (<>
        
        </>)
    } else {
        return (<>
        
        </>)
    }
}


export function Layouy_CH1() {

    const [showH1, setShowH1] = useState('ความเป็นมา วัตถุประสงค์ และประโยชน์ที่คาดว่าจะได้รับ')
    const [textDescription, settextDescription] = useState(`
                                                ร้านขายอาหารสัตว์เลี้ยง เติมรักเพ็ทมาร์ท ซึ่งตั้งอยู่ในตลาดสี่มุมเมือง มีประสบการณ์ดำเนินธุรกิจมากว่า 6 ปี แม้จะประสบความสำเร็จด้านยอดขาย แต่พบปัญหาในการบริหารจัดการสต็อกสินค้าที่ไม่เป็นระบบ ส่งผลให้เกิดความผิดพลาด เช่น สินค้าขาด/เกินจำนวน, สินค้าหมดอายุ และสินค้าคงคลังไม่ตรงกับความต้องการของลูกค้า
                            สาเหตุหลักเกิดจากความซับซ้อนของระบบเดิม และการที่พนักงานไม่เข้าใจขั้นตอนการจัดการสต็อก เช่น การรับเข้า ตัดยอด และอัปเดตข้อมูลอย่างถูกต้อง
                            เพื่อแก้ไขปัญหาเหล่านี้ คณะผู้จัดทำโครงการจึงวางแผนพัฒนาระบบจัดการร้านใหม่ โดยเน้น:
                            การปรับปรุงระบบหลังบ้าน (Back-End)
                            พัฒนาอินเทอร์เฟซ (UI) ให้ใช้งานง่าย
                            เพิ่มความสามารถในการควบคุม/ติดตามสต็อกแบบเรียลไทม์
                            เป้าหมายคือ เพื่อให้ร้านมีระบบที่มีประสิทธิภาพ ลดความผิดพลาด เพิ่มความพึงพอใจของลูกค้า และเสริมศักยภาพการแข่งขันของร้านในระยะยาว
        `)

    const data_cherter_1 = [
        {
            id_CH1: 1,
            name_CH1: "ความเป็นมา วัตถุประสงค์ และประโยชน์ที่คาดว่าจะได้รับ",
            desciption_CH1_1: `
                                        ร้านขายอาหารสัตว์เลี้ยง เติมรักเพ็ทมาร์ท ซึ่งตั้งอยู่ในตลาดสี่มุมเมือง มีประสบการณ์ดำเนินธุรกิจมากว่า 6 ปี แม้จะประสบความสำเร็จด้านยอดขาย แต่พบปัญหาในการบริหารจัดการสต็อกสินค้าที่ไม่เป็นระบบ ส่งผลให้เกิดความผิดพลาด เช่น สินค้าขาด/เกินจำนวน, สินค้าหมดอายุ และสินค้าคงคลังไม่ตรงกับความต้องการของลูกค้า
                            สาเหตุหลักเกิดจากความซับซ้อนของระบบเดิม และการที่พนักงานไม่เข้าใจขั้นตอนการจัดการสต็อก เช่น การรับเข้า ตัดยอด และอัปเดตข้อมูลอย่างถูกต้อง
                            เพื่อแก้ไขปัญหาเหล่านี้ คณะผู้จัดทำโครงการจึงวางแผนพัฒนาระบบจัดการร้านใหม่ โดยเน้น:
                            การปรับปรุงระบบหลังบ้าน (Back-End)
                            พัฒนาอินเทอร์เฟซ (UI) ให้ใช้งานง่าย
                            เพิ่มความสามารถในการควบคุม/ติดตามสต็อกแบบเรียลไทม์
                            เป้าหมายคือ เพื่อให้ร้านมีระบบที่มีประสิทธิภาพ ลดความผิดพลาด เพิ่มความพึงพอใจของลูกค้า และเสริมศักยภาพการแข่งขันของร้านในระยะยาว
            `
        },
        {
            id_CH1: 2,
            name_CH1: "ขอบเขตการทำงานของระบบ",
            desciption_CH1_1: ""
        },
        {
            id_CH1: 3,
            name_CH1: "แผนการดำเนินงาน",
            desciption_CH1_1: ""
        }
    ]

    return (
        <div className="bg-amber-100 pb-18 w-full h-full md:h-[800px]">
            <div className="flex-warp justify-between items-center mx-auto pt-30 max-w-screen-xl">
                <h1 className="mx-4 font-black text-5xl">{showH1} </h1>
                <div className="md:flex flex-row justify-between items-center mt-15">
                    {
                        data_cherter_1.map((item, index) => {
                            //check (true,false) for is Active
                            const isActive = showH1 === item.name_CH1;

                            return (
                                <button
                                    key={index}
                                    onClick={() => { setShowH1(item.name_CH1); settextDescription(item.desciption_CH1_1) }}//เดี๋นวสร้างเป็นฟังก์ชันอกงาน
                                    className={`px-6 py-6 rounded-full cursor-pointer transition-all duration-300 font-bold m-4
                                        ${isActive
                                            ? "bg-amber-600 text-white shadow-xl scale-105"
                                            : "bg-white text-gray-800 hover:bg-amber-400 hover:text-white shadow-inner"}`}
                                >
                                    {item.name_CH1}
                                </button>
                            )

                        })
                    }
                </div>

                <div className="grid grid-cols-1 my-12">
                    <div className="col-span-1 mx-4">
                        <p className="h-full text-md text-justify indent-8 leading-loose whitespace-normal">
                            {textDescription}
                        </p>
                        {/* วาง 2 grid วัตถุ + ประโยชน์ */} 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Charter_1() {
    return (
        <div id="Charter_1">
            <Layouy_CH1 />
        </div>
    )
}