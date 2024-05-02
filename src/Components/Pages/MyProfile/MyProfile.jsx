import { useState } from 'react';
import './MyProfile.css';
import Nav from "../../Commons/MobileNav/nav";
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import SideBAr from '../../Commons/SideBar/SideBar';
import { RiCloseFill } from 'react-icons/ri';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';

const imageData = [
    { id: 1, src: "Assets/Images/MyProfile/10 -Thief in the Night.png", alt: "Thief in the Night" },
    { id: 2, src: "Assets/Images/MyProfile/11_Hamhock (3).png", alt: "Hamhock" },
    { id: 3, src: "Assets/Images/MyProfile/13 - Bristle Pig (1).png", alt: "Bristle Pig" },
    { id: 4, src: "Assets/Images/MyProfile/14 - Kiki and her Kestrels.png", alt: "Kiki and her Kestrels" },
    { id: 5, src: "Assets/Images/MyProfile/15_The_Anatomist (1).png", alt: "The Anatomist" },
    { id: 6, src: "Assets/Images/MyProfile/17 - Sheira the Revered.png", alt: "Sheira the Revered" },
    { id: 7, src: "Assets/Images/MyProfile/18 - Ripley.png", alt: "Ripley" },
    { id: 8, src: "Assets/Images/MyProfile/2 - One-Handed Thale (5).png", alt: "One-Handed Thale" },
    { id: 9, src: "Assets/Images/MyProfile/20 - Aisling (2).png", alt: "Aisling" },
    { id: 10, src: "Assets/Images/MyProfile/21-TheRedKing.png", alt: "The Red King" },
    { id: 11, src: "Assets/Images/MyProfile/22 - Necramona.png", alt: "Necramona" },
    { id: 12, src: "Assets/Images/MyProfile/24 - Dunwalker.png", alt: "Dunwalker" },
    { id: 13, src: "Assets/Images/MyProfile/28 - Haku Spearman.png", alt: "Haku Spearman" },
    { id: 14, src: "Assets/Images/MyProfile/29 - Pain Eater.png", alt: "Pain Eater" },
    { id: 15, src: "Assets/Images/MyProfile/30 - Aeon Sisters.png", alt: "Aeon Sisters" },
    { id: 16, src: "Assets/Images/MyProfile/31- San stalker.png", alt: "San Stalker" },
    { id: 17, src: "Assets/Images/MyProfile/5 Thorn Covered Trent.png", alt: "Thorn Covered Trent" },
    { id: 18, src: "Assets/Images/MyProfile/50.png", alt: "Unknown Image" },
];

const ImagePopup = ({ imageSrc, imageDetails, open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent className="p-4 lg:p-3 2xl:p-4  bg-[#2C2E2E] w-full">
                <IconButton
                    className="popup-close float-right p-2"
                    onClick={onClose}
                    style={{ backgroundColor: '#414545' }}
                >
                    <RiCloseFill className='text-white' />
                </IconButton>
                <img className="popup-image" src={imageSrc} alt="Popup" />
                <p className='popup-profile-text pt-3'>
                    {imageDetails}
                    a large illustrative background showing simple and minimalistic ancient statues, symmetrical, light grey and blue color palette, high resolution, high contrast, cinematic, mysterious atmosphere, clean, alien atmosphere
                    --ar 2:1 --s 250 --v 6.0
                </p>
            </DialogContent>
        </Dialog>
    );
};

const MyProfile = () => {
    const [activeTab, setActiveTab] = useState(0); // State to track which tab is active
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageDetails, setImageDetails] = useState('');

    const openPopup = (imageSrc, details) => {
        setSelectedImage(imageSrc);
        setImageDetails(details);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
        setSelectedImage(null);
        setImageDetails('');
    };

    const boxes = [
        { iconSrc: "Assets/Images/All Icons/Group 64.svg", value: "100", text: "$Dream Earned" },
        { iconSrc: "Assets/Images/All Icons/Group 69.svg", value: "0", text: "Models Contributed To" },
        { iconSrc: "Assets/Images/All Icons/Group 64.svg", value: "0", text: "$Dream Slashed" },
        { iconSrc: "Assets/Images/All Icons/Group 70.svg", value: "3", text: "Nodes Owned" },
        { iconSrc: "Assets/Images/All Icons/Group 72.svg", value: "0", text: "$Dream Slashed" },
        { iconSrc: "Assets/Images/All Icons/Group 82.svg", value: "18h 37m", text: "More Ratings Unlock in" },
    ];


    // Handle tab change when a button is clicked
    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className="flex justify-between">
                <div className=" 2xl:w-[22%] md:w-[19%] sm-w-0 sm-hidden">
                    <SideBAr />
                </div>
                <div className=" md:w-full lg:w-[81%] 2xl:w-[78%] bg-[#3B3F3F] h-full sm-w-full">
                    <div className='mb-28'>
                        <header className="header-mob lg:py-7 lg:px-16 2xl:px-[100px] lg:bg-transparent bg-[#2C2E2E] h-14 py-4 px-6">
                            <h5 className='lg:hidden'>@TonyStark</h5>
                            <div className='sm-hidden md:block'>
                                <div className='flex items-center gap-6 2xl:gap-8'>
                                    <h5>My Profile</h5>
                                    <div className='bg-[#2C2E2E] py-2 px-4 rounded-3xl username-label'>
                                        <h3>@Flook</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="float-right mt-[-23px]  lg:mt-[-34px] flex items-center gap-4">
                                <img className="lg:h-7 2xl:h-8" src="Assets/Images/All Icons/Group 85.svg" alt="" />
                                <Link className='sm-hidden' to="/MyProfile">
                                    <img className='lg:h-8 2xl:h-10' src="Assets/Images/All Icons/Ellipse 2.svg" alt="" />
                                </Link>
                                <div className='lg:hidden'>
                                    <Link to="/">
                                        <img src="Assets/Images/All Icons/Group 177.svg" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </header>
                        <div className="container mx-auto p-6 md:px-16 2xl:px-[100px] lg:mt-9 ">
                            <div className="MyProfile-content">
                                <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-5 2xl:gap-6 desh-box">
                                    {boxes.map((box, index) => (
                                        <div key={index} className="p-2 lg:p-3 2xl:p-4 bg-[#2C2E2E] rounded-lg lg:rounded-xl 2xl:rounded-2xl w-full">
                                            <div className="flex items-center gap-2 lg:gap-3 2xl:gap-4 mb-1">
                                                <div className="rounded-md lg:rounded-lg 2xl:rounded-xl p-2 lg:p-3 2xl:p-4 bg-[#222222]">
                                                    <img className='h-4 lg:h-8 2xl:h-10' src={box.iconSrc} alt="" />
                                                </div>
                                                <div>
                                                    <p className="xs-hidden md:block">{box.text}</p>
                                                    <h4>{box.value}</h4>
                                                </div>
                                            </div>
                                            <p className="sm:block md:hidden">{box.text}</p>
                                        </div>
                                    ))}
                                </div>
                                <h4 className="text-18-sm mt-10 mb-6 md:hidden ">My Generations</h4>
                                <div className='tab-btn flex gap-2 mb-6 items-center md:mt-14 2xl:mt[72px] lg:mb-14'>
                                    <h4 className='tab-btn-font sm-hidden text-white'>My Generations:</h4>
                                    {['Today', 'This Week', 'This Month'].map((name, index) => (
                                        <Button
                                            key={index}
                                            className={`py-[6px] lg:py-2 px-4 lg:px[18px] rounded-[20px] ${activeTab === index ? 'bg-white text-black py-[2px]' : 'bg-[#2C2E2E] text-white lg:bg-[rgba(255, 255, 255, 0.3)] tab-btn-font'
                                                }`}
                                            onClick={() => handleTabChange(index)}
                                        >
                                            {name}
                                        </Button>
                                    ))}
                                </div>

                                <div>
                                    <div className="tab-content">
                                        {activeTab === 0 && (
                                            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-img gap-0'>
                                                {imageData.map((image) => (
                                                    <img
                                                        key={image.id}
                                                        src={image.src}
                                                        alt={image.alt}
                                                        onClick={() => openPopup(image.src)}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        {activeTab === 1 && (
                                            <div className='grid grid-cols-3 md:grid-cols-4  lg:grid-cols-6 grid-img gap-0'>
                                                {imageData.map((image) => (
                                                    <img
                                                        key={image.id}
                                                        src={image.src}
                                                        alt={image.alt}
                                                        onClick={() => openPopup(image.src)}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        {activeTab === 2 && (
                                            <div className='grid grid-cols-3 md:grid-cols-4  lg:grid-cols-6 grid-img gap-0'>
                                                {imageData.map((image) => (
                                                    <img
                                                        key={image.id}
                                                        src={image.src}
                                                        alt={image.alt}
                                                        onClick={() => openPopup(image.src)}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {popupVisible && (
                                        <ImagePopup
                                            imageSrc={selectedImage}
                                            imageDetails={imageDetails}
                                            open={popupVisible}
                                            onClose={closePopup}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </>
    );
};

export default MyProfile;
