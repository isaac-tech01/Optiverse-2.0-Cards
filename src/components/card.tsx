import { View, Text, Image, Dimensions, Platform } from "react-native";
import React, { useRef, useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";

const ios = Platform.OS == "ios";

export const SLIDER_WIDTH = ios
  ? Dimensions.get("window").width + 20
  : Dimensions.get("window").width + 35;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

interface Item {
  id: number;
  name: string;
  localPath: number; // Assuming localPath is a number, update this type accordingly
}

const data: Item[] = [
  {
    id: 1,
    name: "React JS",
    localPath: require("../../assets/images/card.png"),
  },
  {
    id: 2,
    name: "JavaScript",
    localPath: require("../../assets/images/card.png"),
  },
  {
    id: 3,
    name: "Node JS",
    localPath: require("../../assets/images/card.png"),
  },
];

interface RenderItemProps {
  item: Item;
  showDetails: boolean;
  showCard: boolean
}

// const renderItem = ({ item }: RenderItemProps) => {
//   return (
//     <View>
//       <Image source={item.localPath} />
//     </View>
//   );
// };

const CardComponent = ({ showDetails, showCard }: RenderItemProps) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef<Carousel<Item> | null>(null);

  const renderItem = ({ item }: RenderItemProps) => {
    return (
      <View>
        <Image source={showDetails ? require("../../assets/images/cardD.png") : showCard ? require("../../assets/images/cardL.png") : item.localPath} />
      </View>
    );
  };

  return (
    <View style={{ paddingTop: 10, alignItems: "center" }}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 2,
          backgroundColor: "#039",
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: "black",
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default CardComponent;
