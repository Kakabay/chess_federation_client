interface SectionTItleProps {
  type: 'big' | 'normal';
  title: string;
  descripter?: string;
}

const PageTItle = ({ type = 'normal', title, descripter }: SectionTItleProps) => {
  return (
    <div className={`page-title-wrapper ${descripter ? 'center' : ''}`}>
      <h1 className={`page-title ${type === 'big' ? 'big' : 'normal'}`}>{title}</h1>
      {descripter && <p>{descripter}</p>}
    </div>
  );
};

export default PageTItle;
