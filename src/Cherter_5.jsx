import { FadeInWhenVisible } from "./App"

export function Layouy_CH5() {
  return (
    <div className="bg-gray-50 px-6 py-12 w-full">
      <div className="mx-auto max-w-screen-xl">
        <FadeInWhenVisible>
          <h1 className="mb-10 font-black text-5xl text-center">
            บทสรุปและข้อเสนอแนะ
          </h1>

          {/* Section: สรุปผล */}
          <div className="bg-white shadow-md mb-10 p-6 rounded-xl hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="mb-4 font-bold text-amber-800 text-2xl">สรุปผล</h2>
            <p className="text-black text-md leading-relaxed">
              ระบบบริหารจัดการร้านเติมรักเพ็ทมาร์ทพัฒนาขึ้นเพื่อแก้ไขปัญหาด้านสต็อก การขาย และการบริหารข้อมูล
              โดยใช้ Node.js, Supabase และ Tailwind CSS ช่วยให้การทำงานรวดเร็ว ลดความผิดพลาด
              และสร้างรายงานอัตโนมัติได้อย่างแม่นยำ
            </p>
          </div>

          {/* Section: อภิปรายผล */}
          <div className="bg-white shadow-md mb-10 p-6 rounded-xl hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="mb-4 font-bold text-amber-800 text-2xl">อภิปรายผล</h2>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 text-md">
              {/* ปัญหาด้านการใช้งาน */}
              <div>
                <h3 className="mb-2 font-semibold text-black text-xl">🔍 ปัญหาด้านการใช้งาน</h3>
                <ul className="space-y-1 pl-5 text-black list-disc">
                  <li>พนักงานบางส่วนต้องการเวลาปรับตัวกับระบบใหม่</li>
                  <li>ยังไม่เข้าใจบางฟีเจอร์ เช่น การจัดการสต็อก</li>
                  <li>การเชื่อมต่อระบบภายนอกยังไม่สมบูรณ์</li>
                </ul>
              </div>

              {/* ปัญหาด้านเทคนิค */}
              <div>
                <h3 className="mb-2 font-semibold text-black text-xl">⚙️ ปัญหาด้านเทคนิค</h3>
                <ul className="space-y-1 pl-5 text-black list-disc">
                  <li>ระบบไม่เสถียรในช่วงแรก</li>
                  <li>เกิดข้อผิดพลาดจากข้อมูลซ้ำซ้อน</li>
                  <li>ต้องปรับปรุง UI และการใช้งานบางส่วน</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: ข้อเสนอแนะ */}
          <div className="bg-white shadow-md p-6 rounded-xl hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="mb-4 font-bold text-amber-800 text-2xl">ข้อเสนอแนะ</h2>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 text-md">
              {/* ข้อเสนอแนะจากโครงการ */}
              <div>
                <h3 className="mb-2 font-semibold text-black text-xl">💡 จากโครงการ</h3>
                <ul className="space-y-1 pl-5 text-black list-disc">
                  <li>เพิ่มฟีเจอร์วิเคราะห์ยอดขายเชิงลึก</li>
                  <li>เชื่อมระบบบัญชีและชำระเงินออนไลน์</li>
                  <li>ปรับ UI ให้เหมาะกับฟีเจอร์ซับซ้อน</li>
                </ul>
              </div>

              {/* ข้อเสนอแนะสำหรับอนาคต */}
              <div>
                <h3 className="mb-2 font-semibold text-black text-xl">🚀 สำหรับอนาคต</h3>
                <ul className="space-y-1 pl-5 text-black list-disc">
                  <li>จัดอบรมผู้ใช้งานอย่างสม่ำเสมอ</li>
                  <li>สำรวจความเห็นเพื่อปรับปรุงระบบ</li>
                  <li>ขยายระบบให้รองรับธุรกิจประเภทอื่น</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}


export default function Charter_5() {
  return (
    <div id="Charter_5" className="pt-36 md:pt-30 pb-18">
      <Layouy_CH5 />
    </div>
  )
}