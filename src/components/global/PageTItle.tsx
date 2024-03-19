interface SectionTItleProps {
  type: "big" | "normal";
  title: string;
}

const PageTItle = ({ type = "normal", title }: SectionTItleProps) => {
  return (
    <h1 className={`page-title ${type === "big" ? "big" : "normal"}`}>
      {title}
    </h1>
  );
};

export default PageTItle;
