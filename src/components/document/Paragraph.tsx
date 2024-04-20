type ParagraphProps = {
  title: string;
  content: string;
};

export default function Paragraph({ title, content }: ParagraphProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm sm:text-base font-bold">{title}</span>
      <p className="text-xs sm:text-sm whitespace-pre-wrap">{content}</p>
    </div>
  );
}
