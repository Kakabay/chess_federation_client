// // Modules
// import React, { useState, useEffect } from "react";
// import Skeleton from "react-loading-skeleton";
// import { ErrorBoundary } from "react-error-boundary";

// // Helpers
// import { getAbout, getVideos } from "../helpers/apiRequests";
// import { highlightColor } from "../helpers/otherVariables";
// import { hosting } from "../links";
// // Hooks
// import useMediaQuery from "../hooks/useMediaQuery";

// // Components
// import Statistic from "../components/about_us/Statistic";
// import VideoPlayer from "../components/global/VideoPlayer";
// import SectionTitle from "../components/global/SectionTitle";
// import TeamSlider from "../components/about_us/TeamSlider";
// import EmptyState from "../components/global/EmptyState";

// // Types
// import { Video } from "../types/video";
// import { About } from "../types/about";

// const AboutUs = () => {
//   const [about, setAbout]: [About, React.Dispatch<About>] = useState({
//     id: -1,
//     header: "",
//     txt: "",
//     img: "",
//     tournment_title: "",
//     tournment_number: -1,
//     organisation_title: "",
//     organisation_number: -1,
//     graduate_title: "",
//     graduate_number: -1,
//     places_title: "",
//     places_number: -1,
//     translation: [{ model_id: "", locale: "", attribute_date: "" }],
//   });
//   const [video, setVideo]: [Video[], React.Dispatch<Video[]>] = useState([
//     {
//       id: -1,
//       video: "",
//       poster: "",
//     },
//   ]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     getAbout(setAbout);
//     getVideos(
//       setVideo,
//       () => null,
//       () => null
//     );
//   }, []);

//   const breakpoint = useMediaQuery("(max-width: 500px)");

//   return (
//     <ErrorBoundary fallback={<EmptyState page={true} />}>
//       <main className="about-us">
//         <div className="container">
//           <div className="about-us-inner">
//             <div className="about-us-top">
//               <div className="aut-left">
//                 {about.id !== -1 ? (
//                   <h2>{about.header}</h2>
//                 ) : (
//                   <Skeleton
//                     highlightColor={highlightColor}
//                     height={"5.4rem"}
//                     width={"45%"}
//                   />
//                 )}

//                 {about.id !== -1 ? (
//                   <p>{about.txt}</p>
//                 ) : (
//                   <Skeleton
//                     highlightColor={highlightColor}
//                     height={"1.4rem"}
//                     width={"100%"}
//                     count={12}
//                   />
//                 )}
//               </div>
//               <div className="aut-right">
//                 {about.img ? (
//                   <div>
//                     <img src={hosting + about.img} alt="" />
//                   </div>
//                 ) : (
//                   <Skeleton height={"49.8rem"} />
//                 )}
//               </div>
//             </div>
//             <div className="about-us-middle">
//               {about.id !== -1 ? (
//                 <div className="aub-wrapper">
//                   <Statistic
//                     count={about.tournment_number}
//                     title={about.tournment_title}
//                   />
//                   <Statistic
//                     count={about.organisation_number}
//                     title={about.organisation_title}
//                   />
//                   <Statistic
//                     count={about.graduate_number}
//                     title={about.graduate_title}
//                   />
//                   <Statistic
//                     count={about.places_number}
//                     title={about.places_title}
//                   />
//                 </div>
//               ) : (
//                 <div className="group-skeleton">
//                   <div className="group">
//                     <Skeleton
//                       className="fchild"
//                       highlightColor={highlightColor}
//                       width={"13.5rem"}
//                       height={"13.5rem"}
//                       style={{ borderRadius: "0.5rem" }}
//                     />
//                     <Skeleton
//                       highlightColor={highlightColor}
//                       height={"2.14rem"}
//                       width={breakpoint ? "13rem" : "18rem"}
//                       count={2}
//                     />
//                   </div>
//                   <div className="group">
//                     <Skeleton
//                       className="fchild"
//                       highlightColor={highlightColor}
//                       width={"13.5rem"}
//                       height={"13.5rem"}
//                       style={{ borderRadius: "0.5rem" }}
//                     />
//                     <Skeleton
//                       highlightColor={highlightColor}
//                       height={"2.14rem"}
//                       width={breakpoint ? "13rem" : "18rem"}
//                       count={2}
//                     />
//                   </div>
//                   <div className="group">
//                     <Skeleton
//                       className="fchild"
//                       highlightColor={highlightColor}
//                       width={"13.5rem"}
//                       height={"13.5rem"}
//                       style={{ borderRadius: "0.5rem" }}
//                     />
//                     <Skeleton
//                       highlightColor={highlightColor}
//                       height={"2.14rem"}
//                       width={breakpoint ? "13rem" : "18rem"}
//                       count={2}
//                     />
//                   </div>
//                   <div className="group">
//                     <Skeleton
//                       className="fchild"
//                       highlightColor={highlightColor}
//                       width={"13.5rem"}
//                       height={"13.5rem"}
//                       style={{ borderRadius: "0.5rem" }}
//                     />
//                     <Skeleton
//                       highlightColor={highlightColor}
//                       height={"2.14rem"}
//                       width={breakpoint ? "13rem" : "18rem"}
//                       count={2}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//             <div className="about-us-slider">
//               <SectionTitle title="Сборная Туркменистана" icon="bishop" />
//               <ErrorBoundary fallback={<EmptyState />}>
//                 <TeamSlider />
//               </ErrorBoundary>
//             </div>
//             <div className="about-us-video">
//               <SectionTitle title="Вводный видео ролик" icon="bishop" />
//               {video[0].id !== -1 ? (
//                 <ErrorBoundary fallback={<EmptyState />}>
//                   <VideoPlayer videoUrl={video[0].video} />
//                 </ErrorBoundary>
//               ) : (
//                 <Skeleton highlightColor={highlightColor} height={"40rem"} />
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </ErrorBoundary>
//   );
// };

// export default AboutUs;
