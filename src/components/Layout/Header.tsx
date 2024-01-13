import { ReactElement } from "react";
import { css } from "@emotion/react";

const styles = {
  header: css`
    position: relative;
    max-width: var(--main);
    margin: 0 auto;
    padding: 32px 0 0;
    text-align: center;
  `,
  headerTitle: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  `,
  headerTitleText: css`
    font-size: 20px;
    font-family: "Arial Black", system-ui, Avenir, Helvetica, sans-serif;
    font-weight: 700;
    line-height: 1.2;
  `,
  headerIcon: css`
    svg {
      stroke: var(--parimary700);
      vertical-align: middle;
    }
  `,
  description: css`
    margin-top: 4px;
    font-size: 12px;
  `,

  tooltip: css`
    display: inline-block;
    &:hover .tooltipText {
      visibility: visible;
      opacity: 1;
    }
  `,
  tooltipText: css`
    position: absolute;
    padding: 20px 24px;
    background-color: rgba(45, 48, 58, 0.8);
    color: var(--white);
    font-size: 12px;
    border-radius: 12px;
    width: 245px;
    top: calc(100% + 8px);
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s;
    z-index: 1;
  `,
  tooltipTextList: css`
    display: flex;
    gap: 4px;
    dt {
      width: 61px;
      text-align: right;
    }
    dd {
      width: auto;
      text-align: left;
    }
  `,
};

export default function Header(): ReactElement {
  return (
    <header css={styles.header}>
      <h1 css={styles.headerTitle}>
        <span css={styles.headerTitleText}>Case Converter</span>
        <div css={styles.tooltip}>
          <span css={styles.headerIcon}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 13V15"
              />
              <circle cx="12" cy="9" r="1" fill="currentColor" />
              <circle
                cx="12"
                cy="12"
                r="7.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <span css={styles.tooltipText} className="tooltipText">
            <dl css={styles.tooltipTextList}>
              <dt>UPPER:</dt>
              <dd>THIS IS AN EXAMPLE</dd>
            </dl>
            <dl css={styles.tooltipTextList}>
              <dt>lower:</dt>
              <dd>this is an example</dd>
            </dl>
            <dl css={styles.tooltipTextList}>
              <dt>Capitalize:</dt>
              <dd>This Is An Example</dd>
            </dl>
            <dl css={styles.tooltipTextList}>
              <dt>Title:</dt>
              <dd>This is an Example</dd>
            </dl>
          </span>
        </div>
      </h1>
      <p css={styles.description}>
        A simple free online tool for converting case of your text.
      </p>
    </header>
  );
}
