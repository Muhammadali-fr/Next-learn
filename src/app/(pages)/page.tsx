import Image from 'next/image';
import Skyline from "../../assets/cars/skyline.png"

export default function Home() {
    return (
        <div>
            <Image
                src="https://www.wsupercars.com/wallpapers-regular/Rimac/2024-Rimac-Nevera-15th-Anniversary-001-1080.jpg"
                alt="Cat"
                width={500}
                height={300}
            />

            <Image
                src={Skyline}
                alt="Cat"
                width={500}
                height={300}
            />
        </div>
    );
}
