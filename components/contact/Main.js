import React from 'react'

const Main = () => {

    return (
        <main className="min-h-[60vh] fade-in">
            <div className="h-full w-full font-main text-dark px-4 md:px-16 py-8">
                <h1 className="text-4xl font-heading text-center">Get in Touch</h1>
                <form className='mt-8 text-lg max-w-5xl mx-auto' name="contact" method="POST" data-netlify="true">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-bold">Name / Project</label>
                        <input type="text" name="name" className="text-lg mt-2 border border-dark rounded-lg p-2" />
                    </div>
                    <div className="flex flex-col mt-8">
                        <label htmlFor="email" className="font-bold">Email</label>
                        <input type="email" name="email" className="text-lg mt-2 border border-dark rounded-lg p-2" />
                    </div>
                    <div className="flex flex-col mt-8">
                        <label htmlFor="subject" className="font-bold">Subject</label>
                        <input type="text" name="subject" className="text-lg mt-2 border border-dark rounded-lg p-2" />
                    </div>
                    <div className="flex flex-col mt-8">
                        <label htmlFor="message" className="font-bold">Message</label>
                        <textarea name="message" rows="8" className="text-lg mt-2 border border-dark rounded-lg p-2" ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="mt-12 mx-auto bg-purple text-white rounded-lg px-4 py-2 font-bold">Submit</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Main