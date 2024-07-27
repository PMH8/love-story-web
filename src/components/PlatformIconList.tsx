import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendoswitch } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hook/useGames';
import { HStack, Icon, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { GrAnalytics } from 'react-icons/gr';

interface Props {
  platforms: Platform[];
}

export default function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendoswitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    androi: FaAndroid
  }
  return <>
    <HStack marginY={1}>
      {platforms.map(platform => {
        if (iconMap[platform.slug] == undefined) {
          return
        } else {
          return (
              <Icon key={platform.id} title={platform.name} as={iconMap[platform.slug]} color='gray.500'></Icon>
          )
        }
      })}
    </HStack>
  </>


}
