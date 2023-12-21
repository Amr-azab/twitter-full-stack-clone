// import React, { useRef, useState } from "react";
// import styled from "styled-components";
// import TextareaAutosize from "@mui/material/TextareaAutosize";
// import { FiImage, FiBarChart2, FiSmile, FiCalendar } from "react-icons/fi";
// import { MdGif } from "react-icons/md";
// import { Div, Left, Right, Tweet, IconButton } from "./div";
// import { TweetButton } from "./button";

// const AddTweet = (props) => {
//   const TextArea = styled(TextareaAutosize)`
//     color: ${(theme) => theme.theme.textColor};
//     &::placeholder {
//       color: ${(theme) => theme.theme.grey};
//     }
//   `;
//   const MdGifNew = styled(MdGif)`
//     border: 1px solid ${(theme) => theme.theme.color};
//     border-radius: 3px;
//   `;

//   const FiBarChart = styled(FiBarChart2)`
//     border-bottom: 1px solid ${(props) => props.theme.color};
//     transform: rotate(90deg);
//   `;
//   const textareaRef = useRef(null);

//   const sendTweet = () => {
//     const text = textareaRef.current.value;
//     // if (text || tweetImage) {
//     //   const fd = new FormData();
//     //   if (tweetImage) fd.append('tweetPhoto', tweetImage, tweetImage.name);
//     //   fd.append('text', text);

//     //   props.sendTweet(fd);
//     //   setPreviewImage(null);
//     //   setTweetImage(null);
//     // }
//   };

//   return (
//     <>
//       <Div>
//         <Tweet>
//           <Left>
//             <img src={props.userimg} alt="user" />
//           </Left>
//           <Right>
//             <TextArea
//               ref={textareaRef}
//               placeholder="What's Happening"
//               onKeyDown={(e) => {
//                 if (e.keyCode === 13 && !e.shiftKey) {
//                   e.preventDefault();
//                   return sendTweet();
//                 }
//               }}
//             />
//             <Right.Bottom>
//               <Right.Bottom.Icons>
//                 <input type="file" />
//                 <label>
//                   <IconButton>
//                     <FiImage />
//                   </IconButton>
//                 </label>
//                 <IconButton>
//                   <MdGifNew />
//                 </IconButton>
//                 <IconButton>
//                   <FiBarChart />
//                 </IconButton>
//                 <IconButton>
//                   <FiSmile />
//                 </IconButton>
//                 <IconButton>
//                   <FiCalendar />
//                 </IconButton>
//               </Right.Bottom.Icons>
//               <Right.Bottom>
//                 <TweetButton onClick={sendTweet} type="button">
//                   Tweet
//                 </TweetButton>
//               </Right.Bottom>
//             </Right.Bottom>
//           </Right>
//         </Tweet>
//       </Div>
//     </>
//   );
// };

// export default AddTweet;
