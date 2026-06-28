import React from 'react';
import styled from 'styled-components';

const MagicPatternSvg2 = () => {
  const uid = React.useId();

  const id = (name: string) => `${name}${uid}`;
  const url = (name: string) => `url(#${id(name)})`;

  return (
    <Svg2
      width="1420"
      height="1288"
      viewBox="100 0 1920 1740"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${id('clip0')})`}>
        <rect
          width="2214"
          height="1688"
          transform="translate(164, 150)"
          fill={url('paint0_radial')}
        />
        <mask
          id={id('mask0')}
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="124"
          y="400"
          width="814"
          height="888"
        >
          <path
            d="M2190 0H-224V1688H2190V0Z"
            fill={url('paint1_radial')}
          />
        </mask>
        <g mask={`url(#${id('mask0')})`}>
          <path
            d="M60.852 0H-81.574V142.274H60.852V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 0H60.852V142.274H203.278V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 0H203.278V142.274H345.704V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 0H345.704V142.274H488.13V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 0H488.13V142.274H630.556V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 0H630.556V142.274H772.982V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 0H772.982V142.274H915.408V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 0H915.408V142.274H1057.83V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 0H1057.83V142.274H1200.26V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 0H1200.26V142.274H1342.69V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 0H1342.69V142.274H1485.11V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 0H1485.11V142.274H1627.54V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 0H1627.54V142.274H1769.96V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 0H1769.96V142.274H1912.39V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 0H1912.39V142.274H2054.82V0Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M60.852 142.274H-81.574V284.549H60.852V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 142.274H60.852V284.549H203.278V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 142.274H203.278V284.549H345.704V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 142.274H345.704V284.549H488.13V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 142.274H488.13V284.549H630.556V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 142.274H630.556V284.549H772.982V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 142.274H772.982V284.549H915.408V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 142.274H915.408V284.549H1057.83V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 142.274H1057.83V284.549H1200.26V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 142.274H1200.26V284.549H1342.69V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 142.274H1342.69V284.549H1485.11V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 142.274H1485.11V284.549H1627.54V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 142.274H1627.54V284.549H1769.96V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 142.274H1769.96V284.549H1912.39V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 142.274H1912.39V284.549H2054.82V142.274Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M60.852 284.549H-81.574V426.823H60.852V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 284.549H60.852V426.823H203.278V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 284.549H203.278V426.823H345.704V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 284.549H345.704V426.823H488.13V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 284.549H488.13V426.823H630.556V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 284.549H630.556V426.823H772.982V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 284.549H772.982V426.823H915.408V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 284.549H915.408V426.823H1057.83V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 284.549H1057.83V426.823H1200.26V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 284.549H1200.26V426.823H1342.69V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 284.549H1342.69V426.823H1485.11V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 284.549H1485.11V426.823H1627.54V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 284.549H1627.54V426.823H1769.96V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 284.549H1769.96V426.823H1912.39V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 284.549H1912.39V426.823H2054.82V284.549Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M60.852 426.823H-81.574V569.097H60.852V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 426.823H60.852V569.097H203.278V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 426.823H203.278V569.097H345.704V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 426.823H345.704V569.097H488.13V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 426.823H488.13V569.097H630.556V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 426.823H630.556V569.097H772.982V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 426.823H772.982V569.097H915.408V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 426.823H915.408V569.097H1057.83V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 426.823H1057.83V569.097H1200.26V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 426.823H1200.26V569.097H1342.69V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 426.823H1342.69V569.097H1485.11V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 426.823H1485.11V569.097H1627.54V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 426.823H1627.54V569.097H1769.96V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 426.823H1769.96V569.097H1912.39V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 426.823H1912.39V569.097H2054.82V426.823Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M60.852 569.097H-81.574V711.371H60.852V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 569.097H60.852V711.371H203.278V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 569.097H203.278V711.371H345.704V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 569.097H345.704V711.371H488.13V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 569.097H488.13V711.371H630.556V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 569.097H630.556V711.371H772.982V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 569.097H772.982V711.371H915.408V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 569.097H915.408V711.371H1057.83V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 569.097H1057.83V711.371H1200.26V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 569.097H1200.26V711.371H1342.69V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 569.097H1342.69V711.371H1485.11V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 569.097H1485.11V711.371H1627.54V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 569.097H1627.54V711.371H1769.96V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 569.097H1769.96V711.371H1912.39V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 569.097H1912.39V711.371H2054.82V569.097Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M60.852 711.372H-81.574V853.646H60.852V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 711.372H60.852V853.646H203.278V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 711.372H203.278V853.646H345.704V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 711.372H345.704V853.646H488.13V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 711.372H488.13V853.646H630.556V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 711.372H630.556V853.646H772.982V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 711.372H772.982V853.646H915.408V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 711.372H915.408V853.646H1057.83V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 711.372H1057.83V853.646H1200.26V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 711.372H1200.26V853.646H1342.69V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 711.372H1342.69V853.646H1485.11V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 711.372H1485.11V853.646H1627.54V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 711.372H1627.54V853.646H1769.96V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 711.372H1769.96V853.646H1912.39V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 711.372H1912.39V853.646H2054.82V711.372Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M60.852 853.646H-81.574V995.92H60.852V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 853.646H60.852V995.92H203.278V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 853.646H203.278V995.92H345.704V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 853.646H345.704V995.92H488.13V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 853.646H488.13V995.92H630.556V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 853.646H630.556V995.92H772.982V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 853.646H772.982V995.92H915.408V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 853.646H915.408V995.92H1057.83V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 853.646H1057.83V995.92H1200.26V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 853.646H1200.26V995.92H1342.69V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 853.646H1342.69V995.92H1485.11V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 853.646H1485.11V995.92H1627.54V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 853.646H1627.54V995.92H1769.96V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 853.646H1769.96V995.92H1912.39V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 853.646H1912.39V995.92H2054.82V853.646Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M60.852 995.92H-81.574V1138.19H60.852V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 995.92H60.852V1138.19H203.278V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 995.92H203.278V1138.19H345.704V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 995.92H345.704V1138.19H488.13V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 995.92H488.13V1138.19H630.556V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 995.92H630.556V1138.19H772.982V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 995.92H772.982V1138.19H915.408V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 995.92H915.408V1138.19H1057.83V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 995.92H1057.83V1138.19H1200.26V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 995.92H1200.26V1138.19H1342.69V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 995.92H1342.69V1138.19H1485.11V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 995.92H1485.11V1138.19H1627.54V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 995.92H1627.54V1138.19H1769.96V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 995.92H1769.96V1138.19H1912.39V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 995.92H1912.39V1138.19H2054.82V995.92Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M60.852 1138.19H-81.574V1280.47H60.852V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 1138.19H60.852V1280.47H203.278V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 1138.19H203.278V1280.47H345.704V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 1138.19H345.704V1280.47H488.13V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 1138.19H488.13V1280.47H630.556V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 1138.19H630.556V1280.47H772.982V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 1138.19H772.982V1280.47H915.408V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 1138.19H915.408V1280.47H1057.83V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 1138.19H1057.83V1280.47H1200.26V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 1138.19H1200.26V1280.47H1342.69V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 1138.19H1342.69V1280.47H1485.11V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 1138.19H1485.11V1280.47H1627.54V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 1138.19H1627.54V1280.47H1769.96V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 1138.19H1769.96V1280.47H1912.39V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 1138.19H1912.39V1280.47H2054.82V1138.19Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M60.852 1280.47H-81.574V1422.74H60.852V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 1280.47H60.852V1422.74H203.278V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 1280.47H203.278V1422.74H345.704V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 1280.47H345.704V1422.74H488.13V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 1280.47H488.13V1422.74H630.556V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 1280.47H630.556V1422.74H772.982V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 1280.47H772.982V1422.74H915.408V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 1280.47H915.408V1422.74H1057.83V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 1280.47H1057.83V1422.74H1200.26V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 1280.47H1200.26V1422.74H1342.69V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 1280.47H1342.69V1422.74H1485.11V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 1280.47H1485.11V1422.74H1627.54V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 1280.47H1627.54V1422.74H1769.96V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 1280.47H1769.96V1422.74H1912.39V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 1280.47H1912.39V1422.74H2054.82V1280.47Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M60.852 1422.74H-81.574V1565.02H60.852V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 1422.74H60.852V1565.02H203.278V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 1422.74H203.278V1565.02H345.704V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 1422.74H345.704V1565.02H488.13V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 1422.74H488.13V1565.02H630.556V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 1422.74H630.556V1565.02H772.982V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 1422.74H772.982V1565.02H915.408V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 1422.74H915.408V1565.02H1057.83V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 1422.74H1057.83V1565.02H1200.26V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 1422.74H1200.26V1565.02H1342.69V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 1422.74H1342.69V1565.02H1485.11V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 1422.74H1485.11V1565.02H1627.54V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 1422.74H1627.54V1565.02H1769.96V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 1422.74H1769.96V1565.02H1912.39V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 1422.74H1912.39V1565.02H2054.82V1422.74Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M60.852 1565.02H-81.574V1707.29H60.852V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M203.278 1565.02H60.852V1707.29H203.278V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M345.704 1565.02H203.278V1707.29H345.704V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M488.13 1565.02H345.704V1707.29H488.13V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M630.556 1565.02H488.13V1707.29H630.556V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M772.982 1565.02H630.556V1707.29H772.982V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M915.408 1565.02H772.982V1707.29H915.408V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1057.83 1565.02H915.408V1707.29H1057.83V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1200.26 1565.02H1057.83V1707.29H1200.26V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1342.69 1565.02H1200.26V1707.29H1342.69V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1485.11 1565.02H1342.69V1707.29H1485.11V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1627.54 1565.02H1485.11V1707.29H1627.54V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1769.96 1565.02H1627.54V1707.29H1769.96V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M1912.39 1565.02H1769.96V1707.29H1912.39V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
          <path
            d="M2054.82 1565.02H1912.39V1707.29H2054.82V1565.02Z"
            stroke="#4C4E72"
            strokeWidth="2"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id={id('paint0_radial')}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(350 444) rotate(90) scale(700 1000)"
        >
          <stop offset="0" stopColor="#6F30D8" stopOpacity="0.22" />
          <stop offset="0.4" stopColor="#6F30D8" stopOpacity="0.01" />
          <stop
            offset="0.75"
            stopColor="#6F30D8"
            stopOpacity="0.01"
          />
          <stop offset="1" stopColor="#6F30D8" stopOpacity="0.01" />
        </radialGradient>
        <radialGradient
          id={id('paint1_radial')}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 544) scale(1007 544)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.04" />
        </radialGradient>
        <clipPath id={id('clip0')}>
          <rect
            width="1414"
            height="1088"
            fill="white"
            transform="translate(-224)"
          />
        </clipPath>
      </defs>
    </Svg2>
  );
};

const Svg2 = styled.svg`
  position: absolute;
  z-index: -1;
  left: -100px;
  overflow: visible;
`;

export default MagicPatternSvg2;
