import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="100vh"
      height="100vh"
      viewBox="0 0 3000.000000 2000.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M0 14449 l0 -5551 53 30 c28 16 230 132 447 257 1034 595 1123 644
                1105 616 -4 -8 2 -8 20 -1 33 13 32 13 39 -6 6 -15 4 -15 -11 -3 -16 12 -16
                11 0 -8 16 -18 47 -22 47 -6 0 3 -7 3 -15 -1 -22 -8 -18 2 6 15 16 8 20 8 14
                0 -4 -8 2 -10 19 -7 15 3 24 1 21 -5 -4 -5 -10 -7 -15 -4 -5 3 -17 -3 -27 -13
                -10 -11 -130 -84 -268 -164 -401 -234 -716 -416 -1087 -630 l-348 -201 0
                -4384 0 -4383 15000 0 15000 0 0 5835 c0 3209 -1 5835 -3 5835 -2 0 -381 -217
                -843 -483 -461 -266 -863 -496 -891 -512 l-53 -28 0 -54 c0 -41 -3 -53 -16
                -53 -8 0 -12 -5 -9 -10 4 -6 11 -7 17 -4 7 5 8 2 3 -6 -6 -10 -12 -8 -27 9
                -16 21 -18 21 -19 5 0 -18 -1 -17 -9 1 -7 17 -9 17 -9 3 -1 -10 -4 -18 -7 -18
                -21 0 -33 42 -34 110 l0 75 258 150 c550 319 653 379 1140 660 l502 290 0
                4098 0 4097 -15000 0 -15000 0 0 -5551z m23793 4411 l97 -55 0 -125 0 -125
                -101 -58 -101 -57 -102 58 -101 58 0 124 0 124 100 58 c55 32 102 56 106 55 3
                -1 49 -27 102 -57z m640 0 l97 -55 -1 -125 0 -125 -100 -58 -99 -58 -105 62
                -105 61 0 118 0 118 103 60 c56 33 105 59 108 59 3 -1 49 -27 102 -57z m452
                -17 c-1 -10 0 -21 2 -25 7 -12 9 -288 2 -288 -3 0 -6 -7 -6 -15 0 -8 5 -15 10
                -15 6 0 8 -2 5 -5 -3 -3 -33 11 -67 31 l-61 36 0 118 0 118 53 31 c61 36 66
                37 62 14z m-13041 -628 c12 -9 16 -18 10 -23 -5 -5 -139 -84 -299 -177 -159
                -92 -305 -176 -323 -187 l-33 -20 3 37 3 37 300 173 c165 95 305 174 310 174
                6 0 19 -6 29 -14z m-9484 -649 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5
                11 10 11 6 0 10 -2 10 -4z m-57 -30 c8 5 7 2 -1 -7 -11 -12 -14 -12 -22 1 -8
                12 -10 11 -10 -5 0 -15 -16 -29 -52 -48 -29 -16 -80 -45 -113 -66 -33 -21 -94
                -56 -135 -79 l-75 -41 -140 82 c-180 105 -197 116 -190 127 3 5 0 12 -6 16 -8
                4 -9 3 -5 -4 4 -7 2 -12 -3 -12 -6 0 -11 5 -11 10 0 6 -3 9 -7 9 -19 -3 -31 2
                -36 14 -4 10 8 11 52 7 111 -11 716 -1 720 11 2 8 7 6 13 -5 5 -9 15 -13 21
                -10z m9620 -443 c3 -5 -90 -7 -206 -5 -402 4 -441 8 -120 10 177 1 324 -1 326
                -5z m-286 -23 l313 0 -2 -182 -3 -182 -185 -107 -185 -108 -65 37 c-36 20
                -121 69 -188 107 l-122 70 0 189 0 189 61 -7 c34 -3 203 -6 376 -6z m-7215
                -731 c16 -8 19 -8 13 1 -6 9 -3 9 13 1 12 -6 24 -16 27 -21 4 -6 11 -8 16 -5
                5 4 9 1 9 -4 0 -6 -5 -11 -11 -11 -5 0 -8 -3 -5 -8 7 -11 -525 -324 -1364
                -802 -245 -139 -616 -352 -824 -472 -209 -120 -385 -217 -392 -214 -7 3 -120
                67 -251 143 -131 77 -284 166 -340 198 -57 33 -103 64 -103 69 0 6 8 3 17 -7
                16 -16 18 -16 30 5 7 13 12 17 13 10 0 -9 5 -10 19 -2 14 7 22 7 26 -1 4 -6
                13 -8 21 -5 7 3 16 0 20 -6 5 -7 2 -8 -6 -3 -9 5 -11 4 -6 -3 4 -7 23 -10 46
                -7 23 3 40 1 40 -5 0 -5 -7 -7 -15 -4 -10 4 -15 0 -15 -12 0 -11 3 -15 8 -9 4
                6 14 10 22 10 26 -2 70 -17 70 -24 0 -4 16 -13 35 -20 19 -7 33 -16 31 -20 -3
                -4 0 -8 7 -8 7 0 85 -41 174 -91 88 -51 163 -92 167 -92 10 0 429 242 1321
                765 83 48 180 107 217 131 36 23 122 73 190 110 126 69 641 358 713 400 48 28
                42 27 67 13z m22395 -1408 c72 -43 420 -244 483 -279 30 -16 70 -38 88 -48
                l34 -19 -6 -80 c-3 -44 -6 -101 -6 -127 l0 -48 -48 0 -49 0 -8 123 c-4 67 -7
                130 -7 140 1 12 -4 17 -13 13 -8 -3 -16 -2 -19 2 -2 4 -19 9 -37 10 -18 1 -39
                8 -46 14 -10 8 -13 7 -13 -2 0 -7 -9 -2 -20 11 -10 13 -19 19 -20 14 0 -9 -44
                -13 -60 -5 -9 4 -24 7 -47 8 -14 1 -23 9 -23 18 0 12 -11 15 -52 14 -111 -3
                -184 1 -163 10 12 5 -58 9 -177 9 -108 1 -204 4 -212 7 -12 5 -15 2 -10 -12 3
                -11 2 -15 -3 -8 -4 6 -13 13 -20 15 -8 3 369 234 404 248 2 1 24 -12 50 -28z
                m-25602 -2515 c10 4 20 1 25 -6 7 -11 11 -11 24 -1 13 11 16 11 17 0 0 -10 2
                -11 6 -1 6 14 33 16 33 2 0 -5 7 -10 16 -10 8 0 12 5 9 10 -4 6 6 10 22 9 24
                0 25 -1 8 -8 l-20 -8 20 -5 c18 -3 17 -5 -7 -18 -15 -8 -67 -39 -116 -67 -49
                -29 -95 -53 -101 -53 -6 0 -11 -4 -11 -10 0 -5 -13 -10 -30 -10 -16 0 -30 5
                -30 10 0 9 14 14 33 11 4 0 7 4 7 9 0 6 -18 10 -40 10 -22 0 -40 5 -40 10 0 6
                18 10 40 10 28 0 40 4 40 14 0 9 7 12 20 9 15 -4 20 0 20 16 0 15 -6 21 -22
                21 -18 0 -18 13 0 16 4 0 14 3 22 7 8 3 24 8 35 10 15 3 13 5 -7 6 -27 1 -35
                10 -21 24 3 4 12 2 18 -3 7 -6 20 -7 30 -4z m-128 -92 c-3 -3 -12 -4 -19 -1
                -8 3 -5 6 6 6 11 1 17 -2 13 -5z m118 -408 l180 -104 2 -218 3 -219 -190 -108
                -190 -109 -190 109 -190 108 0 216 0 217 183 105 c100 58 189 106 197 106 8 0
                96 -47 195 -103z m28155 -2789 l195 -113 3 -230 2 -229 -181 -105 c-100 -58
                -190 -109 -200 -114 -13 -6 -64 18 -213 104 l-196 111 0 232 1 232 192 112
                c106 61 194 112 197 112 3 0 93 -50 200 -112z m-26119 -724 c82 -48 149 -90
                149 -93 0 -5 -160 -11 -368 -14 -92 -1 -102 -3 -102 -20 0 -15 -5 -17 -34 -12
                -23 5 -37 2 -46 -9 -8 -10 -24 -13 -51 -10 -32 4 -37 3 -32 -11 5 -15 3 -15
                -25 0 -29 15 -31 15 -25 -1 5 -12 2 -15 -8 -11 -8 3 -20 0 -26 -8 -9 -9 -10
                -13 -1 -16 7 -3 5 -7 -5 -11 -9 -3 -17 -2 -17 3 0 6 -7 10 -15 10 -8 0 -15 -4
                -15 -10 0 -5 -7 -10 -15 -10 -8 0 -15 3 -15 8 0 7 45 39 45 31 0 -2 7 2 15 10
                13 11 429 259 438 260 2 1 71 -38 153 -86z m-695 -270 c-3 -21 -6 -48 -6 -60
                0 -18 -7 -22 -49 -25 -49 -3 -49 -3 -53 30 -4 30 0 35 46 62 28 16 55 30 60
                30 5 0 6 -17 2 -37z m26645 27 c15 -8 17 -15 9 -29 -5 -10 -8 -20 -5 -22 2 -2
                -23 -4 -56 -3 -38 0 -64 -5 -71 -13 -8 -10 0 -13 43 -15 43 -1 47 -2 16 -5
                -20 -2 -49 -11 -65 -19 l-27 -14 43 0 c23 0 42 -4 42 -9 0 -5 -9 -7 -20 -4
                -11 3 -20 1 -20 -5 0 -6 -10 -13 -22 -15 -13 -2 -4 -5 20 -6 56 -1 54 -17 -2
                -16 -24 0 -42 -3 -39 -7 2 -5 13 -8 24 -8 10 0 19 -7 19 -15 0 -8 -9 -15 -20
                -15 -11 0 -20 -4 -20 -10 0 -5 18 -10 40 -10 22 0 40 -4 40 -10 0 -5 -9 -10
                -20 -10 -11 0 -20 -4 -20 -10 0 -5 8 -10 17 -10 26 0 8 -11 -23 -14 -34 -4
                -45 -26 -13 -26 44 0 9 -12 -46 -16 -46 -3 -66 1 -107 22 -28 14 -67 26 -87
                26 -40 0 -51 10 -51 50 0 24 15 35 151 113 99 57 158 85 171 82 14 -4 18 -1
                14 9 -3 8 5 20 22 28 33 18 38 19 63 6z m59 -46 c0 -8 -19 -13 -24 -6 -3 5 1
                9 9 9 8 0 15 -2 15 -3z m-1050 -2794 c488 -283 625 -364 631 -372 3 -5 10 -10
                15 -10 33 -2 59 -26 55 -51 -1 -4 11 -5 26 -2 26 5 26 5 6 -4 -25 -11 -30 -27
                -12 -33 6 -2 -2 -9 -17 -16 -24 -10 -26 -10 -13 1 15 11 15 16 4 37 -7 14 -11
                28 -9 32 2 3 0 9 -6 13 -5 3 -10 1 -10 -5 0 -6 -5 -8 -10 -5 -6 4 -7 11 -4 17
                4 7 2 8 -5 4 -6 -4 -9 -11 -6 -16 2 -4 -6 -10 -20 -12 -13 -3 -22 -2 -20 3 3
                4 1 10 -5 14 -6 4 -7 12 -4 18 4 7 -5 1 -21 -13 -16 -14 -25 -20 -22 -14 5 8
                -4 11 -26 10 -19 0 -31 4 -30 10 1 7 -6 10 -17 7 -11 -3 -20 0 -20 6 0 6 -5
                11 -11 11 -7 0 -156 83 -333 184 -176 102 -329 188 -338 191 -12 5 -67 -21
                -170 -81 -212 -122 -762 -443 -943 -549 -313 -185 -489 -286 -775 -447 -162
                -92 -349 -197 -415 -235 -120 -68 -121 -68 -187 -65 -44 3 -68 8 -72 17 -3 10
                113 83 372 236 207 122 414 246 459 276 45 29 148 89 230 132 128 68 1162 656
                1403 798 74 44 88 49 105 38 11 -7 108 -63 215 -125z m576 -428 c-17 -16 -18
                -16 -5 5 7 12 15 20 18 17 3 -2 -3 -12 -13 -22z m99 -31 c-3 -6 -11 -8 -17 -5
                -6 4 -5 9 3 15 16 10 23 4 14 -10z m100 10 c3 -5 2 -12 -3 -15 -5 -3 -9 1 -9
                9 0 17 3 19 12 6z m20 -30 c3 -5 2 -12 -3 -15 -5 -3 -9 1 -9 9 0 17 3 19 12 6z
                m-10950 -1294 l160 -93 3 -228 c2 -209 1 -230 -15 -242 -10 -7 -22 -13 -28
                -14 -7 0 -7 3 0 8 22 16 11 27 -28 26 -31 -1 -75 -18 -172 -69 -71 -37 -136
                -72 -143 -78 -7 -5 -15 -8 -17 -5 -3 3 32 28 77 56 46 28 88 56 95 62 7 5 17
                10 22 10 6 0 15 9 20 19 10 18 7 19 -67 15 -42 -3 -105 -1 -139 4 -37 5 -63 5
                -63 0 0 -5 -4 -6 -10 -3 -5 3 -52 -16 -104 -43 -53 -27 -98 -47 -101 -44 -3 3
                25 25 62 49 38 24 61 43 53 42 -12 -2 -73 5 -150 16 -8 1 -18 -2 -21 -8 -4 -6
                -13 -5 -25 2 -11 6 -13 11 -6 11 6 0 12 5 12 10 0 6 -8 10 -17 8 -17 -3 -18
                12 -18 196 l0 198 195 113 195 113 35 -19 c19 -10 107 -60 195 -112z m10305
                -919 c191 -112 346 -206 344 -210 -2 -3 2 -9 8 -12 7 -2 3 -4 -9 -2 -12 1 -26
                5 -29 9 -4 4 -20 7 -36 7 -15 0 -28 3 -28 8 0 4 -37 9 -83 10 -93 4 -98 -4
                -11 -18 54 -8 51 -9 -36 -5 -52 2 -162 8 -245 15 -148 12 -325 9 -550 -9 -112
                -9 -171 -3 -105 11 22 4 5 6 -45 4 -48 -2 -81 -8 -83 -15 -6 -17 -73 -13 -87
                6 -9 13 -14 13 -20 3 -5 -9 -4 -11 3 -6 7 4 12 2 12 -3 0 -6 -7 -11 -15 -11
                -8 0 -15 7 -15 15 0 8 -4 15 -9 15 -5 0 -8 -8 -7 -17 0 -10 -5 -18 -12 -18 -7
                0 -17 -7 -22 -15 -5 -8 -10 -10 -10 -5 0 19 18 38 29 31 6 -4 11 -3 11 3 0 5
                -4 11 -9 13 -14 5 683 408 697 403 7 -3 170 -96 362 -207z m-1103 -250 c4 -28
                -6 -18 -12 12 -2 12 -1 20 2 16 4 -4 8 -16 10 -28z m-9034 -120 c-2 -18 -8
                -36 -11 -40 -4 -3 -150 -88 -325 -188 -316 -181 -317 -182 -343 -165 -14 9
                -23 19 -20 23 14 13 682 401 693 401 7 1 10 -10 6 -31z m-16900 -918 l97 -55
                0 -125 0 -125 -101 -58 -101 -57 -102 58 -101 58 0 124 0 124 100 58 c55 32
                102 56 106 55 3 -1 49 -27 102 -57z m640 0 l97 -55 -1 -125 0 -125 -100 -58
                -99 -58 -105 62 -105 61 0 118 0 118 103 60 c56 33 105 59 108 59 3 -1 49 -27
                102 -57z m452 -17 c-1 -10 0 -21 2 -25 7 -12 9 -288 2 -288 -3 0 -6 -7 -6 -15
                0 -8 5 -15 10 -15 6 0 8 -2 5 -5 -3 -3 -33 11 -67 31 l-61 36 0 118 0 118 53
                31 c61 36 66 37 62 14z"
        />
        <path
          d="M1585 17501 c1 -8 8 -17 16 -19 11 -3 12 -2 1 6 -11 7 -8 11 9 15 13
                    3 28 3 33 -1 6 -5 27 -9 46 -10 l35 -1 -30 10 c-49 17 -113 17 -110 0z"
        />
        <path d="M2200 17515 c0 -7 30 -13 34 -7 3 4 -4 9 -15 9 -10 1 -19 0 -19 -2z" />
        <path d="M1778 17503 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z" />
        <path
          d="M1290 15202 c0 -5 7 -9 15 -9 8 0 12 4 9 9 -3 4 -9 8 -15 8 -5 0 -9
-4 -9 -8z"
        />
        <path d="M29008 7963 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
        <path
          d="M28960 7844 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0
-10 -7 -10 -16z"
        />
        <path
          d="M28810 4920 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"
        />
        <path d="M17488 3053 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
        <path
          d="M17525 3055 c23 -8 83 -10 79 -3 -3 4 -24 8 -47 7 -23 0 -37 -2 -32
-4z"
        />
        <path
          d="M28650 2436 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z"
        />
      </g>
    </svg>
  );
}
