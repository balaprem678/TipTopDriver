import React, { useEffect } from "react";
import "../App";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navigation() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="Navigationbar">
      {/* Navigation */}
      <div className="navigation">
        <nav className="navbar px-5 navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to={"/#"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                    Services
                  </button>
                  <div class="dropdown-menu">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <Link to={"/Hiredrivers"} class="dropdown-item">
                          <svg width="53" height="53" viewBox="0 0 53 53" fill="none" class="svg-option"><path d="M43.3939 52.5552H10.1613C5.09968 52.5552 1 48.4555 1 43.3939V10.1613C1 5.09968 5.09968 1 10.1613 1H43.3939C48.4555 1 52.5552 5.09968 52.5552 10.1613V43.3939C52.5552 48.444 48.444 52.5552 43.3939 52.5552Z" fill="#F2FFFA" stroke="black" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 26.7243C13 19.1452 19.133 13 26.7243 13C34.3148 13 40.46 19.1445 40.46 26.7243C40.46 31.0288 38.4743 34.8664 35.3802 37.3871C35.3719 37.3939 35.3634 37.4004 35.3548 37.4066L34.1863 38.2544C34.181 38.2582 34.1757 38.2619 34.1704 38.2655C34.1674 38.2675 34.1644 38.2695 34.1614 38.2714C32.0201 39.6591 29.4607 40.46 26.7243 40.46C19.1442 40.46 13 34.3031 13 26.7243ZM26.7243 14.1456C19.7664 14.1456 14.1456 19.7772 14.1456 26.7243C14.1456 33.6717 19.7782 39.3144 26.7243 39.3144C29.2294 39.3144 31.5685 38.5833 33.5259 37.3182L34.6689 36.4889C37.5019 34.1751 39.3144 30.6623 39.3144 26.7243C39.3144 19.7778 33.6828 14.1456 26.7243 14.1456ZM26.7357 16.9867C24.571 16.9867 22.5816 17.6897 20.9699 18.8795L20.2895 17.9579C22.0917 16.6274 24.3181 15.8411 26.7357 15.8411C32.7449 15.8411 37.6304 20.7135 37.6304 26.7243C37.6304 32.7338 32.7576 37.6189 26.7357 37.6189C20.7135 37.6189 15.8525 32.7449 15.8525 26.7243C15.8525 23.6051 17.1591 20.7989 19.2504 18.8164L20.0385 19.6478C18.1661 21.4228 16.9981 23.9322 16.9981 26.7243C16.9981 32.1138 21.3478 36.4733 26.7357 36.4733C32.124 36.4733 36.4848 32.102 36.4848 26.7243C36.4848 21.3478 32.1138 16.9867 26.7357 16.9867Z" fill="#09081A"></path><path d="M26.7392 28.742C27.8464 28.742 28.744 27.8444 28.744 26.7372C28.744 25.63 27.8464 24.7324 26.7392 24.7324C25.632 24.7324 24.7344 25.63 24.7344 26.7372C24.7344 27.8444 25.632 28.742 26.7392 28.742Z" fill="rgb(109, 65, 197)"></path><path d="M26.7338 29.3154C25.3133 29.3154 24.1562 28.1583 24.1562 26.7378C24.1562 25.3172 25.3133 24.1602 26.7338 24.1602C28.1544 24.1602 29.3114 25.3172 29.3114 26.7378C29.3114 28.1583 28.1544 29.3154 26.7338 29.3154ZM26.7338 25.2943C25.9434 25.2943 25.3018 25.9358 25.3018 26.7263C25.3018 27.5168 25.9434 28.1583 26.7338 28.1583C27.5243 28.1583 28.1658 27.5168 28.1658 26.7263C28.1658 25.9358 27.5243 25.2943 26.7338 25.2943Z" fill="#09081A"></path><path d="M23.6691 36.7641L22.7412 36.0997L23.3484 35.2519C23.7493 34.6906 23.8868 33.9689 23.7264 33.3044C23.4171 32.0443 22.7985 31.1278 21.8934 30.5779C20.8624 29.9593 20.0032 29.6385 19.3502 29.6385C19.3388 29.6385 19.3388 29.6385 19.3273 29.6385C18.6056 29.65 17.9182 29.9936 17.4714 30.555L16.5664 29.8447C17.2194 29.0084 18.239 28.4929 19.3044 28.4814C20.1865 28.4814 21.2404 28.8366 22.4777 29.5812C23.6577 30.2915 24.4481 31.4485 24.8262 33.018C25.0667 34.0032 24.8605 35.0801 24.2763 35.9049L23.6691 36.7641Z" fill="#09081A"></path><path d="M29.8124 36.7641L29.2052 35.9164C28.4721 34.8853 28.3919 33.4877 28.9761 32.0672C29.8353 29.9936 32.0005 28.4814 34.1313 28.4814C35.2311 28.4814 36.2392 28.9741 36.9151 29.8447L36.0101 30.555C35.5633 29.9822 34.8531 29.6385 34.1313 29.6385C32.4817 29.6385 30.7174 30.8757 30.0415 32.514C29.7895 33.1326 29.4573 34.3125 30.1332 35.2634C30.1446 35.2748 30.7404 36.1111 30.7404 36.1111L29.8124 36.7641Z" fill="#09081A"></path><path d="M19.2635 25.4644C18.2897 25.4644 17.316 25.2124 16.4453 24.7083L17.0181 23.7116C18.221 24.399 19.6415 24.5021 20.9246 23.998C21.3256 23.8376 21.7265 23.6658 22.1389 23.494C23.5366 22.8868 24.98 22.2682 26.5724 22.2109C28.2908 22.1422 29.8259 22.8181 31.3152 23.4711C31.7276 23.6543 32.14 23.8262 32.5524 23.9866C33.8355 24.4906 35.2675 24.3875 36.4704 23.6887L37.0432 24.6854C35.5424 25.5446 33.7553 25.6821 32.14 25.052C31.7161 24.8916 31.2923 24.6968 30.8684 24.5135C29.4937 23.9178 28.0846 23.2992 26.6182 23.345C25.2321 23.3909 23.8917 23.9751 22.5972 24.5365C22.1848 24.7198 21.7609 24.8916 21.3485 25.0634C20.6611 25.3269 19.9623 25.4644 19.2635 25.4644Z" fill="#09081A"></path></svg>
                          <div>
                            <h6>Hire Drivers</h6>
                            <p>Get driven by professional<br /> drivers</p>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <Link to={"/Fastag"} class="dropdown-item">
                          <svg width="53" height="53" viewBox="0 0 53 53" fill="none" class="svg-option"><path d="M43.3939 52.5552H10.1613C5.09968 52.5552 1 48.4555 1 43.3939V10.1613C1 5.09968 5.09968 1 10.1613 1H43.3939C48.4555 1 52.5552 5.09968 52.5552 10.1613V43.3939C52.5552 48.444 48.444 52.5552 43.3939 52.5552Z" fill="#F2FFFA" stroke="black" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"></path><path d="M35.825 23.5922L33.7266 24.5166L35.053 27.5278L37.1514 26.6035L35.825 23.5922Z" fill="rgb(109, 65, 197)"></path><path d="M38.9776 20.4382L36.8789 21.3623L38.205 24.3739L40.3037 23.4498L38.9776 20.4382Z" fill="rgb(109, 65, 197)"></path><path d="M30.8675 40.4601H16.7305V16.543H30.8675V40.4601ZM17.877 39.3136H29.7209V17.6895H17.877V39.3136Z" fill="#09081A"></path><path d="M31.4416 17.6894H16.158C15.5159 17.6894 15 17.162 15 16.5314V14.158C15 13.5159 15.5159 13 16.158 13H17.0982V14.1466H16.158L16.1466 16.5314L31.4416 16.5429L31.4531 14.158L18.4167 14.1466V13H31.4416C32.0837 13 32.5996 13.5159 32.5996 14.158V16.5199C32.5996 17.162 32.0837 17.6894 31.4416 17.6894Z" fill="#09081A"></path><path d="M27.7826 30.1183H19.8255C19.1719 30.1183 18.6445 29.5909 18.6445 28.9374V20.3841C18.6445 19.7305 19.1719 19.2031 19.8255 19.2031H27.7826C28.4361 19.2031 28.9635 19.7305 28.9635 20.3841V28.9374C28.9521 29.5909 28.4246 30.1183 27.7826 30.1183ZM19.8255 20.3497L19.7911 28.9374L27.7826 28.9718C27.8055 28.9718 27.817 28.9603 27.817 28.9374V20.3841L19.8255 20.3497Z" fill="#09081A"></path><path d="M27.7826 38.5909H19.8255C19.1719 38.5909 18.6445 38.0635 18.6445 37.41V32.7894C18.6445 32.1358 19.1719 31.6084 19.8255 31.6084H27.7826C28.4361 31.6084 28.9635 32.1358 28.9635 32.7894V37.41C28.9521 38.0635 28.4246 38.5909 27.7826 38.5909ZM19.8255 32.755L19.7911 37.41L27.7826 37.4444C27.8055 37.4444 27.817 37.4329 27.817 37.41V32.7894L19.8255 32.755Z" fill="#09081A"></path><path d="M33.9188 40.4595H29.7109V29.0054C29.7109 27.8474 30.6511 26.9072 31.8091 26.9072C32.9672 26.9072 33.9073 27.8474 33.9073 29.0054V35.9994H32.7608V29.0054C32.7608 28.478 32.3365 28.0538 31.8091 28.0538C31.2817 28.0538 30.8575 28.478 30.8575 29.0054V39.313H32.7722V37.6734H33.9188V40.4595Z" fill="#09081A"></path><path d="M33.7565 30.13L32.9425 29.3274L40.8995 21.1983C41.0715 21.0263 41.1747 20.7855 41.1747 20.5448C41.1747 20.2925 41.0715 20.0403 40.8766 19.8568C40.6932 19.6734 40.4639 19.5817 40.2116 19.5817C39.9594 19.5817 39.7186 19.6848 39.5351 19.8683L31.6812 27.8942L30.8672 27.0916L38.7211 19.0657C39.1224 18.6644 39.6498 18.4351 40.2116 18.4351C40.7849 18.4122 41.2894 18.6529 41.6907 19.0428C42.092 19.4326 42.3327 19.9829 42.3327 20.5448C42.3327 21.0836 42.1149 21.6225 41.7251 22.0009L33.7565 30.13Z" fill="#09081A"></path><path d="M26.0755 30.1179H21.5352V28.6159C21.5352 27.3661 22.5556 26.3457 23.8053 26.3457C25.0551 26.3457 26.0755 27.3661 26.0755 28.6159V30.1179ZM22.6817 28.9713H24.929V28.6159C24.929 27.9967 24.4245 27.4923 23.8053 27.4923C23.1862 27.4923 22.6817 27.9967 22.6817 28.6159V28.9713Z" fill="#09081A"></path></svg>
                          <div>
                            <h6>FASTag</h6>
                            <p>Get your FASTag balance &<br /> recharge on the go!</p>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <Link to={"/Carwashpackage"} class="dropdown-item" >
                          <svg width="53" height="53" viewBox="0 0 53 53" fill="none" class="svg-option"><path d="M43.3939 52.5552H10.1613C5.09968 52.5552 1 48.4555 1 43.3939V10.1613C1 5.09968 5.09968 1 10.1613 1H43.3939C48.4555 1 52.5552 5.09968 52.5552 10.1613V43.3939C52.5552 48.444 48.444 52.5552 43.3939 52.5552Z" fill="#F2FFFA" stroke="black" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"></path><path d="M29.8653 36.7803H23.9688V37.923H29.8653V36.7803Z" fill="#09081A"></path><path d="M38.5877 37.9234H37.285V36.7806H38.5877C38.9762 36.7806 39.2962 36.4607 39.2962 36.0721V31.0327C39.2962 30.667 39.0105 30.3927 38.6563 30.3927H18.2812V29.25H38.6448C39.6276 29.25 40.4275 30.0499 40.4275 31.0327V36.0721C40.4389 37.0892 39.6047 37.9234 38.5877 37.9234Z" fill="#09081A"></path><path d="M18.4955 37.9233H16.9986C16.1187 37.9233 15.4102 37.2148 15.4102 36.3349V29.8213H16.5529V36.3349C16.5529 36.5863 16.7472 36.7806 16.9986 36.7806H18.4955V37.9233Z" fill="#09081A"></path><path d="M35.5566 30.3814H18.2784V29.2386H33.5454L30.8828 24.7362C30.7571 24.5191 30.5057 24.382 30.2543 24.382H16.8614C16.69 24.382 16.5529 24.5191 16.5529 24.6905V29.81H15.4102V24.6905C15.4102 23.8906 16.0615 23.2393 16.8614 23.2393H30.2543C30.9171 23.2393 31.5342 23.5935 31.8656 24.1534L35.5566 30.3814Z" fill="#09081A"></path><path d="M21.2397 40.4599C19.4113 40.4599 17.9258 38.9744 17.9258 37.146C17.9258 35.3176 19.4113 33.832 21.2397 33.832C23.0681 33.832 24.5537 35.3176 24.5537 37.146C24.5537 38.9744 23.0681 40.4599 21.2397 40.4599ZM21.2397 34.9633C20.0398 34.9633 19.0685 35.9347 19.0685 37.1345C19.0685 38.3344 20.0398 39.3057 21.2397 39.3057C22.4396 39.3057 23.4109 38.3344 23.4109 37.1345C23.4109 35.9347 22.4396 34.9633 21.2397 34.9633Z" fill="#09081A"></path><path d="M34.5522 40.4599C32.7238 40.4599 31.2383 38.9744 31.2383 37.146C31.2383 35.3176 32.7238 33.832 34.5522 33.832C36.3806 33.832 37.8662 35.3176 37.8662 37.146C37.8662 38.9744 36.3806 40.4599 34.5522 40.4599ZM34.5522 34.9633C33.3523 34.9633 32.381 35.9347 32.381 37.1345C32.381 38.3344 33.3523 39.3057 34.5522 39.3057C35.7521 39.3057 36.7234 38.3344 36.7234 37.1345C36.7234 35.9347 35.7521 34.9633 34.5522 34.9633Z" fill="#09081A"></path><path d="M16.5539 34.3242H14.3941C13.6285 34.3242 13 33.7071 13 32.93V28.9762C13 28.2105 13.6285 27.582 14.3941 27.582H16.5539V34.3242ZM14.3941 28.7248C14.257 28.7248 14.1427 28.839 14.1427 28.9762V32.93C14.1427 33.0672 14.257 33.1814 14.3941 33.1814H15.4112V28.7248H14.3941Z" fill="#09081A"></path><path d="M27.6974 23.8105H26.5547V29.8099H27.6974V23.8105Z" fill="#09081A"></path><path d="M21.9357 23.8105H20.793V29.8099H21.9357V23.8105Z" fill="#09081A"></path><path d="M39.8644 31.2959H37.3047V32.4386H39.8644V31.2959Z" fill="#09081A"></path><path d="M15.2286 22.5079C15.1943 22.4508 15.1372 22.4051 15.1258 22.3365C15.0686 22.1423 15.0229 21.948 14.9772 21.7537C14.8058 20.9995 14.383 20.5081 13.7088 20.291C13.526 20.2339 13.3431 20.1767 13.1603 20.1196C13.0917 20.0968 13.0117 20.0739 13.0117 19.9596C13.0117 19.8454 13.0917 19.8225 13.1717 19.7996C13.446 19.7082 13.7316 19.6282 14.0059 19.514C14.463 19.3197 14.7487 18.9312 14.9087 18.4284C14.9887 18.1655 15.0458 17.8913 15.1144 17.617C15.1372 17.5256 15.1601 17.457 15.2515 17.457C15.3429 17.457 15.3772 17.537 15.4 17.617C15.4343 17.7884 15.48 17.9713 15.5143 18.1541C15.6972 18.954 16.1542 19.4683 16.8627 19.6739C17.0227 19.7197 17.1827 19.7654 17.3427 19.8111C17.4227 19.8339 17.5027 19.8568 17.4913 19.9711C17.4913 20.0739 17.4227 20.1082 17.3427 20.131C17.1484 20.1882 16.9427 20.2453 16.7485 20.3139C16.12 20.531 15.72 20.9995 15.5257 21.708C15.48 21.9023 15.4458 22.108 15.3886 22.3137C15.3658 22.3822 15.3201 22.4394 15.2743 22.4965C15.2629 22.5079 15.2401 22.5079 15.2286 22.5079Z" fill="rgb(109, 65, 197)"></path><path d="M37.9815 25.6849C37.9472 25.6278 37.8901 25.5707 37.8672 25.5135C37.8101 25.3078 37.7644 25.0907 37.7072 24.8736C37.5244 24.0623 37.0673 23.5252 36.3359 23.2966C36.1417 23.2395 35.936 23.1709 35.7417 23.1138C35.6617 23.0909 35.5703 23.0681 35.5703 22.9424C35.5703 22.8167 35.6617 22.7938 35.7417 22.771C36.0388 22.6681 36.3588 22.5881 36.6445 22.451C37.1359 22.2339 37.4444 21.8225 37.6158 21.274C37.7072 20.9883 37.7644 20.6912 37.8444 20.3941C37.8672 20.3026 37.8901 20.2227 37.9929 20.2227C38.0958 20.2227 38.13 20.3026 38.1529 20.3941C38.1986 20.5883 38.2443 20.7826 38.29 20.9769C38.4957 21.8453 38.9757 22.3939 39.7527 22.611C39.9241 22.6567 40.0956 22.7138 40.2784 22.7595C40.3584 22.7824 40.4384 22.8167 40.4384 22.9309C40.4384 23.0452 40.3698 23.0795 40.2784 23.1024C40.0613 23.1595 39.8442 23.2281 39.6385 23.2966C38.9528 23.5252 38.5186 24.0394 38.3243 24.7936C38.2672 25.0222 38.2215 25.2507 38.1643 25.4678C38.1415 25.5364 38.0843 25.605 38.0501 25.6735C38.0158 25.6849 38.0043 25.6849 37.9815 25.6849Z" fill="rgb(109, 65, 197)"></path><path d="M26.689 19.8221C26.6433 19.7536 26.5747 19.685 26.5519 19.605C26.4719 19.3422 26.4147 19.0794 26.3576 18.8051C26.1176 17.7766 25.5577 17.1139 24.6435 16.8282C24.3921 16.7482 24.1521 16.6796 23.9007 16.5996C23.7979 16.5768 23.6836 16.5539 23.6836 16.3939C23.6836 16.2339 23.7979 16.2111 23.9007 16.1768C24.2778 16.0397 24.6663 15.9368 25.032 15.7883C25.6491 15.5255 26.0376 14.9998 26.2433 14.3141C26.3576 13.9599 26.4376 13.5828 26.529 13.2171C26.5633 13.1028 26.5976 13 26.7233 13C26.849 13 26.8947 13.1028 26.9175 13.2171C26.9747 13.4571 27.0318 13.7085 27.0775 13.9485C27.3289 15.0341 27.9346 15.7197 28.9059 15.994C29.123 16.0625 29.3401 16.1197 29.5573 16.1882C29.6601 16.2225 29.7515 16.2568 29.7515 16.3939C29.7515 16.5311 29.6601 16.5768 29.5573 16.6111C29.2944 16.691 29.0202 16.7596 28.7574 16.851C27.9003 17.1367 27.3632 17.7766 27.1118 18.7251C27.0432 19.0108 26.9861 19.2965 26.9061 19.5707C26.8833 19.6622 26.8033 19.7422 26.7576 19.8221C26.7347 19.8221 26.7118 19.8221 26.689 19.8221Z" fill="rgb(109, 65, 197)"></path></svg>
                          <div>
                            <h6>Car Wash Package</h6>
                            <p>Daily & alternate wash<br />   starting at ₹799</p>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <Link to={"/Carwash"} class="dropdown-item" >
                          <svg width="53" height="53" viewBox="0 0 53 53" fill="none" class="svg-option"><path d="M43.3939 52.5552H10.1613C5.09968 52.5552 1 48.4555 1 43.3939V10.1613C1 5.09968 5.09968 1 10.1613 1H43.3939C48.4555 1 52.5552 5.09968 52.5552 10.1613V43.3939C52.5552 48.444 48.444 52.5552 43.3939 52.5552Z" fill="#F2FFFA" stroke="black" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"></path><path d="M30.0861 36.9082H24.4727V38.0538H30.0861V36.9082Z" fill="#09081A"></path><path d="M38.377 38.0544H37.1398V36.9088H38.377C38.7322 36.9088 39.0186 36.6224 39.0186 36.2672V31.4672C39.0186 31.1349 38.7665 30.8829 38.4343 30.8829H19.0508V29.7373H38.4343C39.3852 29.7373 40.1642 30.5163 40.1642 31.4672V36.2672C40.1756 37.2524 39.3737 38.0544 38.377 38.0544Z" fill="#09081A"></path><path d="M19.2601 38.0538H17.8395C16.9918 38.0538 16.293 37.3665 16.293 36.5073V30.3096H17.4386V36.5073C17.4386 36.7249 17.6104 36.9082 17.8395 36.9082H19.2715V38.0538H19.2601Z" fill="#09081A"></path><path d="M35.5505 30.8712H19.0539V29.7256H33.5342L31.0254 25.4869C30.9108 25.2807 30.6817 25.1661 30.4526 25.1661H17.7135C17.5646 25.1661 17.45 25.2807 17.45 25.4296V30.2984H16.293V25.4296C16.293 24.6506 16.923 24.0205 17.7021 24.0205H30.4526C31.0941 24.0205 31.6898 24.3642 32.0106 24.9026L35.5505 30.8712Z" fill="#09081A"></path><path d="M21.8684 40.4603C20.1156 40.4603 18.6836 39.0284 18.6836 37.2756C18.6836 35.5228 20.1156 34.0908 21.8684 34.0908C23.6211 34.0908 25.0531 35.5228 25.0531 37.2756C25.0531 39.0284 23.6211 40.4603 21.8684 40.4603ZM21.8684 35.2364C20.7457 35.2364 19.8292 36.1529 19.8292 37.2756C19.8292 38.3983 20.7457 39.3148 21.8684 39.3148C22.991 39.3148 23.9075 38.3983 23.9075 37.2756C23.9075 36.1529 22.991 35.2364 21.8684 35.2364Z" fill="#09081A"></path><path d="M34.552 40.4603C32.7992 40.4603 31.3672 39.0284 31.3672 37.2756C31.3672 35.5228 32.7992 34.0908 34.552 34.0908C36.3047 34.0908 37.7367 35.5228 37.7367 37.2756C37.7367 39.0284 36.3047 40.4603 34.552 40.4603ZM34.552 35.2364C33.4293 35.2364 32.5128 36.1529 32.5128 37.2756C32.5128 38.3983 33.4293 39.3148 34.552 39.3148C35.6746 39.3148 36.5911 38.3983 36.5911 37.2756C36.5911 36.1529 35.6746 35.2364 34.552 35.2364Z" fill="#09081A"></path><path d="M17.4368 34.6289H15.3518C14.6072 34.6289 14 34.0217 14 33.2771V29.5081C14 28.7634 14.6072 28.1562 15.3518 28.1562H17.4368V34.6289ZM15.3518 29.3018C15.2372 29.3018 15.1456 29.3935 15.1456 29.5081V33.2771C15.1456 33.3916 15.2372 33.4833 15.3518 33.4833H16.2912V29.3018H15.3518Z" fill="#09081A"></path><path d="M28.044 24.5938H26.8984V30.3103H28.044V24.5938Z" fill="#09081A"></path><path d="M22.5558 24.5938H21.4102V30.3103H22.5558V24.5938Z" fill="#09081A"></path><path d="M39.6042 31.6846H37.1641V32.8302H39.6042V31.6846Z" fill="#09081A"></path><path d="M33.0961 17.399H21.0673C20.6778 17.399 20.3227 17.2157 20.0936 16.9064C19.8645 16.5971 19.7957 16.2076 19.9217 15.8295L20.1852 14.9933C20.3342 14.4892 20.8039 14.1455 21.3308 14.1455H32.8326C33.3596 14.1455 33.8293 14.4892 33.9897 14.9933L34.2532 15.8295C34.3677 16.1961 34.299 16.5971 34.0699 16.9064C33.8408 17.2272 33.4856 17.399 33.0961 17.399ZM21.3308 15.2911L21.0101 16.1732L33.1076 16.2534C33.119 16.2534 33.142 16.2534 33.1534 16.2305L32.9014 15.3369L21.3308 15.2911Z" fill="#09081A"></path><path d="M25.9581 13H24.8125V14.7184H25.9581V13Z" fill="#09081A"></path><path d="M29.3604 13H28.2148V14.7184H29.3604V13Z" fill="#09081A"></path><path d="M22.7047 20.7563C22.7047 21.6842 21.8111 22.4059 20.8488 22.1081C20.3677 21.9477 19.9782 21.5123 19.898 20.9968C19.8636 20.7563 19.8865 20.5042 19.9782 20.2636C20.0584 20.046 20.1844 19.8627 20.3104 19.6679C20.4937 19.3586 20.6884 19.0493 20.8832 18.7285C20.9748 18.5911 21.055 18.4421 21.1467 18.3047C21.2154 18.1901 21.3873 18.1901 21.4675 18.3047C21.7539 18.7744 22.0403 19.2326 22.3152 19.7023C22.4068 19.8741 22.5099 20.046 22.5901 20.2178C22.6818 20.3782 22.7047 20.573 22.7047 20.7563Z" fill="#rgb(109, 65, 197)"></path><path d="M28.5019 20.7565C28.5019 21.6844 27.6083 22.4062 26.646 22.1083C26.1534 21.9594 25.7753 21.5126 25.6952 21.0085C25.6608 20.7565 25.6837 20.5045 25.7639 20.2754C25.8441 20.0577 25.9701 19.8744 26.0961 19.6797C26.2909 19.3703 26.4856 19.061 26.6689 18.7403C26.7606 18.6028 26.8408 18.4539 26.9324 18.3164C27.0011 18.2018 27.173 18.2018 27.2532 18.3164C27.5396 18.7861 27.826 19.2443 28.1009 19.714C28.204 19.8744 28.2957 20.0462 28.3759 20.2181C28.4675 20.3785 28.5019 20.5732 28.5019 20.7565Z" fill="#rgb(109, 65, 197)"></path><path d="M34.287 20.7565C34.287 21.6844 33.3935 22.4062 32.4312 22.1083C31.9385 21.9594 31.5605 21.5126 31.4803 21.0085C31.4459 20.7565 31.4689 20.5045 31.549 20.2754C31.6292 20.0577 31.7553 19.8744 31.8813 19.6797C32.076 19.3703 32.2708 19.061 32.4541 18.7403C32.5457 18.6028 32.6259 18.4539 32.7176 18.3164C32.7863 18.2018 32.9581 18.2018 33.0383 18.3164C33.3247 18.7861 33.6111 19.2443 33.8861 19.714C33.9892 19.8859 34.0808 20.0577 34.1725 20.2295C34.2527 20.3785 34.287 20.5732 34.287 20.7565Z" fill="#rgb(109, 65, 197)"></path></svg>
                          <div>
                            <h6>Car Wash </h6>
                            <p>Daily & alternate wash<br />   starting at ₹799</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                    For Business
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                    About Us
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </li>
              <li className="nav-item black-button">
                <Link class="nav-link" to={""} ><button>Download App</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}