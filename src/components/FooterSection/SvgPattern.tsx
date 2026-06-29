import styled from 'styled-components';

function FooterSvgPattern() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1340"
      height="1158"
      fill="none"
      viewBox="-350 -100 1340 1158"
    >
      <path
        fill="url(#a)"
        fillOpacity=".28"
        d="M0 0h2058v1158H0z"
        transform="translate(-718)"
      />
      <defs>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 579 -1029 0 1029 579)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#682bcb" stopOpacity=".44" />
          <stop offset="1" stopColor="#261850" stopOpacity="0" />
        </radialGradient>
      </defs>
    </Svg>
  );
}

const Svg = styled.svg`
  position: absolute;
  overflow: visible;
  z-index: -1;
`;

export default FooterSvgPattern;
