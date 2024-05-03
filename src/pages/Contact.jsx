import { Spacer, Hero } from "../components"

const Contact = () => {
  return (
    <>
      <Spacer spacerClasses={"h-[60px]"}/>

      <section className="w-full">
        <div className="bg-white rounded-std p-5">
          <h2 className="text-2xl font-bold">Mail and Deliveries</h2>
          <div className="flex flex-row">
            <div className="w-1/2">
              <div>
                <h3 className="py-2 font-bold">Send small packages and mail to:</h3>
                <p>Barsukov Physics </p>
                <p>3401 Watkins Dr <br/> Riverside, CA 92507</p>
                <p>Phone: +1 951-827-5343</p>
              </div>
              <div>
                <h3 className="py-2 font-bold">Send bulky deliveries to:</h3>
                <p>MSE Building, Room 178</p>
                <p>N Campus Dr/ Aberdeen Dr <br/> Riverside, CA 92507</p>
                <p>Phone: +1 951-827-5343</p>
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="py-2 font-bold">Google Maps</h3>
              <div className="rounded-xl overflow-hidden" style={{ width: '100%', height: '400px' }}>
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 2 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6984650571193!2d-122.08424968469214!3d37.42199997982531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7b11b11cb1f%3A0x6c8a7fb8f8484d8b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1594629064751!5m2!1sen!2sus"
                  allowFullScreen
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="bg-white rounded-std">
          <h2>For Visitors</h2>
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

