import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  fill: var(--black);
  ${({ iconName }) =>
    iconName === 'running' &&
    `
    fill: var(--primary);
    width: 1.15rem;
    height: 1.15rem;
  `};
  ${({ iconName }) =>
    iconName === 'ended' &&
    `
    fill: var(--white);
    width: 1.15rem;
    height: 1.15rem;
  `};
  ${({ iconName }) =>
    iconName === 'episodes' &&
    `
    fill: var(--white);
    width: 1rem;
    height: 1rem;
  `};
  ${({ iconName }) =>
    iconName === 'seasons' &&
    `
    fill: var(--white);
    width: 1rem;
    height: 1rem;
  `};
  @media screen and (max-width: 400px) {
    width: 0.9rem;
    height: 0.9rem;
  }
`

// The "focusable" and "aria-hidden" properties are important for screen readers. Icons should be hidden for them if they're only a styling element and are a duplication of content
export const Icon = ({ name, hidden }) => (
  <Wrapper
    iconName={name}
    data-name={name}
    data-item="custom-icon"
    focusable={hidden ? 'false' : null}
    aria-hidden={hidden ? 'true' : null}
  >
    <use xlinkHref={`#${name}`} />
  </Wrapper>
)

Icon.propTypes = {
  name: PropTypes.oneOf(['next', 'first', 'star', 'running', 'ended', 'episodes', 'seasons']).isRequired,
  hidden: PropTypes.bool,
}

Icon.defaultProps = {
  hidden: true,
}

export const IconMother = () => (
  <svg version="1.1" xlmns="http://www.w3.org/2000/svg" className="hidden" aria-hidden="true" focusable="false">
    <defs>
      <symbol id="next" viewBox="0 0 100 100">
        <path d="M70.166,23.168c2.072,0,3.75-1.679,3.75-3.75V7.085c0-2.071-1.678-3.75-3.75-3.75c-2.07,0-3.75,1.679-3.75,3.75v12.333  C66.416,21.489,68.096,23.168,70.166,23.168z M29.834,23.168c2.07,0,3.75-1.679,3.75-3.75V7.085c0-2.071-1.68-3.75-3.75-3.75  c-2.072,0-3.75,1.679-3.75,3.75v12.333C26.084,21.489,27.762,23.168,29.834,23.168z M91.833,12.5H78.416v6.918  c0,4.549-3.701,8.25-8.25,8.25s-8.25-3.701-8.25-8.25V12.5H38.084v6.918c0,4.549-3.701,8.25-8.25,8.25s-8.25-3.701-8.25-8.25V12.5  H8.167c-2.762,0-5,2.238-5,5V38h93.666V17.5C96.833,14.738,94.595,12.5,91.833,12.5z M3.167,91.167c0,2.762,2.238,5,5,5h83.666  c2.762,0,5-2.238,5-5V42H3.167V91.167z M72.387,53.875h12.792v12.792H72.387V53.875z M72.387,72.125h12.792v12.792H72.387V72.125z   M53.198,53.875H65.99v12.792H53.198V53.875z M53.198,72.125H65.99v12.792H53.198V72.125z M34.01,53.875h12.792v12.792H34.01V53.875  z M34.01,72.125h12.792v12.792H34.01V72.125z M14.821,53.875h12.792v12.792H14.821V53.875z M14.821,72.125h12.792v12.792H14.821  V72.125z" />
      </symbol>
      <symbol id="first" viewBox="5 5 90 90">
        <g transform="translate(0,-952.36218)">
          <path d="m 6.1593998,1015.0901 7.7782002,7.7782 c 4.2958,-4.2957 11.2607,-4.2957 15.5564,0 4.2958,4.2958 4.2957,11.2606 0,15.5563 l 7.7782,7.7782 37.4766,-37.4766 -5.6568,-5.6569 2.8283,-2.8284 5.6569,5.6568 16.2634,-16.26344 -7.7782,-7.77818 c -4.2957,4.29575 -11.2605,4.29582 -15.5563,0 -4.2957,-4.29567 -4.2958,-11.2606 0,-15.55635 l -7.7782,-7.77817 -16.2634,16.26345 5.6568,5.65686 -2.8284,2.82843 -5.6569,-5.65686 -37.4766002,37.47666 z M 34.4436,998.11954 l 9.2366,3.93326 7.6899,-6.80588 -1.0827,10.09838 8.6619,5.0382 -9.9216,2.3201 -2.3201,9.9216 -5.0382,-8.662 -10.0983,1.0827 6.8058,-7.6898 -3.9333,-9.23656 z m 17.6777,-12.02082 2.8284,-2.82842 5.6569,5.65685 -2.8284,2.82843 -5.6569,-5.65686 z m 8.4853,8.48528 2.8284,-2.82842 5.6569,5.65685 -2.8284,2.82847 -5.6569,-5.6569 z" />
        </g>
      </symbol>
      <symbol id="star" viewBox="7 20 837 805">
        <path d="M539 297c387,3 383,-10 72,220 121,384 140,370 -188,136 -327,234 -309,248 -187,-136 -311,-230 -315,-217 72,-220 119,-359 111,-359 231,0z" />
      </symbol>
      <symbol id="running" viewBox="0 0 70 70">
        <path d="M35,0A35,35,0,1,0,70,35,35,35,0,0,0,35,0ZM54.82,23.54,35,47.93a2.2,2.2,0,0,1-1.51.82,2.28,2.28,0,0,1-1.65-.51l-14-11.67h0a2.23,2.23,0,0,1,2.86-3.43L33,43.36,51.36,20.72a2.23,2.23,0,0,1,3.46,2.82Z" />
      </symbol>
      <symbol id="ended" viewBox="0 0 70 70">
        <path d="M35,0A35,35,0,1,0,70,35,35,35,0,0,0,35,0ZM51.32,47.56a2.69,2.69,0,0,1,0,3.8,2.53,2.53,0,0,1-1.87.79,2.69,2.69,0,0,1-1.88-.79L35,38.79,22.4,51.36a2.56,2.56,0,0,1-1.88.79,2.69,2.69,0,0,1-1.88-4.59L31.21,35,18.64,22.43a2.68,2.68,0,0,1,3.79-3.8L35,31.2,47.57,18.63a2.68,2.68,0,1,1,3.79,3.8L38.79,35Z" />
      </symbol>
      <symbol id="episodes" viewBox="115 70 360 440">
        <path d="M120.5,77h342.8v100.6H237v64.7h205v93.3H237v67.7h229.4V504H120.5V77z" />
      </symbol>
      <symbol id="seasons" viewBox="110 50 380 455">
        <path
          d="M312.1,499.3c-38.2,0-74.5-5.9-108.9-17.8c-34.4-11.9-64.8-29.7-91.2-53.4l65.9-78.9
		c42.7,34.2,88.9,51.2,138.5,51.2c15.9,0,28-2.5,36.3-7.6c8.3-5.1,12.5-12.3,12.5-21.6v-1.2c0-4.5-1-8.4-3-11.9
		c-2-3.5-5.8-6.8-11.3-10c-5.5-3.2-12.8-6.4-22-9.4c-9.1-3-21-6.2-35.7-9.4c-22.8-5.3-43.9-11.1-63.4-17.3
		c-19.5-6.3-36.5-14.4-50.9-24.4c-14.4-9.9-25.8-22.3-34.2-37.1c-8.3-14.8-12.5-33.2-12.5-55.1v-1.2c0-19.9,3.8-38.2,11.3-54.8
		c7.5-16.6,18.5-31.1,32.9-43.2c14.4-12.2,31.8-21.6,52.2-28.3c20.3-6.7,43.3-10,68.9-10c36.6,0,69.2,4.8,97.9,14.4
		s54.6,23.8,77.8,42.7L414,198.6c-19.5-13.8-39.6-24.3-60.1-31.4c-20.5-7.1-40.4-10.7-59.5-10.7c-14.2,0-24.9,2.6-32,7.9
		c-7.1,5.3-10.7,11.8-10.7,19.5v1.2c0,4.9,1.1,9.1,3.4,12.8c2.2,3.7,6.1,7,11.6,10.1c5.5,3.1,13,6.1,22.6,9.1
		c9.5,3,21.7,6.2,36.3,9.4c24.4,5.3,46.5,11.5,66.2,18.6c19.7,7.1,36.5,15.7,50.3,25.9c13.8,10.2,24.4,22.4,31.7,36.8
		c7.3,14.4,11,31.6,11,51.4v1.2c0,21.9-4.2,41.4-12.5,58.5c-8.3,17.1-20,31.6-35.1,43.5c-15,12-33.1,21.1-54.3,27.4
		C361.7,496.2,338.1,499.3,312.1,499.3z"
        />
      </symbol>
    </defs>
  </svg>
)