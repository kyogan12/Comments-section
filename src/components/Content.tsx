interface ReplyContent {
  replying: string;
  content: string;
}

export const Content = ({ replying, content }: ReplyContent) => {
  return (
    <p className="content">
      <span
        style={{
          color: "hsl(238, 40%, 52%)",
          fontWeight: "700",
        }}
      >
        @{replying}
      </span>
      {` ${content}`}
    </p>
  );
};
