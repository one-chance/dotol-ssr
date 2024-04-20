import { Paragraph } from '@/components';
import TERMS_OF_SERVICE from '@/contants/terms-of-service.json';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col grow px-5 py-10 sm:p-10 gap-6">
      <span className="text-xl sm:text-2xl font-bold text-center">서비스 이용약관</span>

      {TERMS_OF_SERVICE.map((paragraph: { title: string; content: string }) => (
        <Paragraph key={paragraph.title} title={paragraph.title} content={paragraph.content} />
      ))}
    </div>
  );
}
