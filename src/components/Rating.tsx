import { Tag, TagLabel } from "@chakra-ui/react";
import { IoStar,IoStarHalf } from "react-icons/io5";

interface Props {
    rating: number;
}
export default function Rating({ rating }: Props) {
    var greenColor='green';
    var redColor = 'red';
    var color = rating>4?greenColor:redColor;
    var Icon = rating>4.5?IoStar:IoStarHalf;
    return (
        <Tag size='lg' colorScheme={color} borderRadius='full'>
            <Icon />
            <TagLabel>{rating}</TagLabel>
        </Tag>
    )
}
