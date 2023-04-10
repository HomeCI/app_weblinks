import React from 'react';

import Grid from "../components/Grid"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <body className=" text-indigo-400 m-0 bg-cover h-screen w-screen bg-fixed" style={{ backgroundImage: "url('/header.png')" }}>
      <div class="h-full">
        {/** <!--Nav --> */}
        <Navbar companyName="Alpeza" socialNetworks={[
          { name: "twitter", url: "https://twitter.com/intent/tweet?url=#" },
          { name: "facebook", url: "https://www.facebook.com/sharer/sharer.php?u=#" },
        ]} />

        {/** <!--Main --> */}
        < div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/** <!--Left col --> */}
          <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              Main
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                Hero Message
              </span>
              to sell yourself!
            </h1>
            <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
              Sub-hero message, not too long and not too short. Make it just right!
            </p>

          </div>

          {/** <!--Right cool --> */}
          <div class="w-full xl:w-3/5 p-12 overflow-hidden">

          </div>

          <Grid></Grid>
          <Footer />
        </div>
      </div>
    </body >
  );
};

export default HomePage;