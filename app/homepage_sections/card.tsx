import CardComponent from "@/components/CardComponent";
const cards = () => {
  return (
    <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
      <div className="">
        <div className="mx-auto flex justify-center items-center pb-8">
          <h2 className="h2-title">Our Mission in Action</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <CardComponent
            heading="We Help"
            text="We extend a helping hand to communities in need, providing essential support and relief to improve lives."
            icon={
              <svg
                fill="currentColor"
                className="text-blue-500 w-12 h-12"
                version="1.1"
                id="Icons"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M29.9,16.5C29.7,16.2,29.4,16,29,16c-2.2,0-4.3,1-5.6,2.8L22.5,20c-1.1,1.3-2.8,2-4.5,2h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h1.9 c1.6,0,3.1-1.3,3.1-2.9c0,0,0-0.1,0-0.1c0-0.5-0.5-1-1-1l-6.1,0c-3.6,0-6.5,1.6-8.1,4.2l-2.7,4.2c-0.2,0.3-0.2,0.7,0,1l3,5 c0.1,0.2,0.4,0.4,0.6,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2c3.8-2.5,8.2-3.8,12.7-3.8c3.3,0,6.3-1.8,7.9-4.7l2.7-4.8 C30,17.2,30,16.8,29.9,16.5z"></path>{" "}
                  <path d="M11,11v3.2c0.6-0.1,1.3-0.2,1.9-0.2H19c1.3,0,2.4,0.8,2.8,2H22c0.6,0,1-0.4,1-1v-4c0.6,0,1-0.4,1-1V6c0-0.6-0.4-1-1-1h-1.2 C21.9,4.7,22,4.4,22,4c0-1.7-1.3-3-3-3c-0.8,0-1.5,0.3-2,0.8C16.5,1.3,15.8,1,15,1c-1.7,0-3,1.3-3,3c0,0.4,0.1,0.7,0.2,1H11 c-0.6,0-1,0.4-1,1v4C10,10.6,10.4,11,11,11z M18,4c0-0.6,0.4-1,1-1s1,0.4,1,1s-0.4,1-1,1h-1V4z M15,3c0.6,0,1,0.4,1,1v1h-1 c-0.6,0-1-0.4-1-1S14.4,3,15,3z"></path>{" "}
                </g>
              </svg>
            }
          />
          <CardComponent
            heading="We Educate"
            text="We empower individuals through education, offering resources and opportunities to unlock their full potential."
            icon={
              <svg
                fill="#000000"
                viewBox="0 0 14 14"
                role="img"
                focusable="false"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z"></path>
                </g>
              </svg>
            }
          />
          <CardComponent
            heading="We Nourish"
            text="We fight hunger by ensuring access to nutritious meals, promoting healthier and stronger communities."
            icon={
              <svg fill="currentColor" className="w-12 h-12 text-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
            }
          />
          <CardComponent
            heading="We Build"
            text="We construct better futures by building sustainable homes, schools, and community facilities for lasting impact."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-gray-500 w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 21v-6m0 6H4.5a2.25 2.25 0 01-2.25-2.25V9.75A2.25 2.25 0 014.5 7.5h15a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25H9zm0 0v-6m12-6v-2.25A2.25 2.25 0 0018.75 4.5h-5.25m-1.5 0h-2.25A2.25 2.25 0 007.5 6.75V9m4.5 0h1.5v1.5h-1.5zm0-3h1.5v1.5h-1.5zm3 3h1.5v1.5h-1.5zm0-3h1.5v1.5h-1.5z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default cards;
