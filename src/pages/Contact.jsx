import { Spacer, Hero } from "../components"
import { principalInvestigator } from "../constants/people"

const Contact = () => {
  return (
    <>
      <Spacer spacerClasses={"h-[60px]"}/>


      <section className="w-full">
        <div className="bg-white rounded-std p-5">

          <div className="flex flex-row h-full">

            <div className="w-1/3">

              <h2 className="py-2 text-2xl font-bold">Mail and Deliveries</h2>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-bold">Send small packages and mail to:</h3>
                  <p>Barsukov Physics</p>
                  <p>3401 Watkins Dr<br/> Riverside, CA 92507</p>
                  <p>Phone: +1 951-827-5343</p>
                </div>

                <div>
                  <h3 className="font-bold">Send/Deliver bulky items to:</h3>
                  <p>Barsukov Group</p>
                  <p>MSE Building, Room 178</p>
                  <p>N Campus Dr/ Aberdeen Dr <br/> Riverside, CA 92507</p>
                  <p>Phone: +1 951-827-5389</p>
                </div>
              </div>

            </div>


            <div className="w-2/3">
              <h2 className="py-2 text-2xl font-bold">Our Location</h2>
              <div className="rounded-xl overflow-hidden w-full h-[400px]">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 2 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.634299850104!2d-117.33074972370792!3d33.976237873185646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae44e88647ef%3A0xbeef3f656e92eca2!2sMaterials%20Science%20and%20Engineering%20Building%2C%20N%20Campus%20Dr%2C%20Riverside%2C%20CA%2092507!5e0!3m2!1sen!2sus!4v1714791224591!5m2!1sen!2sus"
                  allowFullScreen
                ></iframe>
              </div>
            </div>


          </div>

        </div>
      </section>

      
      <section className="w-full">
        <div className="bg-white rounded-std p-5">
          <div className="flex flex-row">
            
            <div className="w-1/3">

              <h2 className="py-2 text-2xl font-bold">For Visitors</h2>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-bold">To schedule a lab tour, contact</h3>
                  <p>Igor Barsukov </p>
                  <p>Email: {principalInvestigator.email}</p>
                  <p>Phone: {principalInvestigator.phone}</p>
                </div>

                <div>
                  <h3 className="font-bold">Lab Location</h3>
                  <p>MSE Building, Room 178</p>
                  <p>N Campus Dr/ Aberdeen Dr <br/> Riverside, CA 92507</p>
                  <p>Phone: +1 951-827-5343</p>
                </div>

                <div className="">
                    <h3 className="font-bold">Visitor Parking</h3>
                    <p>Consult UCR Parking for permits </p>
                    <a className="text-blue-500 underline"
                      href="https://transportation.ucr.edu/visitor-parking">
                      transportation.ucr.edu/visitor-parking
                    </a>
                </div>
              </div>

            </div>

            <div className="w-2/3">
              <h3 className="py-2 font-bold text-2xl">Nearest visitor parking</h3>
              <div className="rounded-xl overflow-hidden h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1654.299143017633!2d-117.3300912245824!3d33.97716329329636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x80dcae438d02e0b9%3A0x7ce2514f80e26d59!2sParking%20Lot%2024%2C%20Riverside%2C%20CA%2092507!3m2!1d33.9780886!2d-117.3305668!4m5!1s0x80dcae44e88647ef%3A0xbeef3f656e92eca2!2sMaterials%20Science%20and%20Engineering%20Building%2C%20North%20Campus%20Drive%2C%20Riverside%2C%20CA!3m2!1d33.9762379!2d-117.3281748!5e0!3m2!1sen!2sus!4v1714792919623!5m2!1sen!2sus" 
                  width="100%"
                  height="100%"
                  style={{ border: 2 }}
                  allowFullScreen
                  >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Spacer spacerClasses={"h-[60px]"}/>
    </>
  )
}

export default Contact


// In One tile 
// For visitors
// how to find us, google maps of location, address
// Map Parking for visitors
// Phone number
// 


// Next tiles for deliveries, how to send and deliver
// Send packages to barsukov physics address
// Deliver bulky items to a different address
// Deliver bulky items to lab shown on top

