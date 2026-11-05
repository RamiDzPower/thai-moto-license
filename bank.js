/* Thai motorcycle licence — theory question bank (bilingual)
   Sources actually scraped, not invented:
     - pantip.com/topic/44063103  (ตัวอย่างข้อสอบใบขับขี่ พร้อมเฉลย)
     - pantip.com/topic/42510803  (มอเตอร์ไซค์)
     - rabbitcare.com/blog/car-driver-tips/driving-license-test-questions  (5 official categories)
     - kruchiangrai.net  (50 ข้อ พร้อมเฉลย + คำอธิบาย)
     - turbo.co.th/article/driving-license-exam  (format: 50 Q / 60 min / 90%)
   Fields: c=category, th/en=question, o=[[thai,english],...], a=index of correct answer,
           w=why (English), car=true means car-only (excluded from the motorcycle mock),
           note=where the bank answer and current law differ.
*/
const BANK = [

/* ========== 1. กฎหมายว่าด้วยรถยนต์ — Motor Vehicle Act B.E. 2522 ========== */
{c:'veh', th:'ในขณะขับรถ ผู้ขับขี่ต้องมีเอกสารใดใช้คู่กับใบอนุญาตขับรถ',
 en:'While driving, which document must you carry together with your driving licence?',
 o:[['บัตรประจำตัวประชาชน','National ID card'],['สำเนาทะเบียนบ้าน','Copy of the house registration'],['สำเนาภาพถ่ายใบคู่มือจดทะเบียนรถ','A photocopy of the vehicle registration book'],['บัตรประกันสังคม','Social security card']], a:2,
 w:'Licence + a photocopy of the vehicle registration book (เล่มทะเบียน). The original book does not have to be in the vehicle.'},

{c:'veh', th:'ผู้ขับรถกระทำผิดตามกฎหมายจราจรทางบกและได้รับใบสั่งจากเจ้าพนักงานจราจร ต้องไปติดต่อชำระค่าปรับภายในกี่วัน',
 en:'You receive a traffic ticket (ใบสั่ง) from a traffic officer. Within how many days must you pay the fine?',
 o:[['10 วัน','10 days'],['7 วัน','7 days'],['15 วัน','15 days'],['30 วัน','30 days']], a:1,
 w:'7 days. Memorise the 7 / 15 / 30 family: ticket = 7, licence replacement = 15, vehicle transfer = 15.'},

{c:'veh', th:'เมื่อใบอนุญาตขับรถสูญหายหรือชำรุด ต้องยื่นขอรับใบแทนต่อนายทะเบียนภายในกี่วัน',
 en:'If your driving licence is lost or damaged, within how many days must you apply to the registrar for a replacement?',
 o:[['20 วัน','20 days'],['30 วัน','30 days'],['15 วัน','15 days'],['45 วัน','45 days']], a:2,
 w:'15 days.'},

{c:'veh', th:'ผู้ใดขับรถโดยไม่ได้รับใบอนุญาตขับรถ มีโทษอย่างไร',
 en:'What is the penalty for driving without a driving licence?',
 o:[['จำคุกไม่เกิน 1 เดือน หรือปรับไม่เกิน 1,000 บาท หรือทั้งจำทั้งปรับ','Up to 1 month imprisonment, or a fine up to 1,000 baht, or both'],['ปรับไม่เกิน 1,000 บาท','Fine up to 1,000 baht'],['จำคุกไม่เกิน 6 เดือน หรือปรับไม่เกิน 1,000 บาท','Up to 6 months imprisonment or a fine up to 1,000 baht'],['ปรับไม่เกิน 2,000 บาท','Fine up to 2,000 baht']], a:0,
 w:'No licence = 1 month / 1,000 baht. EXPIRED licence = 2,000 baht fine only. The exam tests both, side by side — do not mix them up.'},

{c:'veh', th:'ผู้ใดขับรถโดยใบอนุญาตขับรถสิ้นอายุ มีโทษอย่างไร',
 en:'What is the penalty for driving with an EXPIRED driving licence?',
 o:[['ปรับไม่เกิน 1,000 บาท','Fine up to 1,000 baht'],['จำคุกไม่เกิน 1 เดือน หรือปรับไม่เกิน 1,000 บาท','Up to 1 month or 1,000 baht'],['จำคุกไม่เกิน 6 เดือน','Up to 6 months imprisonment'],['ปรับไม่เกิน 2,000 บาท','Fine up to 2,000 baht']], a:3,
 w:'2,000 baht. Expired is punished MORE heavily than never having one — counter-intuitive, and that is exactly why it is asked.'},

{c:'veh', th:'ใบอนุญาตขับรถชนิดชั่วคราวมีอายุกี่ปี',
 en:'How many years is a TEMPORARY driving licence (ใบขับขี่ชั่วคราว) valid for?',
 o:[['1 ปี','1 year'],['2 ปี','2 years'],['3 ปี','3 years'],['5 ปี','5 years']], a:1,
 w:'2 years. This is the licence you will be issued as a first-time applicant. After it you upgrade to the 5-year private licence.'},

{c:'veh', th:'การต่ออายุใบอนุญาตขับรถส่วนบุคคล (ชนิด 5 ปี) สามารถต่อล่วงหน้าได้ก่อนหมดอายุเท่าใด',
 en:'How far in advance of expiry can a 5-year private driving licence be renewed?',
 o:[['6 เดือน','6 months'],['4 เดือน','4 months'],['3 เดือน','3 months'],['5 เดือน','5 months']], a:0,
 w:'6 months in advance.'},

{c:'veh', th:'การโอนรถต้องแจ้งต่อนายทะเบียนภายในกี่วัน',
 en:'A vehicle transfer of ownership must be notified to the registrar within how many days?',
 o:[['15 วัน','15 days'],['45 วัน','45 days'],['20 วัน','20 days'],['30 วัน','30 days']], a:0,
 w:'15 days.'},

{c:'veh', th:'การเปลี่ยนสีรถต้องแจ้งต่อนายทะเบียนภายในกี่วัน',
 en:'A change of the vehicle colour must be notified to the registrar within how many days?',
 o:[['7 วัน','7 days'],['10 วัน','10 days'],['15 วัน','15 days'],['20 วัน','20 days']], a:0,
 w:'7 days. Same 7 as the traffic-ticket deadline.'},

{c:'veh', th:'รถยนต์ที่มีอายุครบกี่ปี ต้องนำไปตรวจสภาพรถก่อนเสียภาษีประจำปี',
 en:'A CAR must be taken for a vehicle inspection before paying annual tax once it reaches what age?',
 o:[['5 ปี','5 years'],['6 ปี','6 years'],['3 ปี','3 years'],['7 ปี','7 years']], a:3,
 w:'Car = 7 years. Motorcycle = 5 years. Both numbers are asked.'},

{c:'veh', th:'รถจักรยานยนต์ที่มีอายุครบกี่ปี ต้องนำไปตรวจสภาพรถก่อนเสียภาษีประจำปี',
 en:'A MOTORCYCLE must be inspected before paying annual tax once it reaches what age?',
 o:[['1 ปี','1 year'],['3 ปี','3 years'],['2 ปี','2 years'],['5 ปี','5 years']], a:3,
 w:'Motorcycle = 5 years, car = 7 years.'},

{c:'veh', th:'รถที่ไม่ได้เสียภาษีภายในเวลาที่กำหนด ต้องชำระเงินเพิ่มร้อยละเท่าใด',
 en:'If annual road tax is paid late, what surcharge applies?',
 o:[['ร้อยละ 1 ต่อเดือน','1% per month'],['ร้อยละ 1 ต่อปี','1% per year'],['ร้อยละ 10 ต่อเดือน','10% per month'],['ร้อยละ 10 ต่อปี','10% per year']], a:0,
 w:'1% per month of the tax due.'},

{c:'veh', th:'ประกันภัยชนิดใดใช้ประกอบการต่ออายุภาษีประจำปี',
 en:'Which type of insurance must be presented in order to renew annual road tax?',
 o:[['ประกันภัยชั้น 1','First class insurance'],['ประกันภัยชั้น 2','Second class insurance'],['ประกันภัยชั้น 3','Third class insurance'],['ประกันภัยคุ้มครองผู้ประสบภัยจากรถ (พ.ร.บ.)','Compulsory motor insurance (พ.ร.บ. / "por ror bor")']], a:3,
 w:'The compulsory policy, always called พ.ร.บ. ("por ror bor"). Voluntary classes 1/2/3 are irrelevant to tax renewal.'},

{c:'veh', th:'รถที่นำมาใช้บนถนนต้องมีลักษณะอย่างไร',
 en:'What must be true of a vehicle used on a public road?',
 o:[['รถที่โคมไฟหน้าไม่ติด','A vehicle whose headlight does not work'],['รถที่มีเสียงดังเกิน 90 เดซิเบล A','A vehicle louder than 90 dB(A)'],['รถที่มีควันดำ 55 เปอร์เซ็นต์','A vehicle emitting 55% black smoke'],['รถที่จดทะเบียนและชำระภาษีเรียบร้อยแล้ว','A vehicle that is registered and has its tax paid']], a:3,
 w:'Registered + taxed. On this style of question, pick the only lawful-sounding option.'},

{c:'veh', th:'รถต่อไปนี้ได้รับการยกเว้นไม่ต้องจดทะเบียน',
 en:'Which of these vehicles is EXEMPT from registration?',
 o:[['รถของวัด','Temple vehicles'],['รถของกรมตำรวจที่จดทะเบียนและมีเครื่องหมายตามระเบียบที่อธิบดีกำหนด','Police vehicles marked under the Director-General\'s regulations'],['รถของสภากาชาดไทย','Thai Red Cross vehicles'],['รถของมูลนิธิ','Foundation vehicles']], a:1,
 w:'Only three groups: His Majesty the King\'s personal vehicles, the Royal Household Bureau\'s, and the Police Department\'s marked vehicles.'},

{c:'veh', th:'รถต่อไปนี้ได้รับการยกเว้นไม่ต้องเสียค่าธรรมเนียม เว้นแต่ค่าธรรมเนียมแผ่นป้ายทะเบียนรถ',
 en:'Which vehicle is exempt from fees, except the licence-plate fee?',
 o:[['รถพยาบาลที่มิใช่เป็นรถสำหรับรับจ้าง','An ambulance not operated for hire'],['รถจักรยานยนต์ส่วนบุคคล','A private motorcycle'],['รถตู้ส่วนบุคคล','A private van'],['รถแท็กซี่','A taxi']], a:0,
 w:'A non-commercial ambulance.'},

{c:'veh', th:'รถยนต์ที่มีไว้เพื่อขายหรือเพื่อซ่อม (ป้ายแดง) ขับได้ในช่วงเวลาใด',
 en:'A vehicle on RED PLATES (held for sale or repair) may be driven at what times?',
 o:[['ขับได้ตั้งแต่ 08.00 ถึง 16.00 น.','08:00 to 16:00'],['ขับได้ตลอดเวลา','At any time'],['ห้ามขับเพราะยังไม่ได้เสียภาษี','Not at all, tax is unpaid'],['ขับได้ระหว่างพระอาทิตย์ขึ้นจนถึงพระอาทิตย์ตก','Between sunrise and sunset']], a:3,
 w:'Sunrise to sunset only. Red plates are the temporary dealer plates you still see on new bikes.'},

{c:'veh', th:'ผู้ขอรับใบอนุญาตขับรถยนต์ชั่วคราวต้องมีอายุกี่ปี',
 en:'What is the minimum age to apply for a temporary CAR driving licence?',
 o:[['ไม่ต่ำกว่า 15 ปีบริบูรณ์','Not less than 15'],['ไม่ต่ำกว่า 16 ปีบริบูรณ์','Not less than 16'],['ไม่ต่ำกว่า 17 ปีบริบูรณ์','Not less than 17'],['ไม่ต่ำกว่า 18 ปีบริบูรณ์','Not less than 18']], a:3,
 w:'18 for a car. A motorcycle up to 110 cc can be licensed from 15 — both ages are examined.'},

{c:'veh', th:'ผู้ขอรับใบอนุญาตขับรถจักรยานยนต์ส่วนบุคคลชั่วคราว สำหรับรถที่มีขนาดเครื่องยนต์ไม่เกิน 110 ซีซี ต้องมีอายุไม่ต่ำกว่ากี่ปี',
 en:'Minimum age for a temporary private MOTORCYCLE licence limited to machines up to 110 cc?',
 o:[['15 ปี','15'],['16 ปี','16'],['17 ปี','17'],['18 ปี','18']], a:0,
 w:'15 years for ≤110 cc (restricted). 18 years for anything larger.'},

{c:'veh', th:'นายชายพิการไม่มีนิ้วมือข้างซ้าย ประสงค์ขอรับใบอนุญาตขับรถชั่วคราวได้หรือไม่',
 en:'A man missing the fingers of his left hand wants a temporary driving licence. May he have one?',
 o:[['ไม่ได้ เพราะเป็นผู้มีร่างกายพิการ','No, he is physically disabled'],['ไม่ได้ เพราะขัดต่อระเบียบกรมการขนส่งทางบก','No, it breaches DLT regulations'],['ได้ หากมีบัตรผู้พิการ','Yes, if he holds a disability card'],['ได้ เพราะไม่เป็นผู้พิการจนเห็นได้ว่าไม่สามารถขับรถได้','Yes, because he is not disabled to the extent that he clearly cannot drive']], a:3,
 w:'The legal test is whether the disability visibly prevents driving — not whether a disability exists.'},

{c:'veh', th:'กรณีถูกพักใช้หรือเพิกถอนใบอนุญาตขับรถ มีสิทธิอุทธรณ์ได้ภายในกี่วัน',
 en:'If your licence is suspended or revoked, within how many days may you appeal?',
 o:[['15 วัน','15 days'],['30 วัน','30 days'],['60 วัน','60 days'],['90 วัน','90 days']], a:0,
 w:'15 days.'},

{c:'veh', th:'ข้อใดถูกต้อง',
 en:'Which statement is correct about licence substitution?',
 o:[['ใบอนุญาตขับรถยนต์สาธารณะ ใช้แทนใบอนุญาตขับรถจักรยานยนต์ส่วนบุคคลได้','A public car licence can substitute for a private MOTORCYCLE licence'],['ใบอนุญาตขับรถยนต์สาธารณะ ใช้แทนใบอนุญาตขับรถยนต์ส่วนบุคคลได้','A public car licence can substitute for a private CAR licence'],['ใบอนุญาตขับรถยนต์สาธารณะ ใช้แทนใบอนุญาตขับรถสามล้อส่วนบุคคลได้','A public car licence can substitute for a private three-wheeler licence'],['ใบอนุญาตขับรถสามล้อสาธารณะ ใช้แทนใบอนุญาตขับรถจักรยานยนต์ส่วนบุคคลได้','A public three-wheeler licence can substitute for a private motorcycle licence']], a:1,
 w:'A public licence covers the private equivalent of the SAME vehicle class only. A car licence never covers a motorcycle — which is why you are sitting this test.'},

{c:'veh', th:'ข้อใดผิด',
 en:'Which statement is FALSE?',
 o:[['รถยนต์ส่วนบุคคลนำมาใช้รับจ้างได้','A private car may be used for hire'],['รถจักรยานยนต์ส่วนบุคคล ห้ามนำมาใช้รับจ้างบรรทุกผู้โดยสาร','A private motorcycle may not be used to carry passengers for hire'],['รถจักรยานยนต์สาธารณะ ใช้เพื่อการรับจ้างบรรทุกผู้โดยสาร','A public motorcycle is used to carry passengers for hire'],['รถจักรยานยนต์สาธารณะ ใช้ในกิจการส่วนตัวได้','A public motorcycle may also be used privately']], a:0,
 w:'A private vehicle may never be used for hire. Note the asymmetry: public → private is allowed, private → public is not.'},

{c:'veh', th:'ข้อใดไม่ใช่ "รถยนต์รับจ้างสาธารณะ"',
 en:'Which is NOT a public vehicle for hire?',
 o:[['รถแท็กซี่','Taxi'],['รถจักรยานยนต์ส่วนบุคคล','Private motorcycle'],['รถจักรยานยนต์รับจ้างสาธารณะ','Public motorcycle taxi'],['รถสามล้อรับจ้างสาธารณะ','Public three-wheeler (tuk-tuk)']], a:1,
 w:'A private motorcycle.'},

{c:'veh', th:'ผู้ขับรถสาธารณะต้องปฏิบัติตนอย่างไร',
 en:'How must a driver of a public (for-hire) vehicle behave?',
 o:[['ปฏิเสธผู้โดยสารในเส้นทางที่จราจรติดขัด','Refuse passengers on congested routes'],['ไม่สูบบุหรี่ ไม่เสพสุราหรือยาเสพติด','Not smoke, and not consume alcohol or drugs'],['ใช้ใบอนุญาตส่วนบุคคลแทนเมื่อใบอนุญาตสาธารณะขาดอายุ','Use a private licence when the public one expires'],['เปิดวิทยุเสียงดังให้ผู้โดยสารฟัง','Play the radio loudly for passengers']], a:1,
 w:'No smoking, no alcohol, no drugs, no psychotropic substances.'},

{c:'veh', th:'ผู้ขับรถสาธารณะต้องพาผู้โดยสารไปยังสถานที่ที่ว่าจ้างอย่างไร',
 en:'A public driver must take the passenger to the hired destination by which route?',
 o:[['ตามเส้นทางที่ตกลงกันไว้ หรือเส้นทางที่สั้นที่สุด','By the agreed route, or the shortest route'],['เส้นทางที่ยาวที่สุด','The longest route'],['เส้นทางที่คนขับถนัด','Whichever route the driver prefers'],['เส้นทางที่อ้อม','A roundabout route']], a:0,
 w:'Agreed route, otherwise the shortest.'},

{c:'veh', th:'เมื่อรถทะเบียนระงับ หากประสงค์จะจดทะเบียนรถใหม่ ต้องนำรถไปตรวจสภาพที่ใด',
 en:'If a vehicle\'s registration has been suspended and you want to re-register it, where must it be inspected?',
 o:[['สถานตรวจสภาพเอกชน (ตรอ.)','A private inspection centre (ตรอ.)'],['อู่ซ่อมรถทั่วไป','Any garage'],['สำนักงานขนส่งจังหวัดหรือสาขาในภูมิลำเนาที่ประสงค์จดทะเบียน','The provincial transport office or branch in the intended domicile'],['ไม่สามารถจดทะเบียนได้','It can never be re-registered']], a:2,
 w:'At the DLT office itself, not a private ตรอ. Private centres only handle ordinary annual inspections.'},

{c:'veh', th:'นาย ก. เกิดที่จังหวัดเชียงใหม่ ประสงค์ขอรับใบอนุญาตขับรถส่วนบุคคลชั่วคราว จะต้องไปดำเนินการที่ใด',
 en:'Mr A was born in Chiang Mai and wants a temporary private driving licence. Where must he apply?',
 o:[['สำนักงานขนส่งจังหวัดและสาขาทุกแห่ง','Any provincial transport office or branch'],['เฉพาะเชียงใหม่ ยกเว้นกรุงเทพฯ','Only Chiang Mai, excluding Bangkok'],['เฉพาะเชียงใหม่ ยกเว้นสาขาเบตง','Only Chiang Mai, excluding the Betong branch'],['ผิดทุกข้อ','None of the above']], a:0,
 w:'Any DLT office nationwide. Place of birth or house registration no longer restricts where you apply — relevant to you: Bangkok is fine.'},

/* ========== 2. กฎหมายว่าด้วยจราจรทางบก — Land Traffic Act B.E. 2522 ========== */
{c:'trf', th:'การขับรถผ่านทางร่วมทางแยกต้องปฏิบัติอย่างไร',
 en:'How must you behave when driving through a junction or intersection?',
 o:[['ปฏิบัติตามสัญญาณไฟจราจรหรือกฎจราจรอย่างเคร่งครัด','Strictly obey the traffic signals or traffic rules'],['เมื่อพบป้ายเตือนทางร่วมทางแยกให้ขับด้วยความเร็วปกติ','Keep normal speed when you see a junction warning sign'],['หากไม่มีสัญญาณไฟ ให้รถคันที่ใหญ่กว่าไปก่อน','If there is no signal, the larger vehicle goes first'],['ขับไปตามปกติ','Continue as normal']], a:0,
 w:'Vehicle size never creates right of way in Thai law.'},

{c:'trf', th:'ผู้ขับขี่ต้องการเลี้ยวรถต้องปฏิบัติอย่างไร',
 en:'When you intend to turn, what must you do?',
 o:[['ชะลอรถและเปิดไฟเลี้ยวก่อนถึงทางเลี้ยวไม่น้อยกว่า 30 เมตร','Slow down and signal at least 30 m before the turn'],['เปิดไฟเลี้ยวก่อนถึงทางเลี้ยว 20 เมตร','Signal 20 m before the turn'],['หยุดรถเพื่อเตรียมตัวเลี้ยว','Stop the vehicle to prepare'],['เร่งความเร็วก่อนเลี้ยว','Accelerate before turning']], a:0,
 w:'30 m before. Separate number: the signal must be VISIBLE to others from at least 60 m. Two different 30 / 60 facts, both examined.'},

{c:'trf', th:'ในการให้สัญญาณไฟเลี้ยว จะต้องให้ผู้ขับรถคันอื่นเห็นได้ในระยะเท่าไร',
 en:'A turn signal must be visible to other drivers from at least what distance?',
 o:[['ไม่น้อยกว่า 10 เมตร','10 m'],['ไม่น้อยกว่า 15 เมตร','15 m'],['ไม่น้อยกว่า 60 เมตร','60 m'],['ไม่น้อยกว่า 30 เมตร','30 m']], a:2,
 w:'60 m visible. Signal 30 m in advance. Do not swap them.'},

{c:'trf', th:'ผู้ขับขี่ต้องเปิดไฟหน้าหรือไฟท้ายรถ ให้รถคันอื่นเห็นได้ในระยะไม่น้อยกว่าเท่าใด',
 en:'Head and tail lights must be visible to other vehicles from at least what distance?',
 o:[['150 เมตร','150 m'],['100 เมตร','100 m'],['60 เมตร','60 m'],['120 เมตร','120 m']], a:0,
 w:'150 m. The "lights" number. Compare: 60 m is the no-overtaking visibility limit.'},

{c:'trf', th:'ห้ามมิให้ผู้ขับขี่แซงขึ้นหน้ารถคันอื่นขณะที่มีหมอก ฝุ่น ฝน หรือควัน จนไม่อาจเห็นทางข้างหน้าได้ในระยะเท่าใด',
 en:'Overtaking is prohibited when fog, dust, rain or smoke reduces forward visibility to less than what distance?',
 o:[['60 เมตร','60 m'],['90 เมตร','90 m'],['70 เมตร','70 m'],['80 เมตร','80 m']], a:0,
 w:'60 m.'},

{c:'trf', th:'บริเวณใดห้ามแซง',
 en:'Where is overtaking prohibited?',
 o:[['ทางตรง','A straight road'],['ทางที่ปลอดภัย','A safe stretch'],['ทางโล่ง','An empty road'],['ทางโค้งรัศมีแคบ','A sharp (small-radius) curve']], a:3,
 w:'No overtaking on sharp curves, at junctions, on bridges, on one-way roads, or in tunnels.'},

{c:'trf', th:'การจอดรถต้องจอดให้ห่างจากขอบทางไม่เกินกี่เซนติเมตร',
 en:'When parking, how far from the kerb may the vehicle be at most?',
 o:[['ไม่เกิน 35 เซนติเมตร','Not more than 35 cm'],['ไม่เกิน 30 เซนติเมตร','Not more than 30 cm'],['ไม่เกิน 25 เซนติเมตร','Not more than 25 cm'],['ไม่เกิน 40 เซนติเมตร','Not more than 40 cm']], a:2,
 w:'25 cm.'},

{c:'trf', th:'"เขตปลอดภัย" หมายความว่าอย่างไร',
 en:'What does "safety zone" (เขตปลอดภัย) mean?',
 o:[['พื้นที่ที่แสดงว่าผู้ขับขี่ขับต่อไปได้อย่างปลอดภัย','An area marked to show drivers it is safe to continue'],['เขตที่ผู้ขับขี่นำรถผ่านเข้าไปได้','An area vehicles may drive into'],['พื้นที่ในทางเดินรถที่มีเครื่องหมายชัดเจน สำหรับให้คนเดินเท้าที่ข้ามทางหยุดรอ หรือคนขึ้น-ลงรถหยุดรอ','A clearly marked area of the carriageway where pedestrians crossing, or people boarding/alighting, wait'],['เขตที่คนเดินเท้าข้ามได้โดยไม่ต้องหยุดรอ','An area pedestrians may cross without waiting']], a:2,
 w:'A pedestrian refuge. Vehicles must never drive or stop in it — and U-turns in a safety zone are absolutely prohibited.'},

{c:'trf', th:'สัญญาณจราจรไฟสีแดงที่ทำเป็นรูปกากบาทเฉียงอยู่เหนือช่องเดินรถ ห้ามมิให้ผู้ขับขี่ทำสิ่งใด',
 en:'A red diagonal cross signal above a lane prohibits what?',
 o:[['จอดรถในช่องเดินรถนั้น','Parking in that lane'],['หยุดและจอดรถในช่องเดินรถนั้น','Stopping and parking in that lane'],['ขับรถในช่องเดินรถนั้น','Driving in that lane at all'],['หยุดรถในช่องเดินรถนั้น','Stopping in that lane']], a:2,
 w:'The lane is closed — you may not drive in it. A green arrow above a lane means the opposite.'},

{c:'trf', th:'เมื่อพนักงานจราจรยืนและเหยียดแขนซ้ายออกไปเสมอระดับไหล่ ผู้ขับขี่ซึ่งขับรถมาจากทางด้านไหนจะต้องหยุดรถ',
 en:'A traffic officer stands and extends the LEFT arm horizontally at shoulder level. Traffic from which direction must stop?',
 o:[['ด้านข้าง','From the side'],['ด้านหน้าและด้านหลัง','From front and behind'],['ด้านหลัง','From behind the officer'],['ด้านหน้า','From in front of the officer']], a:2,
 w:'Left arm out = traffic BEHIND the officer stops. Right forearm raised with palm up = traffic in FRONT stops. Learn this as a pair; it is a guaranteed question.'},

{c:'trf', th:'เมื่อพนักงานจราจรยกแขนขวาท่อนล่างตั้งฉากกับแขนท่อนบนและตั้งฝ่ามือขึ้น ผู้ขับขี่ซึ่งขับรถมาจากทางด้านไหนจะต้องหยุดรถ',
 en:'A traffic officer raises the right forearm vertically with the palm facing up. Traffic from which direction must stop?',
 o:[['ด้านหลัง','From behind'],['ด้านหน้าและด้านหลัง','From front and behind'],['ด้านหน้า','From in front of the officer'],['ด้านข้างและด้านหลัง','From the side and behind']], a:2,
 w:'Palm up in front = traffic in FRONT stops. The mirror of the left-arm question.'},

{c:'trf', th:'การขับรถผ่านทางร่วมทางแยกที่มีสัญญาณจราจรไฟกระพริบสีแดง ผู้ขับขี่ต้องปฏิบัติอย่างไร',
 en:'At a junction with a FLASHING RED light, what must you do?',
 o:[['หยุดรถหลังเส้นให้รถหยุด เมื่อเห็นว่าปลอดภัยจึงขับต่อไปด้วยความระมัดระวัง','Stop behind the stop line, then proceed with care when it is safe'],['ลดความเร็วและผ่านไปด้วยความระมัดระวัง','Slow down and proceed with care'],['จอดรถด้วยความระมัดระวัง','Park carefully'],['เพิ่มความเร็วและผ่านไปโดยเร็ว','Speed up and pass quickly']], a:0,
 w:'Flashing RED = full stop, then go when safe. Flashing AMBER = slow down and proceed with care. Both are asked; they are different answers.'},

{c:'trf', th:'เมื่อพบสัญญาณไฟเหลืองกระพริบที่ทางร่วมทางแยก ผู้ขับขี่ควรทำอย่างไร',
 en:'At a junction with a FLASHING AMBER light, what should you do?',
 o:[['ขับผ่านทันที','Pass immediately'],['หยุดรถ','Stop completely'],['ชะลอความเร็วและขับด้วยความระมัดระวัง','Slow down and proceed with care'],['เปิดไฟฉุกเฉิน','Turn on hazard lights']], a:2,
 w:'Amber flashing = caution, no obligation to stop. Compare with flashing red = stop.'},

{c:'trf', th:'สิ่งใดที่ผู้ขับรถควรทำเมื่อได้รับสัญญาณไฟเหลือง (ไม่กระพริบ)',
 en:'What should you do on a steady AMBER light?',
 o:[['ชะลอรถและหยุดที่เส้นให้หยุดรถ เพื่อป้องกันการฝ่าไฟแดง','Slow and stop at the stop line, to avoid running the red'],['บีบแตรเร่งรถคันหน้า','Sound the horn at the vehicle in front'],['เปลี่ยนเลนแซงขึ้นไปให้พ้นไฟแดง','Change lane and overtake to beat the red'],['ขับตามคันหน้าฝ่าไฟแดงไป','Follow the vehicle in front through the red']], a:0,
 w:'Steady amber = prepare to stop.'},

{c:'trf', th:'ผู้ขับขี่ต้องขับรถให้ห่างจากรถคันหน้าเท่าไร',
 en:'How far behind the vehicle in front must you drive?',
 o:[['ในระยะที่จะสามารถหยุดรถได้โดยปลอดภัยเมื่อมีความจำเป็น','At a distance that lets you stop safely if needed'],['ไม่น้อยกว่า 2 เมตร','Not less than 2 m'],['ไม่น้อยกว่า 1 เมตร','Not less than 1 m'],['ไม่น้อยกว่า 3 เมตร','Not less than 3 m']], a:0,
 w:'The law gives no fixed metre figure — it is "a distance in which you can stop safely". When an option offers a specific number here, it is the distractor.'},

{c:'trf', th:'เมื่อถึงทางรถไฟและมีรถไฟกำลังแล่นผ่าน ผู้ขับขี่ต้องปฏิบัติอย่างไร',
 en:'At a railway crossing with a train passing, what must you do?',
 o:[['หยุดรถให้ห่างจากทางรถไฟไม่น้อยกว่า 5 เมตร','Stop not less than 5 m from the track'],['ขับรถผ่านไปโดยเร็ว','Cross quickly'],['ให้สัญญาณแตรเตือนและขับผ่านไป','Sound the horn and cross'],['หยุดรอสัญญาณไฟและเปิดไฟฉุกเฉิน','Wait for the signal with hazards on']], a:0,
 w:'5 m minimum. Hazard lights are not required.'},

{c:'trf', th:'บริเวณใดใช้สัญญาณเสียงแตรได้',
 en:'In which of these places MAY you use the horn?',
 o:[['โรงเรียน','A school'],['สถานที่ราชการ','A government office'],['สวนสาธารณะ','A public park'],['โรงพยาบาล','A hospital']], a:2,
 w:'Horn use is to be avoided near schools, government offices and hospitals. A public park is not on that list.'},

{c:'trf', th:'นอกเขตกรุงเทพฯ เขตเมืองพัทยา หรือเขตเทศบาล ต้องขับรถด้วยความเร็วเท่าไร',
 en:'Outside Bangkok, Pattaya City or a municipal area, what is the speed limit for a vehicle under the Motor Vehicle Act?',
 o:[['ไม่เกิน 120 กม./ชม.','Not over 120 km/h'],['ไม่เกิน 80 กม./ชม.','Not over 80 km/h'],['ไม่เกิน 100 กม./ชม.','Not over 100 km/h'],['ไม่เกิน 90 กม./ชม.','Not over 90 km/h']], a:3,
 w:'The exam answer is 90 km/h (80 km/h inside the city).',
 note:'Since 2021 designated motorways allow 120 km/h. The DLT bank has not been updated — answer 90 in the exam.'},

{c:'trf', th:'ข้อใดปฏิบัติถูกต้อง',
 en:'Which is correct lane practice?',
 o:[['รถจักรยานยนต์ต้องขับในช่องเดินรถด้านซ้ายสุด','Motorcycles must ride in the leftmost lane'],['รถบรรทุกคนโดยสารต้องขับในช่องขวาสุด','Passenger vehicles must use the rightmost lane'],['รถบรรทุกสิ่งของต้องขับในช่องขวาสุด','Goods vehicles must use the rightmost lane'],['การเปลี่ยนช่องเดินรถไม่ต้องดูกระจก','No need to check mirrors when changing lanes']], a:0,
 w:'Motorcycles keep to the leftmost lane. This one is directly about you and appears often.'},

{c:'trf', th:'รถที่มีความเร็วช้า ผู้ขับขี่จะต้องปฏิบัติอย่างไร',
 en:'A slow-moving vehicle must be driven where?',
 o:[['ขับได้ทั้งด้านซ้ายและด้านขวา','Either left or right'],['ขับชิดขอบด้านขวา','Close to the right edge'],['ขับบนไหล่ทาง','On the hard shoulder'],['ขับชิดขอบด้านซ้าย','Close to the left edge']], a:3,
 w:'Keep left. The hard shoulder is not a traffic lane.'},

{c:'trf', th:'ผู้ใดได้รับยกเว้นไม่ต้องสวมหมวกนิรภัยขณะโดยสารรถจักรยานยนต์',
 en:'Who is exempt from wearing a crash helmet on a motorcycle?',
 o:[['ภิกษุ สามเณร','Buddhist monks and novices'],['คนโดยสาร','Passengers'],['เด็ก','Children'],['คนขับรถ','The rider']], a:0,
 w:'Monks and novices only. Rider AND passenger otherwise must both wear helmets.'},

{c:'trf', th:'ข้อใดเปิดไฟฉุกเฉินได้ถูกต้อง',
 en:'When is it correct to use hazard lights?',
 o:[['รถเสียหรือรถเกิดอุบัติเหตุ','Breakdown or accident'],['เปิดได้ตลอดเวลา','Any time'],['มีหมอก','In fog'],['ผ่านทางแยก','When crossing a junction']], a:0,
 w:'Breakdown or accident only. Using hazards to drive straight through a junction, or in rain, is wrong — and both appear as distractors.'},

{c:'trf', th:'ในการบรรทุกสิ่งของ ผู้ขับขี่ต้องปฏิบัติอย่างไร',
 en:'What are the rules on a projecting load?',
 o:[['บรรทุกกว้างกว่าตัวรถข้างละ 1 เมตร','May be 1 m wider than the vehicle each side'],['บรรทุกยื่นพ้นตัวรถด้านหลังไม่เกิน 2.50 เมตร','May project no more than 2.50 m beyond the rear'],['บรรทุกสูงเกิน 5 เมตร','May be over 5 m high'],['บรรทุกยื่นพ้นด้านหน้าไม่เกิน 2.50 เมตร','May project 2.50 m beyond the front']], a:1,
 w:'2.50 m at the REAR. The front figure is not 2.50 m — the trick is the direction, not the number.'},

{c:'trf', th:'บริเวณทางร่วมทางแยกและมีเครื่องหมายห้ามกลับรถ แต่เจ้าพนักงานจราจรอนุญาตให้กลับรถได้ ผู้ขับขี่ต้องปฏิบัติอย่างไร',
 en:'At a junction marked "no U-turn", a traffic officer signals you to U-turn. What do you do?',
 o:[['กลับรถได้','Make the U-turn'],['กลับรถได้ถ้าไม่มีเครื่องหมายห้าม','Only if there were no sign'],['กลับรถไม่ได้','You may not'],['กลับรถได้ถ้าไม่ใช่ทางร่วมทางแยก','Only if it were not a junction']], a:0,
 w:'An officer\'s instruction overrides signs and signals. This hierarchy — officer > signal > sign > marking — is examined repeatedly.'},

{c:'trf', th:'ขณะขับรถตรวจพบแอลกอฮอล์ในร่างกายเกินกว่าที่กฎหมายกำหนด มีโทษอย่างไร',
 en:'What is the penalty for driving over the legal alcohol limit?',
 o:[['จำคุกไม่เกิน 3 เดือน หรือปรับ 1,000–50,000 บาท','Up to 3 months, or 1,000–50,000 baht'],['จำคุกไม่เกิน 1 ปี หรือปรับ 5,000–20,000 บาท หรือทั้งจำทั้งปรับ','Up to 1 year, or 5,000–20,000 baht, or both'],['ปรับไม่เกิน 5,000 บาท','Fine up to 5,000 baht'],['ปรับไม่เกิน 10,000 บาท','Fine up to 10,000 baht']], a:1,
 w:'Up to 1 year and/or 5,000–20,000 baht. The legal limit is 50 mg%; 20 mg% for probationary/under-20 drivers.'},

{c:'trf', th:'เมื่อเกิดอุบัติเหตุ ผู้ขับขี่หลบหนีจะมีผลอย่างไร',
 en:'What is the consequence if a driver flees the scene of an accident?',
 o:[['ไม่มีผล เพราะไม่ใช่ฝ่ายผิด','No consequence if not at fault'],['ให้สันนิษฐานว่าผู้นั้นเป็นผู้กระทำผิด','They are presumed to be the offender'],['มีผลให้เป็นฝ่ายถูก','They are treated as not at fault'],['จะได้รับการกันไว้เป็นพยาน','They become a protected witness']], a:1,
 w:'Fleeing creates a legal presumption of guilt.'},

{c:'trf', th:'บริเวณใดจอดรถได้',
 en:'Where may you park?',
 o:[['ที่มีป้ายห้ามหยุดรถ','Where there is a "no stopping" sign'],['ในอุโมงค์','In a tunnel'],['ทางร่วมทางแยก','At a junction'],['ลานจอดรถในห้างสรรพสินค้า','A shopping-mall car park']], a:3,
 w:'Everything else listed is a statutory no-parking place.'},

{c:'trf', th:'ผู้ขับขี่ปฏิบัติตามข้อใดไม่ถูกต้อง',
 en:'Which of these is INCORRECT driving practice?',
 o:[['ลดความเร็วเมื่อถึงวงเวียน','Slowing at a roundabout'],['ลดความเร็วเมื่อถึงที่คับขัน','Slowing at a narrow spot'],['จอดรถบริเวณทางร่วมทางแยก','Parking at a junction'],['ลดความเร็วเมื่อเห็นคนกำลังข้ามทาง','Slowing when someone is crossing']], a:2,
 w:'Parking at a junction is prohibited.'},

{c:'trf', th:'การให้สัญญาณด้วยแขน โดยยื่นแขนขวาตรงออกไปนอกตัวรถเสมอระดับไหล่และโบกมือขึ้นลงหลายครั้ง หมายถึงอะไร',
 en:'Hand signal: right arm extended horizontally at shoulder level, waving up and down repeatedly. What does it mean?',
 o:[['หยุดรถ','I am stopping'],['เลี้ยวขวา','I am turning right'],['จะลดความเร็วของรถ','I am slowing down'],['จอดรถ','I am parking']], a:2,
 w:'Waving up and down = slowing. Arm held straight and still = turning right. Arm bent up at the elbow = turning left. All three are examined.'},

{c:'trf', th:'เมื่อผู้ขับขี่พบเครื่องหมาย "เลี้ยวซ้ายผ่านตลอด" ควรปฏิบัติอย่างไร',
 en:'At a "free left turn" (เลี้ยวซ้ายผ่านตลอด) sign, what should you do?',
 o:[['ลดความเร็วและเลี้ยวซ้ายผ่านไปได้ทันที','Slow down and turn left immediately'],['หยุดรอไฟเขียวจึงเลี้ยวซ้าย','Wait for the green light'],['หยุดรอให้คนข้ามถนนและรถที่มาจากด้านขวามือผ่านไปก่อน แล้วจึงเลี้ยวซ้าย','Give way to pedestrians and to traffic from the right, then turn left'],['เลี้ยวซ้ายผ่านไปได้ทันที','Turn left immediately']], a:2,
 w:'"Free left" removes the need to wait for the light — it does NOT remove the duty to give way.'},

{c:'trf', th:'ผู้ที่ข้ามถนนนอกทางม้าลายภายในระยะ 100 เมตรจากทางม้าลาย อาจได้รับโทษอย่างไร',
 en:'A pedestrian crossing outside a zebra crossing but within 100 m of one may be fined how much?',
 o:[['ไม่มีความผิด','No offence'],['เตือนด้วยวาจา','Verbal warning'],['ปรับไม่เกิน 200 บาท','Fine up to 200 baht'],['ยึดบัตรประชาชน','ID card confiscated']], a:2,
 w:'200 baht. Yes, pedestrians commit offences too — and the exam asks about it.'},

{c:'trf', th:'การกลับรถบนสะพานหรือในเขตปลอดภัย มีผลอย่างไร',
 en:'What about making a U-turn on a bridge or in a safety zone?',
 o:[['กลับรถได้เฉพาะกลางคืน','Allowed at night'],['กลับรถได้หากไม่มีรถ','Allowed if no traffic'],['ห้ามกลับรถโดยเด็ดขาด','Absolutely prohibited'],['กลับรถได้หากมีที่ว่าง','Allowed if there is space']], a:2,
 w:'Absolutely prohibited: bridges, safety zones, junctions, and anywhere a no-U-turn sign stands.'},

/* ========== 3. มารยาทและจิตสำนึก — Etiquette & road-safety awareness ========== */
{c:'etq', th:'การขับรถเข้าวงเวียนที่ไม่มีสัญญาณไฟจราจรควรปฏิบัติอย่างไร',
 en:'Entering a roundabout with no traffic lights, what should you do?',
 o:[['ให้รถทางขวามือของเราที่อยู่ในวงเวียนไปก่อน','Give way to traffic already in the roundabout, on your right'],['ให้รถทางซ้ายมือไปก่อน','Give way to traffic on your left'],['ให้รถที่เข้าวงเวียนและจะเลี้ยวซ้ายไปก่อน','Give way to entering traffic turning left'],['ให้รถที่เข้าวงเวียนและจะตรงไปให้ไปก่อน','Give way to entering traffic going straight']], a:0,
 w:'This is Land Traffic Act s.71(1): give way to a vehicle ALREADY IN the junction. In a roundabout that vehicle reaches you from the right, which is why the answer says right. Do not carry "right" over to an ordinary crossroads — see the next question.',
 src:'s.71(1)'},

{c:'etq', th:'มาถึงทางร่วมทางแยกที่ไม่มีสัญญาณไฟพร้อมกัน และไม่มีรถอยู่ในทางแยก ผู้ขับขี่ต้องปฏิบัติอย่างไร',
 en:'You and another vehicle reach an unsignalised junction at the SAME time and the junction is clear. Who goes first?',
 o:[['ให้รถที่อยู่ทางด้านซ้ายของตนผ่านไปก่อน','Give way to the vehicle on your LEFT'],['ให้รถที่อยู่ทางด้านขวาของตนผ่านไปก่อน','Give way to the vehicle on your right'],['รถคันใหญ่ไปก่อน','The larger vehicle goes first'],['บีบแตรแล้วไปก่อน','Sound the horn and go first']], a:0,
 w:'LEFT. Land Traffic Act s.71(2), quoted in full: "ถ้ามาถึงทางร่วมทางแยกพร้อมกันและไม่มีรถอยู่ในทางร่วมทางแยก ผู้ขับขี่ต้องให้รถที่อยู่ทางด้านซ้ายของตนผ่านไปก่อน". The DLT English book teaches the same thing (p.45 Q27, Q29). Many popular Thai practice banks print "give way to the right" here and they are simply wrong.',
 src:'s.71(2) + DLT book p.45 Q27/Q29'},

{c:'trf', th:'ทางร่วมทางแยกที่ไม่มีสัญญาณไฟ และเป็นถนนขนาดเดียวกันทั้งสองสาย ใครมีสิทธิ์ไปก่อน',
 en:'Unsignalised junction, both roads of equal class, no one already in the junction. Who has priority?',
 o:[['รถที่มาถึงทางแยกก่อน','Whichever vehicle reached the junction first'],['รถที่มีความเร็วสูงกว่า','The faster vehicle'],['รถที่มาจากทางขวา','The vehicle coming from the right'],['รถที่ตัวใหญ่กว่า','The bigger vehicle']], a:0,
 w:'First to arrive goes first; only if you arrive together does the left-hand rule decide it. DLT book p.45 Q27 spells out the whole ladder: (1) anyone already in the junction, (2) main road before minor road, (3) first to arrive, (4) if simultaneous, the vehicle on the left.',
 src:'DLT book p.45 Q27'},

{c:'trf', th:'รถในทางเอกกับรถในทางโทมาถึงทางแยกที่ไม่มีสัญญาณไฟ ใครไปก่อน',
 en:'A vehicle on a main road and one on a minor road reach an unsignalised junction. Who goes first?',
 o:[['รถในทางเอก','The vehicle on the main road'],['รถในทางโท','The vehicle on the minor road'],['รถที่อยู่ทางซ้าย','Whichever is on the left'],['รถที่ถึงก่อน','Whichever arrived first']], a:0,
 w:'Main road (ทางเอก) before minor road (ทางโท). The minor-road vehicle waits behind the stop line. The left-hand rule only applies between roads of EQUAL class.',
 src:'DLT book p.44 Q22, p.46 Q30'},

{c:'etq', th:'ทัศนคติและจิตสำนึกในการขับรถอย่างปลอดภัยของผู้ขับรถคืออะไร',
 en:'What attitude reflects safe-driving awareness?',
 o:[['ขับรถช้า ใจเย็น','Driving slowly and calmly'],['ขับรถเก่ง คล่องแคล่ว','Driving skilfully and nimbly'],['ขับรถอย่างมีสติ เคร่งครัดวินัยจราจร แสดงออกถึงมารยาทและน้ำใจ','Driving attentively, with strict traffic discipline, courtesy and consideration'],['ขับรถดี ไม่เกิดอุบัติเหตุ','Driving well and never having an accident']], a:2,
 w:'On etiquette questions the correct answer is always the longest, most comprehensive, most other-regarding option. Use that as your tiebreaker.'},

{c:'etq', th:'ท่านควรทำอย่างไรเมื่อผู้ขับรถคันอื่นให้สัญญาณไฟขอเข้าใช้ช่องจราจรร่วมกับท่าน',
 en:'Another driver signals to merge into your lane. What should you do?',
 o:[['ชะลอความเร็ว เว้นระยะให้รถคันนั้นเปลี่ยนช่องจราจรเข้ามาได้อย่างปลอดภัย','Slow down and leave a gap so they can merge safely'],['บีบแตรเตือนและขับชิดคันหน้ากันไม่ให้แทรก','Sound the horn and close the gap'],['ขับชิดคันหน้าพยายามเบียดไม่ให้แทรกเข้ามา','Tailgate to block them'],['เร่งความเร็วไม่เปิดช่องว่าง','Accelerate so no gap opens']], a:0,
 w:'Let them in.'},

{c:'etq', th:'ท่านควรทำอย่างไรเมื่อผู้ขับรถคันอื่นเปิดทางให้ท่านไปก่อน',
 en:'Another driver lets you go first. What should you do?',
 o:[['เร่งรถออกไปโดยตัดข้ามไปยังช่องจราจรถัดไป','Accelerate away and cut across to the next lane'],['ยกมือขอบคุณ พร้อมเคลื่อนรถออกไปอย่างเร่งร้อน','Wave thanks and move off hurriedly'],['ก้มหัวขอบคุณ พร้อมเคลื่อนรถออกไปด้วยความระมัดระวัง','Nod in thanks and move off carefully'],['ขับออกไปช้าๆ และพยายามเบียดข้ามไปยังช่องถัดไป','Move off slowly and squeeze across to the next lane']], a:2,
 w:'Thank them AND move carefully. The correct option always contains both halves.'},

{c:'etq', th:'เมื่อรถที่ขับตามหลังมาให้สัญญาณขอแซง มารยาทที่ดีเพื่อแสดงการตอบรับว่ายินยอมให้แซง คือข้อใด',
 en:'A vehicle behind signals to overtake. Which signal politely means "yes, come past"?',
 o:[['ให้สัญญาณไฟฉุกเฉิน','Hazard lights'],['ให้สัญญาณแตร','The horn'],['ให้สัญญาณไฟเลี้ยวซ้าย','Left turn signal'],['ให้สัญญาณไฟสูง','High beam']], a:2,
 w:'Left indicator = "I am moving left, come past". A specific, memorisable convention.'},

{c:'etq', th:'ในขณะที่ผู้อื่นแบ่งปันน้ำใจในการใช้รถใช้ถนนให้ท่าน ข้อใดไม่ใช่วิธีที่ควรปฏิบัติ',
 en:'When another road user shows you courtesy, which response is NOT appropriate?',
 o:[['ส่งยิ้มแสดงการขอบคุณ','Smiling in thanks'],['โค้งศีรษะแสดงความขอบคุณ','Nodding in thanks'],['ยกมือขวาขึ้นระดับคิ้วแสดงการขอบคุณ','Raising your right hand to eyebrow level'],['เปิดไฟสูงแสดงการขอบคุณ','Flashing high beam in thanks']], a:3,
 w:'High beam dazzles. It is never the polite option in this bank.'},

{c:'etq', th:'ในกรณีที่ท่านขับรถผิดกฎจราจร หรือก่อความเดือดร้อนให้ผู้อื่น สิ่งที่ควรปฏิบัติคือ',
 en:'If you break a traffic rule or inconvenience another road user, what should you do?',
 o:[['ขอให้ดำเนินการตามกฎหมายว่าฝ่ายใดถูกผิด','Insist on letting the law decide who is at fault'],['จอดรถลงมาถามว่าทำความเดือดร้อนอะไร','Stop and ask what the problem is'],['ยกมือขวาขึ้นระดับคิ้วพร้อมโค้งศีรษะ เพื่อสื่อว่าทำผิดและขอโทษ','Raise your right hand to eyebrow level and nod, to acknowledge and apologise'],['รีบขับรถไปจากที่นั้นโดยเร็ว','Drive away quickly']], a:2,
 w:'The hand-to-eyebrow gesture with a nod is the standard Thai apology from a vehicle.'},

{c:'etq', th:'ท่านคิดว่าข้อใดเป็นการขับขี่ที่ไร้ซึ่งมารยาทอย่างมาก',
 en:'Which is the most discourteous driving behaviour?',
 o:[['ใช้ความเร็วปกติเมื่อมีรถกระพริบไฟขอทาง','Keeping normal speed when flashed'],['ขับรถชิดซ้าย หรือให้ทางแก่รถฉุกเฉิน','Keeping left, or yielding to emergency vehicles'],['ขับรถจี้ท้าย และบีบแตรไล่บนทางด่วน','Tailgating and blaring the horn on an expressway'],['ชะลอความเร็วให้รถคันอื่นแซง','Slowing to let others past']], a:2,
 w:'Tailgating and horn-blasting.'},

{c:'etq', th:'หากมีผู้ขับรถจี้ท้ายรถท่านในช่องทางขวาสุดและบีบแตรไล่หลัง ทั้งที่ช่องทางด้านซ้ายก็ว่างอยู่ ท่านควรปฏิบัติตนอย่างไร',
 en:'Someone tailgates you in the right lane and blares the horn, while the left lane is free. What should you do?',
 o:[['แซงไปก่อนแล้วขับไล่ตลอดทาง','Overtake and chase them'],['เร่งความเร็ว ไม่ให้แซงอย่างเด็ดขาด','Accelerate to prevent them passing'],['ขับรถหลีกทางเบี่ยงไปช่องทางด้านซ้ายอย่างระมัดระวัง','Move over into the left lane carefully'],['กระพริบไฟด้านซ้ายเป็นสัญญาณให้แซงด้านซ้าย','Flash to invite them to pass on the left']], a:2,
 w:'Move over. Never escalate — that is the whole logic of this category.'},

{c:'etq', th:'เมื่อขับรถเข้าเขตชุมชนที่มีการจราจรติดขัด ผู้ขับรถควรทำอย่างไร',
 en:'Driving into a congested residential area, what should you do?',
 o:[['บีบแตรเร่งรถคันหน้าและเตือนคนเดินถนนให้หลีกทาง','Sound the horn to hurry others along'],['ขับช้าๆ ระมัดระวังคนเดิน ใช้แตรเมื่อจำเป็นเท่านั้น','Drive slowly, watch for pedestrians, use the horn only when necessary'],['ขับเบียดรถที่จอดหรือคนเดินโดยล้ำไปช่องจราจรที่สวนมา','Squeeze past by crossing into oncoming traffic'],['ขับย้อนศรเพื่อหนีการจราจรติดขัด','Drive against the flow to escape the jam']], a:1,
 w:'Slow, watchful, horn only if needed.'},

{c:'etq', th:'ในการขับรถช่วงเวลากลางคืน ควรใช้ไฟหน้ารถอย่างไร',
 en:'How should headlights be used at night?',
 o:[['เปิดไฟสูงตลอดเวลาที่ขับขี่','High beam at all times'],['เปิดทั้งไฟหน้าและไฟตัดหมอก','Headlights plus fog lights'],['เปิดไฟหน้า ไฟตัดหมอก และไฟกระพริบฉุกเฉิน','Headlights, fog lights and hazards'],['เปิดไฟต่ำเมื่อมีรถอยู่ด้านหน้าและรถสวนทางมา','Dip to low beam when there is a vehicle ahead or oncoming']], a:3,
 w:'Dip for vehicles ahead and oncoming.'},

{c:'etq', th:'ข้อใดเป็นพฤติกรรมที่สามารถกระทำได้ในกรณีการใช้ไฟสูง',
 en:'Which use of high beam is acceptable?',
 o:[['ใช้ไฟสูงเพื่อส่องดูป้ายบอกทางหรือทางข้างหน้าเป็นครั้งคราว','Occasionally, to read a sign or see the road ahead'],['ใช้ไฟสูงขณะมีรถอยู่ข้างหน้าหรือมีรถสวนมา','When there is a vehicle ahead or oncoming'],['ใช้ไฟสูงเพราะไม่พอใจรถคันหน้า','To express annoyance at the vehicle ahead'],['ใช้ไฟสูงเพื่อบอกว่าต้องใช้ความเร็วสูง โปรดอย่าขวางทาง','To signal that you are going fast, so get out of the way']], a:0,
 w:'Occasional use on a dark road with nobody around.'},

{c:'etq', th:'การขับรถผ่านทางโค้ง ทางร่วม ทางแยก ในช่วงเวลากลางคืน ควรใช้ไฟหน้ารถอย่างไร',
 en:'Approaching a curve or junction at night, how should you use your lights?',
 o:[['ชะลอความเร็วแล้วกระพริบไฟและเปิดไฟฉุกเฉิน','Slow, flash, and turn on hazards'],['ก่อนเข้าโค้งให้กระพริบไฟ และลดเป็นไฟต่ำเมื่อมีรถสวนทาง','Flash before the curve, then dip when a vehicle comes the other way'],['ชะลอความเร็วก่อนเปิดไฟสูง','Slow down then switch to high beam'],['ชะลอความเร็วก่อนเปิดไฟต่ำ','Slow down then switch to low beam']], a:1,
 w:'Flash to announce yourself, then dip for oncoming traffic.'},

{c:'etq', th:'ผู้ขับขี่ควรใช้แตรเมื่อใด',
 en:'When should the horn be used?',
 o:[['ไล่คนเดินเท้าที่กำลังข้ามทางม้าลาย','To move pedestrians off a zebra crossing'],['เร่งรถคันหน้าให้ขับเร็วขึ้น','To hurry the vehicle in front'],['ป้องกันอันตรายหรืออุบัติเหตุที่อาจเกิดขึ้น','To prevent danger or a possible accident'],['ทักทายผู้ขับขี่คันอื่นที่รู้จักกัน','To greet a driver you know']], a:2,
 w:'Danger warning only.'},

{c:'etq', th:'การกระทำของผู้ขับขี่ข้อใด ที่อาจก่อให้เกิดอุบัติเหตุมากที่สุด',
 en:'Which driver behaviour is most likely to cause an accident?',
 o:[['พูดคุยกับคนที่อยู่ข้างๆ','Talking to a passenger'],['เปิดวิทยุฟังเพลง','Listening to the radio'],['ร้องเพลง','Singing'],['ใช้โทรศัพท์มือถือขณะขับรถ','Using a mobile phone while driving']], a:3,
 w:'Mobile phone use.'},

{c:'etq', th:'เมื่อเกิดอุบัติเหตุและมีผู้บาดเจ็บ ผู้ขับขี่ควรคำนึงถึงสิ่งใดเป็นอันดับแรก',
 en:'After an accident with injuries, what is the driver\'s FIRST priority?',
 o:[['การเคลื่อนย้ายรถที่เกิดเหตุ','Moving the vehicles'],['การช่วยเหลือผู้บาดเจ็บ','Helping the injured'],['รอประกันภัย','Waiting for the insurer'],['รอพบเจ้าหน้าที่ตำรวจ','Waiting for the police']], a:1,
 w:'Help the injured first — failing to do so is itself an offence. Note the neighbouring question where the first act is to WARN other traffic; read carefully which is asked.'},

{c:'etq', th:'สาเหตุของการเกิดอุบัติเหตุประกอบด้วยปัจจัยใด',
 en:'Which factors cause road accidents?',
 o:[['คน','People'],['คน รถ','People and vehicles'],['คน รถ ถนน','People, vehicles and roads'],['คน รถ ถนน สิ่งแวดล้อม','People, vehicles, roads and environment']], a:3,
 w:'All four. When options nest inside each other like this, the longest is the answer.'},

{c:'etq', th:'สาเหตุสำคัญที่ทำให้การขับรถในเวลากลางคืนมีความเสี่ยงต่อการเกิดอุบัติเหตุสูงกว่าในเวลากลางวันคือข้อใด',
 en:'Why is night driving riskier than day driving?',
 o:[['ทัศนวิสัยในการมองเห็น','Reduced visibility'],['สภาพร่างกายและสภาพรถไม่พร้อม','Driver and vehicle condition'],['คนขับหลับในเนื่องจากเหนื่อยล้า','Falling asleep from fatigue'],['ขับรถในขณะมึนเมา','Drink-driving']], a:0,
 w:'Visibility is the primary cause in this bank.'},

{c:'etq', th:'การปลูกฝังจิตสำนึกความปลอดภัยในการใช้รถใช้ถนน ควรกระทำที่บุคคลในข้อใดมากที่สุด',
 en:'Road-safety awareness should be instilled in whom?',
 o:[['บุคคลทุกคน','Everyone'],['คนขับรถเท่านั้น','Drivers only'],['คนเดินเท้าเท่านั้น','Pedestrians only'],['ผู้โดยสารเท่านั้น','Passengers only']], a:0,
 w:'Everyone — all are road users.'},

{c:'etq', th:'หลังจากประสบอุบัติเหตุและรอดชีวิตมาได้ ข้อใดสะท้อนว่าผู้ขับรถมีจิตสำนึกความปลอดภัย',
 en:'After surviving a crash, which statement shows genuine safety awareness?',
 o:[['เมื่อวานเพิ่งไปสะเดาะเคราะห์มา ไม่งั้นคงไม่รอด','I had a bad-luck-cleansing ceremony yesterday'],['เพราะพระเครื่องที่แขวนคออยู่คุ้มครอง','My amulet protected me'],['ปีนี้หมอดูทายว่าดวงจะดี','The fortune teller said this is my lucky year'],['ได้ศึกษาหาความรู้หลักการขับขี่ปลอดภัยอยู่เสมอ','I keep studying safe-riding principles'],], a:3,
 w:'The bank consistently rejects luck, amulets and fortune-telling in favour of knowledge and preparation.'},

{c:'etq', th:'ข้อใดเป็นการขับรถที่ถูกต้องทั้งกฎจราจรและมารยาทในการขับรถ',
 en:'Which is correct both legally and as a matter of courtesy?',
 o:[['ขับปาดหน้ารถคันอื่นอย่างกระชั้นชิด','Cutting closely in front of another vehicle'],['ขับช้าๆ ในช่องทางเดินรถทางขวา','Driving slowly in the right lane'],['ขับด้วยความเร็ว 150 กม./ชม. ในกรณีที่ถนนว่าง','Driving 150 km/h on an empty road'],['หยุดรถให้คนข้ามถนนในบริเวณที่มีคนข้าม','Stopping for pedestrians where people cross']], a:3,
 w:'Stop for pedestrians.'},

{c:'etq', th:'เมื่อเกิดอุบัติเหตุและมีผู้บาดเจ็บ สิ่งแรกที่ผู้ขับขี่ควรทำคืออะไร (กรณีถามถึงการช่วยเหลือ)',
 en:'Someone is injured in a crash and you are unhurt. What should you do?',
 o:[['ถ่ายรูปเก็บไว้ก่อน','Photograph the scene first'],['โทรหาบริษัทประกัน','Call the insurer'],['ปฐมพยาบาลเบื้องต้นแล้วรีบนำส่งโรงพยาบาล','Give first aid then get them to hospital'],['หนีออกจากที่เกิดเหตุ','Leave the scene']], a:2,
 w:'First aid, then hospital.'},

{c:'etq', th:'การใช้แตรรถในเขตโรงพยาบาลควรปฏิบัติอย่างไร',
 en:'How should the horn be used near a hospital?',
 o:[['บีบแตรเพื่อให้รถคันหน้าหลบ','Sound it to move the vehicle ahead'],['ใช้แตรเสียงดังเพื่อเตือน','Use a loud horn to warn'],['หลีกเลี่ยงการใช้แตร','Avoid using the horn'],['ใช้แตรทุกครั้งที่เลี้ยว','Sound it at every turn']], a:2,
 w:'Avoid it — hospitals, schools and government offices are quiet zones.'},

/* ========== 4. เทคนิคการขับขี่อย่างปลอดภัย — Safe riding technique ========== */
{c:'safe', th:'การขับรถขณะฝนตก ข้อใดที่ผู้ขับขี่ไม่ควรปฏิบัติ',
 en:'Which should you NOT do when riding in rain?',
 o:[['เปิดไฟฉุกเฉินตลอดเส้นทาง','Keep hazard lights on the whole way'],['เปิดที่ปัดน้ำฝน','Use the wipers'],['ใช้ความระมัดระวังเพิ่มมากขึ้น','Take extra care'],['ลดความเร็วของรถลงกว่าปกติ','Reduce speed']], a:0,
 w:'Hazards are for a stopped, broken-down or crashed vehicle — never for driving in rain.'},

{c:'safe', th:'เพราะเหตุใดรถจึงลื่นไถลได้ง่ายขณะฝนตกใหม่ๆ',
 en:'Why is the road most slippery when rain first starts?',
 o:[['น้ำฝนทำให้ถนนชำรุดเป็นหลุมเป็นบ่อ','Rain creates potholes'],['น้ำฝนกลายเป็นแผ่นฟิล์มรองรับระหว่างยางกับพื้นถนน','The water forms a film between tyre and road surface'],['ถนนคอนกรีตดูดซับน้ำฝนได้ดี','Concrete absorbs the water well'],['พื้นถนนปรับอุณหภูมิเร็วเกินไป','The road cools too fast']], a:1,
 w:'A water film over the dust and oil on the surface. On a bike this is the single most dangerous moment of a Bangkok day.'},

{c:'safe', th:'เมื่อเกิดรถเสีย ควรปฏิบัติอย่างไร',
 en:'If your vehicle breaks down, what should you do?',
 o:[['จอดรถทิ้งไว้กลางถนน','Leave it in the middle of the road'],['นำกิ่งไม้วางไว้ท้ายรถ','Put a tree branch behind it'],['เผาไฟข้างทางหากเป็นกลางคืน','Light a fire beside the road at night'],['นำรถจอดเข้าข้างทาง เปิดไฟฉุกเฉิน','Move it to the roadside and switch on hazard lights']], a:3,
 w:'Off the carriageway, hazards on.'},

{c:'safe', th:'หลังจากเกิดอุบัติเหตุ ผู้ขับขี่ต้องปฏิบัติสิ่งใดเป็นอันดับแรก',
 en:'Immediately after a crash, what is the driver\'s first action?',
 o:[['แจ้งกู้ภัย','Call rescue services'],['แจ้งตำรวจ','Call the police'],['แจ้งประกันภัย','Call the insurer'],['ให้สัญญาณเพื่อเตือนให้รถอื่นทราบ','Warn other traffic']], a:3,
 w:'Warn oncoming traffic first, so a second crash does not happen. Where the question mentions an INJURED person, the answer becomes first aid instead. Read the stem.'},

{c:'safe', th:'การขับขี่ขึ้นหรือลงทางลาดชัน ควรใช้เกียร์ใด',
 en:'Going up or down a steep gradient, which gear should you use?',
 o:[['เกียร์ต่ำ','A low gear'],['เกียร์สูง','A high gear'],['เกียร์ว่าง','Neutral'],['เกียร์ใดก็ได้','Any gear']], a:0,
 w:'Low gear, both up and down — it gives engine braking on the descent.'},

{c:'safe', th:'ในสภาพถนนปกติ ขับตามรถคันหน้าต้องเว้นระยะห่างเท่าใดจึงจะปลอดภัยเมื่อรถคันหน้าหยุด',
 en:'On a normal road, how much space should you leave behind the vehicle in front?',
 o:[['หนึ่งช่วงตัวรถ','One vehicle length'],['3 เมตร','3 m'],['5 เมตร','5 m'],['ห่างพอสมควรและสามารถหยุดรถได้โดยปลอดภัย','Enough to be able to stop safely']], a:3,
 w:'A stopping-distance answer, not a fixed number.'},

{c:'safe', th:'ข้อใดต่อไปนี้ไม่ถูกต้องในการขับขี่',
 en:'Which of these is INCORRECT riding practice?',
 o:[['เมื่อรถคันหลังขับตามมาในระยะกระชั้นชิด ควรเพิ่มความเร็ว','When tailgated, speed up'],['น้ำหนักและความเร็วมีผลต่อระยะทางในการหยุดรถ','Weight and speed affect stopping distance'],['ระยะปลอดภัยของรถใหญ่ต้องมากกว่ารถยนต์','Large vehicles need a bigger safety gap'],['เมื่อระยะห่างกับรถคันหน้าน้อยเกินไป ควรลดความเร็ว','If too close to the vehicle ahead, slow down']], a:0,
 w:'Never speed up because someone is tailgating you — let them past.'},

{c:'safe', th:'สิ่งใดเป็นปัจจัยที่ทำให้การเบรกด้อยประสิทธิภาพ',
 en:'Which factor degrades braking performance?',
 o:[['การดูแลสภาพเครื่องยนต์และช่วงล่าง','Maintaining engine and suspension'],['ร่างกายตอบสนองว่องไว','Quick physical reactions'],['การดื่มสุราก่อนขับรถ','Drinking alcohol before riding'],['การดูแลลมยาง','Keeping tyre pressure correct']], a:2,
 w:'Alcohol lengthens reaction time, so total stopping distance grows even though the brakes are fine.'},

{c:'safe', th:'ในการขับขี่ภายในชุมชน ผู้ขับขี่ไม่จำเป็นต้องใส่ใจกับสิ่งใด',
 en:'Riding in a built-up area, which of these do you NOT need to pay attention to?',
 o:[['ป้ายโฆษณาข้างทาง','Roadside advertising billboards'],['รถโดยสารที่กำลังจอดหรือเคลื่อนออก','Buses stopping or pulling out'],['สัตว์ที่อยู่บนถนน','Animals on the road'],['คนขี่จักรยาน','Cyclists']], a:0,
 w:'Billboards. Note the negative stem — "ไม่จำเป็น" / "do NOT need". Negative stems are where most people lose marks.'},

{c:'safe', th:'ควรหลีกเลี่ยงการใช้เบรกอย่างรุนแรงเมื่ออยู่ในสถานการณ์ใด',
 en:'Where should you avoid braking hard?',
 o:[['ทางขึ้นลาดชัน','On an uphill gradient'],['ทางร่วม ทางแยก','At a junction'],['ทางโค้ง','In a curve'],['ทางลงลาดชัน','On a downhill gradient']], a:2,
 w:'In a curve — on a motorcycle, hard braking mid-corner is the classic low-side crash.'},

{c:'safe', th:'เมื่อขับเข้าบริเวณถนนที่มีการก่อสร้าง ผู้ขับขี่ควรปฏิบัติอย่างไร',
 en:'Approaching a road-works area, what should you do?',
 o:[['ขับเร็วขึ้นเพื่อผ่านไปให้เร็ว','Speed up to get past quickly'],['ชะลอความเร็วและปฏิบัติตามป้ายจราจรที่ติดตั้งไว้บริเวณนั้น','Slow down and follow the signs posted there'],['บีบแตรตลอดเวลา','Sound the horn continuously'],['ชะลอความเร็วมากจนทำให้การจราจรติดขัด','Slow so much that you block traffic']], a:1,
 w:'Slow and obey the temporary signs.'},

{c:'safe', th:'การรักษาระยะห่างจากรถที่จอดนิ่งด้านข้างและรถที่วิ่งอยู่ ควรเว้นระยะห่างเท่าไร',
 en:'What lateral gap should you keep from parked and moving vehicles beside you?',
 o:[['5 เมตร','5 m'],['4 เมตร','4 m'],['3 เมตร','3 m'],['1 เมตร','1 m']], a:3,
 w:'1 m sideways — enough for a car door to open without hitting you.'},

{c:'safe', th:'การขับรถด้วยความเร็ว 60 กิโลเมตร/ชั่วโมง หากเกิดอุบัติเหตุกับคนเดินเท้า จะส่งผลอย่างไร',
 en:'At 60 km/h, what is the likely outcome of hitting a pedestrian?',
 o:[['บาดเจ็บเล็กน้อย','Minor injury'],['บาดเจ็บหนักหรืออาจเสียชีวิต','Serious injury or death'],['ไม่เป็นอะไร เพราะไม่ได้ใช้ความเร็วเกินกำหนด','No harm, since the speed was legal'],['รถชำรุดเสียหายหนัก','Heavy vehicle damage']], a:1,
 w:'Serious injury or death. Legal speed is not the same as safe speed.'},

{c:'safe', th:'การขับรถในทางขึ้นเขา ลงเขา และมีโค้งอันตรายตลอดทาง ควรขับขี่อย่างไร',
 en:'On a hilly road with dangerous bends throughout, how should you ride?',
 o:[['เหยียบเบรกตลอดการลงเขาและใช้เกียร์สูง','Brake continuously downhill in a high gear'],['เร่งความเร็วเพื่อขึ้นและลงเขา','Accelerate up and down'],['ใช้ความเร็วและเกียร์ให้ถูกต้องเหมาะสม','Use appropriate speed and the correct gear'],['ใช้เกียร์สูงขณะขึ้นเขา ลงเขา และเข้าโค้ง','Use a high gear uphill, downhill and in bends']], a:2,
 w:'Right speed, right gear. Continuous braking downhill overheats and fades the brakes.'},

{c:'safe', th:'ข้อใดเป็นวิธีแก้ไขเบื้องต้นเมื่อรถเกิดไฟลัดวงจร',
 en:'What is the first response to an electrical short circuit on the vehicle?',
 o:[['หาผ้าหนาๆ มาตบ','Beat it out with a thick cloth'],['ตัดกระแสไฟ หรือถอดขั้วแบตเตอรี่ออกก่อน','Cut the power / disconnect the battery terminal first'],['หาน้ำมันมาราด','Pour fuel on it'],['ใช้ทรายสาดใส่','Throw sand on it']], a:1,
 w:'Kill the power at the battery.'},

{c:'safe', th:'เมื่อขับรถที่บรรทุกสิ่งของที่มีความสูงจะมีผลอย่างไร',
 en:'What is the effect of carrying a tall load?',
 o:[['แรงหนีศูนย์จะน้อยลง','Centrifugal force decreases'],['จุดศูนย์ถ่วงจะสูงขึ้นทำให้พลิกคว่ำได้ง่าย','The centre of gravity rises, making it easier to topple'],['แรงเหวี่ยงจะน้อยลง','Swing force decreases'],['ระยะเบรกจะสั้นลง','Braking distance shortens']], a:1,
 w:'Higher centre of gravity = easier to tip. Directly relevant if you strap anything to a bike.'},

{c:'safe', th:'เมื่อขับรถที่มีน้ำหนักบรรทุกมาก ข้อใดถูกต้องมากที่สุด',
 en:'When heavily loaded, which is most true?',
 o:[['ประสิทธิภาพของเบรกจะน้อยลง ระยะเบรกยาวขึ้น','Braking is less effective and the braking distance grows'],['ระบบกันสะเทือนจะนุ่มนวลขึ้น','Suspension becomes more comfortable'],['ควันไอเสียจะมากขึ้น','More exhaust smoke'],['เครื่องยนต์ทำงานเต็มประสิทธิภาพ','The engine runs at peak efficiency']], a:0,
 w:'Longer braking distance.'},

{c:'safe', th:'การเปิดไฟสูงในสถานการณ์ใดถูกต้อง',
 en:'In which situation is high beam correct?',
 o:[['ขณะที่ไม่มีรถสวนทาง','When there is no oncoming traffic'],['ขณะฝนตกหนัก','In heavy rain'],['เมื่อรถเกิดอุบัติเหตุ','After a crash'],['เมื่อขับตามหลังรถคันหน้า','When following another vehicle']], a:0,
 w:'Only with nobody ahead or oncoming.'},

/* ========== 5. การบำรุงรักษารถ — Maintenance ========== */
{c:'maint', th:'การเติมลมยางข้อใดถูกต้อง',
 en:'What is the correct way to inflate tyres?',
 o:[['เติมในขณะยางยังร้อนอยู่','While the tyres are still hot'],['ควรเติมลมยางในขณะที่ยางยังเย็นอยู่','While the tyres are still cold'],['ควรเติมให้แข็งมากๆ','As hard as possible'],['ควรเติมให้อ่อนมากๆ','As soft as possible']], a:1,
 w:'Cold tyres. Hot air is expanded, so you would under-inflate.'},

{c:'maint', th:'การเติมลมยางควรปฏิบัติอย่างไร',
 en:'What pressure should you inflate to?',
 o:[['ใช้วิธีเคาะแล้วฟังเสียงยาง','Tap the tyre and listen'],['คาดคะเนด้วยสายตา','Judge by eye'],['ปฏิบัติตามคู่มือการใช้รถ','Follow the owner\'s manual'],['เติมเท่าไรก็ได้','Any pressure']], a:2,
 w:'The manual (or the sticker on the swingarm/frame).'},

{c:'maint', th:'การตรวจสอบลมยางล้อรถ จะต้องตรวจสอบที่ล้อใด',
 en:'Which wheels must be checked for tyre pressure?',
 o:[['เฉพาะล้อหน้า','Front only'],['เฉพาะล้อหลัง','Rear only'],['ทั้งสี่ล้อ','All four'],['ทั้งสี่ล้อและล้ออะไหล่','All four plus the spare']], a:3, car:true,
 w:'Car question: all four plus the spare. On a bike, both wheels.'},

{c:'maint', th:'สาเหตุไฟไม่ชาร์จเข้าแบตเตอรี่เกิดจากอะไร',
 en:'Why would the battery stop charging?',
 o:[['เปิดเครื่องเสียงมากเกินไป','The stereo is too loud'],['ฉนวนหุ้มขั้วแบตเตอรี่หลุด','The terminal insulation came off'],['เปิดสัญญาณไฟเลี้ยวมากเกินไป','Too much indicator use'],['ไดชาร์จชำรุด หรือสายพานไดชาร์จหย่อนหรือขาด','A faulty alternator, or a loose or broken alternator belt']], a:3,
 w:'Faulty alternator or its belt.'},

{c:'maint', th:'ถ้าขั้วแบตเตอรี่มีคราบขี้เกลือ วิธีการใดเป็นการแก้ไขที่ดีที่สุด',
 en:'Best fix for corrosion (white deposit) on the battery terminals?',
 o:[['ใช้น้ำอุ่นล้างและทาจาระบี','Wash with warm water and apply grease'],['ใช้น้ำส้มสายชูล้าง','Wash with vinegar'],['ใช้น้ำมะนาวล้าง','Wash with lime juice'],['ใช้น้ำกลั่นล้าง','Wash with distilled water']], a:0,
 w:'Warm water, then grease the terminals.'},

{c:'maint', th:'การตรวจเช็คแบตเตอรี่แบบง่ายๆ ว่ามีไฟปกติหรือไม่ กระทำได้อย่างไร',
 en:'Simplest way to check whether the battery still has charge?',
 o:[['บีบแตรและฟังเสียงว่าปกติหรือเบาลง','Sound the horn and listen for a weak note'],['ออกรถ 2-3 เมตรแล้วทดสอบเบรก','Ride 2–3 m and test the brakes'],['เหยียบคลัตช์และเข้าเกียร์ให้ครบ','Work the clutch through the gears'],['หมุนพวงมาลัยไปด้านซ้ายและขวา','Turn the steering left and right']], a:0,
 w:'Listen to the horn.'},

{c:'maint', th:'ไดสตาร์ททำหน้าที่อะไร',
 en:'What does the starter motor do?',
 o:[['ทำให้หมุนพวงมาลัยได้ดี','Assists steering'],['ทำให้เครื่องยนต์ติด','Starts the engine'],['ทำให้ระบบเบรกทำงานดีขึ้น','Improves braking'],['ทำให้แอร์เย็นขึ้น','Cools the air conditioning']], a:1,
 w:'Cranks the engine to start it. Do not confuse ไดสตาร์ท (starter) with ไดชาร์จ (alternator).'},

{c:'maint', th:'ท่านควรเติมน้ำมันเชื้อเพลิงรถเครื่องยนต์เบนซินอย่างไร',
 en:'Which petrol should you use?',
 o:[['เติมค่าที่ต่ำกว่าที่กำหนดเพื่อความประหยัด','A lower octane, to save money'],['เติมสูงกว่าที่กำหนดเพื่อป้องกันเครื่องเสียหาย','A higher octane, to protect the engine'],['เติมน้ำมันที่มีค่าออกเทนตามที่ระบุไว้ในคู่มือรถ','The octane rating specified in the owner\'s manual'],['เติมค่าเท่าใดก็ได้','Any grade']], a:2,
 w:'Whatever the manual says.'},

{c:'maint', th:'หากท่านเติมน้ำมันผิดประเภทควรปฏิบัติอย่างไร',
 en:'If you put in the wrong fuel, what should you do?',
 o:[['เติมชนิดที่ถูกเข้าไปเพื่อเจือจาง','Add the right fuel to dilute it'],['ขับไปให้หมดถังแล้วเติมชนิดที่ถูก','Run the tank dry then refill correctly'],['ทำการเปลี่ยนถ่ายออกทันที','Drain it immediately'],['ขับไปก่อน ถ้ามีผลค่อยถ่ายออก','Keep riding and drain it only if there are symptoms']], a:2,
 w:'Drain it at once.'},

{c:'maint', th:'ในขณะที่ท่านเติมน้ำมันเชื้อเพลิง ท่านควรปฏิบัติอย่างไร',
 en:'What must you do while refuelling?',
 o:[['ดับเครื่องยนต์','Switch the engine off'],['ลงจากรถและเดินออกให้ไกล','Get off and walk away'],['ไม่ต้องทำอะไร','Nothing'],['ติดเครื่องยนต์ไว้','Leave the engine running']], a:0,
 w:'Engine off.'},

{c:'maint', th:'ข้อใดไม่ใช่หน้าที่ของน้ำมันเครื่องยนต์',
 en:'Which is NOT a function of engine oil?',
 o:[['ระบายความร้อนออกจากหม้อน้ำ','Cooling the radiator'],['หล่อลื่นชิ้นส่วนที่เคลื่อนที่เพื่อลดการสึกหรอ','Lubricating moving parts to reduce wear'],['ทำความสะอาดชิ้นส่วนภายในเครื่องยนต์','Cleaning internal engine parts'],['ระบายความร้อนออกจากเครื่องยนต์','Carrying heat away from the engine']], a:0,
 w:'Oil cools the ENGINE, not the radiator. Negative stem again.'},

{c:'maint', th:'ถ้าระดับน้ำมันเครื่องยนต์ต่ำเกินไปจะมีผลอย่างไร',
 en:'What happens if the engine oil level is too low?',
 o:[['ประหยัดน้ำมันเชื้อเพลิง','Better fuel economy'],['ยืดอายุการทำงานของชิ้นส่วน','Longer component life'],['เครื่องแรง สตาร์ทติดง่าย','More power, easier starting'],['ทำให้ชิ้นส่วนของเครื่องยนต์สึกหรออย่างรวดเร็ว','Rapid wear of engine components']], a:3,
 w:'Rapid wear.'},

{c:'maint', th:'เมื่อเหยียบเบรกแล้วเกิดเสียงดังเป็นเพราะสาเหตุใด',
 en:'Why would the brakes squeal or grind when applied?',
 o:[['ผ้าเบรกหมดหรือหมดอายุ','The brake pads are worn out'],['ยางหมดอายุ','The tyres are old'],['ลมยางอ่อน','Tyre pressure is low'],['ลมยางแข็ง','Tyre pressure is high']], a:0,
 w:'Worn pads.'},

{c:'maint', th:'การตรวจความตึงของสายพานควรทำอย่างไร',
 en:'How do you check belt tension?',
 o:[['ใช้ไม้เคาะ','Tap it with a stick'],['ดูด้วยสายตาก็พอ','A visual check is enough'],['ใช้มือกดที่กึ่งกลางสายพาน','Press the midpoint of the belt by hand'],['ถอดสายพานออกเพื่อวัด','Remove the belt and measure it']], a:2,
 w:'Press the midpoint. Same method as checking a motorcycle drive chain\'s slack.'},

{c:'maint', th:'ไม่ควรเปิดฝาหม้อน้ำในกรณีใด',
 en:'When must you NOT open the radiator cap?',
 o:[['ตอนเช้าขณะยังไม่ติดเครื่อง','In the morning before starting'],['เครื่องเย็น','When the engine is cold'],['เครื่องร้อนจัด','When the engine is very hot'],['เปิดถังพักสำรองเพื่อเติมน้ำ','When topping up the reservoir']], a:2, car:true,
 w:'Never when hot — pressurised coolant will scald you.'},

{c:'maint', th:'อุณหภูมิเครื่องยนต์ที่ทำงานปกติควรอยู่เท่าไร',
 en:'What is a normal operating engine temperature?',
 o:[['60-70 องศาเซลเซียส','60–70 °C'],['50-60 องศาเซลเซียส','50–60 °C'],['40-50 องศาเซลเซียส','40–50 °C'],['80-95 องศาเซลเซียส','80–95 °C']], a:3,
 w:'80–95 °C.'},

{c:'maint', th:'ข้อใดคือวิธีป้องกันไม่ให้เครื่องยนต์ร้อนจัด',
 en:'How do you prevent the engine overheating?',
 o:[['เติมลมยางให้มากกว่าปกติ','Over-inflate the tyres'],['เปิดเครื่องปรับอากาศให้แรง','Run the air conditioning hard'],['เปลี่ยนพัดลมให้ใหญ่ขึ้น','Fit a bigger fan'],['ตรวจระดับน้ำในหม้อน้ำก่อนใช้งานทุกวัน','Check the coolant level before use every day']], a:3,
 w:'Daily coolant check.'},

{c:'maint', th:'ข้อใดกล่าวไม่ถูกต้องเกี่ยวกับอุปกรณ์ที่ควรมีติดรถ',
 en:'Which statement about equipment to carry is INCORRECT?',
 o:[['แม่แรงค้ำยัน ใช้ในการยกรถ','A jack is used to lift the vehicle'],['ยางอะไหล่ไม่จำเป็นต้องมีก็ได้','A spare tyre is not necessary'],['ไฟฉาย ช่วยหาจุดชำรุดในเวลากลางคืน','A torch helps find faults at night'],['อุปกรณ์ดับเพลิง ใช้เมื่อเกิดเพลิงไหม้','A fire extinguisher is for fire']], a:1,
 w:'A spare IS necessary. Negative stem.'},

{c:'maint', th:'ถ้าไม่ปลดล็อกเบรกมือเมื่อเคลื่อนรถจะมีอาการอย่างไร',
 en:'What happens if you move off with the parking brake still on?',
 o:[['รู้สึกว่ารถเร่งความเร็วไม่ขึ้น','The vehicle will not accelerate properly'],['รถออกตัวเร็วขึ้น','It pulls away faster'],['พวงมาลัยหนัก','The steering feels heavy'],['เครื่องยนต์สะดุด','The engine stumbles']], a:0, car:true,
 w:'It will not accelerate. Car-specific.'},

{c:'maint', th:'เบรกเท้าจะทำงานที่ล้อใดบ้าง',
 en:'The foot brake acts on which wheels?',
 o:[['ล้อหน้าซ้าย ล้อหลังขวา','Left front and right rear'],['ล้อคู่หน้า','Both front wheels'],['ล้อคู่หลัง','Both rear wheels'],['ทั้ง 4 ล้อ','All four wheels']], a:3, car:true,
 w:'Car: all four. NOTE for the motorcycle test — on a bike the FOOT pedal is the rear brake only, and the right handlebar lever is the front brake.'},

{c:'maint', th:'หม้อน้ำรถยนต์มีหน้าที่อะไร',
 en:'What is the radiator for?',
 o:[['ระบายความร้อนของเครื่องยนต์','Dissipating engine heat'],['ทำให้รถวิ่งเร็วขึ้น','Making the vehicle faster'],['ระบายความร้อนให้ห้องผู้โดยสาร','Cooling the cabin'],['ทำให้ประหยัดน้ำมัน','Saving fuel']], a:0,
 w:'Engine cooling.'},

{c:'maint', th:'รถเครื่องยนต์ดีเซลหากมีควันดำมากผิดปกติ เกิดจากสาเหตุใด',
 en:'Abnormally heavy black smoke from a diesel engine is caused by what?',
 o:[['กรองอากาศตัน','A blocked air filter'],['เติมน้ำมันผิดประเภท','Wrong fuel'],['เติมน้ำมันปลอม','Counterfeit fuel'],['มีน้ำผสมในน้ำมันเชื้อเพลิง','Water in the fuel']], a:0, car:true,
 w:'Blocked air filter. Diesel — car/truck only, but it does appear in the shared bank.'},

/* ========== 6. รถจักรยานยนต์ — Motorcycle-specific ========== */
{c:'moto', th:'การสอบปฏิบัติใบขับขี่รถจักรยานยนต์มีกี่ท่า',
 en:'How many stations are there in the motorcycle practical riding test?',
 o:[['3 ท่า','3'],['4 ท่า','4'],['5 ท่า','5'],['6 ท่า','6']], a:2,
 w:'5: the narrow plank balance, the Z bend, the S bend, obstacle avoidance, and obeying traffic signs and signals.'},

{c:'moto', th:'การขับขี่รถจักรยานยนต์ในเขตเมืองควรใช้ความเร็วเท่าใด',
 en:'What speed should a motorcycle be ridden at in a built-up area?',
 o:[['120 กม./ชม.','120 km/h'],['100 กม./ชม.','100 km/h'],['70 กม./ชม.','70 km/h'],['60 กม./ชม.','60 km/h']], a:3,
 w:'60 km/h is the bank\'s answer for motorcycles in town.'},

{c:'moto', th:'ผู้ขับขี่และผู้โดยสารรถจักรยานยนต์ต้องปฏิบัติอย่างไร',
 en:'What is required of a motorcycle rider and passenger?',
 o:[['สวมหมวกนิรภัยทั้งผู้ขับขี่และคนซ้อน','Both rider and pillion must wear a crash helmet'],['เฉพาะผู้ขับขี่สวมหมวกนิรภัย','Only the rider needs a helmet'],['เฉพาะคนซ้อนสวมหมวกนิรภัย','Only the pillion needs a helmet'],['ไม่ต้องสวมหากขับในซอย','No helmet needed in a soi']], a:0,
 w:'Both, everywhere. The only exemption is monks and novices.'},

{c:'moto', th:'รถจักรยานยนต์ต้องขับในช่องเดินรถใด',
 en:'Which lane must a motorcycle use?',
 o:[['ช่องขวาสุด','The rightmost lane'],['ช่องกลาง','The middle lane'],['ช่องเดินรถด้านซ้ายสุด','The leftmost lane'],['ช่องใดก็ได้','Any lane']], a:2,
 w:'Leftmost.'},

{c:'moto', th:'ก่อนเปลี่ยนช่องทางเดินรถ ผู้ขับขี่ควรทำสิ่งใดก่อน',
 en:'Before changing lanes, what must you do first?',
 o:[['เปิดไฟฉุกเฉิน','Turn on hazard lights'],['เปิดไฟเลี้ยวหรือให้สัญญาณมือ','Signal with the indicator or by hand'],['ขับเร็วขึ้นเพื่อเปลี่ยนทันที','Speed up and change immediately'],['หยุดรถก่อนเปลี่ยนเลน','Stop before changing']], a:1,
 w:'Signal — and on a bike, check over your shoulder as well as in the mirror.'},

{c:'moto', th:'การปรับกระจกมองข้างให้เหมาะสมแก่การขับขี่ ควรปรับอย่างไร',
 en:'How should the mirrors be adjusted?',
 o:[['ปรับให้เห็นถนนครึ่งหนึ่งและเห็นไหล่ผู้ขับขี่เล็กน้อย','So you see half road and a sliver of your own shoulder'],['ปรับเข้าหาตัวผู้ขับขี่ให้มากที่สุด','As far inward as possible'],['ปรับให้เห็นถนนให้มากที่สุด','To see as much road as possible'],['ปรับให้ต่ำลงให้เห็นพื้นผิวถนนมากที่สุด','Angled down to see the road surface']], a:0,
 w:'Half road, a sliver of your own shoulder for reference.'},

{c:'moto', th:'เมื่อขับรถสวนทางกับรถอีกคันหนึ่ง ควรปฏิบัติอย่างไร',
 en:'When meeting oncoming traffic, what should you do?',
 o:[['ขับชิดขวา','Keep right'],['ชะลอความเร็วและขับชิดซ้าย','Slow down and keep left'],['บีบแตร','Sound the horn'],['ขับอยู่กลางถนน','Ride in the middle of the road']], a:1,
 w:'Slow and keep left. Thailand drives on the LEFT.'},

{c:'moto', th:'หากรถของท่านกำลังจะเลี้ยวขวา แล้วมีรถขับตามมาในช่องซ้าย รถนั้นแซงด้านซ้ายได้หรือไม่',
 en:'You are turning right and a vehicle behind is in the left lane. May it overtake you on the left?',
 o:[['ได้','Yes'],['ไม่ได้','No'],['ได้เฉพาะเวลากลางคืน','Only at night'],['ได้ถ้ามีสัญญาณไฟทาง','Only if there is a traffic light']], a:0,
 w:'Yes — overtaking on the left is lawful when the vehicle ahead is turning right or signalling right. One of the few legal left-side passes.'},

{c:'moto', th:'หากฝ่าฝืนไม่เปิดไฟหน้าในสภาพทัศนวิสัยไม่ดี มีโทษอย่างไร',
 en:'Penalty for not using headlights when visibility is poor?',
 o:[['ตักเตือนด้วยวาจา','A verbal warning'],['ปรับไม่เกิน 500 บาท','Fine up to 500 baht'],['ปรับไม่เกิน 1,000 บาท','Fine up to 1,000 baht'],['ไม่ถือว่าผิด','Not an offence']], a:2,
 w:'1,000 baht. The trigger is visibility below 150 m.'},

{c:'moto', th:'หากรถมีเสียงดังเกินกว่าที่กฎหมายกำหนด จะได้รับโทษอย่างไร',
 en:'Penalty for a vehicle louder than the legal limit?',
 o:[['ปรับไม่เกิน 500 บาท','Fine up to 500 baht'],['ปรับไม่เกิน 1,000 บาท','Fine up to 1,000 baht'],['เตือนด้วยวาจา','A verbal warning'],['ไม่ถือว่าผิด','Not an offence']], a:1,
 w:'1,000 baht. Relevant to every aftermarket exhaust in Bangkok.'},

{c:'moto', th:'หากใช้ป้ายทะเบียนปลอม หรือขับรถโดยไม่มีป้ายทะเบียน จะมีโทษอย่างไร',
 en:'Penalty for a forged plate, or riding with no plate?',
 o:[['ไม่มีผล','No penalty'],['ปรับไม่เกิน 500 บาท','Fine up to 500 baht'],['ปรับไม่เกิน 1,000 บาท','Fine up to 1,000 baht'],['ยึดรถทันที','Immediate impoundment']], a:2,
 w:'1,000 baht (a forged plate can also draw a criminal charge).'},

{c:'moto', th:'หากรถไม่ต่อภาษีประจำปีแล้วนำมาขับบนถนน จะเป็นอย่างไร',
 en:'What if you ride a vehicle whose annual tax has not been renewed?',
 o:[['ถูกปรับ','You will be fined'],['ขับได้เฉพาะกลางวัน','You may ride only in daytime'],['ไม่มีผล','No consequence'],['ขับได้เฉพาะในหมู่บ้าน','You may ride only inside your village']], a:0,
 w:'It is unlawful and fineable.'},

{c:'moto', th:'การกลับรถที่ถูกต้องควรปฏิบัติอย่างไร',
 en:'What is the correct way to make a U-turn?',
 o:[['กลับรถทันทีที่เห็นช่องว่าง','Turn as soon as you see a gap'],['กลับรถในช่องใดก็ได้','From any lane'],['เข้าช่องกลับรถและกลับเมื่อปลอดภัย','Move into the U-turn lane and turn when it is safe'],['กลับรถบนสะพาน','On a bridge']], a:2,
 w:'Use the designated U-turn lane, turn when safe.'},

{c:'moto', th:'ผู้ที่ไม่สามารถขอใบขับขี่ได้คือผู้ที่มีลักษณะอย่างไร',
 en:'Who may NOT be granted a driving licence?',
 o:[['ผู้ที่สวมแว่นตาขับรถ','Someone who wears glasses to drive'],['ผู้ที่สูงต่ำกว่าเกณฑ์','Someone below a height threshold'],['ผู้เป็นโรคที่อันตรายต่อการขับขี่ เช่น ลมชักที่ควบคุมไม่ได้','Someone with a condition dangerous to driving, e.g. uncontrolled epilepsy'],['ผู้ที่อายุมากกว่า 60 ปี','Someone over 60']], a:2,
 w:'A medical condition that could strike while riding. Glasses, height and age are not disqualifications.'},

/* ========== 7. ขั้นตอนการสอบ — Exam & process facts (these really are on the test) ========== */
{c:'proc', th:'สอบข้อเขียนใบขับขี่ต้องได้คะแนนอย่างน้อยกี่เปอร์เซ็นต์จึงจะผ่าน',
 en:'What percentage must you score to pass the written theory test?',
 o:[['80%','80%'],['85%','85%'],['90%','90%'],['100%','100%']], a:2,
 w:'90% — 45 correct out of 50. You may only get 5 wrong.'},

{c:'proc', th:'ข้อสอบใบขับขี่ภาคทฤษฎีมีกี่ข้อ',
 en:'How many questions are in the theory test?',
 o:[['30 ข้อ','30'],['40 ข้อ','40'],['45 ข้อ','45'],['50 ข้อ','50']], a:3,
 w:'50 questions, 60 minutes, delivered in two blocks of 25 on a touchscreen.'},

{c:'proc', th:'การอบรมก่อนสอบใบขับขี่ (กรณีขอใหม่) ต้องอบรมไม่น้อยกว่ากี่ชั่วโมง',
 en:'How many hours of training must a first-time applicant complete?',
 o:[['3 ชั่วโมง','3 hours'],['5 ชั่วโมง','5 hours'],['10 ชั่วโมง','10 hours'],['15 ชั่วโมง','15 hours']], a:1,
 w:'5 hours at the DLT. (An accredited private driving school course is 15 hours — that number is the distractor.)'},

{c:'proc', th:'โรงเรียนสอนขับรถที่ได้รับการรับรอง ต้องอบรมผู้เรียนกี่ชั่วโมง',
 en:'How many hours must an accredited private driving school course run?',
 o:[['5 ชั่วโมง','5 hours'],['8 ชั่วโมง','8 hours'],['10 ชั่วโมง','10 hours'],['15 ชั่วโมง','15 hours']], a:3,
 w:'15 hours. Contrast with the DLT\'s own 5-hour course.'},

{c:'proc', th:'ใบรับรองแพทย์ที่ใช้ในการสอบใบขับขี่ ต้องมีอายุไม่เกินเท่าใด',
 en:'How recent must the medical certificate be?',
 o:[['15 วัน','15 days'],['1 เดือน','1 month'],['2 เดือน','2 months'],['3 เดือน','3 months']], a:1,
 w:'Issued within 1 month. Get it the same week as your appointment — a clinic does it in 15 minutes for 100–200 baht.'},

{c:'proc', th:'การทดสอบสมรรถภาพร่างกายก่อนขอใบขับขี่ ไม่รวมการทดสอบใด',
 en:'Which is NOT part of the physical ability test?',
 o:[['การตอบสนองของเท้า (ปฏิกิริยาเบรก)','Foot reaction time (braking)'],['การมองเห็นทางลึก','Depth perception'],['การแยกสี','Colour recognition'],['การทดสอบความจำ','A memory test']], a:3,
 w:'Four real items: colour recognition (red/amber/green), depth perception, peripheral vision, and brake reaction time. No memory test.'},

{c:'proc', th:'หากสอบใบขับขี่ภาคทฤษฎีไม่ผ่าน สามารถสอบใหม่ได้ภายในกี่วัน',
 en:'If you fail the theory test, within how many days may you retake it?',
 o:[['30 วัน','30 days'],['60 วัน','60 days'],['90 วัน','90 days'],['120 วัน','120 days']], a:2,
 w:'Within 90 days you may retake without repeating the 5-hour course. In practice you can usually retry the next working day.'},

{c:'proc', th:'กรณีใบขับขี่หมดอายุเกิน 3 ปี จะต้องทำอย่างไร',
 en:'If a licence has been expired for more than 3 years, what is required?',
 o:[['ต่ออายุได้ทันที','Renew immediately'],['จองคิวอบรมใหม่เท่านั้น','Only re-book the course'],['ต้องสอบใหม่ทั้งภาคทฤษฎีและปฏิบัติ','Retake both the theory and the practical test'],['แค่เสียค่าปรับ','Just pay a fine']], a:2,
 w:'Over 3 years = theory + practical + the course again. Expired 1–3 years = theory only. Under 1 year = renew.'},

{c:'proc', th:'ผู้ที่ขอใบขับขี่ใหม่ (รถยนต์) ต้องมีอายุไม่ต่ำกว่าเท่าใด',
 en:'Minimum age to apply for a new car driving licence?',
 o:[['15 ปี','15'],['16 ปี','16'],['17 ปี','17'],['18 ปี','18']], a:3,
 w:'18.'},

{c:'proc', th:'ข้อใดคือเอกสารที่ไม่จำเป็นต้องใช้ในการขอใบขับขี่ในปัจจุบัน',
 en:'Which document is NO LONGER required when applying for a driving licence?',
 o:[['บัตรประจำตัวประชาชน (หรือหนังสือเดินทาง)','ID card (or passport)'],['ใบรับรองแพทย์','Medical certificate'],['สำเนาทะเบียนบ้าน','A copy of the house registration'],['ผลทดสอบสมรรถภาพร่างกาย','The physical ability test result']], a:2,
 w:'The house-registration copy was abolished. As a foreigner you present a passport plus a Certificate of Residence, work permit, pink ID or yellow book instead.'},
/* ========== 8. From the official DLT English handbook (3.ExamEnglish_6382.pdf) ==========
   Everything below carries a `src` naming the book page or the statute section it comes
   from. Where the popular Thai practice banks disagree with the book, the book wins and
   the `w` note says so. Book page numbers are the PRINTED footer numbers, not scan order. */

/* ---- ห้ามจอด / ห้ามหยุด distances, Land Traffic Act s.57 ---- */
{c:'trf', th:'ห้ามจอดรถในทางร่วมทางแยก หรือในระยะกี่เมตรจากทางร่วมทางแยก',
 en:'Parking is prohibited at a junction, or within how many metres of one?',
 o:[['5 เมตร','5 m'],['10 เมตร','10 m'],['15 เมตร','15 m'],['3 เมตร','3 m']], a:1,
 w:'10 m. Learn the three no-parking distances as one set: 3 m from a crosswalk, 10 m from a junction, 15 m from a railway crossing. They are asked as a group precisely because they are easy to swap.',
 src:'s.57(3) + DLT book p.48 Q42'},

{c:'trf', th:'ห้ามจอดรถในทางข้าม หรือในระยะกี่เมตรจากทางข้าม',
 en:'Parking is prohibited on a pedestrian crossing, or within how many metres of one?',
 o:[['3 เมตร','3 m'],['5 เมตร','5 m'],['10 เมตร','10 m'],['15 เมตร','15 m']], a:0,
 w:'3 m. The DLT book marks a car stopped closer than this as WRONG twice over (p.43 Q16, p.47 Q39).',
 src:'s.57(4) + DLT book p.43 Q16, p.47 Q39'},

{c:'trf', th:'ห้ามจอดรถในระยะกี่เมตรจากทางรถไฟผ่าน',
 en:'Parking is prohibited within how many metres of a railway crossing?',
 o:[['5 เมตร','5 m'],['10 เมตร','10 m'],['15 เมตร','15 m'],['20 เมตร','20 m']], a:2,
 w:'15 m — this is the no-PARKING zone. Do not confuse it with the 5 m you must STOP short of the track when a train is coming. Two different rules, two different numbers, and the DLT book prints both (p.41 Q9 gives 5 m for stopping, p.43 Q17 gives 15 m).',
 src:'s.57(8) + DLT book p.43 Q17'},

{c:'trf', th:'ผู้ขับขี่จะหยุดรถในบริเวณพื้นที่ของทางร่วมทางแยกได้หรือไม่',
 en:'May you stop your vehicle inside the area of an intersection?',
 o:[['ได้ ถ้ารอสัญญาณไฟ','Yes, if waiting for the lights'],['ไม่ได้ เพราะกีดขวางการจราจร','No — it blocks traffic'],['ได้ ถ้าเปิดไฟฉุกเฉิน','Yes, with hazard lights on'],['ได้ ถ้าไม่มีรถอื่น','Yes, if nothing else is coming']], a:1,
 w:'Never. And the corollary the book stresses: do not enter a junction on green unless there is room to clear it on the far side (p.45 Q28, p.44 Q25).',
 src:'DLT book p.41 Q7, p.45 Q28'},

{c:'trf', th:'ก่อนเลี้ยวซ้าย ผู้ขับขี่ต้องเข้าช่องเดินรถด้านซ้ายก่อนถึงทางเลี้ยวไม่น้อยกว่ากี่เมตร',
 en:'Before turning left, how far ahead must you already be in the left-hand lane?',
 o:[['10 เมตร','10 m'],['15 เมตร','15 m'],['30 เมตร','30 m'],['60 เมตร','60 m']], a:2,
 w:'30 m — the same 30 m as the signal. Being in the correct lane is a separate requirement from signalling, and the book fails a rider who turns from the wrong lane even with the indicator on.',
 src:'DLT book p.47 Q37'},

{c:'trf', th:'ผู้ขับขี่จะกลับรถหรือขับผ่านเขตปลอดภัย (safety zone) ได้หรือไม่',
 en:'May you drive across, or make a U-turn in, a safety zone?',
 o:[['กลับรถได้ แต่ห้ามขับผ่าน','U-turn yes, driving across no'],['ได้ทั้งสองอย่าง','Both are allowed'],['ไม่ได้ทั้งสองอย่าง','Neither is allowed'],['ได้ถ้าไม่มีคนเดินเท้า','Allowed if no pedestrians are there']], a:2,
 w:'Neither. A safety zone is not road surface: you may not drive on it, overlap it, or turn in it. Go to the proper U-turn opening instead.',
 src:'DLT book p.46 Q34, p.48 Q41'},

/* ---- เครื่องหมายจราจรบนพื้นทาง — road surface markings, book pp.22-26 and 28 ---- */
{c:'mark', th:'เส้นทึบสีขาวเดี่ยวแบ่งทิศทางจราจร (กว้าง 15 ซม.) หมายความว่าอย่างไร',
 en:'A SINGLE SOLID WHITE centre line dividing two-way traffic means what?',
 o:[['แซงได้ถ้าปลอดภัย','You may overtake if it is safe'],['ห้ามแซง ให้ขับชิดซ้ายของเส้น ห้ามคร่อมหรือทับเส้น','No overtaking — keep left of the line, and never cross or straddle it'],['เป็นเส้นแบ่งช่องจราจรปกติ','It is an ordinary lane divider'],['ห้ามจอดรถ','No parking']], a:1,
 w:'Solid means no. The book states it plainly: "You must keep to the left of the division line. Do not cross or stray over it." Width 15 cm.',
 src:'DLT book p.22 no.1'},

{c:'mark', th:'เส้นแบ่งทิศทางจราจรห้ามแซงคู่ (เส้นทึบสีขาวสองเส้นขนานกัน) หมายความว่าอย่างไร',
 en:'DOUBLE SOLID WHITE division lines mean what?',
 o:[['ห้ามแซงทั้งสองทิศทาง','No overtaking in EITHER direction'],['ห้ามแซงเฉพาะทิศทางเดียว','No overtaking in one direction only'],['แซงได้ทั้งสองทิศทาง','Overtaking allowed both ways'],['เป็นช่องเดินรถประจำทาง','It marks a bus lane']], a:0,
 w:'Two solid lines, 15 cm apart: neither direction may cross. Compare the mixed solid-plus-dotted pair, where one side may.',
 src:'DLT book p.22 no.3'},

{c:'mark', th:'เส้นแบ่งทิศทางจราจรคู่ ที่มีเส้นทึบและเส้นประ โดยเส้นประอยู่ด้านขวาของท่าน หมายความว่าอย่างไร',
 en:'A double division line — one solid, one broken — with the BROKEN line on your side. What may you do?',
 o:[['ห้ามแซงเด็ดขาด','No overtaking at all'],['แซงหรือคร่อมเส้นได้ด้วยความระมัดระวัง','You may cross the line, with caution, to overtake'],['ต้องหยุดรถ','You must stop'],['ห้ามจอดรถเท่านั้น','It only prohibits parking']], a:1,
 w:'The line on YOUR side governs you. Broken on your right = you may cross with care; solid on your right = you may not. The book: "When you drive with the solid line on your right, you must not cross or stray over it."',
 src:'DLT book p.22 no.2, p.46 Q31'},

{c:'mark', th:'เส้นประสีขาวแบ่งช่องเดินรถ หมายความว่าอย่างไร',
 en:'A BROKEN WHITE lane line means what?',
 o:[['ห้ามเปลี่ยนช่องจราจร','No changing lanes'],['เป็นเส้นแบ่งช่องจราจรปกติ เปลี่ยนช่องได้เมื่อปลอดภัย','An ordinary lane divider — change lanes when it is safe'],['ห้ามหยุดรถ','No stopping'],['เป็นเส้นให้ทาง','It is a give-way line']], a:1,
 w:'Broken = permission. Solid = prohibition. That single idea carries most of the road-marking questions.',
 src:'DLT book p.26, p.28'},

{c:'mark', th:'เส้นทึบสีขาวแบ่งช่องเดินรถ หมายความว่าอย่างไร',
 en:'A SOLID WHITE lane line (between lanes going the same way) means what?',
 o:[['เปลี่ยนช่องจราจรได้','You may change lanes'],['ห้ามเปลี่ยนช่องเดินรถ','No changing lanes'],['ห้ามจอดรถ','No parking'],['ช่องเดินรถจักรยาน','It is a cycle lane']], a:1,
 w:'No lane change across a solid line. The book also forbids overtaking, turning and overlapping across it (p.46 Q33).',
 src:'DLT book p.26, p.46 Q33'},

{c:'mark', th:'ขอบทางที่ทาสีขาวสลับแดงเป็นช่วงยาว 50 เซนติเมตร หมายความว่าอย่างไร',
 en:'A kerb painted in alternating WHITE and RED 50 cm segments means what?',
 o:[['ห้ามจอดรถ แต่หยุดรับส่งได้','No parking, but a brief stop is allowed'],['ห้ามหยุดรถและห้ามจอดรถทุกชนิด','No stopping AND no parking, for any vehicle'],['ที่จอดรถประจำทาง','A bus stop'],['จอดได้ไม่เกิน 15 นาที','Parking limited to 15 minutes']], a:1,
 w:'Red = the hard one: no stopping at all. Learn the kerb colours as a set — red/white = no stopping or parking, yellow/white = no parking except brief loading, black/white = no stopping or parking (used on roundabouts).',
 src:'DLT book p.24 no.4, p.40 Q3'},

{c:'mark', th:'ขอบทางที่ทาสีขาวสลับเหลืองเป็นช่วงยาว 50 เซนติเมตร หมายความว่าอย่างไร',
 en:'A kerb painted in alternating WHITE and YELLOW 50 cm segments means what?',
 o:[['ห้ามจอดรถ เว้นแต่หยุดรับส่งคนหรือสิ่งของชั่วขณะ','No parking, except stopping briefly to pick up or drop off people or goods'],['ห้ามหยุดรถโดยเด็ดขาด','No stopping whatsoever'],['จอดรถได้ตามปกติ','Ordinary parking is allowed'],['เฉพาะรถโรงเรียน','School buses only']], a:0,
 w:'Yellow is the lenient one: a brief loading or unloading stop, "which must be done without delay". A bus stop is the classic example.',
 src:'DLT book p.24 no.5, p.40 Q1'},

{c:'mark', th:'ขอบทางที่ทาสีขาวสลับดำ เช่น บริเวณวงเวียน หมายความว่าอย่างไร',
 en:'A kerb painted in alternating BLACK and WHITE, e.g. around a roundabout, means what?',
 o:[['จอดได้ตามปกติ','Ordinary parking is allowed'],['ห้ามหยุดรถและห้ามจอดรถ','No stopping and no parking'],['ให้ทางแก่คนเดินเท้า','Give way to pedestrians'],['เขตโรงเรียน','School zone']], a:1,
 w:'No stopping, no parking. The DLT book uses exactly this scenario — a car parked against a black-and-white kerb on a roundabout — as an example of wrong parking.',
 src:'DLT book p.28, p.40 Q2'},

{c:'mark', th:'เส้นแนวหยุด (เส้นทึบสีขาวขวางถนน กว้าง 40 ซม.) หมายความว่าอย่างไร',
 en:'A STOP LINE — a solid white transverse line 40 cm wide — requires what?',
 o:[['ชะลอความเร็วเท่านั้น','Slow down only'],['หยุดรถทุกครั้งเมื่อถึงเส้น และไปต่อเมื่อปลอดภัย','Stop every time you reach it, and move off only when the way is clear and safe'],['ห้ามจอดรถ','No parking'],['เป็นเส้นแบ่งช่องจราจร','It divides lanes']], a:1,
 w:'"You must stop every time on reaching the transverse line." Stopping past it — over a crosswalk, for instance — is marked wrong throughout the book.',
 src:'DLT book p.24 no.6, p.42 Q12'},

{c:'mark', th:'เส้นให้ทาง (เส้นประสีขาวขวางถนน กว้าง 40 ซม. ยาว 60 ซม. เว้นช่อง 30 ซม.) หมายความว่าอย่างไร',
 en:'A GIVE WAY LINE — a broken white transverse line, 40 cm wide, 60 cm long, 30 cm gaps — requires what?',
 o:[['หยุดรถทุกครั้ง','Stop every time'],['ชะลอความเร็ว ตรวจดูรถและคนเดินเท้า แล้วให้ผ่านไปก่อน','Slow down, check for vehicles and pedestrians ahead, and let them pass first'],['เร่งความเร็วผ่านไป','Speed up and go through'],['ห้ามหยุดรถ','No stopping']], a:1,
 w:'Broken across the road = give way, not stop. The solid version is the stop line. Same distinction as broken vs solid everywhere else.',
 src:'DLT book p.24 no.7'},

{c:'mark', th:'เส้นทะแยงสีเหลืองในกรอบสี่เหลี่ยม (เส้นทะแยงห้ามหยุดรถ) หมายความว่าอย่างไร',
 en:'A YELLOW CROSS-HATCHED BOX on the road means what?',
 o:[['ห้ามจอดรถ แต่หยุดได้','No parking but stopping is fine'],['ห้ามหยุดรถในกรอบ ยกเว้นรถที่หยุดรอเลี้ยวขวา','No stopping inside the box, except a vehicle waiting to turn right'],['ที่จอดรถ','A parking bay'],['ทางข้ามคนเดินเท้า','A pedestrian crossing']], a:1,
 w:'Keep the box clear. The one exception in the book is a vehicle waiting to turn right at the junction. Yellow lines 15 cm wide at 45°, 200 cm apart, inside a 20 cm yellow frame.',
 src:'DLT book p.25 no.8, p.42 Q13'},

{c:'mark', th:'เส้นทางข้าม (ทางม้าลาย) กว้าง 75 ซม. ยาวไม่น้อยกว่า 250 ซม. เว้นช่อง 50 ซม. ผู้ขับขี่ต้องทำอย่างไร',
 en:'At a PEDESTRIAN CROSSING marking (white bars 75 cm wide, at least 250 cm long, 50 cm apart), what must you do?',
 o:[['บีบแตรเตือนคนเดินเท้า','Sound the horn to warn pedestrians'],['ชะลอความเร็วและเตรียมหยุดก่อนถึงทางข้าม และให้คนเดินเท้าไปก่อน','Slow down, be ready to stop before the crossing, and give pedestrians the right of way'],['ขับผ่านไปได้ถ้าไม่มีตำรวจ','Drive through if no officer is present'],['หยุดบนทางข้าม','Stop on top of the crossing']], a:1,
 w:'Where there is neither an officer nor a signal, pedestrians on the crossing have right of way; you may proceed only once they are safely across. There is a stop or yield line at least 50 cm before it — stop behind that, never on the bars.',
 src:'DLT book p.23 no.14'},

{c:'mark', th:'ลูกศรบนพื้นทางชี้ตรงไปข้างหน้า ในช่องเดินรถที่ท่านอยู่ หมายความว่าอย่างไร',
 en:'A STRAIGHT ARROW painted in your lane means what?',
 o:[['เลี้ยวซ้ายหรือขวาก็ได้','You may turn left or right'],['ต้องขับตรงไปข้างหน้า ห้ามเลี้ยวซ้ายหรือขวา','You must go straight ahead — turning left or right is prohibited'],['ให้กลับรถ','Make a U-turn'],['ให้หยุดรถ','Stop']], a:1,
 w:'The arrow is an order, not a suggestion. Being in the wrong lane for the movement you want is one of the most common faults the book marks wrong.',
 src:'DLT book p.25 no.9, p.47 Q38'},

{c:'mark', th:'ลูกศรบนพื้นทางชี้เลี้ยวซ้าย ในช่องเดินรถที่ท่านอยู่ หมายความว่าอย่างไร',
 en:'A LEFT-TURN ARROW painted in your lane means what?',
 o:[['ต้องเลี้ยวซ้าย ห้ามตรงไปหรือเลี้ยวขวา','You must turn left — going straight or turning right is prohibited'],['เลี้ยวซ้ายได้ถ้าต้องการ','You may turn left if you wish'],['ห้ามเลี้ยวซ้าย','No left turn'],['ให้ชิดซ้าย','Keep left']], a:0,
 w:'Must, not may.',
 src:'DLT book p.25 no.10'},

{c:'mark', th:'ลูกศรบนพื้นทางมีหัวลูกศรสองด้าน ชี้เลี้ยวซ้ายและเลี้ยวขวา หมายความว่าอย่างไร',
 en:'A double-pointed arrow in your lane pointing BOTH left and right means what?',
 o:[['ตรงไปได้','You may go straight'],['ต้องเลี้ยวซ้ายหรือเลี้ยวขวา ห้ามตรงไป','You must turn either left or right — going straight is prohibited'],['กลับรถได้','You may make a U-turn'],['ห้ามเลี้ยว','No turning']], a:1,
 w:'Straight ahead is the one thing this lane may not do. Compare the straight-and-left arrow, where straight IS allowed.',
 src:'DLT book p.23 no.13'},

{c:'mark', th:'ลูกศรบนพื้นทางชี้ตรงไปและเลี้ยวซ้าย หมายความว่าอย่างไร',
 en:'An arrow pointing straight ahead AND left means what?',
 o:[['ต้องเลี้ยวซ้ายเท่านั้น','You must turn left only'],['ตรงไปหรือเลี้ยวซ้ายก็ได้','You may either go straight or turn left'],['ต้องตรงไปเท่านั้น','You must go straight only'],['ห้ามเข้าช่องนี้','Do not use this lane']], a:1,
 w:'Either movement is permitted. Read how many heads the arrow has and where they point — that is the whole question.',
 src:'DLT book p.23 no.12'},

{c:'mark', th:'เส้นประสีเหลืองแบ่งทิศทางจราจร หมายความว่าอย่างไร',
 en:'A BROKEN YELLOW line down the middle of the road means what?',
 o:[['ห้ามแซง','No overtaking'],['เป็นเส้นแบ่งทิศทางจราจรปกติ แซงได้เมื่อปลอดภัย','An ordinary two-way division line — overtaking permitted when safe'],['ช่องเดินรถประจำทาง','A bus lane'],['ห้ามจอดรถ','No parking']], a:1,
 w:'Yellow marks a two-way division, white marks lanes going the same way; broken still means permitted, solid still means prohibited. Colour tells you what the line separates, pattern tells you what you may do.',
 src:'DLT book p.26, p.28'},

{c:'mark', th:'เส้นทึบสีเหลืองหรือเส้นทึบสีเหลืองคู่ หมายความว่าอย่างไร',
 en:'A SOLID YELLOW line, or double solid yellow lines, means what?',
 o:[['แซงได้','Overtaking permitted'],['ห้ามแซงและห้ามคร่อมเส้น','No overtaking and do not cross the line'],['ที่จอดรถ','A parking area'],['เขตปลอดภัย','A safety zone']], a:1,
 w:'Solid is solid whatever the colour.',
 src:'DLT book p.26'},

{c:'mark', th:'เส้นชะลอความเร็ว (rumble strips) บนพื้นทาง มีไว้เพื่ออะไร',
 en:'What are RUMBLE STRIPS painted across the road for?',
 o:[['แบ่งช่องจราจร','To divide lanes'],['เตือนให้ลดความเร็ว','To make you slow down'],['ให้จอดรถ','To mark parking'],['ห้ามแซง','To prohibit overtaking']], a:1,
 w:'You feel and hear them. Usually before a village, a school or a hazard.',
 src:'DLT book p.28'},

{c:'mark', th:'เครื่องหมาย "R X R" บนพื้นทาง หมายความว่าอย่างไร',
 en:'The marking "R X R" painted on the road surface means what?',
 o:[['ทางรถไฟข้างหน้า','A railway crossing ahead'],['ที่จอดรถ','A parking area'],['ทางเบี่ยง','A detour'],['เขตโรงเรียน','A school zone']], a:0,
 w:'Railway crossing. Remember the pair of numbers that goes with it: STOP at least 5 m from the track when a train is coming, and never PARK within 15 m of the crossing.',
 src:'DLT book p.28'},

/* ---- scenario rules the book teaches ---- */
{c:'trf', th:'เมื่อพบสิ่งกีดขวางหรือรถติดอยู่ข้างหน้าในช่องทางของท่าน ต้องปฏิบัติอย่างไร',
 en:'The lane ahead of you is blocked by an obstruction or stopped traffic. What do you do?',
 o:[['เบี่ยงออกไปเลยเพราะเป็นสิทธิ์ของเรา','Pull out at once — the gap is yours'],['ให้สัญญาณไฟเลี้ยวขวา และรอให้รถที่มาจากด้านหลังผ่านไปก่อน','Signal right and wait until the vehicle coming up behind has passed'],['บีบแตรให้รถคันอื่นหลบ','Sound the horn so others move over'],['ถอยหลังกลับ','Reverse back']], a:1,
 w:'The obstruction is in YOUR lane, so the other stream has priority: signal, wait, then go. The book uses this scenario twice (p.41 Q5, p.47 Q40).',
 src:'DLT book p.41 Q5, p.47 Q40'},

{c:'trf', th:'ขณะเลี้ยว (ซ้ายหรือขวา) และมีคนเดินเท้ากำลังข้ามทางข้ามอยู่ ต้องปฏิบัติอย่างไร',
 en:'You are turning and pedestrians are crossing the road you are turning into. What must you do?',
 o:[['เลี้ยวไปก่อนแล้วค่อยหลบ','Complete the turn first, then avoid them'],['หยุดรอให้คนเดินเท้าข้ามพ้นไปก่อน แล้วจึงเลี้ยว','Stop and wait until all the pedestrians are across, then turn'],['บีบแตรเตือน','Sound the horn'],['เลี้ยวช้าๆ ผ่านไประหว่างคน','Turn slowly and pass between them']], a:1,
 w:'All of them across, then turn. The book marks a turn made across a pedestrian crossing wrong even when the driver had a green light (p.43 Q15, p.48 Q44).',
 src:'DLT book p.43 Q15, p.48 Q44'},

{c:'trf', th:'ผู้ขับขี่ที่จะเลี้ยวขวาตัดกระแสรถที่ตรงไป ต้องปฏิบัติอย่างไร',
 en:'You want to turn right, across the path of oncoming traffic going straight. What must you do?',
 o:[['เลี้ยวไปก่อนเพราะเลี้ยวขวามีสิทธิ์','Turn first — a right-turning vehicle has priority'],['หยุดรอให้รถที่ตรงไปผ่านไปก่อน','Wait and let the traffic going straight pass first'],['บีบแตรแล้วเลี้ยว','Sound the horn and turn'],['เลี้ยวพร้อมกัน','Turn at the same time']], a:1,
 w:'Straight-ahead traffic has priority over a turn across it. This is the single most common cause of the crash the book is trying to prevent.',
 src:'DLT book p.41 Q6, p.48 Q44'},

{c:'trf', th:'รถยนต์ต้องนำไปตรวจสภาพก่อนเสียภาษีประจำปี เมื่อมีอายุเกินกี่ปี (ตามคู่มือ ขบ.)',
 en:'Per the DLT book, a CAR must pass inspection before paying annual tax once it is older than how many years?',
 o:[['3 ปี','3 years'],['5 ปี','5 years'],['7 ปี','7 years'],['10 ปี','10 years']], a:2,
 w:'More than 7 years for a car, more than 5 for a motorcycle. The official book states both in consecutive questions, which is how they are usually asked.',
 src:'DLT book p.40 Q27/Q28'},

/* ========== 9. Alcohol, fitness to drive, first aid, tyres ==========
   Topics recalled from the real exam. Thai wording and the marked correct answer come
   from thaidriveexam.com's categorised sets (สอบใบขับขี่: การขับขี่อย่างปลอดภัย /
   การบำรุงรักษายานยนต์ / การคาดการณ์อุบัติเหตุ), where the right option is encoded as an
   inline blue style — so the answers are the site's, not guessed. English by translation. */

{c:'alco', th:'ผู้ขับรถที่ดื่มสุรา เมื่อวัดระดับแอลกอฮอล์ในลมหายใจจะต้องไม่เกินเท่าใด',
 en:'For an ordinary driver, the breath-alcohol reading must not exceed what level?',
 o:[['ไม่เกิน 60 มิลลิกรัมเปอร์เซ็นต์','Not more than 60 mg%'],['ไม่เกิน 80 มิลลิกรัมเปอร์เซ็นต์','Not more than 80 mg%'],['ไม่เกิน 70 มิลลิกรัมเปอร์เซ็นต์','Not more than 70 mg%'],['ไม่เกิน 50 มิลลิกรัมเปอร์เซ็นต์','Not more than 50 mg%']], a:3,
 w:'50 mg% is the general limit. Read the next question too — yours will be 20 mg%, not 50.'},

{c:'alco', th:'ผู้ที่ถือใบอนุญาตขับรถชั่วคราว ผู้มีอายุต่ำกว่า 20 ปี หรือผู้ไม่มีใบอนุญาตขับรถ ระดับแอลกอฮอล์ต้องไม่เกินเท่าใด',
 en:'For a holder of a TEMPORARY licence, a driver under 20, or someone with no licence, the limit is what?',
 o:[['20 มิลลิกรัมเปอร์เซ็นต์','20 mg%'],['50 มิลลิกรัมเปอร์เซ็นต์','50 mg%'],['80 มิลลิกรัมเปอร์เซ็นต์','80 mg%'],['ไม่มีกำหนด','No limit applies']], a:0,
 w:'This one is personal: the licence you will be issued is the 2-year TEMPORARY licence, so your legal limit is 20 mg% — less than half the normal one, and about one drink. It stays 20 mg% until you convert to the 5-year licence.',
 src:'กฎกระทรวง (ผู้ขับขี่ที่มีใบอนุญาตชั่วคราว/อายุต่ำกว่า 20 ปี)'},

{c:'alco', th:'ขณะขับรถตรวจพบแอลกอฮอล์ในร่างกายเกินกว่าที่กฎหมายกำหนด มีโทษอย่างไร',
 en:'What is the penalty for driving over the legal alcohol limit?',
 o:[['จำคุกไม่เกิน 3 เดือน หรือปรับตั้งแต่ 1,000 ถึง 50,000 บาท','Up to 3 months, or 1,000–50,000 baht'],['ปรับไม่เกิน 10,000 บาท','Fine up to 10,000 baht'],['จำคุกไม่เกิน 1 ปี หรือปรับตั้งแต่ 5,000 ถึง 20,000 บาท หรือทั้งจำทั้งปรับ','Up to 1 year, or 5,000–20,000 baht, or both'],['ปรับไม่เกิน 50,000 บาท','Fine up to 50,000 baht']], a:2,
 w:'Up to 1 year and/or 5,000–20,000 baht, plus licence suspension of at least 6 months.'},

{c:'alco', th:'แอลกอฮอล์มีผลอย่างไรกับผู้ขับรถ',
 en:'What does alcohol do to a driver?',
 o:[['ปฏิกิริยาการตอบสนองต่อเหตุการณ์ช้าลง','It slows your reaction to events'],['ทำให้สามารถรับรู้สถานการณ์เพิ่มขึ้น','It improves your awareness'],['ช่วยเร่งปฏิกิริยาการตอบสนอง','It speeds up your reactions'],['ช่วยพัฒนาปฏิสัมพันธ์กับสภาวะรอบตัว','It improves how you interact with your surroundings']], a:0,
 w:'Slower reactions. That is also why the bank says alcohol lengthens your braking distance even though the brakes are fine.'},

{c:'alco', th:'ผู้ขับขี่ไม่ควรดื่มแอลกอฮอล์ก่อนการขับขี่ ไม่ว่ากรณีใด ๆ ใช่หรือไม่',
 en:'Is it true that a rider should not drink any alcohol before riding, in any circumstances?',
 o:[['ขึ้นอยู่กับชนิดของยานพาหนะ','It depends on the type of vehicle'],['ใช่ เพราะทำให้ร่างกายตอบสนองช้า','Yes — because it slows the body’s responses'],['ขึ้นอยู่กับอาหารการกิน','It depends what you have eaten'],['ไม่ใช่','No']], a:1,
 w:'Yes, in every case. On this style of question the absolute answer is the right one.'},

{c:'alco', th:'ท่านแวะรับประทานอาหารในร้านที่มีสุราบริการ ก่อนจะขับรถเดินทางไกล ควรทำอย่างไร',
 en:'You stop to eat somewhere that serves alcohol, and you still have a long ride ahead. What should you do?',
 o:[['ห้ามดื่มเครื่องดื่มแอลกอฮอล์โดยเด็ดขาด','Do not drink any alcohol at all'],['ทานอาหารร้อน ๆ ร่วมกับเครื่องดื่มแอลกอฮอล์','Eat hot food along with the alcohol'],['ดื่มเครื่องดื่มชูกำลังร่วมกับแอลกอฮอล์','Drink an energy drink with the alcohol'],['ดื่มนมก่อนดื่มแอลกอฮอล์','Drink milk before the alcohol']], a:0,
 w:'None of the folk remedies work — food, milk, coffee and energy drinks do not lower your blood alcohol.'},

{c:'alco', th:'ผู้รับประทานยานอนหลับและยาคลายกังวล ควรขับขี่ยานพาหนะหรือไม่',
 en:'Should someone who has taken sleeping pills or anti-anxiety medication drive?',
 o:[['ได้ทุกกรณี','Yes, always'],['ได้เฉพาะยานพาหนะส่วนตัว','Only a private vehicle'],['ได้เฉพาะรถสาธารณะ','Only a public vehicle'],['ไม่ควรทุกกรณี','No, in no circumstances']], a:3,
 w:'Never. Sedatives are treated exactly like alcohol in this bank.'},

{c:'alco', th:'เมื่อท่านรับประทานยาแก้ไอที่ได้จากเพื่อน ก่อนขับรถควรปฏิบัติอย่างไร',
 en:'A friend gives you cough medicine. Before riding, what should you do?',
 o:[['ดื่มกาแฟเข้มข้น 1 ชั่วโมงก่อนขับรถ','Drink strong coffee an hour before riding'],['ขับเป็นระยะสั้น ๆ เพื่อสังเกตว่ายามีผลหรือไม่','Ride a short distance to see whether it affects you'],['ถามเพื่อนว่ายามีผลต่อการขับรถหรือไม่','Ask your friend whether it affects driving'],['ตรวจสอบฉลากว่ายาที่ใช้มีผลต่อการขับรถหรือไม่','Read the label to see whether it affects driving']], a:3,
 w:'Read the label. Not your friend’s opinion, and not a trial run.'},

{c:'alco', th:'ยาแก้เวียนศีรษะเมารถ มีผลข้างเคียงที่รบกวนต่อการขับขี่หรือไม่',
 en:'Do travel-sickness tablets have side effects that interfere with riding?',
 o:[['มี แต่ไม่เกี่ยวข้องกับการขับขี่','Yes, but nothing to do with riding'],['ขึ้นกับความรุนแรงของโรค','It depends how severe the illness is'],['มี เช่น มึนงง เวียนศีรษะ มองเห็นไม่ชัด','Yes — drowsiness, dizziness and blurred vision'],['ไม่มี','No']], a:2,
 w:'Drowsiness, dizziness, blurred vision.'},

{c:'alco', th:'ก่อนออกเดินทาง ข้อใดปฏิบัติไม่ถูกต้อง',
 en:'Before setting off, which of these is WRONG?',
 o:[['เตรียมสภาพรถให้พร้อมใช้งาน','Getting the vehicle ready'],['ศึกษาเส้นทางที่จะไป','Studying the route'],['ดื่มสุราก่อนออกเดินทาง','Drinking alcohol before setting off'],['เตรียมความพร้อมของร่างกาย','Getting yourself physically ready']], a:2,
 w:'Negative stem — read it twice.'},

{c:'fit', th:'เพื่อความปลอดภัยก่อนขับรถ ผู้ขับขี่ควรเตรียมตัวอย่างไร',
 en:'To be safe before riding, how should you prepare yourself?',
 o:[['นอนหลับพักผ่อนให้เพียงพอ','Get enough sleep and rest'],['ต่อทะเบียนรถให้เรียบร้อย','Make sure the road tax is paid'],['เติมน้ำมันให้เต็มถัง','Fill the tank'],['ตรวจสอบเส้นทาง','Check the route']], a:0,
 w:'The question asks about preparing YOURSELF, not the vehicle. Rest is the answer.'},

{c:'fit', th:'การขับรถทางไกลเมื่อรู้สึกว่าตนเองง่วง ควรปฏิบัติอย่างไร',
 en:'On a long ride you start to feel sleepy. What should you do?',
 o:[['ขับหวาดเสียวเพื่อให้ระบบประสาทตื่นตัว','Ride riskily to wake yourself up'],['เร่งเครื่องเพื่อให้ถึงจุดหมายโดยเร็ว','Speed up to arrive sooner'],['หยุดพักนอนหรือยืดเส้นยืดสายตามจุดพัก','Stop at a rest area to sleep or stretch'],['วิ่งแล้วเบรกบ่อย ๆ เพื่อให้หายง่วง','Brake repeatedly to stay alert']], a:2,
 w:'Stop and rest. Everything else is a trick to stay awake, and the bank rejects all of them.'},

{c:'fit', th:'ช่วงที่ท่านกำลังป่วย ความสามารถในการขับรถจะถดถอยลง ท่านต้องทำอย่างไร',
 en:'While you are ill your riding ability is reduced. What must you do?',
 o:[['นำยาติดตัวไปด้วยทั้งหมด','Carry all your medicines with you'],['ขับรถตามปกติ','Ride as normal'],['ไม่ขับรถหลังจากทานยาที่ทำให้เกิดอาการง่วง','Do not ride after taking medicine that makes you drowsy'],['ลดปริมาณยาที่ทานลง','Reduce the dose']], a:2,
 w:'Do not ride on drowsy medication — and do not self-adjust the dose either.'},

{c:'fit', th:'ผู้ที่มีสายตาผิดปกติ แต่แก้ไขได้โดยการใส่แว่น สามารถขับขี่ยานพาหนะได้หรือไม่',
 en:'Someone whose eyesight is defective but correctable with glasses — may they drive?',
 o:[['ได้เฉพาะรถสาธารณะ','Only public vehicles'],['ได้','Yes'],['ได้เฉพาะยานพาหนะส่วนตัว','Only a private vehicle'],['ไม่ควร','They should not']], a:1,
 w:'Yes — corrected vision is normal vision. Wear the glasses to the ability test, and wear them when you ride.'},

{c:'fit', th:'ผู้ที่มีสายตาผิดปกติข้างหนึ่ง แต่อีกข้างหนึ่งปกติ สามารถขับยานพาหนะได้หรือไม่',
 en:'Someone with defective sight in ONE eye and normal sight in the other — may they drive?',
 o:[['ได้เฉพาะยานพาหนะส่วนตัว','A private vehicle only'],['ไม่ควร','They should not'],['ได้เฉพาะรถสาธารณะ','A public vehicle only'],['ได้','Yes, without restriction']], a:0,
 w:'Private vehicles only — never a public/for-hire vehicle. Contrast the next question, where an eye has been LOST but the remaining vision tests normal.'},

{c:'fit', th:'ผู้สูญเสียดวงตาไปข้างหนึ่ง แต่จักษุแพทย์ตรวจแล้วว่ายังมีสายตาปกติ ขับขี่ได้หรือไม่',
 en:'Someone who has LOST one eye, but an ophthalmologist certifies their vision as normal — may they drive?',
 o:[['ได้เฉพาะรถสาธารณะ','Public vehicles only'],['ได้','Yes'],['ได้เฉพาะยานพาหนะส่วนตัว','Private vehicles only'],['ไม่ได้ทุกกรณี','No, never']], a:1,
 w:'Yes. A specialist’s certificate of normal vision settles it. This and the previous question are a deliberate pair.'},

{c:'fit', th:'ผู้ป่วยโรคลมชักสามารถขับยานพาหนะได้หรือไม่',
 en:'May a person with epilepsy drive?',
 o:[['ได้เฉพาะรถสาธารณะ','Public vehicles only'],['ได้ทุกกรณี','Yes, always'],['ได้เฉพาะยานพาหนะส่วนตัว','Private vehicles only'],['ไม่ได้ทุกกรณี','No, in no circumstances']], a:3,
 w:'Never. Epilepsy is the standard example of a disqualifying condition.'},

{c:'fit', th:'ผู้ป่วยโรคเบาหวานสามารถขับยานพาหนะได้หรือไม่',
 en:'May a person with diabetes drive?',
 o:[['ได้ หากไม่มีอาการที่เสี่ยงต่อการหมดสติ หรือควบคุมยานพาหนะไม่ได้','Yes, provided there is no risk of losing consciousness or control'],['ขับขี่ได้หลังจากหยุดยาทั้งหมด','Only after stopping all medication'],['ไม่ควรขับขี่','They should not ride'],['ไม่มีข้อใดถูก','None of these']], a:0,
 w:'Conditional yes. Note the separate question where injected-insulin diabetes is listed among conditions that stop you riding — the test is whether you could black out.'},

{c:'fit', th:'ผู้ป่วยที่เป็นโรคหลอดเลือดหัวใจตีบ ควรขับขี่ยานพาหนะหรือไม่',
 en:'Should a person with coronary artery disease drive?',
 o:[['ได้เฉพาะยานพาหนะส่วนตัว','A private vehicle only'],['ควรหลีกเลี่ยง','They should avoid it'],['ได้ทุกกรณี','Yes, always'],['ได้เฉพาะรถสาธารณะ','A public vehicle only']], a:1,
 w:'Should avoid it. Note the softer wording than the heart-surgery question, which is an outright no.'},

{c:'fit', th:'ผู้ที่ได้รับการผ่าตัดหัวใจ หรือมีประวัติกล้ามเนื้อหัวใจขาดเลือด ขับขี่ได้หรือไม่',
 en:'Someone who has had heart surgery, or a history of myocardial ischaemia — may they drive?',
 o:[['ไม่ควรทุกกรณี','No, in no circumstances'],['ได้ทุกกรณี','Yes, always'],['ได้เฉพาะยานพาหนะส่วนตัว','Private vehicles only'],['ได้เฉพาะรถสาธารณะ','Public vehicles only']], a:0,
 w:'An outright no in this bank.'},

{c:'fit', th:'ผู้ป่วยโรคใดสามารถขับขี่ยานพาหนะได้',
 en:'A person with which of these conditions MAY ride?',
 o:[['โรคเหงือกอักเสบ','Gum inflammation'],['โรคหัวใจขาดเลือด','Ischaemic heart disease'],['โรคลมชัก','Epilepsy'],['เบาหวานชนิดใช้ยาฉีด','Insulin-injecting diabetes']], a:0,
 w:'Gum disease — the only one that cannot make you lose control. The question is really "which of these could black you out?".'},

{c:'fit', th:'ข้อใดคือการกระทำที่ถูกต้องก่อนขับรถ',
 en:'Which of these people did the right thing before riding?',
 o:[['นางสาว ค. อดนอนก่อนขับรถ','Ms C went without sleep'],['นางสาว ก. ดื่มแอลกอฮอล์ก่อนขับรถ','Ms A had an alcoholic drink'],['นาย ข. ได้ยาเบาหวานแบบฉีด จึงหยุดขับรถ','Mr B was put on injected diabetes medication, so he stopped riding'],['นางสาว ข. ทานยาแก้แพ้ก่อนขับรถ','Ms B took an antihistamine first']], a:2,
 w:'The one who chose NOT to ride.'},

{c:'fit', th:'ข้อใดปฏิบัติได้ถูกต้องสำหรับการขับขี่ในเวลากลางคืน',
 en:'Which is correct practice for riding at night?',
 o:[['ขับให้ช้ากว่าปกติ หรือไม่เร็วกว่าที่สายตามองเห็น','Ride slower than usual — never faster than you can see'],['เปิดไฟฉุกเฉินตลอดเวลาขณะขับขี่','Keep hazard lights on throughout'],['ขับให้เร็วได้ตามปกติ','Ride at normal speed'],['เปิดไฟสูงตลอดเวลาขณะขับขี่','Keep high beam on throughout']], a:0,
 w:'Never outrun your own headlights.'},

{c:'fit', th:'การมองไกลไปข้างหน้าขณะขับขี่ มีจุดประสงค์เพื่ออะไร',
 en:'What is the purpose of looking far ahead as you ride?',
 o:[['ผ่อนคลายสายตา','To rest your eyes'],['เพื่อฝึกสมาธิ','To practise concentration'],['เพื่อการแซง','In order to overtake'],['เพื่อสังเกตอันตรายที่อาจเกิดขึ้นล่วงหน้า','To spot hazards before they reach you']], a:3,
 w:'Hazard anticipation. On the plank in the practical test, the same instinct is what keeps you upright.'},

{c:'fit', th:'มองไกลไปข้างหน้าขณะขับขี่อย่างไรจึงมีประสิทธิภาพมากที่สุด',
 en:'What is the most effective way to scan the road ahead?',
 o:[['ใช้สายตาเคลื่อนไหว และใช้มือถือได้บางช่วงเมื่อรถติด','Keep your eyes moving, and use your phone when traffic stops'],['สายตาห้ามเคลื่อนไหว ตั้งใจมองป้ายจราจร','Hold your eyes still and concentrate on the signs'],['สายตาห้ามเคลื่อนไหว จดจ่ออยู่ที่จุดใดจุดหนึ่ง','Hold your eyes still, fixed on one point'],['ใช้สายตาเคลื่อนไหว และไม่จดจ่ออยู่ที่จุดใดจุดหนึ่ง','Keep your eyes moving and do not fix on any one point']], a:3,
 w:'Keep scanning; never stare at one point.'},

{c:'aid', th:'ในการประเมินสถานการณ์อุบัติเหตุ ไม่ต้องคำนึงถึงข้อใด',
 en:'When sizing up an accident scene, which of these do you NOT need to consider?',
 o:[['ช่วงเวลาที่เกิดอุบัติเหตุ','What time it happened'],['พิจารณาว่ามีผู้บาดเจ็บกี่คน','How many people are injured'],['ความรุนแรงของอุบัติเหตุ','How severe the crash is'],['ค่าใช้จ่ายที่เกิดจากการรักษาพยาบาล','What the medical treatment will cost']], a:3,
 w:'Cost is not your problem at the scene. Negative stem.'},

{c:'aid', th:'เมื่อพบคนบาดเจ็บ ข้อใดไม่ควรปฏิบัติ',
 en:'On finding an injured person, which must you NOT do?',
 o:[['ผู้ช่วยเหลือต้องแน่ใจว่าตนเองปลอดภัย','Make sure you are safe yourself first'],['เคลื่อนย้ายผู้บาดเจ็บโดยทันที','Move the casualty immediately'],['ประเมินว่ามีผู้บาดเจ็บและเสียชีวิตจำนวนเท่าใด','Count the injured and the dead'],['ประเมินสถานการณ์ และสงบสติอารมณ์','Assess the scene and stay calm']], a:1,
 w:'Do NOT move them straight away. This is the single most important first-aid rule in the whole section: moving a casualty before you know what is broken can paralyse them.'},

{c:'aid', th:'ข้อใดไม่ใช่หลักการเคลื่อนย้ายผู้ป่วยที่ควรปฏิบัติ',
 en:'Which is NOT a principle of moving a casualty?',
 o:[['ต้องให้การปฐมพยาบาลก่อนการเคลื่อนย้าย','Give first aid before moving them'],['ต้องเคลื่อนย้ายอย่างถูกต้อง','Move them using the correct technique'],['ต้องเคลื่อนย้ายทันทีไม่ต้องดูอาการ','Move them at once without checking their injuries'],['ต้องทราบว่าผู้บาดเจ็บได้รับบาดเจ็บบริเวณไหน','Know where they are injured']], a:2,
 w:'First aid first, know the injury, then move correctly. Never move blind.'},

{c:'aid', th:'เมื่ออยู่ในที่เกิดเหตุ จะช่วยผู้บาดเจ็บที่หมดสติได้อย่างไร',
 en:'At the scene, how do you help a casualty who is unconscious?',
 o:[['ตรวจสอบว่าหายใจเป็นปกติหรือไม่','Check whether they are breathing normally'],['ถ่ายรูปสถานที่เกิดเหตุ','Photograph the scene'],['ใช้น้ำเย็นสาดใส่หน้า','Throw cold water in their face'],['เคลื่อนย้ายไปยังที่สบายกว่า','Move them somewhere more comfortable']], a:0,
 w:'Airway and breathing first. Not water, not moving them.'},

{c:'aid', th:'หากไปถึงที่เกิดเหตุเป็นคนแรก มีผู้บาดเจ็บรุนแรง เมื่อเปิดไฟฉุกเฉินและดับเครื่องยนต์แล้ว ควรทำอะไรต่อ',
 en:'You are first on scene with a badly injured person. Hazards on, engine off. What next?',
 o:[['เคลื่อนย้ายผู้บาดเจ็บออกจากรถ','Get the casualty out of the vehicle'],['ติดต่อรถช่วยเหลือฉุกเฉิน','Call the emergency services'],['หยุดรถคันอื่น ๆ และขอความช่วยเหลือจากคนขับ','Flag down other vehicles and ask the drivers for help'],['พยายามให้ผู้บาดเจ็บดื่มอะไรบางอย่าง','Try to give the casualty something to drink']], a:1,
 w:'Call for help. Never give an injured person anything to drink, and do not drag them out of the vehicle.'},

{c:'aid', th:'การเคลื่อนย้ายผู้บาดเจ็บโดยผู้ช่วยเหลือสองคน เหมาะกับผู้บาดเจ็บแบบใด',
 en:'A TWO-rescuer carry is suitable for which kind of casualty?',
 o:[['สำหรับผู้บาดเจ็บที่ไม่รู้สึกตัว','One who is unconscious'],['ผู้ป่วยที่รู้สึกตัวดี','One who is fully conscious'],['ผู้บาดเจ็บที่มีน้ำหนักน้อย','A lightweight casualty'],['เหมาะที่จะใช้ในกรณีฉุกเฉิน','For emergencies']], a:0,
 w:'Two rescuers for an UNCONSCIOUS casualty — they cannot hold on, so two people control the body. Compare the four-hand seat, which needs a conscious casualty.'},

{c:'aid', th:'วิธีเคลื่อนย้ายผู้บาดเจ็บแบบนั่งบนมือทั้งสี่ที่จับประสานกันเป็นแคร่ หรือยกโดยใช้เก้าอี้ เหมาะกับผู้บาดเจ็บแบบใด',
 en:'The four-hand seat (two rescuers interlocking hands) or a chair lift suits which casualty?',
 o:[['ผู้บาดเจ็บที่ไม่รู้สึกตัว','One who is unconscious'],['ผู้บาดเจ็บที่ลำตัวหรือกระดูกหัก','One with torso injuries or fractures'],['ผู้บาดเจ็บในกรณีฉุกเฉิน','Any casualty, in an emergency'],['ผู้บาดเจ็บที่ขาเจ็บ แต่รู้สึกตัวดี และใช้แขนทั้งสองข้างได้','One with a leg injury who is fully conscious and can use both arms']], a:3,
 w:'This is the carry you asked about. It needs a CONSCIOUS casualty who can hold on with both arms — typically a leg injury. Never use it for someone unconscious or with a spinal or torso injury.'},

{c:'aid', th:'การเคลื่อนย้ายผู้บาดเจ็บโดยใช้ผ้าห่ม ไม่เหมาะกับผู้บาดเจ็บบริเวณใด',
 en:'A blanket drag/lift is NOT suitable for a casualty injured where?',
 o:[['บริเวณแขนและขา','Arms and legs'],['บริเวณหลัง','The back / spine'],['บริเวณศีรษะ','The head'],['ไม่มีข้อใดถูก','None of these']], a:1,
 w:'Not for a back injury — a blanket lets the spine flex. Spinal cases need the body kept rigid and in line.'},

{c:'aid', th:'สิ่งใดช่วยลดการบาดเจ็บที่คอได้เมื่อเกิดการชน',
 en:'Which of these reduces neck injury in a collision?',
 o:[['ระบบเบรก ABS','ABS brakes'],['หมอนรองศีรษะที่ปรับระดับได้เหมาะสม','A correctly adjusted head restraint'],['เบาะสปริงลม','An air-sprung seat'],['แกนพวงมาลัยแบบยุบตัวได้','A collapsible steering column']], a:1,
 w:'The head restraint, set at the right height. On a motorcycle the equivalent is a properly fastened helmet.'},

{c:'aid', th:'ผู้ที่บาดเจ็บและหยุดเคลื่อนไหวเป็นเวลานาน เช่น ใส่เฝือก หลังถอดเฝือกแล้วจะส่งผลอย่างไร',
 en:'Someone immobilised for a long time — in a cast, say — is affected how once the cast comes off?',
 o:[['ต้องเปลี่ยนวิธีการขับขี่','They must change how they ride'],['พิการถาวร','Permanent disability'],['ไม่มีผลใด ๆ','No effect'],['ความสามารถในการควบคุมยานพาหนะลดลงชั่วคราว','Their ability to control a vehicle is temporarily reduced']], a:3,
 w:'Temporarily reduced — muscles weaken. Give yourself time before riding again.'},

{c:'aid', th:'เมื่อผู้ขับขี่สังเกตเห็นอุบัติเหตุข้างหน้า สิ่งใดที่ควรระวัง',
 en:'You see a crash ahead. What should you watch out for?',
 o:[['ถูกทุกข้อ','All of the above'],['รถคันอื่นหักหลบกะทันหัน','Other vehicles swerving suddenly'],['รถกู้ภัยแทรกมาด้วยความเร็ว','Rescue vehicles cutting through at speed'],['คนหรือรถวิ่งตัดหน้าเพื่อไปช่วยผู้บาดเจ็บ','People or vehicles cutting across to reach the injured']], a:0,
 w:'All of them. The secondary crash is the one that catches riders.'},

{c:'maint', th:'ยางที่หมดอายุจะมีลักษณะอย่างไร',
 en:'How can you tell a tyre has reached the end of its life?',
 o:[['มีรอยแตกร้าวตามแนวขอบยาง','Cracks appear along the sidewall'],['เวลาเปียกน้ำจะไม่เกาะยาง','It stops gripping when wet'],['ยางจะมีสีขาวนวล','It turns a creamy white'],['ยางจะมีสีดำสนิท','It turns deep black']], a:0,
 w:'Sidewall cracking. Rubber perishes with age even on a bike that barely gets ridden — which is why age matters as well as tread.'},

{c:'maint', th:'ถ้าเติมลมยางแข็งเกินไป จะมีผลกับยางอย่างไร',
 en:'What happens to a tyre that is OVER-inflated?',
 o:[['การขับขี่จะนุ่มนวลขึ้น','The ride gets smoother'],['ดอกยางตรงกลางจะสึกหรอเร็วกว่าปกติ','The CENTRE of the tread wears out faster'],['สิ้นเปลืองน้ำมันเชื้อเพลิง','It uses more fuel'],['ดอกยางด้านข้างจะสึกเร็วกว่าปกติ','The edges of the tread wear faster']], a:1,
 w:'Over-inflated = centre wear. Under-inflated = both edges wear. The wear pattern tells you which mistake you made — a favourite exam pair.'},

{c:'maint', th:'ถ้าเติมลมยางอ่อนเกินไป จะมีผลกับยางอย่างไร',
 en:'What happens to a tyre that is UNDER-inflated?',
 o:[['ดอกยางตรงกลางจะสึกเร็วกว่าปกติ','The centre of the tread wears faster'],['ทำให้ดอกยางด้านข้างทั้งสองสึกหรอ','BOTH edges of the tread wear'],['การขับขี่จะแข็งกระด้าง','The ride becomes harsh'],['ทำให้กินน้ำมันน้อยลง','It uses less fuel']], a:1,
 w:'Both shoulders wear. It also uses more fuel, not less.'},

{c:'maint', th:'ลมยางล้อหน้าอ่อน จะมีผลต่อการขับขี่อย่างไร',
 en:'What is the effect of a soft front tyre?',
 o:[['รู้สึกเหมือนรถกระตุกตลอดเวลา','It feels like the vehicle judders constantly'],['ประหยัดยางแต่เปลืองน้ำมัน','Saves the tyre but wastes fuel'],['ยางล้อหน้าสึกหรอ และรถกินน้ำมันมากขึ้น','The front tyre wears out and fuel consumption rises'],['ประหยัดน้ำมันแต่เปลืองยาง','Saves fuel but wears the tyre']], a:2,
 w:'Wear plus fuel. On a bike a soft front also makes the steering vague — the thing you feel first.'},

{c:'maint', th:'การตรวจสอบลมยางที่ถูกต้องควรปฏิบัติอย่างไร',
 en:'What is the correct way to check tyre pressure?',
 o:[['เอาเหล็กมาตีที่หน้ายาง','Strike the tyre with a metal bar'],['ใช้เครื่องวัดลมยาง','Use a pressure gauge'],['ดูด้วยตาเปล่า','Judge it by eye'],['ใช้มือคลำ','Feel it with your hand']], a:1,
 w:'A gauge. Kicking, looking and squeezing are all rejected.'},

{c:'maint', th:'ควรตรวจสอบลมยางบ่อยเพียงใดจึงปลอดภัยที่สุด',
 en:'How often should tyre pressure be checked, to be safest?',
 o:[['เดือนละครั้ง','Once a month'],['ทุกครั้งก่อนใช้งาน','Every time, before you ride'],['สัปดาห์ละครั้ง','Once a week'],['วันละครั้ง','Once a day']], a:1,
 w:'Before every ride is the safest answer, and "safest" is what the question asks.'},

{c:'maint', th:'ฝาปิดจุ๊บลมยางมีประโยชน์อย่างไร',
 en:'What is the valve cap on a tyre for?',
 o:[['ป้องกันการขโมยยาง','To stop the tyre being stolen'],['ป้องกันไม่ให้ใครมาเติมลม','To stop anyone adding air'],['ป้องกันลมรั่วซึมและสิ่งสกปรก','To stop air seeping out and dirt getting in'],['ป้องกันยางแตก','To stop the tyre bursting']], a:2,
 w:'Seals against slow leaks and grit.'},

{c:'maint', th:'ยางรถมีหน้าที่อย่างไร',
 en:'What is the job of a tyre?',
 o:[['ระบายความร้อน','To dissipate heat'],['ช่วยยึดเกาะถนนไม่ให้ลื่นไถล','To grip the road so the vehicle does not slide'],['ตัดต่อกำลังเครื่องยนต์','To connect and disconnect engine power'],['ทำให้รถมีกำลังขับเคลื่อน','To give the vehicle its driving power']], a:1,
 w:'Grip. Everything else you do on a bike depends on the contact patch, which is about the size of a credit card.'},

{c:'maint', th:'การหมุนพวงมาลัยขณะรถจอดอยู่กับที่ จะมีผลอย่างไร',
 en:'What is the effect of turning the steering while the vehicle is stationary?',
 o:[['สิ้นเปลืองน้ำมันเชื้อเพลิง','It wastes fuel'],['สิ้นเปลืองน้ำมันพาวเวอร์','It wastes power-steering fluid'],['ทำให้หมุนพวงมาลัยง่ายขึ้น','It makes the steering easier'],['ดอกยางสึกเร็วกว่าปกติ','The tread wears out faster than normal']], a:3,
 w:'It scrubs the tread away.', car:true},

{c:'maint', th:'จะเกิดอะไรขึ้นเมื่อล้อรถอยู่ในสภาวะที่ไม่สมดุล',
 en:'What happens when a wheel is out of balance?',
 o:[['พวงมาลัยจะเกิดการสั่น','The steering vibrates'],['เบรกจะใช้ไม่ได้','The brakes stop working'],['พวงมาลัยจะดึงไปด้านใดด้านหนึ่ง','The steering pulls to one side'],['ยางรถจะแบน','The tyre goes flat']], a:0,
 w:'Vibration. PULLING to one side is a different fault — brakes or alignment.'},

{c:'maint', th:'เมื่อใช้เบรกแล้วรถเคลื่อนที่ไปด้านใดด้านหนึ่ง ควรปฏิบัติอย่างไร',
 en:'Under braking the vehicle veers to one side. What should you do?',
 o:[['เปลี่ยนเกียร์และเหยียบเบรกขึ้นลง','Change gear and pump the brake'],['ตรวจสอบระบบเบรกโดยเร็วที่สุด','Have the braking system checked as soon as possible'],['ใช้เบรกมือร่วมด้วย','Use the parking brake as well'],['เพิ่มความดันลมยาง','Increase the tyre pressure']], a:1,
 w:'Get it looked at. Uneven braking is a fault, not something to compensate for.'},

{c:'maint', th:'ข้อใดต่อไปนี้ทำให้รถสิ้นเปลืองเชื้อเพลิงมาก',
 en:'Which of these makes a vehicle use noticeably more fuel?',
 o:[['ใช้ยางที่มีลมยางน้อยเกินไป','Running under-inflated tyres'],['ใช้ยางที่มีลมยางมากเกินไป','Running over-inflated tyres'],['ใช้ยางต่างยี่ห้อกัน','Mixing tyre brands'],['ใช้ยางใหม่','Using new tyres']], a:0,
 w:'Under-inflation. More rolling resistance, more fuel, and more wear.'},

{c:'maint', th:'ข้อใดเป็นการเตรียมความพร้อมของรถก่อนขับรถ',
 en:'Which of these counts as getting the VEHICLE ready before a ride?',
 o:[['ดูหนังสือแผนที่ทางหลวง','Consulting a road atlas'],['ตรวจสภาพอากาศ','Checking the weather'],['ตรวจแรงดันลมยาง เบรก น้ำมันหล่อลื่น','Checking tyre pressure, brakes and lubricating oil'],['ต่อใบอนุญาตขับรถ','Renewing your driving licence']], a:2,
 w:'Tyres, brakes, oil. Compare the sister question about preparing YOURSELF, where the answer is rest.'},

{c:'maint', th:'วิธีปฏิบัติเป็นสิ่งแรกเมื่อยางแตกคือข้อใด',
 en:'A tyre blows out. What is the FIRST thing to do?',
 o:[['จับพวงมาลัยให้มั่น ประคองรถให้ปลอดภัย','Hold on firmly and keep the vehicle straight'],['มองกระจกหลัง','Look in the mirror'],['เหยียบคันเร่ง','Press the accelerator'],['ล็อกประตูรถทุกบาน','Lock all the doors']], a:0,
 w:'Hold on and keep it straight. Do not brake hard and do not shut the throttle abruptly — on a motorcycle that is what turns a blowout into a crash.'},

{c:'maint', th:'เมื่อยางแตกขณะขับรถ ควรปฏิบัติอย่างไร',
 en:'When a tyre bursts while you are moving, what should you do?',
 o:[['ค่อย ๆ แตะเบรก','Feather the brake gently'],['ติดต่อขอความช่วยเหลือ','Call for assistance'],['ปล่อยรถให้ไหล พร้อมเปิดสัญญาณไฟฉุกเฉิน','Let the vehicle roll to a stop, hazard lights on'],['เปิดสัญญาณไฟฉุกเฉิน','Put the hazard lights on']], a:2,
 w:'Let it slow itself while you signal. Braking is what loses control.'},

];
