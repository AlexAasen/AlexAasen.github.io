import { css } from 'styled-components'

export default {
  columns: (count, gap, fill) => css`
    column-count: ${count};
    column-gap: ${gap};
    column-fill: ${fill};`,

  autoPadding: css`
    padding: 40px 30px 40px;
    transition: all 0.7s;

    @media (min-width: 1400px) {
        padding: 45px 35px 55px;
    }
    @media (min-width: 1600px) {
        padding: 60px 50px;
    }
    @media (min-width: 1900px) {
        padding: 70px;
    }`,

  positionAbsolute: (top = "auto", right = "auto", bottom = "auto", left = "auto") => css`
    position: absolute;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};`
}
