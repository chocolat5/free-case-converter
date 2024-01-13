import { useCallback, useState } from "react";
import { css } from "@emotion/react";
import copy from "copy-to-clipboard";

import Header from "@/src/components/Layout/Header";
import Button from "@/src/components/Input/Button";
import SelectButton from "@/src/components/Input/SelectButton";
import { ChangeEvent, ClickEvent } from "@/src/types";
import makeCapitalizeCase from "@/src/utils/helper";

const styles = {
  main: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: var(--main);
    margin: 20px auto 0;
  `,
  textarea: css`
    width: 100%;
    max-width: 306px;
    min-width: 306px;
    resize: none;
    padding: 20px;
    background-color: var(--primary100);
    border-radius: 12px;
    font-size: 15px;
    &::placeholder {
      color: var(--border);
    }
  `,
  selectors: css`
    display: flex;
    align-items: center;
  `,
  buttonWrap: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  footer: css`
    max-width: var(--main);
    margin: 20px auto 0;
    font-size: 12px;
    text-align: center;
    a {
      color: var(--primary);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  `,
};

function App() {
  const [content, setContent] = useState<string>("");
  const [currentSelector, setCurrentSelector] = useState<string>("");
  const [copied, setCopied] = useState<boolean | null>(null);

  const handleChange = (event: ChangeEvent) => {
    const current = event.target.value;
    setContent(current);
    setCurrentSelector("");
  };

  const handleClick = useCallback((event: ClickEvent, variant: string) => {
    switch (variant) {
      case "upper":
        setContent((current) => current.toUpperCase());
        break;
      case "lower":
        setContent((current) => current.toLowerCase());
        break;
      case "capitalize":
        setContent((current) => makeCapitalizeCase(current));
        break;
      default:
        return false;
    }
    setCurrentSelector(event.currentTarget?.id || "");
    return false;
  }, []);

  const handleClear = () => {
    setContent("");
    setCurrentSelector("");
  };

  const handleCopy = () => {
    copy(content);
    setCopied(true);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      <Header />
      <main css={styles.main}>
        <textarea
          id="copy"
          css={styles.textarea}
          name="convertText"
          rows={3}
          value={content}
          onChange={handleChange}
          placeholder="Type or Paste your text here"
        />
        <div css={styles.selectors}>
          <SelectButton
            id="upper"
            selected={currentSelector === "upper"}
            text="UPPER"
            variant="left"
            handleClick={(event: ClickEvent) => handleClick(event, "upper")}
          />
          <SelectButton
            id="lower"
            selected={currentSelector === "lower"}
            text="lower"
            variant="middle"
            handleClick={(event: ClickEvent) => handleClick(event, "lower")}
          />
          <SelectButton
            id="capitalize"
            selected={currentSelector === "capitalize"}
            text="Capitalize"
            variant="right"
            handleClick={(event: ClickEvent) =>
              handleClick(event, "capitalize")
            }
          />
        </div>
        <div css={styles.buttonWrap}>
          <Button
            copied={copied}
            grow={1}
            text={copied ? "Copied" : "Copy to Clipboard"}
            variant="copy"
            handleClick={handleCopy}
            disabled={!!content}
          />
          <Button
            text="Clear"
            variant="clear"
            handleClick={handleClear}
            disabled={!!content}
          />
        </div>
      </main>
      <footer css={styles.footer}>
        Made by{" "}
        <a
          href="https://chocolat5.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          chocolat
        </a>{" "}
        • Source code on{" "}
        <a
          href="https://github.com/chocolat5/free-case-converter"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </>
  );
}

export default App;
