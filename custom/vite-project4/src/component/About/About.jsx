import React from "react"
export default function About(){
    return(
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.ctfassets.net/rvt0uslu5yqp/3fIVsB1EITl9zfOqmp1vKf/9a1b32c513ae1213467b76c7d50b608c/55ADEAD5-E690-43C1-AD30-098B8E9B6A97.jpeg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      A beach is a coastal landform made of loose particles like sand, gravel, or shells, shaped by waves, tides, and currents. They form through erosion and deposition of coastal materials. Beaches vary in composition (sandy, pebble, shingle), shape (pocket, barrier), and features (shoreline, berms, dunes). 
                      </p>
                      <p className="mt-4 text-gray-600">
                      They are crucial for coastal protection, supporting ecosystems, recreation, and tourism. However, they face threats like erosion, sea-level rise, pollution, and development. Beach safety involves awareness of rip currents, tides, waves, and marine life. In short, beaches are dynamic and important natural features facing various challenges.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    )
}