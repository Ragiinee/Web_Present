import { useState } from "react"
import { Chart } from "react-google-charts"

// Gantt Chart
const columns = [
    { type: "string", label: "TaskID" },
    { type: "string", label: "TaskName" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
];

const rows = [
    ["1", "ศึกษาระบบงานละเก็บรวบรวมข้อมูล", "ศึกษาระบบงานและข้อมูลทฤษฎี", new Date(2024, 6), new Date(2024, 8), null, 100, null],
    ["2", "เสนอหัวข้อระบบขอบเขตของระบบ", "เสนอหัวข้อระบบและขอบเขตของระบบ", new Date(2024, 8), new Date(2024, 9), null, 100, "1"],
    ["3", "วิเคราะห์และออกแบบระบบ", "วิเคราะห์ระบบและออกแบบ UX, UI", new Date(2024, 9), new Date(2024, 10), null, 100, "2"],
    ["4", "พัฒนาระบบและการทดสอบระบบ", "พัฒนา ทดสอบ และปรับปรุงแก้ไข", new Date(2024, 11), new Date(2025, 3), null, 100, "3"],
    ["5", "สรุปผลการพัฒนาและข้อเสนอแนะ", "สรุปผลการพัฒนา", new Date(2024, 11), new Date(2025, 2), null, 100, "3"],
    ["6", "จัดทำเอกสารคู่มือการใช้งาน", "จัดทำคู่มือการใช้งาน", new Date(2025, 1), new Date(2025, 2), null, 100, "4,5"],
    ["7", "ส่งมอบชิ้นงาน", "ส่งมอบชิ้นงานให้กลุ่มตัวอย่าง", new Date(2025, 2), new Date(2025, 3), null, 0, "4,6"],
    ["8", "ประเมินผลชิ้นงาน", "ประเมินผลชิ้นงาน", new Date(2025, 3), new Date(2025, 4), null, 0, "7"],
    ["9", "จัดทำรูปเล่ม", "จัดทำรูปเล่ม", new Date(2024, 8), new Date(2025, 2), null, 90, "1"],
];

export const data = [columns, ...rows];

export const options = {
    height: 500,
    backgroundColor: { fill: "#fef3c6" }, // ไม่มีพื้นหลัง
    gantt: {
        criticalPathEnabled: false,
        innerGridHorizLine: {
            stroke: "#fef3c6",
            strokeWidth: 2,
        },
        arrow: {
            angle: 0,
            width: 0,
            color: 'green',
            radius: 0
        },
        innerGridTrack: { fill: "#fef3c6" },
        innerGridDarkTrack: { fill: "#fef3c6" },
    },
};
// Gantt Chart end

function Introduction() {
    return (
        <div className="col-span-1 mx-4">
            <p className="h-full text-md text-justify indent-8 leading-loose whitespace-normal">
                ร้านขายอาหารสัตว์เลี้ยง เติมรักเพ็ทมาร์ท ซึ่งตั้งอยู่ในตลาดสี่มุมเมือง มีประสบการณ์ดำเนินธุรกิจมากว่า 6 ปี แม้จะประสบความสำเร็จด้านยอดขาย แต่พบปัญหาในการบริหารจัดการสต็อกสินค้าที่ไม่เป็นระบบ ส่งผลให้เกิดความผิดพลาด เช่น สินค้าขาด/เกินจำนวน, สินค้าหมดอายุ และสินค้าคงคลังไม่ตรงกับความต้องการของลูกค้า
                สาเหตุหลักเกิดจากความซับซ้อนของระบบเดิม และการที่พนักงานไม่เข้าใจขั้นตอนการจัดการสต็อก เช่น การรับเข้า ตัดยอด และอัปเดตข้อมูลอย่างถูกต้อง
                เพื่อแก้ไขปัญหาเหล่านี้ คณะผู้จัดทำโครงการจึงวางแผนพัฒนาระบบจัดการร้านใหม่ โดยเน้น:
                การปรับปรุงระบบหลังบ้าน (Back-End)
                พัฒนาอินเทอร์เฟซ (UI) ให้ใช้งานง่าย
                เพิ่มความสามารถในการควบคุม/ติดตามสต็อกแบบเรียลไทม์
                เป้าหมายคือ เพื่อให้ร้านมีระบบที่มีประสิทธิภาพ ลดความผิดพลาด เพิ่มความพึงพอใจของลูกค้า และเสริมศักยภาพการแข่งขันของร้านในระยะยาว
            </p>
            {/* วาง 2 grid วัตถุ + ประโยชน์ */}
            <div className="md:grid grid-cols-1 grid-cols-2 h-full text-md text-justify leading-loose whitespace-normal">
                <div className="col-span-1 m-4">
                    <span className="ml-4 font-semibold underline">วัตถุประสงค์</span>
                    <ul>1 เพื่อศึกษาบริบทชุมชมในด้านการวิทยาการคอมพิวเตอร์ในการทำธุรกิจโดยใช้ร้านขายอาหารสัตว์เลี้ยงเติมรักเพ็ทมาร์ทเป็นศูนย์กลาง</ul>
                    <ul>2 เพื่อศึกษาวิเคราะห์ปัญหาระบบการจัดการสต๊อกสินค้าและแก้ปัญหาให้มีประสิทธิภาพมากขึ้น</ul>
                    <ul>3 เพื่อออกแบบและพัฒนาระบบบริหารจัดการร้านสัตว์เลี้ยง</ul>
                    <ul>4 เพื่อสำรวจความพึงพอใจการใช้งานระบบบริหารจัดการร้านร้านสัตว์เลี้ยงที่จัดทำขึ้น </ul>
                </div>
                <div className="col-span-1 m-4">
                    <span className="ml-4 font-semibold underline">ผลที่คาดว่าจะได้รับ</span>
                    <ul>1 ได้รวบรวมและวิเคราะห์ข้อมูลบริบทของชุมชนและบทบาทของวิทยาการคอมพิวเตอร์ในการดำเนินธุรกิจร้านสัตว์เลี้ยงสำหรับใช้เป็นฐานข้อมูลในการออกแบบระบบ</ul>
                    <ul>2 ได้ระบุปัญหาและอุปสรรคในระบบจัดการสต๊อกสินค้าที่มีอยู่ พร้อมทั้งเสนอแนวทางแก้ไขที่เพิ่มประสิทธิภาพและความถูกต้องในการบริหารสต๊อก</ul>
                    <ul>3 ได้พัฒนาระบบบริหารจัดการร้านสัตว์เลี้ยงที่สามารถรองรับการดำเนินงานในสภาพแวดล้อมปัจจุบัน โดยใช้เทคโนโลยีที่ทันสมัยและเหมาะสมกับการดำเนินธุรกิจ</ul>
                    <ul>4 ได้สำรวจและวิเคราะห์ความพึงพอใจของผู้มีส่วนเกี่ยวข้องที่ใช้งานระบบที่พัฒนาขึ้น เพื่อเป็นข้อมูลในการปรับปรุงและพัฒนาระบบในอนาคต </ul>
                </div>
            </div>
        </div>
    )
}

export function DesciptionCH1({ Id }) {
    if (Id === 1) {
        return (
            Introduction()
        );
    } else if (Id === 2) {
        return (
            <div>
                
            </div>
        );
    } else if (Id === 3) {
        return (
            <div className="m-4 p-4">
                <Chart
                    chartType="Gantt"
                    width="100%"
                    height="50%"
                    data={data}
                    options={options}
                />
            </div>
        );
    } else {
        return (
            Introduction()
        );
    }
}


export function Layouy_CH1() {

    const [showH1, setShowH1] = useState('ความเป็นมา วัตถุประสงค์ และประโยชน์ที่คาดว่าจะได้รับ')
    const [textDescription, settextDescription] = useState(1)

    const data_cherter_1 = [
        {
            id_CH1: 1,
            name_CH1: "ความเป็นมา วัตถุประสงค์ และประโยชน์ที่คาดว่าจะได้รับ",
        },
        {
            id_CH1: 2,
            name_CH1: "ขอบเขตการทำงานของระบบ",
        },
        {
            id_CH1: 3,
            name_CH1: "แผนการดำเนินงาน",
        }
    ]

    return (
        <div className="bg-amber-100 pb-18 w-full h-full">
            <div className="flex-warp justify-between items-center mx-auto pt-36 md:pt-30 max-w-screen-xl">
                <h1 className="mx-4 font-black text-5xl">{showH1}</h1>
                <div className="md:flex flex-row justify-between items-center mt-15">
                    {
                        data_cherter_1.map((item, index) => {
                            //check (true,false) for is Active
                            const isActive = showH1 === item.name_CH1;

                            return (
                                <button
                                    key={index}
                                    onClick={() => { setShowH1(item.name_CH1); settextDescription(item) }} // เมื่อกดจะ set ข้อความ
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

                {/* คำนวณแสดง DesciptionsCH1 ที่ถูกเลือก */}
                {textDescription && (
                    <DesciptionCH1
                        Id={textDescription.id_CH1}
                        desciption_CH1_1={textDescription.desciption_CH1_1}
                    />
                )}
            </div>
        </div>
    );
}


export default function Charter_1() {
    return (
        <div id="Charter_1">
            <Layouy_CH1 />
        </div>
    )
}