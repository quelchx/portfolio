import NextLink from "next/link";
import { Link, Typography } from "@mui/material";

const heading = {
  marginBottom: 2.2,
  fontWeight: "bold",
  letterSpacing: "-0.025em",
  lineHeight: "1.2",
};

import Highlight, { defaultProps } from "prism-react-renderer";

const THEME: any = {
  plain: {
    color: "#2196f3",
    backgroundColor: "transparent",
  },
  styles: [
    {
      types: ["keyword"],
      style: {
        color: "#4caf50",
        fontWeight: "bold",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#999",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "url", "attr-value"],
      style: {
        color: "#b28900",
      },
    },
    {
      types: ["variable", "language-javascript"],
      style: {
        color: "#eb554a",
      },
    },
    {
      types: ["builtin", "char", "constant"],
      style: {
        color: "#b1a980",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#d9931e",
        fontStyle: "normal",
      },
    },

    {
      types: ["punctuation", "operator"],
      style: {
        color: "#a2b158",
      },
    },
    {
      types: ["number", "function", "tag"],
      style: {
        color: "#8952b9",
      },
    },
    {
      types: ["boolean", "regex"],
      style: {
        color: "#d9931e",
      },
    },
  ],
};

type CodeProps = {
  children: string;
  className?: string;
  highlight?: string;
};

const Code = (props: CodeProps) => {
  const { children, className, highlight, ...rest } = props;
  if (!className) return <code {...props}>{children}</code>;

  const highlightedLines = highlight ? highlight.split(",").map(Number) : [];

  // https://mdxjs.com/guides/syntax-highlighting#all-together
  const language = className.replace(/language-/, "") as any;
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={THEME}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              style={
                highlightedLines.includes(i + 1)
                  ? {
                      background: "#cce0f5",
                      margin: "0 -1rem",
                      padding: "0 1rem",
                    }
                  : {}
              }
            >
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
};

type Props = {
  children: string | JSX.Element | React.ReactNode;
};

export const components: {
  [key: string]: React.FC<Props>;
} = {
  p: (props: Props) => (
    <Typography
      component="p"
      fontSize={20}
      sx={{
        lineHeight: "24px",
        marginBottom: "1.2em",
      }}
      {...props}
    />
  ),
  h1: (props: Props) => (
    <Typography
      component="h1"
      fontSize={36}
      fontWeight="bold"
      sx={heading}
      {...props}
    />
  ),
  h2: (props: Props) => (
    <Typography component="h2" fontSize={30} sx={heading} {...props} />
  ),
  h3: (props: Props) => (
    <Typography component="h3" fontSize={26} sx={heading} {...props} />
  ),
  h4: (props: Props) => (
    <Typography component="h4" fontSize={24} sx={heading} {...props} />
  ),
  h5: (props: Props) => (
    <Typography component="h5" fontSize={22} sx={heading} {...props} />
  ),
  h6: (props: Props) => (
    <Typography component="h6" fontSize={20} sx={heading} {...props} />
  ),
  a: (props: Props) => <Link component={NextLink} {...props} />,
  code: (props: any) => <Code {...props} />,
};
