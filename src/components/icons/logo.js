/* eslint-disable max-len */
import React from "react";
import { oneOfType, string, number, array } from "prop-types";

const propTypes = {
  viewBox: string,
  height: oneOfType([string, number, array]),
  width: oneOfType([string, number, array]),
};
const Logo = ({ height, viewBox = "1127 1481 19063 4091", width }) => (  
  <svg version="1.2" width={width} height={height} viewBox={viewBox} preserveAspectRatio="xMidYMid" fillRule="evenodd" strokeWidth="28.222" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
    <defs className="ClipPathGroup">
      <clipPath id="presentation_clip_path" clipPathUnits="userSpaceOnUse">
        <rect x="1127" y="1481" width="19063" height="4091"/>
      </clipPath>
      <clipPath id="presentation_clip_path_shrink" clipPathUnits="userSpaceOnUse">
        <rect x="1146" y="1485" width="19025" height="4083"/>
      </clipPath>
    </defs>
    <defs className="TextShapeIndex">
      <g slide="id1" id-list="id3 id4 id5 id6 id7 id8 id9 id10 id11 id12 id13 id14 id15 id16 id17 id18 id19 id20"/>
    </defs>
    <defs className="EmbeddedBulletChars">
      <g id="bullet-char-template(57356)" transform="scale(0.00048828125,-0.00048828125)">
        <path d="M 580,1141 L 1163,571 580,0 -4,571 580,1141 Z"/>
      </g>
      <g id="bullet-char-template(57354)" transform="scale(0.00048828125,-0.00048828125)">
        <path d="M 8,1128 L 1137,1128 1137,0 8,0 8,1128 Z"/>
      </g>
      <g id="bullet-char-template(10146)" transform="scale(0.00048828125,-0.00048828125)">
        <path d="M 174,0 L 602,739 174,1481 1456,739 174,0 Z M 1358,739 L 309,1346 659,739 1358,739 Z"/>
      </g>
      <g id="bullet-char-template(10132)" transform="scale(0.00048828125,-0.00048828125)">
        <path d="M 2015,739 L 1276,0 717,0 1260,543 174,543 174,936 1260,936 717,1481 1274,1481 2015,739 Z"/>
      </g>
      <g id="bullet-char-template(10007)" transform="scale(0.00048828125,-0.00048828125)">
        <path d="M 0,-2 C -7,14 -16,27 -25,37 L 356,567 C 262,823 215,952 215,954 215,979 228,992 255,992 264,992 276,990 289,987 310,991 331,999 354,1012 L 381,999 492,748 772,1049 836,1024 860,1049 C 881,1039 901,1025 922,1006 886,937 835,863 770,784 769,783 710,716 594,584 L 774,223 C 774,196 753,168 711,139 L 727,119 C 717,90 699,76 672,76 641,76 570,178 457,381 L 164,-76 C 142,-110 111,-127 72,-127 30,-127 9,-110 8,-76 1,-67 -2,-52 -2,-32 -2,-23 -1,-13 0,-2 Z"/>
      </g>
      <g id="bullet-char-template(10004)" transform="scale(0.00048828125,-0.00048828125)">
        <path d="M 285,-33 C 182,-33 111,30 74,156 52,228 41,333 41,471 41,549 55,616 82,672 116,743 169,778 240,778 293,778 328,747 346,684 L 369,508 C 377,444 397,411 428,410 L 1163,1116 C 1174,1127 1196,1133 1229,1133 1271,1133 1292,1118 1292,1087 L 1292,965 C 1292,929 1282,901 1262,881 L 442,47 C 390,-6 338,-33 285,-33 Z"/>
      </g>
      <g id="bullet-char-template(9679)" transform="scale(0.00048828125,-0.00048828125)">
        <path d="M 813,0 C 632,0 489,54 383,161 276,268 223,411 223,592 223,773 276,916 383,1023 489,1130 632,1184 813,1184 992,1184 1136,1130 1245,1023 1353,916 1407,772 1407,592 1407,412 1353,268 1245,161 1136,54 992,0 813,0 Z"/>
      </g>
      <g id="bullet-char-template(8226)" transform="scale(0.00048828125,-0.00048828125)">
        <path d="M 346,457 C 273,457 209,483 155,535 101,586 74,649 74,723 74,796 101,859 155,911 209,963 273,989 346,989 419,989 480,963 531,910 582,859 608,796 608,723 608,648 583,586 532,535 482,483 420,457 346,457 Z"/>
      </g>
      <g id="bullet-char-template(8211)" transform="scale(0.00048828125,-0.00048828125)">
        <path d="M -4,459 L 1135,459 1135,606 -4,606 -4,459 Z"/>
      </g>
      <g id="bullet-char-template(61548)" transform="scale(0.00048828125,-0.00048828125)">
        <path d="M 173,740 C 173,903 231,1043 346,1159 462,1274 601,1332 765,1332 928,1332 1067,1274 1183,1159 1299,1043 1357,903 1357,740 1357,577 1299,437 1183,322 1067,206 928,148 765,148 601,148 462,206 346,322 231,437 173,577 173,740 Z"/>
      </g>
    </defs>
    <defs className="TextEmbeddedBitmaps"/>
    <g className="SlideGroup">
      <g>
        <g id="container-id1">
          <g id="id1" className="Slide" clipPath="url(#presentation_clip_path)">
            <g className="Page">
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id3">
                  <rect className="BoundingBox" stroke="none" fill="none" x="16475" y="3525" width="1404" height="1403"/>
                  <path fill="rgb(255,55,101)" stroke="none" d="M 17877,4226 C 17877,4613 17563,4927 17175,4927 16788,4927 16475,4613 16475,4226 16475,3839 16788,3525 17175,3525 17563,3525 17877,3839 17877,4226 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id4">
                  <rect className="BoundingBox" stroke="none" fill="none" x="15849" y="2889" width="2648" height="2684"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 17050,4796 L 17050,5065 C 16696,5015 16403,4725 16341,4371 L 16661,4371 16661,4160 16332,4160 C 16364,3771 16661,3441 17050,3387 L 17050,3666 17261,3666 17261,3385 C 17685,3431 17987,3771 18020,4160 L 17755,4160 17755,4371 18010,4371 C 17948,4725 17650,5025 17261,5067 L 17261,4796 17050,4796 Z M 18496,4160 L 18229,4160 C 18195,3630 17791,3222 17261,3175 L 17261,2890 17050,2890 17050,3177 C 16555,3232 16156,3630 16122,4160 L 15849,4160 15849,4371 16130,4371 C 16194,4831 16590,5224 17050,5276 L 17050,5572 17261,5572 17261,5278 C 17755,5233 18156,4866 18222,4371 L 18496,4371 18496,4160 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id5">
                  <rect className="BoundingBox" stroke="none" fill="none" x="16507" y="4262" width="3" height="1"/>
                  <path fill="rgb(255,255,255)" stroke="none" d="M 16509,4262 C 16509,4262 16508,4262 16507,4262 16508,4262 16509,4262 16509,4262 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id6">
                  <rect className="BoundingBox" stroke="none" fill="none" x="18491" y="4262" width="3" height="1"/>
                  <path fill="rgb(255,255,255)" stroke="none" d="M 18491,4262 C 18492,4262 18493,4262 18493,4262 18492,4262 18492,4262 18491,4262 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.PolyPolygonShape">
                <g id="id7">
                  <rect className="BoundingBox" stroke="none" fill="none" x="2937" y="1481" width="1860" height="1677"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 4796,1481 L 4796,3157 4353,3157 4353,2267 3995,2818 3741,2818 3381,2265 3381,3157 2938,3157 2938,1481 3357,1481 3868,2267 4377,1481 4796,1481 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.PolyPolygonShape">
                <g id="id8">
                  <rect className="BoundingBox" stroke="none" fill="none" x="5051" y="1481" width="445" height="1677"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 5495,3157 L 5051,3157 5051,1481 5495,1481 5495,3157 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id9">
                  <rect className="BoundingBox" stroke="none" fill="none" x="1127" y="3382" width="1796" height="1677"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 1810,4436 L 2241,4436 2068,3952 C 2054,3912 2039,3871 2025,3782 2011,3871 1996,3912 1982,3952 L 1810,4436 Z M 1127,5058 L 1786,3382 2264,3382 2922,5058 2468,5058 2372,4795 1678,4795 1582,5058 1127,5058 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id10">
                  <rect className="BoundingBox" stroke="none" fill="none" x="2938" y="3381" width="1511" height="1714"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 4447,3382 L 4447,4419 C 4447,4924 4063,5094 3692,5094 3321,5094 2938,4924 2938,4419 L 2938,3382 3381,3382 3381,4395 C 3381,4620 3503,4699 3692,4699 3881,4699 4003,4620 4003,4395 L 4003,3382 4447,3382 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id11">
                  <rect className="BoundingBox" stroke="none" fill="none" x="4685" y="3382" width="1546" height="1677"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 5354,3766 L 5129,3766 5129,4675 5354,4675 C 5619,4675 5775,4534 5775,4220 5775,3907 5619,3766 5354,3766 Z M 5354,3382 C 5952,3382 6230,3731 6230,4220 6230,4708 5952,5058 5354,5058 L 4685,5058 4685,3382 5354,3382 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.PolyPolygonShape">
                <g id="id12">
                  <rect className="BoundingBox" stroke="none" fill="none" x="6405" y="3382" width="445" height="1677"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 6849,5058 L 6406,5058 6406,3382 6849,3382 6849,5058 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.PolyPolygonShape">
                <g id="id13">
                  <rect className="BoundingBox" stroke="none" fill="none" x="7104" y="3382" width="1224" height="1677"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 8311,3382 L 8311,3766 7547,3766 7547,4022 8240,4022 8240,4402 7547,4402 7547,4675 8326,4675 8326,5058 7104,5058 7104,3382 8311,3382 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id14">
                  <rect className="BoundingBox" stroke="none" fill="none" x="8521" y="3382" width="1509" height="1677"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 8521,5058 L 8521,3382 8940,3382 9596,4345 C 9589,4266 9587,4160 9587,4067 L 9587,3382 10029,3382 10029,5058 9611,5058 8955,4098 C 8962,4177 8965,4282 8965,4373 L 8965,5058 8521,5058 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id15">
                  <rect className="BoundingBox" stroke="none" fill="none" x="10203" y="3346" width="1407" height="1749"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 11111,3346 C 11281,3346 11451,3382 11597,3451 L 11597,3870 C 11494,3784 11341,3733 11188,3733 10922,3733 10659,3879 10659,4243 10659,4570 10922,4704 11183,4704 11355,4704 11513,4651 11609,4558 L 11609,4988 C 11463,5058 11298,5094 11121,5094 10661,5094 10203,4842 10203,4243 10203,3611 10659,3346 11111,3346 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.PolyPolygonShape">
                <g id="id16">
                  <rect className="BoundingBox" stroke="none" fill="none" x="11792" y="3382" width="445" height="1677"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 12236,5058 L 11792,5058 11792,3382 12236,3382 12236,5058 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id17">
                  <rect className="BoundingBox" stroke="none" fill="none" x="12335" y="3382" width="1797" height="1677"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 13017,4436 L 13448,4436 13276,3952 C 13261,3912 13247,3871 13233,3782 13218,3871 13204,3912 13190,3952 L 13017,4436 Z M 12335,5058 L 12993,3382 13472,3382 14131,5058 13675,5058 13580,4795 12886,4795 12790,5058 12335,5058 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id18">
                  <rect className="BoundingBox" stroke="none" fill="none" x="14154" y="4621" width="491" height="474"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 14399,5094 C 14269,5094 14154,5022 14154,4856 14154,4693 14269,4621 14399,4621 14531,4621 14643,4693 14643,4856 14643,5022 14531,5094 14399,5094 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.ClosedBezierShape">
                <g id="id19">
                  <rect className="BoundingBox" stroke="none" fill="none" x="14695" y="3346" width="1407" height="1749"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 15603,3346 C 15773,3346 15942,3382 16088,3451 L 16088,3870 C 15986,3784 15832,3733 15679,3733 15414,3733 15150,3879 15150,4243 15150,4570 15414,4704 15674,4704 15847,4704 16005,4651 16100,4558 L 16100,4988 C 15954,5058 15789,5094 15612,5094 15153,5094 14695,4842 14695,4243 14695,3611 15150,3346 15603,3346 Z"/>
                </g>
              </g>
              <g className="com.sun.star.drawing.PolyPolygonShape">
                <g id="id20">
                  <rect className="BoundingBox" stroke="none" fill="none" x="18318" y="3383" width="1873" height="1696"/>
                  <path fill="rgb(0,0,0)" stroke="none" d="M 19771,3383 L 19261,4169 18751,3383 18319,3383 18319,4090 18507,4090 18566,4090 18566,4443 18507,4443 18319,4443 18319,5078 18778,5078 18778,4165 19134,4725 19388,4725 19731,4168 19731,5078 20190,5078 20190,3383 19771,3383 Z"/>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

Logo.propTypes = propTypes;

export default Logo;
