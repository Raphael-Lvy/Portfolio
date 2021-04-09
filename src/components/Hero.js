import React from 'react';
import styled, { keyframes } from 'styled-components';
import {FaReact} from 'react-icons/fa';
import Button from './Button/Button';
import {Link} from 'gatsby';
import Lines from './Lines/Lines';
import { Link as AnimatedLink } from "react-scroll";

const Hero = () => {

 
    return (
        <HeroContainer name='Hero'>
        
  
        <HeroContent>
            <HeroOne>Bonjour,</HeroOne>
            <HeroH1> <Petit>Je suis</Petit> <Ombres>R</Ombres>aphaël</HeroH1>
            <ElementReveal>
                 <HeroP>Développeur Fullstack <Blue>React.js <Logo><FaReact/></Logo></Blue> disponible pour vos projets web !</HeroP>
              
              <AnimatedLink activeClass="active"
                            to="Contact"
                            smooth={true}
                            offset={0}
                            duration={1000}><Button primary={true}>Contact</Button></AnimatedLink>
            </ElementReveal>
        
        </HeroContent>
        <div className='lines'>
            <Lines deg={2} position = {4} delay={0.5} bg={true}/>
            <Lines deg={102} position = {4} delay={0.9} bg={true}/>
            <Lines deg={52} position = {30} delay={1.9} bg={true}/>
            <Lines deg={-2} position = {40} delay={1.5} bg={true}/>
            <Lines deg={-10} position = {60} delay={2.2} bg={true}/>
            <Lines deg={-20} position = {50} delay={1.5} bg={true}/>
            <Lines deg={-250} position = {40} delay={1.1} bg={true}/>
            <Lines deg={-120} position = {90} delay={1.9} bg={true}/>
            <Lines deg={-1} position = {80} delay={2.9} bg={true}/>
            <Lines deg={-30} position = {80} delay={0.9} bg={true}/>
            <Lines deg={10} position = {70} delay={2.5} bg={true}/>
          </div>
          <SVGWrapper>
            <svg  viewBox="0 0 949 837" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="undraw_site_content_ihgn 1" clip-path="url(#clip0)">
<path id="Vector" d="M214 219.205H27V96.205H198.889L214 219.205Z" fill="#EFEFEF"/>
<path id="Vector_2" d="M141.5 151.048C150.889 151.048 158.5 143.436 158.5 134.048C158.5 124.659 150.889 117.048 141.5 117.048C132.111 117.048 124.5 124.659 124.5 134.048C124.5 143.436 132.111 151.048 141.5 151.048Z" fill="#3F3D56"/>
<path id="Vector_3" d="M188.95 61.4486C190.562 59.6197 192.231 57.7998 193.912 56.0388L195.672 57.7187C194.012 59.4565 192.365 61.2523 190.775 63.0564L188.95 61.4486Z" fill="#3F3D56"/>
<path id="Vector_4" d="M204.681 45.6583C208.398 42.3599 212.297 39.1788 216.269 36.2037L217.728 38.1498C213.809 41.0858 209.963 44.2239 206.296 47.4778L204.681 45.6583ZM228.6 27.7423C232.807 25.1055 237.178 22.6127 241.59 20.3326L242.707 22.4939C238.354 24.7429 234.043 27.2019 229.893 29.8029L228.6 27.7423ZM255.149 14.0253C259.726 12.1219 264.446 10.3833 269.179 8.85604L269.926 11.1713C265.256 12.6773 260.599 14.3935 256.084 16.2711L255.149 14.0253ZM284.142 7.21353L283.585 4.84628C288.426 3.70752 293.365 2.75628 298.263 2.0185L298.625 4.4242C293.792 5.15177 288.919 6.09019 284.142 7.21353ZM313.288 2.83083L313.126 0.403909C318.08 0.0721186 323.108 -0.0562816 328.071 0.0224884L328.033 2.45508C323.136 2.37678 318.175 2.50353 313.288 2.83079V2.83083ZM342.759 3.30298L342.999 0.882859C347.941 1.37392 352.926 2.0792 357.814 2.97899L357.374 5.37135C352.551 4.48328 347.634 3.78744 342.759 3.30294V3.30298ZM433.922 323.801C437.807 320.825 441.619 317.647 445.251 314.354L446.885 316.157C443.203 319.495 439.34 322.716 435.402 325.732L433.922 323.801ZM371.766 8.64079L372.402 6.29322C377.192 7.59207 381.991 9.1079 386.665 10.7985L385.837 13.0854C381.226 11.4178 376.492 9.92211 371.766 8.64079ZM455.763 304.004C459.107 300.427 462.345 296.666 465.387 292.824L467.294 294.334C464.211 298.228 460.929 302.04 457.54 305.665L455.763 304.004ZM399.495 18.6715L400.508 16.4592C405.024 18.5265 409.509 20.8057 413.839 23.2349L412.65 25.3559C408.377 22.9596 403.951 20.7103 399.495 18.6715ZM474.062 280.892C476.78 276.814 479.361 272.573 481.734 268.288L483.861 269.467C481.456 273.809 478.841 278.107 476.087 282.24L474.062 280.892ZM425.211 33.094L426.57 31.0774C430.687 33.8519 434.74 36.8319 438.616 39.9347L437.096 41.8335C433.271 38.7721 429.273 35.8318 425.211 33.094ZM488.348 255.099C490.363 250.632 492.217 246.027 493.858 241.411L496.151 242.226C494.486 246.904 492.607 251.572 490.565 256.099L488.348 255.099ZM448.221 51.5156L449.892 49.7481C453.502 53.1606 457.011 56.7627 460.322 60.4549L458.511 62.0785C455.245 58.436 451.783 54.8825 448.221 51.5156ZM498.227 227.317C499.484 222.574 500.558 217.727 501.417 212.911L503.813 213.338C502.941 218.22 501.852 223.133 500.578 227.941L498.227 227.317ZM467.892 73.4528L469.831 71.9838C472.827 75.9406 475.694 80.0699 478.351 84.2576L476.297 85.5604C473.676 81.4295 470.849 77.3557 467.892 73.4528ZM503.407 198.289C503.865 193.413 504.123 188.455 504.175 183.553L506.607 183.579C506.555 188.547 506.293 193.573 505.828 198.516L503.407 198.289ZM483.675 98.3322L485.829 97.2045C488.13 101.597 490.276 106.146 492.21 110.725L489.969 111.671C488.061 107.154 485.944 102.667 483.675 98.3322V98.3322ZM503.719 168.805C503.366 163.929 502.803 158.997 502.045 154.148L504.449 153.773C505.216 158.688 505.787 163.686 506.145 168.629L503.719 168.805ZM495.143 125.483L497.454 124.724C499.002 129.433 500.38 134.287 501.542 139.106L499.176 139.676C498.031 134.917 496.671 130.131 495.143 125.483V125.483Z" fill="#3F3D56"/>
<path id="Vector_5" d="M415.512 336.161C417.588 334.948 419.668 333.675 421.693 332.378L423.005 334.426C420.952 335.741 418.844 337.032 416.739 338.261L415.512 336.161Z" fill="#3F3D56"/>
<path id="Vector_6" d="M27 180.742L64.268 143.474L98 177.205L162 113.205L214.5 166.705V219.205H27V180.742Z" fill="#05D8FD"/>
<path id="Vector_7" d="M637 523.205V764.205H947V523.205H637ZM906.519 587.655H882.51V563.645H906.519V587.655Z" fill="#3F3D56"/>
<path id="Vector_8" d="M155 428.205H135V454.205H155V428.205Z" fill="#3F3D56"/>
<path id="Vector_9" d="M468.263 600.084L454.121 585.942L435.736 604.327L449.878 618.469L468.263 600.084Z" fill="#3F3D56"/>
<path id="Vector_10" d="M409.263 146.084L395.121 131.942L376.736 150.327L390.878 164.469L409.263 146.084Z" fill="#3F3D56"/>
<path id="Vector_11" d="M660.003 686.449C658.896 688.621 657.731 690.798 656.54 692.921L654.418 691.731C655.594 689.636 656.744 687.487 657.836 685.345L660.003 686.449Z" fill="#3F3D56"/>
<path id="Vector_12" d="M648.686 705.651C645.905 709.77 642.919 713.819 639.81 717.688L637.913 716.165C640.98 712.348 643.926 708.353 646.67 704.29L648.686 705.651ZM629.966 728.947C626.546 732.546 622.931 736.046 619.223 739.35L617.604 737.534C621.263 734.275 624.829 730.822 628.203 727.272L629.966 728.947ZM607.656 748.828C603.695 751.808 599.555 754.665 595.35 757.319L594.051 755.262C598.2 752.643 602.285 749.824 606.193 746.884L607.656 748.828ZM581.263 762.627L582.391 764.781C577.984 767.087 573.437 769.235 568.875 771.166L567.926 768.926C572.428 767.021 576.915 764.901 581.263 762.627ZM554.119 774.111L554.879 776.422C550.163 777.973 545.324 779.346 540.496 780.503L539.929 778.137C544.692 776.997 549.466 775.642 554.119 774.111ZM525.454 780.973L525.823 783.377C520.913 784.129 515.91 784.684 510.951 785.026L510.784 782.599C515.675 782.262 520.611 781.715 525.454 780.973V780.973ZM357.547 493.159C354.523 497.006 351.62 501.031 348.92 505.123L346.889 503.783C349.627 499.635 352.569 495.555 355.635 491.656L357.547 493.159ZM496.03 783.007L495.997 785.439C491.034 785.37 486.01 785.094 481.062 784.617L481.296 782.196C486.177 782.666 491.134 782.939 496.03 783.007ZM341.308 517.76C338.957 522.055 336.754 526.503 334.763 530.98L332.54 529.991C334.559 525.453 336.791 520.945 339.175 516.592L341.308 517.76ZM466.678 780.177L466.247 782.572C461.359 781.691 456.449 780.597 451.651 779.319L452.276 776.969C457.01 778.229 461.856 779.309 466.678 780.177ZM329.322 544.693C327.703 549.318 326.256 554.067 325.022 558.807L322.668 558.194C323.919 553.39 325.385 548.577 327.026 543.889L329.322 544.693ZM438.186 772.594L437.371 774.885C432.694 773.219 428.028 771.339 423.503 769.296L424.503 767.08C428.969 769.095 433.572 770.95 438.186 772.594ZM321.891 573.225C321.048 578.053 320.396 582.975 319.952 587.853L317.529 587.633C317.979 582.688 318.64 577.7 319.494 572.807L321.891 573.225ZM411.322 760.464L410.143 762.591C405.798 760.182 401.505 757.564 397.38 754.81L398.731 752.787C402.8 755.505 407.036 758.087 411.322 760.464ZM319.221 602.59C319.18 607.497 319.344 612.459 319.708 617.338L317.282 617.519C316.914 612.573 316.748 607.544 316.788 602.57L319.221 602.59ZM386.819 744.1L385.306 746.004C381.421 742.916 377.618 739.628 374.004 736.231L375.671 734.459C379.235 737.809 382.986 741.053 386.819 744.1H386.819ZM321.413 631.996C322.18 636.833 323.161 641.7 324.328 646.461L321.966 647.039C320.783 642.214 319.788 637.28 319.01 632.377L321.413 631.996ZM365.352 723.92L363.545 725.547C360.226 721.863 357.016 717.99 354.006 714.035L355.942 712.562C358.912 716.463 362.078 720.284 365.352 723.92ZM328.433 660.633C329.986 665.269 331.756 669.906 333.694 674.415L331.459 675.376C329.495 670.805 327.701 666.105 326.127 661.406L328.433 660.633ZM347.499 700.468L345.45 701.777C342.78 697.6 340.24 693.241 337.918 688.86L340.068 687.721C342.36 692.047 344.866 696.345 347.499 700.468Z" fill="#3F3D56"/>
<path id="Vector_13" d="M372.311 476.613C370.602 478.304 368.903 480.054 367.263 481.813L365.483 480.155C367.146 478.371 368.868 476.598 370.601 474.884L372.311 476.613Z" fill="#3F3D56"/>
<path id="Vector_14" d="M900.146 535.727C899.917 535.352 894.506 526.317 892.63 507.555C890.909 490.342 892.016 461.328 907.062 420.857C935.568 344.186 900.493 282.323 900.135 281.707L901.865 280.703C901.956 280.86 911.007 296.632 916.353 321.747C923.418 355.045 920.846 389.666 908.937 421.554C880.48 498.094 901.637 534.327 901.853 534.685L900.146 535.727Z" fill="#3F3D56"/>
<path id="Vector_15" d="M889 277.205C896.18 277.205 902 271.385 902 264.205C902 257.026 896.18 251.205 889 251.205C881.82 251.205 876 257.026 876 264.205C876 271.385 881.82 277.205 889 277.205Z" fill="#05D8FD"/>
<path id="Vector_16" d="M930 325.205C937.18 325.205 943 319.385 943 312.205C943 305.026 937.18 299.205 930 299.205C922.82 299.205 917 305.026 917 312.205C917 319.385 922.82 325.205 930 325.205Z" fill="#3F3D56"/>
<path id="Vector_17" d="M902 357.205C909.18 357.205 915 351.385 915 344.205C915 337.026 909.18 331.205 902 331.205C894.82 331.205 889 337.026 889 344.205C889 351.385 894.82 357.205 902 357.205Z" fill="#05D8FD"/>
<path id="Vector_18" d="M936 384.205C943.18 384.205 949 378.385 949 371.205C949 364.026 943.18 358.205 936 358.205C928.82 358.205 923 364.026 923 371.205C923 378.385 928.82 384.205 936 384.205Z" fill="#05D8FD"/>
<path id="Vector_19" d="M892 426.205C899.18 426.205 905 420.385 905 413.205C905 406.026 899.18 400.205 892 400.205C884.82 400.205 879 406.026 879 413.205C879 420.385 884.82 426.205 892 426.205Z" fill="#3F3D56"/>
<path id="Vector_20" d="M908 536.205C908 536.205 895 504.205 934 480.205L908 536.205Z" fill="#3F3D56"/>
<path id="Vector_21" d="M892.012 535.625C892.012 535.625 886.096 501.595 840.304 501.887L892.012 535.625Z" fill="#3F3D56"/>
<path id="Vector_22" d="M478.483 738.802C476.11 738.802 473.79 738.098 471.817 736.779C469.843 735.461 468.305 733.586 467.397 731.394C466.489 729.201 466.251 726.788 466.714 724.46C467.177 722.133 468.32 719.995 469.998 718.316C471.676 716.638 473.815 715.495 476.142 715.032C478.47 714.569 480.883 714.807 483.076 715.715C485.268 716.623 487.142 718.161 488.461 720.135C489.78 722.108 490.483 724.428 490.483 726.802C490.48 729.983 489.214 733.033 486.965 735.283C484.715 737.532 481.665 738.798 478.483 738.802V738.802ZM478.483 716.802C476.506 716.802 474.572 717.388 472.928 718.487C471.283 719.586 470.001 721.147 469.245 722.975C468.488 724.802 468.29 726.813 468.676 728.752C469.061 730.692 470.014 732.474 471.412 733.873C472.811 735.271 474.593 736.224 476.532 736.609C478.472 736.995 480.483 736.797 482.31 736.04C484.137 735.283 485.699 734.002 486.798 732.357C487.897 730.713 488.483 728.779 488.483 726.802C488.48 724.15 487.426 721.608 485.551 719.734C483.676 717.859 481.135 716.805 478.483 716.802V716.802Z" fill="#2F2E41"/>
<path id="Vector_23" d="M610.311 95.0914H590.57V75.3502H610.311V95.0914ZM592.088 93.5728H608.792V76.8688H592.088V93.5728Z" fill="#3F3D56"/>
<path id="Vector_24" d="M71.9548 646.171L58.4897 631.735L72.926 618.27L86.3911 632.706L71.9548 646.171ZM60.6361 631.81L72.0296 644.025L84.2449 632.632L72.8513 620.416L60.6361 631.81Z" fill="#2F2E41"/>
<path id="Vector_25" d="M602.103 515.335H244.286V370.895H541.92L602.103 515.335Z" fill="#EFEFEF"/>
<path id="Vector_26" d="M603.738 516.429H200.517V339.162H530.616L530.894 339.839L603.738 516.429ZM202.705 514.241H600.468L529.151 341.351H202.705V514.241Z" fill="#3F3D56"/>
<path id="Vector_27" d="M481.737 393.874H303.375V410.288H481.737V393.874Z" fill="#05D8FD"/>
<path id="Vector_28" d="M481.737 427.796H303.375V444.209H481.737V427.796Z" fill="#05D8FD"/>
<path id="Vector_29" d="M481.737 461.717H303.375V478.131H481.737V461.717Z" fill="#05D8FD"/>
<path id="Vector_30" d="M299.432 243.205H0V61.2053H232.698L232.939 61.8611L299.432 243.205ZM2 241.205H296.568L231.302 63.2053H2V241.205Z" fill="#3F3D56"/>
<path id="Vector_31" d="M215 220.205H26V79.2053H215V220.205ZM28 218.205H213V81.2053H28V218.205Z" fill="#3F3D56"/>
<path id="Vector_32" d="M298 260.205C307.941 260.205 316 252.146 316 242.205C316 232.264 307.941 224.205 298 224.205C288.059 224.205 280 232.264 280 242.205C280 252.146 288.059 260.205 298 260.205Z" fill="#05D8FD"/>
<path id="Vector_33" d="M600 534.205C609.941 534.205 618 526.146 618 516.205C618 506.264 609.941 498.205 600 498.205C590.059 498.205 582 506.264 582 516.205C582 526.146 590.059 534.205 600 534.205Z" fill="#05D8FD"/>
<path id="Vector_34" d="M729.079 270.03C745.807 270.03 759.368 256.47 759.368 239.742C759.368 223.014 745.807 209.454 729.079 209.454C712.352 209.454 698.791 223.014 698.791 239.742C698.791 256.47 712.352 270.03 729.079 270.03Z" fill="#FFB8B8"/>
<path id="Vector_35" d="M708.256 254.255C708.256 254.255 718.353 276.972 704.47 285.806C690.588 294.64 727.187 331.238 727.187 331.238L767.571 288.33C767.571 288.33 746.117 274.447 749.903 251.731L708.256 254.255Z" fill="#FFB8B8"/>
<path id="Vector_36" d="M638.845 350.168L630.011 400.649C630.011 400.649 614.867 430.937 614.867 457.44C614.867 483.942 612.343 488.99 612.343 488.99C612.343 488.99 587.103 539.471 604.771 541.995C622.439 544.519 630.011 490.252 630.011 490.252C630.011 490.252 653.989 430.937 653.989 412.007L670.396 370.361L638.845 350.168Z" fill="#FFB8B8"/>
<path id="Vector_37" d="M821.838 352.692L824.362 396.863C824.362 396.863 833.196 419.579 826.886 459.964L821.838 499.086C821.838 499.086 833.196 543.257 821.838 544.519C810.479 545.781 796.597 516.754 804.169 500.348V486.466C804.169 486.466 796.597 427.151 799.121 417.055L790.287 369.099L821.838 352.692Z" fill="#FFB8B8"/>
<path id="Vector_38" d="M657.776 702.271L670.396 735.083L698.16 730.035L680.492 694.699L657.776 702.271Z" fill="#FFB8B8"/>
<path id="Vector_39" d="M777.667 728.773L773.881 776.73H805.431L804.169 735.083L777.667 728.773Z" fill="#FFB8B8"/>
<path id="Vector_40" d="M677.968 441.034L674.182 459.964C674.182 459.964 666.61 466.274 666.61 472.584C666.61 478.894 664.086 481.418 664.086 481.418C664.086 481.418 662.824 481.418 661.562 483.942C660.91 485.321 660.059 486.596 659.038 487.728C659.038 487.728 584.579 563.449 600.985 601.309C617.391 639.17 648.941 716.153 648.941 716.153C648.941 716.153 685.54 704.795 685.54 695.961L650.203 596.261L720.876 523.065L777.667 600.048C777.667 600.048 766.309 735.083 773.881 736.345C781.453 737.607 823.1 746.441 824.362 742.655C825.624 738.869 831.934 571.021 829.41 564.711C826.886 558.401 790.287 482.68 790.287 482.68C790.287 482.68 796.597 475.108 792.811 472.584C789.025 470.06 782.715 446.082 782.715 446.082C782.715 446.082 684.278 429.675 677.968 441.034Z" fill="#2F2E41"/>
<path id="Vector_41" d="M732.234 299.688L706.796 283.999C706.796 283.999 691.85 284.544 688.064 288.33C684.278 292.116 661.562 302.212 661.562 302.212C661.562 302.212 666.61 453.654 676.706 448.606C686.802 443.558 679.23 439.772 686.802 443.558C694.374 447.344 783.977 448.606 785.239 448.606C786.501 448.606 787.763 446.082 787.763 446.082L792.811 369.099L809.217 304.736L760.646 282.387L732.234 299.688Z" fill="#D0CDE1"/>
<path id="Vector_42" d="M671.658 300.95H661.562C661.562 300.95 647.68 304.736 641.37 324.928C635.059 345.12 632.535 353.954 635.06 356.478C637.584 359.003 671.658 377.933 671.658 377.933V300.95Z" fill="#D0CDE1"/>
<path id="Vector_43" d="M791.549 303.474L809.218 304.736C809.218 304.736 831.934 357.74 825.624 360.264C819.314 362.789 782.715 381.719 782.715 377.933C782.715 374.147 791.549 303.474 791.549 303.474Z" fill="#D0CDE1"/>
<path id="Vector_44" d="M672.92 718.677L662.63 714.891L638.846 746.441C638.846 746.441 594.675 777.992 635.06 776.73C635.06 776.73 666.61 771.682 669.134 762.848C669.134 762.848 705.732 752.751 705.732 746.441C705.732 740.131 697.322 723.31 694.586 722.886C691.85 722.463 680.492 727.511 672.92 718.677Z" fill="#2F2E41"/>
<path id="Vector_45" d="M805.431 762.848C805.431 762.848 774.75 762.349 774.947 763.229C775.143 764.11 766.309 784.302 767.571 791.874C768.833 799.446 780.191 809.542 777.667 814.59C775.143 819.638 785.239 834.782 805.431 836.044C825.623 837.306 823.099 814.59 823.099 814.59L813.003 790.612L805.431 762.848Z" fill="#2F2E41"/>
<path id="Vector_46" d="M710.509 204.685C708.994 205.974 707.412 207.184 705.771 208.31C703.702 210.027 701.79 211.925 700.06 213.983L698.107 216.17C696.445 218.03 694.681 220.154 694.751 222.648C694.777 223.573 695.062 224.471 695.173 225.39C695.615 229.036 693.387 233.043 695.221 236.224C695.751 237.144 696.572 237.863 697.156 238.749C697.9 239.885 698.229 241.243 698.089 242.593C700.06 242.674 701.677 240.908 702.295 239.034C702.914 237.161 702.83 235.137 703.131 233.188C703.432 231.238 704.278 229.173 706.049 228.305C709.829 226.453 714.17 231.269 718.204 230.069C721.021 229.231 722.507 225.739 725.387 225.153C727.448 224.734 729.433 225.959 731.349 226.827C733.265 227.695 735.848 228.097 737.202 226.488C738.099 225.422 738.195 223.715 739.385 222.991C740.811 222.124 742.596 223.332 743.676 224.605C744.756 225.878 745.948 227.434 747.616 227.388C749.83 227.326 751.525 224.379 753.626 225.078C755.997 225.867 754.907 229.662 756.346 231.705C757.562 233.433 760.109 233.331 762.203 233.046C762.556 233.082 762.912 233.027 763.239 232.888C763.565 232.748 763.85 232.528 764.069 232.249C764.287 231.969 764.43 231.638 764.486 231.288C764.542 230.937 764.508 230.578 764.387 230.245L763.512 218.649C763.509 217.849 763.334 217.06 762.999 216.334C762.391 215.231 761.13 214.673 760.273 213.75C758.47 211.809 758.557 208.406 756.315 206.995C755.151 206.262 753.629 206.284 752.473 205.538C750.991 204.582 750.514 202.667 749.476 201.241C747.991 199.202 745.397 198.257 742.888 197.998C740.38 197.738 737.849 198.051 735.328 197.969C730.204 197.802 725.08 196.36 719.931 197.204C715.438 197.94 713.552 201.752 710.509 204.685Z" fill="#2F2E41"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="949" height="836.095" fill="white"/>
</clipPath>
</defs>
</svg>

            </SVGWrapper>
        </HeroContainer>
    );
};

const HeroContainer = styled.section`
background : rgb(21,21,21);
height: 100vh;
width:100vw;
display:grid;
grid-template-columns: 15% 1fr 5%;
position: relative;


.lines {
  height:100vh;
  width:100vw;
  position: absolute;
  grid-column: 1/4;
  overflow:hidden;
}
`


const reveal = keyframes`
0% {
  opacity: 0;
  transform: translate3d(-30px, 0px, 0px);
}

100% {
  opacity: 1;
  transform: none;
}`

const Ideas = keyframes`
0% {
  opacity:0;
    transform: rotate(-180deg);
    
  }
  100% {
    opacity:1;
    transform: rotate(0deg);
    
  }
`

const Color = keyframes`
from {
    
    opacity:0;
    }
to {
  
    opacity:1;
}
`

const SVGWrapper = styled.div`
 position: absolute;
 width:35%;
right:5%;
bottom:0;

@media screen and (min-width:1000px) {
  width:25%;
}
@media screen and (max-width:800px) {
  width:40%;
}

@media screen and (max-width:650px) {
  width:45%;
}

 svg {
   max-width:100%;
   animation-fill-mode: both;
animation-duration:1000ms;
animation-delay:3.5s;
animation-iteration-count:1;
animation-name: ${reveal};
 }


 #Vector_3, #Vector_4, #Vector_5, #Vector_12  {
   fill: white;
 }

 #Vector, #Vector_25,#Vector_6, #Vector_27,#Vector_28, #Vector_29  {
    
   animation: ${Ideas} 3s  ease-in-out;
   animation-delay: 3s;
   animation-fill-mode: both;
 }
/* 10 9 8 16 19  */

 #Vector_32 {
animation: ${Color} 1.5s infinite alternate both;
}

#Vector_33 {
animation: ${Color} 1.5s infinite alternate both;
animation-delay: 0.5s;
}
#Vector_15 {
animation: ${Color} 1.5s infinite alternate both;
animation-delay: 0.9s;
}
#Vector_17 {
animation: ${Color} 1.5s infinite alternate both;
animation-delay: 0.7s;

}
#Vector_18 {
animation: ${Color} 1.5s infinite alternate both;
animation-delay: 0.1s;
}
#Vector_16 {
animation: ${Color} 1.5s infinite alternate both;
animation-delay: 0.3s;
fill: white;
}
#Vector_19 {
animation: ${Color} 1.5s infinite alternate both;
animation-delay: 0.6s;
fill: white;
}
#Vector_10 {
animation: ${Color} 1.5s infinite alternate both;
animation-delay: 0.9s;
fill: white;
}
#Vector_9 {
animation: ${Color} 1.5s infinite alternate both;
animation-delay: 0.5s;
fill: white;
}
#Vector_8 {
animation: ${Color} 1.5s infinite alternate both;
animation-delay: 0.1s;
fill: white;
}

`


const HeroContent =styled.div`
grid-column: 2/3;
align-self: center;
font-size:1.5rem;
margin-bottom:5vh;
color: white;
z-index:3;
letter-spacing:0.15rem;
position:relative;


@media screen and (max-width:740px) {
  font-size:1.25rem;
}
`

const HeroOne=styled.p`

margin-bottom:0.5rem;
animation-fill-mode: both;
animation-duration:1000ms;
animation-delay:1s;
animation-iteration-count:1;
animation-name: ${reveal};
`

const HeroH1 = styled.h1`
font-size: 2.25rem;
margin: 0 auto;
animation-fill-mode: both;
animation-duration:1000ms;
animation-delay:2s;
animation-iteration-count:1;
animation-name: ${reveal};

`

const HeroP =styled.p`
margin: 1rem 0;
padding-bottom: 50px;
max-width: 70vw;


`
const ElementReveal=styled.div`
animation-fill-mode: both;
animation-duration:1000ms;
animation-delay:3s;
animation-iteration-count:1;
animation-name: ${reveal};
`

const spin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `

  const Logo = styled.p`
  animation: ${spin} 1.5s ease-in-out 3s ;
  display:inline-block;
  transition:1s;
  &:hover {
    color:var(--primary-color);
    transform: rotate(360deg);
    
  }
  
  `


const Blue = styled.span`
color: var(--secondary-color);
font-weight: bold;
transition:1s;
&:hover {
    color:var(--primary-color);
}
`
const Petit = styled.span`
font-size: 1.75rem !important;
font-weight:400;
letter-spacing:0.15rem;
`

const Ombres = styled.span `
text-shadow: 3px 3px 1px var(--secondary-color);
font-size: 3rem;
letter-spacing:0.15rem;
transition: 0.5s;

&:hover {
  text-shadow: 3px 3px 1px gray;
}
`


export default Hero;