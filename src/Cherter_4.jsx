import { Chart } from "react-google-charts"
import { FadeInWhenVisible } from "./App"
//data pie

const Data_CH4 = [
    {
        Data_id: 1,
        Type: "PieChart",
        data: [
            ["Task", "จำนวนเพศของผู้ตอบแบบประเมิน"],
            ["ชาย", 9],//edit result
            ["หญิง", 2],//edit result
            ["LGBTQIA+", 2],//edit result
            ["ไม่ต้องการระบุ", 2],//edit result
        ],
        options: {
            title: "เพศของผู้ตอบแบบประเมิน",
            pieSliceText: "value",
            legend: {
                position: "bottom",
                alignment: "center",
                textStyle: {
                    color: "#233238",
                    fontSize: 16,
                },
            },
            colors: ["#ff6b6b", "#ff8a5b", "#ffa65e", "#ffd93d"]
        }

    },
    {
        Data_id: 2,
        Type: "PieChart",
        data: [
            ["Task", "จำนวนอายุของผู้ตอบแบบประเมิน"],
            ["น้อยกว่า 30 ปี", 9],//edit result
            ["31 - 40 ปี", 2],//edit result
            ["มากกว่า 40 ปี", 2],//edit result
        ],
        options: {
            title: "อายุของผู้ตอบแบบประเมิน",
            pieSliceText: "value",
            legend: {
                position: "bottom",
                alignment: "center",
                textStyle: {
                    color: "#233238",
                    fontSize: 16,
                },
            },
            colors: ["#ff7f50", "#f76e6e", "#e17055"]
        }
    },
    {
        Data_id: 3,
        Type: "PieChart",
        data: [
            ["Task", "จำนวนสถานะของผู้ตอบแบบประเมิน"],
            ["เจ้าของร้าน", 1],//edit result
            ["พนักงาน", 4],//edit result
            ["ลูกค้า", 25],//edit result
        ],
        options: {
            title: "สถานะของผู้ตอบแบบประเมิน",
            pieSliceText: "value",
            legend: {
                position: "bottom",
                alignment: "center",
                textStyle: {
                    color: "#233238",
                    fontSize: 16,
                },
            },
            colors: ["#fab1a0", "#f8b195", "#f67280"]
        }
    },
    {
        Data_id: 4,
        Type: "ข้อเสนอแนะในการปรับปรุงระบบ",
        data: [
            {
                id: 1,
                text: "ไม่มีข้อเสนอแนะในการปรับปรุงระบบ"
            }
        ],
        options: {
        }
    },
    {
        Data_id: 5,
        Type: "ColumnChart",
        data: [
            ["Element", "Density", { role: "style" }],
            ["ความชัดเจนของหน้าจอและเมนูระบบ", 3.20, "#FF6B6B"],
            ["ความง่ายในการนำทางและการเข้าถึงฟังก์ชัน", 4.20, "#FF8A5B"],
            ["ความรวดเร็วและความถูกต้องในการ ประมวลผลธุรกรรม", 5.00, "#FFA65E"],
            ["ความเสถียรและความปลอดภัยของระบบ", 3.48, "#FFD93D"],
            ["ความเป็นมิตรต่อผู้ใช้", 4.52, "#FF7F50"],
            ["ความสะดวกในการเข้าถึงข้อมูลส่วนตัว", 3.21, "#F76E6E"],
            ["ความชัดเจนของข้อมูลและการแสดงผล", 4.52, "#E17055"],
            ["ความรวดเร็วในการประมวลผลและตอบสนอง", 4.86, "#FAB1A0"],
            ["ความสะดวกในการใช้ฟังก์ชันแลกแต้มส่วนลด", 3.41, "#F8B195"],
            ["ความพึงพอใจโดยรวมของลูกค้าในการใช้ Line OA", 3.02, "#F67280"],
            ["การสนับสนุนและคู่มือการใช้งาน", 3.41, "#FC766A"],
            ["ความครบถ้วนของฟังก์ชันในการ ตอบสนองความต้องการ", 3.57, "#F55555"]
        ],
        options: {
            title: "ผลประเมินความพึงพอใจ",
            legend: "none",
            vAxis: {
                viewWindow: {
                    min: 0,
                    max: 5,
                },
                format: "0.00", // ให้แสดงทศนิยม 2 ตำแหน่ง (ถ้าต้องการ)
            },
            hAxis: {
                textStyle: {
                    fontSize: 13, // ✅ ขนาดฟอนต์ของ Element (แนวนอน)
                },
            },
            chartArea: {
                width: '90%', // ปรับขนาดกราฟภายใน
                height: '60%',
            },
        }
    }
]


export function Chart_DATA_present() {

    return (
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 m-4 w-full">
            {Data_CH4.map((item) => (
                <div key={item.Data_id}
                    className={`bg-white shadow-xl p-4 rounded-2xl py-6 transition duration-300 ease-in-out hover:scale-105
                    ${item.Data_id !== 5 ? "col-span-1" : "col-span-full"}
                `}>
                    {item.Data_id !== 4 &&
                        <div className="flex justify-center items-center">
                            <Chart
                                chartType={item.Type}
                                data={item.data}
                                options={item.options}
                                width={"100%"}
                                height={"400px"}
                            />
                        </div>
                    }
                    {item.Data_id == 4 &&
                        <div className="my-5 text-md">
                            <h3 className="font-semibold" >{item.Type}</h3>
                            <ul className="mt-6">
                                {
                                    item.data.map((detail) => (
                                        <li key={detail.id} className="mx-2">
                                            {detail.id + ". " + detail.text}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}


export function Layouy_CH4() {
    return (
        <div className="bg-gray-50 w-full h-full">
            <FadeInWhenVisible>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <h1 className="mb-6 w-full font-black text-5xl text-center">

                        ผลการประเมินระบบบริหารจัดการร้านเติมรักเพ็ทมาร์ท
                    </h1>
                    <Chart_DATA_present />
                </div>
            </FadeInWhenVisible>
        </div>
    )
}


export default function Charter_4() {
    return (
        <div id="Charter_4" className="pt-36 md:pt-30 pb-18">
            <Layouy_CH4 />
        </div>
    )
}