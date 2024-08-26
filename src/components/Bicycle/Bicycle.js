import React from "react";
import "./Bicycle.css";

export default function Bicycle() {
  return (
    <section className="bicycle-container">
      <div className="bicycle-animation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 269 134.11"
          id="svg"
        >
          <g id="animationWheels" transform="rotate(0 101.5 92.61)" x="0" y="0">
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1s"
              type="rotate"
              from="0 101.5 92.61"
              to="360 101.5 92.61"
              repeatCount="indefinite"
            />
            <path
              id="animateThis"
              className="cls-3"
              d="M79.21 113.77a34 34 0 1 1 46.56 12 34 34 0 0 1-46.56-12z"
              transform="translate(-7 -3.89)"
            />
          </g>
          <g id="parrot" transform="rotate(0 227.5 92.61)" x="0" y="0">
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1s"
              type="rotate"
              from="0 227.5 92.61"
              to="360 227.5 92.61"
              repeatCount="indefinite"
            />
            <path
              id="animateThis2"
              className="cls-3"
              d="M268.5 96.5a34 34 0 1 1-34-34 34 34 0 0 1 34 34z"
              transform="translate(-7 -3.89)"
            />
          </g>
          <g id="wheels">
            <path
              className="cls-1"
              d="M161.85 93c2 0 3.82.61 4.34 1.16a3.46 3.46 0 0 1 .32 2c-.06 1.76-.42 2.85-1 3.24a6.25 6.25 0 0 1-3 .65h-.14L160 99.7l.23-1.08.46-2.12-.46-2.12-.23-1.11 1.82-.28m-.2-10H161l-13 2 2.5 11.5L148 108l13.25 2h1.22c3.54 0 13.6-1.1 14-13.55.47-12.69-11.83-13.45-14.82-13.45z"
              transform="translate(-7 -3.89)"
            />
            <circle
              id="outerwheel"
              className="cls-2"
              cx="101.5"
              cy="92.61"
              r="40"
            />
            <path
              className="cls-1"
              d="M108.51 60.44a36.06 36.06 0 0 1 .76 72.11h-.78a36.06 36.06 0 0 1-.76-72.11h.78m0-3h-.84a39.06 39.06 0 0 0 .82 78.11h.84a39.06 39.06 0 0 0-.82-78.11z"
              transform="translate(-7 -3.89)"
            />
            <circle
              id="outerwheel-2"
              data-name="outerwheel"
              className="cls-2"
              cx="227.5"
              cy="92.61"
              r="40"
            />
            <path
              className="cls-1"
              d="M234.5 60.44a36.06 36.06 0 1 1-36.06 36.06 36.11 36.11 0 0 1 36.06-36.06m0-3a39.06 39.06 0 1 0 39.06 39.06 39.1 39.1 0 0 0-39.06-39.06z"
              transform="translate(-7 -3.89)"
            />
            <circle
              id="centerwheel"
              className="cls-2"
              cx="227.5"
              cy="92.61"
              r="3"
            />
            <circle
              id="centerwheel-2"
              data-name="centerwheel"
              className="cls-2"
              cx="101.5"
              cy="92.61"
              r="3"
            />
          </g>
          <g id="body">
            <path
              id="cBody"
              className="cls-4"
              d="M156.5 92.61l-32-69-.19-.42"
            />
            <path
              id="cBody-2"
              data-name="cBody"
              className="cls-4"
              d="M156.5 92.61l53-57"
            />
            <path
              id="cBody-3"
              data-name="cBody"
              className="cls-4"
              d="M117 7.11l7.31 16.08"
            />
            <path
              id="cBody-4"
              data-name="cBody"
              className="cls-4"
              d="M124.5 22.61h84"
            />
            <path
              id="cBody-5"
              data-name="cBody"
              className="cls-4"
              d="M124.31 23.19L101.5 92.61"
            />
            <path
              id="cBody-6"
              data-name="cBody"
              className="cls-4"
              d="M101.5 92.61h55"
            />
            <path
              id="cBody-7"
              data-name="cBody"
              className="cls-4"
              d="M234.5 96.5c-16-19-19-70-19-70"
              transform="translate(-7 -3.89)"
            />
            <path
              id="cBody-8"
              data-name="cBody"
              className="cls-4"
              d="M224.5 10.61h-17l1 12"
            />
            <path
              id="ok"
              d="M140 11c-2.57-4.29-8-4-8-4h-9c-3 0-9-2-9-2-2-1-1.7-1.29-2-1-.78.75-.08 3.35 0 4 .16 1.34 1 4 2 5a4.52 4.52 0 0 0 5 1c1.7-.85 5-3.15 7-3 13 1 14 0 14 0"
              transform="translate(-7 -3.89)"
              fill="#4d4d4d"
            />
            <path
              id="ok-2"
              data-name="ok"
              d="M224.25 10.61a7 7 0 0 1 0 14"
              stroke="#4d4d4d"
              strokeWidth="4"
              strokeLinecap="round"
              strokeMiterlimit="10"
              fill="none"
            />
            <path
              className="cls-1"
              d="M162.5 81A12.5 12.5 0 1 0 175 93.5 12.5 12.5 0 0 0 162.5 81z"
              transform="translate(-7 -3.89)"
            />
            <path
              id="ok-3"
              data-name="ok"
              className="cls-1"
              d="M149 86l4 9-3 6v-9c0-6-1-6-1-6z"
              transform="translate(-7 -3.89)"
            />
            <path
              id="ok-4"
              data-name="ok"
              className="cls-2"
              d="M162.5 81.5a14.86 14.86 0 0 0-4.5.69L107 92a4.53 4.53 0 0 0 0 9l51 9.81a14.86 14.86 0 0 0 4.5.69 15 15 0 0 0 0-30z"
              transform="translate(-7 -3.89)"
            />
            <path
              d="M108.5 91.5a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"
              transform="translate(-7 -3.89)"
              fill="#333"
            />
            <path
              id="ok-5"
              data-name="ok"
              d="M155.5 77.61a14.86 14.86 0 0 0-4.5.69l-51 9.81a4.53 4.53 0 0 0 0 9l51 9.81a14.86 14.86 0 0 0 4.5.69 15 15 0 0 0 0-30z"
              fill="#b3b3b3"
              opacity=".5"
              strokeWidth="3"
              strokeMiterlimit="10"
              stroke="#333"
            />
          </g>
          <g id="effects">
            <path id="effects9" className="cls-10" d="M104 42.11H75" />
            <path id="effects8" className="cls-10" d="M68 127.11H22" />
            <path id="effects7" className="cls-10" d="M61 118.11H38" />
            <path id="effects6" className="cls-10" d="M54 108.11H25" />
            <path id="effects5" className="cls-10" d="M104 23.11H80" />
            <path id="effects4" className="cls-10" d="M80 51.11H66" />
            <path id="effects3" className="cls-10" d="M49 97.11H2" />
            <path id="effects2" className="cls-10" d="M195 127.11h-23" />
            <path
              id="effects1"
              data-name="effects"
              className="cls-10"
              d="M184 120.11h-33"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
