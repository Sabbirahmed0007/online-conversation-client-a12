import React from 'react';
import UseAxiosSecure from '../../../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const ShowAnnouncement = () => {

    const axiosSecure = UseAxiosSecure();

    const {data:announcements=[], refetch}= useQuery({
        queryKey: ['announcements'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/announcements');
            return res.data;
        },
        staleTime: 1000,

    });
    console.log(announcements);



    return (
        <div className='my-10 bg-gray-300 rounded-md'>
            {
                announcements.length >0 ?
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                >
                    
                    {
                        announcements.map(announcement =>
                                <SwiperSlide key={announcement._id} className='p-5 w-11/12 mx-auto'>
                                    <div className='flex items-center gap-3 mx-3'>
                                        <img src={announcement.authorImage} alt="" className='rounded-full w-12'/>
                                        <h2 className='text-lg font-bold'>{announcement.authorName}</h2>
                                    </div>
                                    <div className='mt-2'>
                                        <h2 className='text-xl font-extrabold font-railway h-14 text-fuchsia-500'>{announcement.title}</h2>
                                        <p className='text-justify mx-3 my-3 overflow-auto'>{announcement.description}</p>

                                    </div>
                                </SwiperSlide>
                            )
                    }
                
            </Swiper>
            : " "

            }
        </div>
    );
};

export default ShowAnnouncement;