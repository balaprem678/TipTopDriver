import React from "react";
import "../App";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Carownership from "./Carownership";
import RSAillustration from "../Images/Roadsideassitance/RSA_illustration_OhWFbrYWk.webp"
import review from "../Images/Fastagpage/review.png"
import RealTimeBreakdown from "../Images/Roadsideassitance/Real-Time-Breakdown-Support_btsTewOvJ.webp"
import AccidentsEmergency from "../Images/Roadsideassitance/Accidents-_-Emergency_nvzU-HmPq.webp"
import ToSuit from "../Images/Roadsideassitance/To-Suit-Your-Needs_wDmBPBiP6.webp"

export default function Roadsideassistance() {
  return (
    <div className="Roadsideassistance">
      <Navigation />
      <div className="Roadsideassistance-head">
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='Hire-content'>
                <h6 className='Hire-content-head2'>ROADSIDE ASSISTANCE</h6>
                <h1 className='Hire-content-head3'>Plan your long trips with certainty of 24x7 assistance!</h1>
                <h5 className='Hire-content-head4'>Plans starting as low as ₹49</h5>
                <div className='driver-app'>
                  <a href=''><button className='app'>Explore RSA Plans</button></a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='Hire-img'>
                <img src={RSAillustration} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Premium-Materials">
        <h2>Peace of Mind</h2>
        <p>DriveU has partnered with India’s top roadside assistance providers to help<br /> you enjoy your long trips peacefully. You can even buy plans for your<br /> weekend trips.</p>
        <div className="container">
          <div className="Premium-Materials-head">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="card">
                  <svg width="152" height="152" viewBox="0 0 152 152" fill="none" class="RoadSideflex_Img"><rect width="151.844" height="151.844" rx="75.922" fill="#EFF8F3"></rect><g clip-path="url(#clip0_3883_5904)"><path d="M76.055 108.11C58.3796 108.11 44 93.7304 44 76.055C44 58.3796 58.3796 44 76.055 44C93.7304 44 108.11 58.3796 108.11 76.055C108.11 93.7304 93.7304 108.11 76.055 108.11ZM76.055 46.658C59.8414 46.658 46.658 59.8414 46.658 76.055C46.658 92.2686 59.8414 105.452 76.055 105.452C92.2686 105.452 105.452 92.2686 105.452 76.055C105.452 59.8414 92.2686 46.658 76.055 46.658Z" fill="black"></path><path d="M90.2734 78.2134H75.829C75.0848 78.2134 74.5 77.6286 74.5 76.8844V57.829C74.5 57.0848 75.0848 56.5 75.829 56.5C76.5732 56.5 77.158 57.0848 77.158 57.829V75.5554H90.2734C91.0177 75.5554 91.6024 76.1401 91.6024 76.8844C91.6024 77.6286 91.0177 78.2134 90.2734 78.2134Z" fill="rgb(109, 65, 197)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M90.2734 79.7134H75.829C74.2563 79.7134 73 78.457 73 76.8844V57.829C73 56.2563 74.2563 55 75.829 55C77.4016 55 78.658 56.2563 78.658 57.829V74.0554H90.2734C91.8461 74.0554 93.1024 75.3117 93.1024 76.8844C93.1024 78.457 91.8461 79.7134 90.2734 79.7134ZM90.2734 75.5554C91.0177 75.5554 91.6024 76.1401 91.6024 76.8844C91.6024 77.6286 91.0177 78.2134 90.2734 78.2134H75.829C75.0848 78.2134 74.5 77.6286 74.5 76.8844V57.829C74.5 57.0848 75.0848 56.5 75.829 56.5C76.5732 56.5 77.158 57.0848 77.158 57.829V75.5554H90.2734Z" fill="rgb(109, 65, 197)"></path><path d="M76.0555 51.4954C75.3113 51.4954 74.7266 50.9107 74.7266 50.1665V45.329C74.7266 44.5848 75.3113 44 76.0555 44C76.7998 44 77.3845 44.5848 77.3845 45.329V50.1665C77.3845 50.9107 76.7998 51.4954 76.0555 51.4954Z" fill="black"></path><path d="M106.78 77.3845H101.942C101.198 77.3845 100.613 76.7998 100.613 76.0555C100.613 75.3113 101.198 74.7266 101.942 74.7266H106.78C107.524 74.7266 108.109 75.3113 108.109 76.0555C108.109 76.7998 107.524 77.3845 106.78 77.3845Z" fill="black"></path><path d="M76.0555 108.109C75.3113 108.109 74.7266 107.524 74.7266 106.78V101.942C74.7266 101.198 75.3113 100.613 76.0555 100.613C76.7998 100.613 77.3845 101.198 77.3845 101.942V106.78C77.3845 107.524 76.7998 108.109 76.0555 108.109Z" fill="black"></path><path d="M50.1665 77.3845H45.329C44.5848 77.3845 44 76.7998 44 76.0555C44 75.3113 44.5848 74.7266 45.329 74.7266H50.1665C50.9107 74.7266 51.4954 75.3113 51.4954 76.0555C51.4954 76.7998 50.9107 77.3845 50.1665 77.3845Z" fill="black"></path></g><defs><clipPath id="clip0_3883_5904"><rect width="64.11" height="64.11" fill="white" transform="translate(44 44)"></rect></clipPath></defs></svg>
                  <h3>24x7 Support<br />
                    Available</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="card">
                  <svg width="152" height="152" viewBox="0 0 152 152" fill="none" class="RoadSideflex_Img"><rect width="151.844" height="151.844" rx="75.922" fill="#EFF8F3"></rect><g clip-path="url(#clip0_3883_5932)"><path d="M76.214 108.11C73.7687 108.11 71.5626 106.861 70.2868 104.788L55.9869 81.4507C53.3821 77.5435 52 72.9186 52 68.1609C52 54.8445 62.8445 44 76.1609 44C89.4772 44 100.322 54.8445 100.322 68.1609C100.322 72.8654 98.9662 77.4371 96.3879 81.3709L87.8027 95.5378C87.4306 96.1758 86.6066 96.3618 85.9687 95.9897C85.3308 95.6176 85.1448 94.7936 85.5169 94.1557L94.1287 79.9622C96.4411 76.4271 97.6372 72.3604 97.6372 68.1874C97.6372 56.3064 88.0154 46.658 76.1609 46.658C64.3064 46.658 54.658 56.3064 54.658 68.1609C54.658 72.4136 55.8806 76.5069 58.2196 80.0154L72.546 103.405C73.3434 104.681 74.699 105.452 76.214 105.452C77.7291 105.452 79.0846 104.681 79.8554 103.379L82.1147 99.6577C82.4868 99.0198 83.3108 98.8337 83.9487 99.2058C84.5866 99.5779 84.7726 100.402 84.4005 101.04L82.1413 104.761C80.892 106.861 78.6859 108.11 76.214 108.11C76.2406 108.11 76.214 108.11 76.214 108.11Z" fill="black"></path><path d="M76.1602 79.1642C82.2375 79.1642 87.1642 74.2375 87.1642 68.1602C87.1642 62.0829 82.2375 57.1562 76.1602 57.1562C70.0829 57.1562 65.1562 62.0829 65.1562 68.1602C65.1562 74.2375 70.0829 79.1642 76.1602 79.1642Z" fill="rgb(109, 65, 197)"></path></g><defs><clipPath id="clip0_3883_5932"><rect width="48.2951" height="64.11" fill="white" transform="translate(52 44)"></rect></clipPath></defs></svg>
                  <h3>PAN India<br />
                    Coverage</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="card">
                  <svg width="152" height="152" viewBox="0 0 152 152" fill="none" class="RoadSideflex_Img"><rect width="151.844" height="151.844" rx="75.922" fill="#EFF8F3"></rect><g clip-path="url(#clip0_3883_5962)"><path d="M102.661 108.11H100.216C99.4716 108.11 98.8869 107.525 98.8869 106.781C98.8869 106.037 99.4716 105.452 100.216 105.452H102.661C104.336 105.452 105.691 104.096 105.691 102.422V56.0669C105.691 54.3924 104.336 53.0369 102.661 53.0369H49.688C48.0135 53.0369 46.658 54.3924 46.658 56.0669V102.422C46.658 104.096 48.0135 105.452 49.688 105.452H95.2986C96.0429 105.452 96.6276 106.037 96.6276 106.781C96.6276 107.525 96.0429 108.11 95.2986 108.11H49.688C46.5516 108.11 44 105.558 44 102.422V56.0669C44 52.9305 46.5516 50.3789 49.688 50.3789H102.661C105.798 50.3789 108.349 52.9305 108.349 56.0669V102.422C108.376 105.558 105.798 108.11 102.661 108.11Z" fill="black"></path><path d="M92.2157 57.5822C91.4715 57.5822 90.8867 56.9974 90.8867 56.2532V45.329C90.8867 44.5848 91.4715 44 92.2157 44C92.9599 44 93.5447 44.5848 93.5447 45.329V56.2532C93.5447 56.9708 92.9599 57.5822 92.2157 57.5822Z" fill="black"></path><path d="M60.7704 57.5822C60.0262 57.5822 59.4414 56.9974 59.4414 56.2532V45.329C59.4414 44.5848 60.0262 44 60.7704 44C61.5146 44 62.0994 44.5848 62.0994 45.329V56.2532C62.0994 56.9708 61.5146 57.5822 60.7704 57.5822Z" fill="black"></path><path d="M107.047 66.8064H45.329C44.5848 66.8064 44 66.2216 44 65.4774C44 64.7332 44.5848 64.1484 45.329 64.1484H107.047C107.791 64.1484 108.376 64.7332 108.376 65.4774C108.376 66.2216 107.764 66.8064 107.047 66.8064Z" fill="black"></path><path d="M63.1356 83.1518H55.8794C55.4276 83.1518 55.082 82.7797 55.082 82.3544V75.0982C55.082 74.6463 55.4541 74.3008 55.8794 74.3008H63.1356C63.5875 74.3008 63.933 74.6729 63.933 75.0982V82.3544C63.933 82.7797 63.5875 83.1518 63.1356 83.1518Z" fill="rgb(109, 65, 197)"></path><path d="M63.1356 98.0112H55.8794C55.4276 98.0112 55.082 97.6391 55.082 97.2138V89.9575C55.082 89.5057 55.4541 89.1602 55.8794 89.1602H63.1356C63.5875 89.1602 63.933 89.5323 63.933 89.9575V97.2138C63.933 97.6656 63.5875 98.0112 63.1356 98.0112Z" fill="rgb(109, 65, 197)"></path><path d="M79.8271 83.1518H72.5708C72.119 83.1518 71.7734 82.7797 71.7734 82.3544V75.0982C71.7734 74.6463 72.1456 74.3008 72.5708 74.3008H79.8271C80.2789 74.3008 80.6244 74.6729 80.6244 75.0982V82.3544C80.6244 82.7797 80.2523 83.1518 79.8271 83.1518Z" fill="rgb(109, 65, 197)"></path><path d="M79.8271 98.0112H72.5708C72.119 98.0112 71.7734 97.6391 71.7734 97.2138V89.9575C71.7734 89.5057 72.1456 89.1602 72.5708 89.1602H79.8271C80.2789 89.1602 80.6244 89.5323 80.6244 89.9575V97.2138C80.6244 97.6656 80.2523 98.0112 79.8271 98.0112Z" fill="rgb(109, 65, 197)"></path><path d="M96.4911 83.1518H89.2349C88.783 83.1518 88.4375 82.7797 88.4375 82.3544V75.0982C88.4375 74.6463 88.8096 74.3008 89.2349 74.3008H96.4911C96.943 74.3008 97.2885 74.6729 97.2885 75.0982V82.3544C97.2885 82.7797 96.943 83.1518 96.4911 83.1518Z" fill="rgb(109, 65, 197)"></path></g><defs><clipPath id="clip0_3883_5962"><rect width="64.3758" height="64.11" fill="white" transform="translate(44 44)"></rect></clipPath></defs></svg>
                  <h3>Annual & Weekend<br />
                    Subscriptions</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="card">
                  <svg width="152" height="152" viewBox="0 0 152 152" fill="none" class="RoadSideflex_Img"><rect width="151.844" height="151.844" rx="75.922" fill="#EFF8F3"></rect><g clip-path="url(#clip0_3645_3555)"><path d="M76.055 108.11C58.3713 108.11 44 93.7387 44 76.055C44 68.7358 46.5377 61.6035 51.1055 55.9138L53.2425 57.6501C49.0754 62.8323 46.7514 69.3769 46.7514 76.055C46.7514 92.2161 59.8939 105.359 76.055 105.359C92.2161 105.359 105.359 92.2161 105.359 76.055C105.359 59.8939 92.2161 46.7514 76.055 46.7514C69.831 46.7514 63.9008 48.6747 58.8789 52.3076L57.2761 50.0637C62.7522 46.1103 69.2433 44 76.055 44C93.7387 44 108.11 58.3713 108.11 76.055C108.11 93.7387 93.7387 108.11 76.055 108.11Z" fill="#09081A"></path><path d="M97.6381 76.0564C97.6381 86.4208 90.3456 95.0222 80.6222 97.1058C79.1798 97.4264 77.6304 97.6133 76.0544 97.6133C64.1406 97.6133 54.4707 87.9701 54.4707 76.0564C54.4707 65.4248 62.1372 56.6097 72.2345 54.7932C73.4633 54.5795 74.7722 54.4727 76.0544 54.4727C87.9682 54.4727 97.6381 64.1426 97.6381 76.0564Z" fill="#FFD650"></path><path d="M76.0816 98.9739C69.6706 98.9739 63.2863 96.3293 58.7986 91.2273C51.4527 82.8662 51.1588 70.4716 58.0774 61.7634C58.9054 60.7216 59.8671 59.7332 60.9089 58.825C65.5034 54.7647 71.4336 52.788 77.5508 53.1619C83.6679 53.5626 89.2776 56.314 93.3111 60.9086C100.39 68.9757 100.897 81.0765 94.5132 89.7046L92.2961 88.0485C97.9324 80.4621 97.4783 69.8038 91.2543 62.725C87.7015 58.6647 82.7597 56.2606 77.3905 55.9133C71.9946 55.5661 66.8123 57.3291 62.752 60.9086C61.8438 61.7099 60.989 62.5915 60.2678 63.4997C54.1506 71.1395 54.4177 82.0382 60.8822 89.4108C67.7473 97.2109 79.6878 98.4931 88.0221 92.2958L89.6515 94.5129C85.6447 97.5047 80.8631 98.9739 76.0816 98.9739Z" fill="#09081A"></path><path d="M82.7328 74.7727C82.7328 74.5056 82.5458 74.372 82.2786 74.3453C81.7444 74.2384 80.8629 74.5056 80.5958 74.559C80.0081 74.7193 78.2451 74.9597 78.2451 75.7344C78.2718 77.8981 78.2451 80.0351 78.2451 82.1988C78.2451 83.4008 77.6574 84.0954 76.5087 84.2823C76.4286 84.3091 76.3218 84.3091 76.2416 84.3091C76.0813 84.3091 75.8944 84.3091 75.7341 84.3091C74.2649 84.2824 73.5437 83.5611 73.5437 82.0919C73.5437 80.1686 73.5437 78.2453 73.5437 76.3487C73.5437 76.0015 73.6772 75.6008 73.4902 75.3604C73.143 74.9063 72.2615 74.7994 71.7272 74.6926C71.2464 74.5857 70.7388 74.5056 70.258 74.4789C69.9909 74.4522 69.7238 74.4789 69.4834 74.4789H69.4566C69.1628 74.4254 69.1094 74.559 69.1094 74.8261C69.1094 77.07 69.1094 79.3138 69.1094 81.5577C69.1094 82.0652 69.1094 82.5728 69.1895 83.107C69.5101 85.4043 70.6854 87.0337 72.9293 87.8084C73.9978 88.1824 75.093 88.3426 76.1882 88.2892C76.9361 88.2625 77.7108 88.1557 78.4588 87.9687C79.9814 87.5947 81.2101 86.7399 81.9848 85.3508C82.5458 84.3358 82.7595 83.2406 82.7595 82.0919C82.7595 80.9433 82.7595 79.7947 82.7595 78.646C82.7328 77.3371 82.7328 76.0549 82.7328 74.7727Z" fill="#FFF292"></path><path d="M81.0781 73.3304H82.6007C82.761 73.3304 82.8679 73.1969 82.8679 73.0633V71.1133H81.0781V73.3304Z" fill="#D9A570"></path><path d="M70.7936 73.3304H69.271C69.1108 73.3304 69.0039 73.1969 69.0039 73.0633V71.1133H70.7936V73.3304Z" fill="#D8A069"></path><path d="M69.0031 71.9679C67.4004 71.3535 66.8394 70.1781 66.8661 68.4685C66.8661 67.9343 67.16 67.5336 67.5607 67.2397C67.9614 66.9192 68.4155 66.7055 68.8963 66.5719C70.2319 66.198 71.4607 65.5836 72.6895 64.9959C73.4908 64.6219 74.3189 64.2747 75.2004 63.9808C75.7881 63.7938 76.3224 63.7938 76.8833 64.0075C77.658 64.3014 78.4327 64.6219 79.1806 65.0226C80.356 65.637 81.558 66.1712 82.8669 66.4651C83.2142 66.5452 83.5615 66.6788 83.882 66.8391C85.0306 67.4 85.3779 68.0945 85.1642 69.35C84.9505 70.7124 84.1224 71.5137 82.8669 71.9411C82.8669 71.8343 82.8669 71.7007 82.8669 71.5939C82.8402 71.2733 83.0005 70.9795 83.0272 70.6857C83.0806 70.0446 83.0005 69.9911 82.3861 70.1781C81.1306 70.6055 79.8484 70.8192 78.5662 70.9795C77.7114 71.0863 76.8299 71.0863 75.9484 71.0863C74.2388 71.1131 72.5292 70.9261 70.8463 70.5521C70.3388 70.4185 69.8579 70.285 69.3771 70.1247C68.923 70.1247 68.7894 70.3384 68.7894 70.6322C68.8429 70.9795 69.0031 71.0329 69.0031 71.3802C69.0299 71.487 69.0031 71.861 69.0031 71.9679Z" fill="#A05518"></path><path d="M75.9486 71.3521C75.9486 71.2453 75.9486 71.1651 75.9219 71.0583C76.8034 71.0583 77.6849 71.0583 78.5397 70.9514C79.8219 70.7911 81.1308 70.5774 82.3596 70.15C82.5199 70.0966 82.8137 69.9631 82.9473 70.0966C83.1877 70.337 82.9206 71.085 82.8404 71.3254C82.6801 71.7795 82.413 72.2069 82.0658 72.5542C81.211 73.4891 80.089 74.2103 78.887 74.5843C78.6466 74.6645 75.9219 75.172 75.9219 75.0384C75.9219 73.9966 75.9219 72.9549 75.9219 71.9398C77.0705 71.9131 78.2192 71.8596 79.3678 71.6994C80.3829 71.5391 81.3979 71.3254 82.3596 70.9781C82.5733 70.898 82.5733 70.7377 82.5466 70.6042C82.5199 70.4439 82.3596 70.4172 82.226 70.4439C82.1459 70.4439 82.0658 70.4973 81.9856 70.524C80.0356 71.1384 78.0055 71.3788 75.9486 71.3521Z" fill="#C7792A"></path><path d="M69.137 71.5929C69.1102 71.5395 69.0835 71.4861 69.0568 71.4059C68.9233 71.0854 68.4959 70.097 69.1637 70.0703C69.2438 70.0703 69.3239 70.097 69.4041 70.1237C69.8849 70.284 70.3657 70.4176 70.8466 70.5244C72.5294 70.8984 74.239 71.0854 75.9486 71.0587C75.9486 71.1655 75.9486 71.2457 75.9754 71.3525C75.3877 71.3525 74.8267 71.3258 74.239 71.2991C72.9301 71.219 71.6212 71.032 70.3657 70.658C69.965 70.5511 69.6178 70.3641 69.1904 70.3641C69.137 70.3641 69.0835 70.3107 69.0568 70.471C69.0301 70.7648 69.0568 70.8183 69.3239 70.9251C70.5527 71.3792 71.8349 71.6463 73.1438 71.8066C74.0788 71.9135 75.0404 71.9402 75.9754 71.9669C75.9754 73.0087 75.9754 74.0505 75.9754 75.0655C75.9754 75.1991 73.9719 74.8518 73.8116 74.7984C71.9151 74.4779 69.9918 73.3827 69.137 71.5929Z" fill="#DFB183"></path><path d="M82.3853 71.034C81.4236 71.3812 80.4085 71.5949 79.3935 71.7552C78.2448 71.9422 77.0962 71.9956 75.9475 71.9956C74.9859 71.9689 74.051 71.9422 73.116 71.8354C71.8071 71.6751 70.5249 71.408 69.2961 70.9538C69.0824 70.847 68.8687 70.6867 68.9489 70.4463C69.0023 70.2593 69.1893 70.2326 69.3228 70.286C69.6434 70.3662 69.9372 70.5264 70.2311 70.6333C70.5516 70.7401 70.8722 70.8203 71.1927 70.9004C71.8338 71.0607 72.5016 71.1408 73.1694 71.221C73.303 71.2477 73.4633 71.2477 73.5968 71.2744C73.8105 71.3011 74.0242 71.3011 74.2379 71.3278C74.8256 71.3545 75.3866 71.3812 75.9743 71.3812C78.0311 71.408 80.0613 71.1675 82.0113 70.5531C82.0914 70.5264 82.1716 70.4997 82.2517 70.473C82.3853 70.4463 82.5455 70.4997 82.5722 70.6333C82.599 70.7936 82.6257 70.9538 82.3853 71.034Z" fill="#F0DBC7"></path><path d="M82.2261 70.9248C82.3293 70.9248 82.413 70.841 82.413 70.7378C82.413 70.6345 82.3293 70.5508 82.2261 70.5508C82.1228 70.5508 82.0391 70.6345 82.0391 70.7378C82.0391 70.841 82.1228 70.9248 82.2261 70.9248Z" fill="#E0B488"></path><path d="M69.271 70.7373C69.3742 70.7373 69.458 70.6535 69.458 70.5503C69.458 70.447 69.3742 70.3633 69.271 70.3633C69.1677 70.3633 69.084 70.447 69.084 70.5503C69.084 70.6535 69.1677 70.7373 69.271 70.7373Z" fill="#E0B488"></path></g><defs><clipPath id="clip0_3645_3555"><rect width="64.11" height="64.11" fill="white" transform="translate(44 44)"></rect></clipPath></defs></svg>
                  <h3>Earn DriveU<br />
                    Coins</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='FASTag-Mandatory'>
        <div className='container'>
          <h1>On the Spot</h1>
          <p>Get 24/7 On-Spot Breakdown Support, Flat Tyre Repairs, fixes for starting<br /> problems & towing service through annual subscriptions & on-demand.
          </p>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 fasttag-content'>
              <div>
                <h1>Real Time Breakdown Support</h1>
                <p>Avail 24/7 on-spot breakdown support services like puncture repair, accidental towing and minor repairs for four-wheelers anywhere in the country.</p>
                <ul>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Flat tyre fixing, battery jumpstart </li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Emergency fuel, keylock assistance</li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Towing service, minor repair</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img src={RealTimeBreakdown} />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 '>
              <img src={AccidentsEmergency} />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 fasttag-content'>
              <div>
                <h1>Accidents & Emergency</h1>
                <p>The service is designed to take care of your vehicle and your worries in an unfortunate event of your vehicle meeting with accident or a breakdown.</p>
                <ul>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Ambulance support</li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Accidental Towing Support</li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Free accommodation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 fasttag-content'>
              <div>
                <h1>To Suit Your Needs</h1>
                <p>The roadside assistance plans are customised to support your needs and requirements. The available plans range from annual validity to even weekends.</p>
                <ul>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Starting as low as ₹49 </li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Supported by trusted partners</li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Earn rewards on every plan</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img src={ToSuit} />
            </div>
          </div>
        </div>
        <a className='Download-App' href=''><button>Download App</button></a>
      </div>
      <div className='reviews'>
        <div className='container'>
          <h1>Reviews</h1>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='card'>
                <img src={review} />
                <p>DriveU app saved my FASTag from getting blacklisted, I had totally forgotten to recharge it. On my trip, I used the app to recharge seamlessly and also earned cashback for this.</p>
                <p>Suryanarayan /<span>FASTag Recharge</span></p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='card'>
                <img src={review} />
                <p>DriveU’s weekend RSA plans are great. I was on my weekend trip to Pune when my vehicle broke down on the highway and called in for help, service guys were arranged swiftly.</p>
                <p>Abhishek / <span>Roadside Assistance</span></p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='card'>
                <img src={review} />
                <p>I found this amazing renewal offer on DriveU where I was able to save a good amount of money. The app experience and the flow was very smooth. Recommended.
                </p>
                <p>Partha/ <span>Insurance Renewal</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carownership />
      <Footer />
    </div>
  );
}
