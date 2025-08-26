// import { useState } from "react";
// import { Image, Pressable, Text, View } from "react-native";

// export default function Example() {
 
// const [count,setCount] = useState(0);

// const handleIncrement = () => {
//   setCount(count+1);
// }

// const handleDecrement = () => {
//   setCount(count-1);
// }

// const images = [
//   "https://media.istockphoto.com/id/498309616/photo/great-ocean-road-at-night-milky-way-view.jpg?s=612x612&w=0&k=20&c=fJGWCAB4JoXaQD6gjJRHjPmPIRvx5e6K-1Oq2EeOZwk=",
//   "https://www.canopyandstars.co.uk/upload/2024/1/15/medium_Best_dark_sky_spots_for_stargazing_mobile_383e1fa440.jpg",
//   "https://starwalk.space/gallery/images/the-brightest-stars/1920x1080.jpg",
//   "https://ipt.images.tshiftcdn.com/204139/x/0/night-sky-and-star-photography-tips-for-beginners-5.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
// ]

// const [currimages,setCurrImages]=useState(images[0]);

// const handlePress = () =>{
//     const randomIndex=Math.floor(Math.random()*images.length);
//     setCurrImages(images[randomIndex]);
// }
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "white",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text style={{ fontSize: 20, color: "purple", marginBottom: 30 }}>
//         Hello from Example Tab!
//       </Text>
//       <Image
//         source={{
//           uri:currimages
//         }}
//         style={{ width: 700, height: 500, marginBottom: 30 }}
//       />
 
//        <Text style={{fontSize:24}}> 
//         <Pressable style={{backgroundColor:"lightgreen",margin:20,borderRadius:10}} onPress={handleIncrement}>
//           <Text> + </Text>
//         </Pressable>
//         {count} 
//         <Pressable style={{backgroundColor:"#F54927",margin:20,borderRadius:10}} onPress={handleDecrement}>
//           <Text> - </Text>
//         </Pressable>
//          </Text>

//       <View
//         style={{
//           alignItems: "center",
//           backgroundColor: "#F07FEB",
//           borderRadius: 5,
//           marginHorizontal: 10,
//           padding: 15,
//           marginTop: 30,
//         }}
//       >
        
//           <Pressable onPress={handlePress}>
//             <Text>
//             Change Image
//             </Text>
//           </Pressable>
        
//       </View>
//     </View>
//   );
// }
