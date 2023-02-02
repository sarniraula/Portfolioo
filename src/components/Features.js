import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';


const Features = () => {
  return (
    <>
        <div class="container mx-auto py-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {/* <!--Card 1--> */}
            <div class="rounded overflow-hidden shadow-lg">
                <div class="px-6 py-20 font-serif bg-gradient-to-r pt-10 pl-12 from-slate-200 to-slate-50 shadow-primary
                 hover:from-primaryBlue hover:to-primaryRed hover:text-white">
                    <div className='pb-10'>
                    <AiOutlineUnorderedList size="50px" color="#FF014F"/>
                    </div>
                    <div class="font-bold text-xl mb-2">Business Strategy</div>
                    <div class="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </div>
                </div>
            </div>
            {/* <!--Card 2--> */}
            <div class="rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">River</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
            </div>
            </div>

            {/* <!--Card 3--> */}
            <div class="rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Forest</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
            </div>
            </div>
        </div>
    </>
  )
}

export default Features

{/* <div className='max-w-sm rounded-2xl overflow-hidden 
    bg-gradient-to-r pt-10 pl-12 from-slate-200 to-slate-50 shadow-primary
    hover:from-primaryBlue hover:to-primaryRed hover:text-white'>
        {/* Card Icon */}
    //     <div className='hover:text-white '>
    //         <p><AiOutlineUnorderedList style={{
    //             }}
    //             size="50px"
    //             color="#FF014F"
    //         /></p>
    //     </div>
    //     {/* Title */}
    //     <div className='font-serif text-xl  py-5'>
    //         Business Strategy
    //     </div>
    //     {/* Description */}
    //     <div className='font-serif text-base'>
    //         I throw myself down among the tall grass by the stream as Ilie close to the earth.
    //     </div>
    //     {/* Arrow */}
    //     <div><AiOutlineArrowRight /></div>
    // </div> */}