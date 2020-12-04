import React from 'react';

export const ModalSmall = (): JSX.Element => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <button
                className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
                type="button"
                style={{ transition: 'all .15s ease' }}
                onClick={() => setShowModal(true)}>
                Open small modal
            </button>
            {showModal ? (
                <>
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                        aria-hidden="true">
                        <div className="relative w-auto max-w-sm mx-auto my-6">
                            {/*content*/}
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-gray-300 border-solid rounded-t">
                                    <h3 className="text-3xl font-semibold">Modal Title</h3>
                                    <button
                                        className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative flex-auto p-6">
                                    <p className="my-4 text-lg leading-relaxed text-gray-600">
                                        I always felt like I could do anything. That&apos;s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They&apos;re slowed down by their perception
                                        of themselves. If you&apos;re taught you can&apos;t do
                                        anything, you won&apos;t do anything. I was taught I could
                                        do everything.
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-gray-300 border-solid rounded-b">
                                    <button
                                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
                                        type="button"
                                        style={{ transition: 'all .15s ease' }}
                                        onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                    <button
                                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
                                        type="button"
                                        style={{ transition: 'all .15s ease' }}
                                        onClick={() => setShowModal(false)}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25" />
                </>
            ) : null}
        </>
    );
};

export default ModalSmall;