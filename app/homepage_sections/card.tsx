import CardComponent from "@/components/CardComponent";
const cards = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex justify-center items-center pb-8">
          <h2 className="h2-title">Our Mission in Action</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <CardComponent
            heading="We Help"
            text="We extend a helping hand to communities in need, providing essential support and relief to improve lives."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-blue-500 w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9.75a3 3 0 10-6 0v3.75H7.5a3 3 0 100 6h1.803a2.25 2.25 0 004.395 0h1.803a3 3 0 100-6h-2.25V9.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5.25V3.375m0 1.875a2.25 2.25 0 11-4.5 0h4.5zm6 0a2.25 2.25 0 11-4.5 0h4.5zM12 3.375V1.5m6 3.75h.015m-12-.001H6m12 0h.015m-12-.001H6"
                />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-green-500 w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c1.5 0 3.172.346 4.5 1.5m-9 0c1.328-1.154 3-.75 4.5-1.5m0 0v3m0 0a6.75 6.75 0 016.75 6.75C18.75 14.743 15 18 12 18s-6.75-3.257-6.75-5.25A6.75 6.75 0 0112 5.25zm0 7.5v.008-.008zm0 0v.008-.008zm0 0a.749.749 0 11-1.5 0 .749.749 0 011.5 0z"
                />
              </svg>
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
