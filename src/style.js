const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  ft_pn_md_wt: "font-poppins font-medium text-[18px] text-white ml-2",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  sm_fl: "flex sm:flex-row flex-col",
  md_fl: "flex sm:flex-row flex-col",
  fl_rw: "flex flex-row",
  fl_cl: "flex flex-col",
  js_itc: "justify-start items-center",
  grd_gr_bl: "bg-gradient-to-r from-gray-700 via-gray-800 to-black",
  grd_gr_gr: "bg-gradient-to-l from-gray-200 via-gray-400 to-gray-600",
  grd_mnst: "bg-gradient-to-r from-purple-400 to-yellow-400",
  grd_blsd: "bg-gradient-to-r from-slate-500 to-yellow-100",
  grd_ros: "bg-gradient-to-r from-rose-300 to-rose-500",
  tx_grd_rd_yl: "text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200",
  tx_grd_sun: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100",
  tx_grd_gr_gr: "text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-500",

};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  navabr: ``
};

export default styles;
