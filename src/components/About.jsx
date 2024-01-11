import React from 'react'

const About = () => {
    return (
        
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white " >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                <p className="text-xl mt-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur modi totam eos quod, tempore perferendis soluta maxime iste omnis impedit ipsum, corrupti magni eum eveniet nesciunt est, necessitatibus quos.
                </p>
                <br />
                <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque vero ratione, omnis, architecto voluptatem voluptas fuga laudantium beatae eius magni mollitia consequatur voluptate libero deleniti blanditiis rem praesentium, molestias maiores et! Quos in id molestias mollitia, voluptas impedit aliquid? Doloremque voluptas ex dolorum vero recusandae, eaque ipsum dolor aperiam.
                </p>
            </div>
        </div>
    )
}

export default About