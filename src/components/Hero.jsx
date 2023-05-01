
import GetStarted from "./GetStarted";
import styles from "../style";
import { discount, robot } from "../assets";
import Meter from "./aria/progress";

const Hero = () => {
  return (
    <section id="home" className={`flex flex-wrap overflow-hidden lg:flex-row flex-col ${styles.paddingY} ${styles.md_fl} ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`fl_rw items-center py-[6px] px-4 ${styles.grd_gr_bl} rounded-[10px] mb-2`}>
          <p className={`${styles.paragraph} ml-2 flex`}>
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />

            <span className={`${styles.ft_pn_md_wt}`}>20%</span>
            Diccount for {" "}
            <span className={`${styles.ft_pn_md_wt}`}>1 Month</span>
            Account
          </p>

          <div className={`${styles.fl_rw} ${styles.js_itc} w-full`}>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className={`${styles.tx_grd_gr_gr}`}>Generation</span>{" "}
            </h1>
            <div className="sm:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className={`${styles.ft_pn_md_wt} text-white sm:text-[62px] text-[33px] ss:leading-[100.8px]`}>
            payment Method.
          </h1>



        </div>
        <p className={`text-white ${styles.paragraph} max-w-[500px] mt-5`}>
          Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.</p>

        <div className={`${styles.grd_mnst} rounded-[10px] mt-5 p-2 `}>
          <div className="bg-white rounded-[11px] p-2 bg-black flex items-center">

            <h1 className="text-white font-poppins font-semibold ss:text-[44px] text-[22px] ss:leading-[100.8px] leading-[33px]">BE AMAZED!!</h1>
            <div className="p-2 flex">

              <Meter
                label="CUSTOMER"
                value={95} />
            </div>
          </div>

        </div>

      </div>

      <div className="md:block relative mt-8 md:mt-0 w-full flex-1">
        {/* z use kora lagle relative o use korte hbe!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <img className="ss:w-[50%] sm:w-[100%] w-[70%] flex-auto relative z-[5] align-center" src={robot} alt="robOAT" />
        <div className={`absolute top-0 right-0 z-[2] h-[77%] w-[88%] ${styles.grd_mnst} blur-[260px]`}></div>
        <div className={`absolute top-50 right-30 z-[4] h-[47%] w-[48%] ${styles.grd_gr_bl} blur-[190px]`}></div>
      </div>

    </section>
  );
};

export default Hero;
